/**
 * Prefixes an internal, root-relative path with Astro's configured `base`
 * (e.g. "/villiers") so links and asset references resolve correctly when
 * the site is deployed under a GitHub Pages project-page subpath.
 *
 * External URLs, mailto:/tel: links, and hash anchors pass through unchanged.
 */
export function url(path: string): string {
  if (!path) return path;
  if (/^([a-z][a-z0-9+.-]*:)?\/\//i.test(path) || path.startsWith("mailto:") || path.startsWith("tel:") || path.startsWith("#")) {
    return path;
  }
  const base = import.meta.env.BASE_URL;
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
