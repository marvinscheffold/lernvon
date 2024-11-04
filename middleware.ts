import {
  TEACHER_CREATE_ABOUT_ROUTE,
  TEACHER_CREATE_CONTACT_ROUTE,
  TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE,
  TEACHER_CREATE_POOLS_ROUTE,
  TEACHER_CREATE_ROUTE,
  TEACHER_CREATE_VIDEO_ROUTE,
} from "@/app/_utils/constants/routes";
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = [
  TEACHER_CREATE_ROUTE,
  TEACHER_CREATE_ABOUT_ROUTE,
  TEACHER_CREATE_CONTACT_ROUTE,
  TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE,
  TEACHER_CREATE_POOLS_ROUTE,
  TEACHER_CREATE_VIDEO_ROUTE,
];

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { error } = await supabase.auth.getUser();

  if (protectedRoutes.includes(request.nextUrl.pathname) && error) {
    console.log("in if");
    return NextResponse.redirect(
      new URL(
        encodeURI(`/auth?redirect-to=${request.nextUrl.pathname}`),
        request.url
      )
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
