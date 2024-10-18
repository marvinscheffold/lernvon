export function getBearerAccessTokenFromAuthorizationHeader(
  authorizationHeader: string | undefined | null
): string | null {
  if (!authorizationHeader) return null;
  if (authorizationHeader.indexOf("Bearer") !== 0) return null;
  if (authorizationHeader.indexOf(" ") === -1) return null;
  return authorizationHeader.split(" ")[1];
}
