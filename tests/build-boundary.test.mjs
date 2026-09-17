import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'))
const sanitySource = await readFile(new URL('../lib/sanity.js', import.meta.url), 'utf8')

function semver(value) {
  const match = String(value || '').match(/(\d+)\.(\d+)\.(\d+)/)
  return match ? match.slice(1).map(Number) : null
}

function atLeast(version, floor) {
  if (!version) return false
  for (let index = 0; index < 3; index += 1) {
    if (version[index] > floor[index]) return true
    if (version[index] < floor[index]) return false
  }
  return true
}

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

test('provider-free CI build mode is explicit and never the production default', () => {
  assert.match(sanitySource, /process\.env\.SANITY_OFFLINE_BUILD === ["']true["']/)
  assert.match(sanitySource, /offlineClient/)
  assert.match(sanitySource, /return \[\]/)
})

test('public Next runtime is on the patched security boundary', () => {
  const nextVersion = semver(pkg.dependencies?.next)
  assert.ok(nextVersion, 'next must use an explicit semver-compatible version')
  assert.ok(atLeast(nextVersion, [15, 5, 24]), `expected next >= 15.5.24, received ${pkg.dependencies?.next}`)
})

test('legacy Sanity eventsource chain is pinned above the critical disclosure fix', () => {
  const eventsource = pkg.resolutions?.eventsource
  const version = semver(eventsource)
  assert.ok(version, 'eventsource resolution must be explicit while next-sanity 0.x remains')
  assert.ok(atLeast(version, [1, 1, 1]), `expected eventsource >= 1.1.1, received ${eventsource}`)
})
