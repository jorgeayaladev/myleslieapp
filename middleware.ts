import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextRequest, NextResponse } from "next/server"

/**
 * -----------------------------------------------------------------------
 * ANON KEY: Is for insert elements for any user in the database
 * Can be use for blogs, post comments as anon users.
 * SERVICE KEY: Is for insert elements for admin users in the database
 * Can be use for dashboards, for private data.
 * -----------------------------------------------------------------------
 * process.env.NEXT_PUBLIC_SUPABASE_URL!
 * process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
 * process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
 * -----------------------------------------------------------------------
 */
export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session }, error
  } = await supabase.auth.getSession()

  console.log(session)
  console.log(error)

  if(!session) {
    return NextResponse.rewrite(new URL("/", req.url))
  }

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request dashboard paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|about|species|gallery|statistics|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
