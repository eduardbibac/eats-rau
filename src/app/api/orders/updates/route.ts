import { validateRequest } from "@/actions/auth/validateRequest";
import sql from "@/lib/db";
import { isRoleOrHigher } from "@/lib/role";
import { Order } from "@/types/dbTypes";
import { redirect } from "@/navigation";

export const runtime = "nodejs";
// This is required to enable streaming
export const dynamic = "force-dynamic";

export async function GET() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("staff", user!.arole)) {
    redirect("/");
    return;
  }

  let responseStream = new TransformStream();
  const writer = responseStream.writable.getWriter();
  const encoder = new TextEncoder();

  const sendMessage = (message: any) => {
    const jsonMessage = JSON.stringify(message);
    writer.write(encoder.encode(`data: ${jsonMessage}\n\n`));
  };

  try {
    const { unsubscribe } = await sql.subscribe(
      "insert:orders",
      (row) => {
        sendMessage([row]);
      },
      () => {
        // Callback on initial connect and potential reconnects
      },
    );
  } catch (error) {}

  // Return the stream response and keep the connection alive
  return new Response(responseStream.readable, {
    //'X-Accel-Buffering': 'no' MUST BE SET OTHERWISE NGINX WILL BUFFER YOUR RESPONSES (meanign 2-3m delays)!
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
      "Content-Encoding": "none",
      "X-Accel-Buffering": "no",
    },
  });
}
