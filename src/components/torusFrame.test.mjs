import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import ts from 'typescript'

const source = await readFile(new URL('./torusFrame.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
})
const { createTorusFrame, torusColumns, torusRows } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
)

test('rotation preserves the ASCII frame dimensions and shading characters', () => {
  for (const [tilt, spin] of [[0, 0], [0.6, 0.3], [Math.PI / 2, 0], [2, 3], [5, 4]]) {
    const frame = createTorusFrame(tilt, spin)
    const lines = frame.split('\n')
    assert.equal(lines.length, torusRows)
    assert.ok(lines.every(line => line.length === torusColumns))
    assert.match(frame, /^[ .,\-~:;=!*#$@\n]+$/)
    assert.ok(frame.replace(/[ \n]/g, '').length > 200)
  }
})

test('the face-on torus has an empty central hole and a visible surrounding ring', () => {
  const lines = createTorusFrame(0, 0).split('\n')
  const middle = lines[Math.floor(torusRows / 2)]
  assert.equal(middle[Math.floor(torusColumns / 2)], ' ')
  assert.ok(middle.slice(0, torusColumns / 2).trim().length > 0)
  assert.ok(middle.slice(torusColumns / 2).trim().length > 0)
})

test('successive orientations change the frame while identical orientations are deterministic', () => {
  const first = createTorusFrame(0.6, 0.3)
  assert.notEqual(first, createTorusFrame(0.9, 0.6))
  assert.equal(first, createTorusFrame(0.6, 0.3))
})
