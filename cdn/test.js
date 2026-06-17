const fs = require('fs')
const path = require('path')
const assert = require('assert')

let passed = 0
let failed = 0

function test(name, fn) {
  try {
    fn()
    console.log(`  ✓ ${name}`)
    passed++
  } catch (err) {
    console.error(`  ✗ ${name}: ${err.message}`)
    failed++
  }
}

console.log('Running tests...\n')

test('index.html exists', () => {
  assert.ok(fs.existsSync(path.join(__dirname, 'index.html')))
})

test('404.html exists', () => {
  assert.ok(fs.existsSync(path.join(__dirname, '404.html')))
})

test('output.css exists (build artifact)', () => {
  assert.ok(fs.existsSync(path.join(__dirname, 'output.css')), 'Run npm run build first')
})

test('manifest.json exists (build artifact)', () => {
  assert.ok(fs.existsSync(path.join(__dirname, 'manifest.json')), 'Run npm run build first')
})

test('manifest.json is valid JSON', () => {
  const content = fs.readFileSync(path.join(__dirname, 'manifest.json'), 'utf8')
  assert.ok(typeof JSON.parse(content) === 'object')
})

test('manifest.json contains only arrays', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'manifest.json'), 'utf8'))
  for (const [key, value] of Object.entries(manifest)) {
    assert.ok(Array.isArray(value), `"${key}" should be an array`)
  }
})

test('public/icons folder exists', () => {
  assert.ok(fs.existsSync(path.join(__dirname, 'public', 'icons')))
})

test('public/avatars folder exists', () => {
  assert.ok(fs.existsSync(path.join(__dirname, 'public', 'avatars')))
})

test('output.css is not empty', () => {
  const stat = fs.statSync(path.join(__dirname, 'output.css'))
  assert.ok(stat.size > 0)
})

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) process.exit(1)
