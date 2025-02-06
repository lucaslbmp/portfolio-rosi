export function extractImageKey(s3Url: string) {
  const url = new URL(s3Url);
  return url.pathname.substring(1); // Remove the leading '/'
}
