/**
 * Utility to resolve asset URLs correctly across any hosting environment,
 * specifically GitHub Pages with repository subpaths (e.g. https://<user>.github.io/<repo>/)
 * and root custom domains.
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // Remove leading slash to make path relative
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Safe base URL retrieval compatible with Vite
  const baseUrl = (import.meta as unknown as { env?: { BASE_URL?: string } })?.env?.BASE_URL || './';

  if (baseUrl === './' || baseUrl === '') {
    return `./${cleanPath}`;
  }

  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
}
