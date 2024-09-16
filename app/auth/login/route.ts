"use server"

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const url = new URL(req.url)
  const cookieStore = cookies()

  const formData = await req.formData()
  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  })

  const { data, error } = await supabase.auth.signInWithOtp({
    email: String(formData.get("email")),
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
      emailRedirectTo: 'https://localhost:3000/dashboard',
    },
  })

  if(data) console.log(data)
  if(error) console.log(error)

  return NextResponse.redirect(url.origin, {
    status: 301,
  })
}