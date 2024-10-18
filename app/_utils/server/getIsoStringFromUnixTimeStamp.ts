export function getIsoStringFromUnixTimeStamp(unixTimeStamp: number): string {
  return new Date(unixTimeStamp * 1000).toISOString();
}
