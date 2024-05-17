'use server';

import { validateRequest } from "@/auth/validateRequest";
import Link from "next/link";

export default async function NavBarUserSession() {
const { user } = await validateRequest();

return (
<>
  {!user && (
    <Link href="/login" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500">
    Sign in
    </Link>
  )}
  {/* // TODO: USER ROLE CHECK*/}
  <Link href="#" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
    Dashboard
  </Link>
</>
);
}