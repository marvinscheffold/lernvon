import { ServerActionResponseType } from "@/app/_utils/types/serverActionResponse";

export function createServerActionThatThrowsClientError(
  serverAction: (arg: unknown) => Promise<ServerActionResponseType>
): (arg: unknown) => Promise<ServerActionResponseType> {
  return async function (params: unknown) {
    const response = await serverAction(params);
    if (response.code >= 400 && response.code <= 500) {
      throw response;
    }
    return response;
  };
}
