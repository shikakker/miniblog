import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'))

test('public web build is not blocked by legacy Sanity Studio v2 tooling', () => {
  assert.equal(pkg.scripts?.prebuild, undefined)
  assert.equal(pkg.scripts?.build, 'next build')
  assert.equal(pkg.scripts?.['build:studio'], 'yarn --cwd studio build')
  assert.doesNotMatch(JSON.stringify(pkg.scripts || {}), /npx @sanity\/cli build/)
})

test('deployment runtime is pinned instead of inheriting moving platform defaults', () => {
  assert.match(pkg.engines?.node || '', /^22\./)
  assert.equal(pkg.packageManager, 'yarn@1.22.22')
})
