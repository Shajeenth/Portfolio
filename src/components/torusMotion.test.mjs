import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import ts from 'typescript'

const source = await readFile(new URL('./torusMotion.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
})
const { advanceTorusMotion, joltTorus } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
)

test('clicks accelerate immediately while repeated clicks have a bounded speed', () => {
  assert.equal(joltTorus(0), 5)
  assert.equal(joltTorus(3), 8)
  assert.equal(joltTorus(joltTorus(joltTorus(0))), 10)
  assert.ok(advanceTorusMotion(joltTorus(0), 0.1).rotationTime > 0.1)
})

test('the boost decays smoothly and eventually returns to normal speed', () => {
  let boost = joltTorus(0)
  for (let step = 0; step < 200; step++) {
    const motion = advanceTorusMotion(boost, 0.1)
    assert.ok(motion.boost <= boost)
    assert.ok(motion.rotationTime >= 0.1)
    boost = motion.boost
  }
  assert.equal(boost, 0)
  assert.equal(advanceTorusMotion(boost, 0.1).rotationTime, 0.1)
})

test('speed decay and rotation are consistent at different frame rates', () => {
  function simulate(fps) {
    let boost = 5
    let rotation = 0
    for (let frame = 0; frame < fps * 3; frame++) {
      const motion = advanceTorusMotion(boost, 1 / fps)
      boost = motion.boost
      rotation += motion.rotationTime
    }
    return { boost, rotation }
  }
  const slow = simulate(30)
  const fast = simulate(144)
  assert.ok(Math.abs(slow.boost - fast.boost) < 1e-9)
  assert.ok(Math.abs(slow.rotation - fast.rotation) < 1e-9)
})
