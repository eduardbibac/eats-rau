'use server';

import { validateRequest } from "@/auth/validateRequest";
import sql from "@/lib/db";
import { isRoleOrHigher } from "@/lib/role";
import { redirect } from "next/navigation";

type Order = {
  id: number;
  user_id: string;
  order_status: string;
  order_type: string;
  payment_method: string;
  payment_status: string;
  is_scheduled_at: string;
  changed_by: string;
}

export async function GET() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
  }
  if (!isRoleOrHigher('staff', user!.arole)) {
    redirect('/');
  }

  const encoder = new TextEncoder();

  const customReadable = new ReadableStream({
    async start(controller) {
      const sendMessage = (message: any) => {
        const jsonMessage = JSON.stringify(message);
        controller.enqueue(encoder.encode(`${jsonMessage}\n\n`));
      };

      try {
        const orders = await sql<Order>`SELECT * FROM orders`;
        sendMessage(orders);
        

        const { unsubscribe } = await sql.subscribe(
          'insert:orders', 
          (row) => {
            sendMessage(row);
          },
          () => {
            // Callback on initial connect and potential reconnects
          }
        );

        // Clean up on stream cancellation
        controller.close = () => {
          unsubscribe();
        };
      } catch (error) {
        controller.error(error);
      }
    },
  });

  // Return the stream response and keep the connection alive
  return new Response(customReadable, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      Connection: 'keep-alive',
      'Cache-Control': 'no-cache, no-transform',
      'Content-Encoding': 'none'
    },
  });
}
