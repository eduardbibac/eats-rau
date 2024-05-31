import { validateRequest } from "@/actions/auth/validateRequest";
import sql from "@/lib/db";
import { isRoleOrHigher } from "@/lib/role";
import { Order } from "@/types/dbTypes";
import { redirect } from "@/navigation";

export const runtime = 'nodejs';
// This is required to enable streaming
export const dynamic = 'force-dynamic';

export async function GET() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
  }
  if (!isRoleOrHigher('staff', user!.arole)) {
    redirect('/');
  }

  let responseStream = new TransformStream();
  const writer = responseStream.writable.getWriter();
  const encoder = new TextEncoder();

  const sendMessage = (message: any) => {
    const jsonMessage = JSON.stringify(message);
    console.log('Is json bottleneck?')
    writer.write(encoder.encode(`data: ${jsonMessage}\n\n`));
    console.log('Is writer bottleneck?')
  };
  
  try {
    const { unsubscribe } = await sql.subscribe(
      'insert:orders', 
      (row) => {
        console.log('Is db bottleneck?')
        sendMessage([row]);
      },
      () => {
        // Callback on initial connect and potential reconnects
      }
    );
  } catch (error) {
  }

  // Return the stream response and keep the connection alive
  return new Response(responseStream.readable, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      Connection: 'keep-alive',
      'Cache-Control': 'no-cache, no-transform',
      'Content-Encoding': 'none',
      'X-Accel-Buffering': 'no;'
    },
  });
}
