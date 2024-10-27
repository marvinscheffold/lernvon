export function createServerActionThatThrowsClientError(
  serverAction: (arg: any) => Promise<any>
): (arg: any) => Promise<any> {
  return async function (params: any) {
    const response = await serverAction(params);
    if (response.code >= 400 && response.code <= 500) {
      throw response;
    }
    return response;
  };
}
