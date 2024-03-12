export function removeFirstPathSegment(path: string) {
  const startingPosition = path.startsWith("/") ? 1 : 0;
  const cutIndex = path.indexOf("/", startingPosition);

  if (cutIndex === -1) {
    return "/";
  }

  return path.slice(cutIndex);
}
