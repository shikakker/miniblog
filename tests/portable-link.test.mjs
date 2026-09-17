import assert from 'node:assert/strict'
import test from 'node:test'
import { normalizePortableTextHref } from '../lib/safe-link.mjs'

test('allows ordinary web, mail, telephone, relative and fragment links', () => {
  assert.equal(normalizePortableTextHref('https://example.com/path'), 'https://example.com/path')
  assert.equal(normalizePortableTextHref('http://example.com'), 'http://example.com')
  assert.equal(normalizePortableTextHref('mailto:hello@example.com'), 'mailto:hello@example.com')
  assert.equal(normalizePortableTextHref('tel:+491234567'), 'tel:+491234567')
  assert.equal(normalizePortableTextHref('/about'), '/about')
  assert.equal(normalizePortableTextHref('#section'), '#section')
})

test('rejects executable, opaque and protocol-relative CMS links', () => {
  assert.equal(normalizePortableTextHref('javascript:alert(1)'), null)
  assert.equal(normalizePortableTextHref('data:text/html,<script>alert(1)</script>'), null)
  assert.equal(normalizePortableTextHref('vbscript:msgbox(1)'), null)
  assert.equal(normalizePortableTextHref('//evil.example/path'), null)
  assert.equal(normalizePortableTextHref(''), null)
  assert.equal(normalizePortableTextHref(null), null)
})
