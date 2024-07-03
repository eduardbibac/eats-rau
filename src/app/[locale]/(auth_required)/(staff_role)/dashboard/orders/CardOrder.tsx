import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PriceBadge from "./PriceBadge";
import ProductsBadge from "./ProductsBadge";
import { ChevronRight } from "lucide-react";
import { Order } from "@/types/dbTypes";
import { toLocalDate } from "@/lib/utils";

export default function CardOrder({
  order,
  modal,
}: {
  order: Order;
  modal: React.ReactNode;
}) {
  let drinks = 0,
    meals = 0,
    sancks = 0;

  order.products.forEach((product) => {
    if (product.ro_categories.includes("Băuturi")) drinks += 1 * product.quantity;
    if (product.ro_categories.includes("Gustări")) sancks += 1 * product.quantity;
    product.ro_categories.map((i) => {
      if (!["Gustări", "Băuturi"].includes(i)) meals += 1 * product.quantity;
    });
  });

  return (
    <Card className="w-full select-none lg:max-w-[500px]">
      <CardContent className="grid grid-cols-[80%_20%] p-4">
        <div className="flex flex-col justify-around gap-2">
          <p className="font-semibold leading-none tracking-tight text-gray-600">
            order#{order.id}
          </p>
          <p className="mb-2 font-semibold leading-none tracking-tight text-gray-500">
            {order.username}
          </p>
          <div className="inline-flex gap-2">
            <ProductsBadge drinks={drinks} snacks={sancks} meals={meals} />
            <PriceBadge price={order.total_cost} />
          </div>

          <div className="">
            <span className="inline-flex max-h-5 w-fit items-center rounded-xl border border-gray-500 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-600">
              {`${order.order_type === "pickup" ? "Pickup today" : "Dine In"}, at ${toLocalDate(new Date(order.is_scheduled_at))}`}
            </span>

            <span className="inline-flex max-h-5 w-fit items-center rounded-xl border border-gray-500 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-600">
              {`${order.payment_status}, cu ${order.payment_method}`}
            </span>
          </div>
        </div>

        {modal}
      </CardContent>
    </Card>
  );
}
