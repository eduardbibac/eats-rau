'use server';

import { validateRequest } from "@/auth/validateRequest";
import sql from "@/lib/db";
import { isRoleOrHigher } from "@/lib/role";
import { redirect } from "next/navigation";



  // sql.subscribe('insert:orders', () => {
  // });
  // const { unsubscribe } = await sql.subscribe(
  //   'insert:events',
  //   (row, { command, relation, key, old }) => {
  //     // Callback function for each row change
  //     // tell about new event row over eg. websockets or do something else
  //   },
  //   () => {
  //     // Callback on initial connect and potential reconnects
  //   }
  // )

export async function GET() {
  const { user } = await validateRequest();
  if (!user) {
		redirect("/login");
	}
  if (! isRoleOrHigher('staff', user!.arole)) { redirect('/'); }

  
  const encoder = new TextEncoder()
  // Create a streaming response
  const customReadable = new ReadableStream({
    start(controller) {
			const sendMessage = (message: {}) => {
        const jsonMessage = JSON.stringify(message);
        controller.enqueue(encoder.encode(`data: ${jsonMessage}\n\n`));
      };

      // Send subsequent messages at intervals
      const intervalId = setInterval(() => {
        const message = { text: 'Hey, I am another message.' };
        
        sendMessage(message);
      }, 5000); // Send a message every 5 seconds

      // Clean up on stream cancellation
      controller.close = () => {
        clearInterval(intervalId);
      };
    },
  })
  // Return the stream response and keep the connection alive
  return new Response(customReadable, {
    // Set the headers for Server-Sent Events (SSE)
    headers: {
			'Content-Type': 'text/event-stream; charset=utf-8',
			Connection: 'keep-alive',
			'Cache-Control': 'no-cache, no-transform',
			'Content-Encoding': 'none'
		},
  })
}

