const decaySeconds = 1.5

export function joltTorus(boost: number) {
  return Math.min(boost + 5, 10)
}

export function advanceTorusMotion(boost: number, seconds: number) {
  const decay = Math.exp(-seconds / decaySeconds)
  const nextBoost = boost * decay
  return {
    boost: nextBoost < 0.001 ? 0 : nextBoost,
    // Integrating the decaying boost avoids angle jumps and frame-rate dependence.
    rotationTime: seconds + boost * decaySeconds * (1 - decay),
  }
}
