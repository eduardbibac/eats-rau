import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";
import { Order } from "@/types/dbTypes";
import { Ban, CircleCheckBig } from "lucide-react";
import ProductsBadge from "./ProductsBadge";
import PriceBadge from "./PriceBadge";
import CardOrder from "./CardOrder";

export function MobileLayout({
  orders,
  className,
}: {
  orders: Order[];
  className: string;
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
            {orders.map((order, i) => (
              <div key={order.id} className="h-12">
                <h1>
                  {`Order: ${order.id} | ${order.order_type} 
          ${Date.parse(order.is_scheduled_at) < Date.now() ? "NOW" : `Scheduled_AT: ${order.is_scheduled_at}`} | user: ${order.user_id}`}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="ready_for_pickup">
        <div className="flex flex-col gap-5 p-5">
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
        </div>
      </TabsContent>
      <TabsContent value="canceled"></TabsContent>
      <TabsContent value="completed"></TabsContent>
    </Tabs>
  );
}
