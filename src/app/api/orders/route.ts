import { validateRequest } from "@/actions/auth/validateRequest";
import sql from "@/lib/db";
import { isRoleOrHigher } from "@/lib/role";
import { Order } from "@/types/dbTypes";
import { redirect } from "@/navigation";

export const runtime = "nodejs";
// This is required to enable streaming
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("staff", user!.arole)) {
    redirect("/");
    return;
  }

  const orders = await sql<Order[]>`SELECT * FROM view_complete_order`.catch(
    (e) => {
      console.log(e);
      return {};
    },
  );

  return new Response(JSON.stringify(orders), { status: 200 });
}
