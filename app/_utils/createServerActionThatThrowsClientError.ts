import { ServerActionResponseType } from "@/app/_utils/types/serverActionResponse";

export function createServerActionThatThrowsClientError(
  serverAction: (arg: any) => Promise<ServerActionResponseType>
): (arg: any) => Promise<ServerActionResponseType> {
  return async function (params: any) {
    const response = await serverAction(params);
    if (response.code >= 400 && response.code <= 500) {
      throw response;
    }
    return response;
  };
}
