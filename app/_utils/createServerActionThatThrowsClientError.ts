import { ServerActionResponseType } from "@/app/_utils/types/serverActionResponse";

export function createServerActionThatThrowsClientError(
  // eslint-disable-next-line
  serverAction: (arg: any) => Promise<ServerActionResponseType>
  // eslint-disable-next-line
): (arg: any) => Promise<ServerActionResponseType> {
  // eslint-disable-next-line
  return async function (params: any) {
    const response = await serverAction(params);
    if (response.code >= 400 && response.code <= 500) {
      throw response;
    }
    return response;
  };
}
