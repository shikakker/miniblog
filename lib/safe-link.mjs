const ALLOWED_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:'])

export function normalizePortableTextHref(value) {
  if (typeof value !== 'string') return null
  const href = value.trim()
  if (!href) return null

  if (href.startsWith('#')) return href
  if (href.startsWith('/') && !href.startsWith('//')) return href

  try {
    const url = new URL(href)
    return ALLOWED_PROTOCOLS.has(url.protocol.toLowerCase()) ? href : null
  } catch {
    return null
  }
}
