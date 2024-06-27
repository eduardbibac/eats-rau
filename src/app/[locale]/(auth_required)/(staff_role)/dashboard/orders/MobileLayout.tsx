import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";
import { Order } from "@/types/dbTypes";
import { Ban, CircleCheckBig } from "lucide-react";
import CardOrder from "./CardOrder";
import FromPendingUpdate from "./FromPendingModal";

export function MobileLayout({
  orders,
  className,
  updateOrderStatus,
}: {
  orders: Order[];
  className: string;
  updateOrderStatus: any;
}) {
  return (
    <Tabs className={cn(className, "w-full")} defaultValue="incoming">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="incoming">Incoming</TabsTrigger>
        <TabsTrigger value="ready_for_pickup">Ready for Pickup</TabsTrigger>
        <div className="ml-auto">
          <TabsTrigger value="completed">
            <CircleCheckBig />
          </TabsTrigger>
          <TabsTrigger value="canceled">
            <Ban />
          </TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="incoming">
        <div className="m-5 w-full">
          <div className="grid gap-12 rounded-xl bg-white p-5 md:grid-cols-1">
            {orders.map((order: Order, i) =>
              order.order_status === "pending" ? (
                <div key={order.id} className="">
                  <CardOrder
                    order={order}
                    modal={
                      <FromPendingUpdate
                        order={order}
                        updateOrderStatus={updateOrderStatus}
                      />
                    }
                  />
                </div>
              ) : null,
            )}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="ready_for_pickup"></TabsContent>
      <TabsContent value="canceled"></TabsContent>
      <TabsContent value="completed"></TabsContent>
    </Tabs>
  );
}
