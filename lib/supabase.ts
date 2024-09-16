import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const supabase = createClientComponentClient()

/*
import { createClient } from "@supabase/supabase-js";

// ANON KEY: Is for insert elements for any user in the database
// Can be use for blogs, post comments as anon users.
export const supabaseAnon = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// SERVICE KEY: Is for insert elements for admin users in the database
// Can be use for dashboards, for private data.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
)
*/