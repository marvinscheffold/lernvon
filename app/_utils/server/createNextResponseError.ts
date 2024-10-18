import { NextResponse } from "next/server";
import { httpResponseStatusCode } from "./httpResponseStatusCode";

export function createNextResponseError(
  error:
    | {
        message: string;
      }
    | any
): NextResponse {
  try {
    const typedError = error.message as keyof typeof httpResponseStatusCode;

    const validHttpResponseStatusCode = httpResponseStatusCode[typedError];
    if (!validHttpResponseStatusCode)
      return new NextResponse(undefined, {
        status: httpResponseStatusCode.InternalServerError.code,
        statusText: httpResponseStatusCode.InternalServerError.message,
      });

    return new NextResponse(undefined, {
      status: validHttpResponseStatusCode.code,
      statusText: validHttpResponseStatusCode.message,
    });
  } catch (error) {
    return new NextResponse(undefined, {
      status: httpResponseStatusCode.InternalServerError.code,
      statusText: httpResponseStatusCode.InternalServerError.message,
    });
  }
}
