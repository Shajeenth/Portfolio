export const torusColumns = 64
export const torusRows = 32
const shades = '.,-~:;=!*#$@'

// Cache the surface samples; animation only rotates and projects them.
const samples: { x: number; y: number; z: number; nx: number; ny: number; nz: number }[] = []
for (let theta = 0; theta < Math.PI * 2; theta += 0.07) {
  for (let phi = 0; phi < Math.PI * 2; phi += 0.04) {
    const cosTheta = Math.cos(theta)
    const sinTheta = Math.sin(theta)
    const cosPhi = Math.cos(phi)
    const sinPhi = Math.sin(phi)
    const radius = 1 + 0.4 * cosTheta
    samples.push({
      x: radius * cosPhi,
      y: radius * sinPhi,
      z: 0.4 * sinTheta,
      nx: cosTheta * cosPhi,
      ny: cosTheta * sinPhi,
      nz: sinTheta,
    })
  }
}

export function createTorusFrame(tilt: number, spin: number) {
  const pixels = Array<string>(torusColumns * torusRows).fill(' ')
  const depth = new Float64Array(pixels.length)
  const cosTilt = Math.cos(tilt)
  const sinTilt = Math.sin(tilt)
  const cosSpin = Math.cos(spin)
  const sinSpin = Math.sin(spin)
  const projection = torusColumns * 1.05

  for (const sample of samples) {
    const tiltedY = sample.y * cosTilt - sample.z * sinTilt
    const z = sample.y * sinTilt + sample.z * cosTilt
    const x = sample.x * cosSpin - tiltedY * sinSpin
    const y = sample.x * sinSpin + tiltedY * cosSpin
    const inverseDepth = 1 / (4 + z)
    const column = Math.round(torusColumns / 2 + projection * x * inverseDepth)
    // Monospace cells are taller than they are wide; correct the aspect ratio.
    const row = Math.round(torusRows / 2 - projection * 0.6 * y * inverseDepth)
    if (column < 0 || column >= torusColumns || row < 0 || row >= torusRows) continue

    const index = row * torusColumns + column
    if (inverseDepth <= depth[index]) continue
    depth[index] = inverseDepth

    const tiltedNormalY = sample.ny * cosTilt - sample.nz * sinTilt
    const normalY = sample.nx * sinSpin + tiltedNormalY * cosSpin
    const normalZ = sample.ny * sinTilt + sample.nz * cosTilt
    const light = Math.max(0, Math.min(1, 0.2 + 0.8 * (normalY - normalZ) / Math.SQRT2))
    pixels[index] = shades[Math.round(light * (shades.length - 1))]
  }

  return Array.from({ length: torusRows }, (_, row) =>
    pixels.slice(row * torusColumns, (row + 1) * torusColumns).join(''),
  ).join('\n')
}
