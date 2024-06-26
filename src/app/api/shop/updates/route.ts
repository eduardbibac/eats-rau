import { validateRequest } from "@/actions/auth/validateRequest";
import sql from "@/lib/db";
import { Order } from "@/types/dbTypes";
import {QuantityUpdate} from "@/types/dbTypes";
export const runtime = "nodejs";
// This is required to enable streaming
export const dynamic = "force-dynamic";

export async function GET() {
  let unsubscribe: () => void;

  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();

      const sendMessage = (message: any) => {
        const jsonMessage = JSON.stringify(message);
        controller.enqueue(encoder.encode(`data: ${jsonMessage}\n\n`));
      };

      sql
        .subscribe(
          "insert:orders",
          (row) => {
            sql<
              QuantityUpdate[]
            >`SELECT id, current_quantity FROM products_on_sale`
              .catch((e) => {
                console.log(e);
                return {};
              })
              .then((orders) => sendMessage(orders));
          },
          () => {
            // Callback on initial connect and potential reconnects
            console.log("Callback on initial connect and potential reconnects");
          },
        )
        .then((subscription) => {
          unsubscribe = subscription.unsubscribe;
        })
        .catch((error) => {
          console.error("Subscription error:", error);
          controller.error(error);
        });
    },
    cancel() {
      if (unsubscribe) {
        unsubscribe();
        console.log("Unsubscribe from DB Order Updates");
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
      "Content-Encoding": "none",
      "X-Accel-Buffering": "no",
    },
  });
}
