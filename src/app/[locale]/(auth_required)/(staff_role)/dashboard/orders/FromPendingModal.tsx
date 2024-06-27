'use client';

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Order } from "@/types/dbTypes";
import { ChevronRight } from "lucide-react";
import { useState } from "react"
import ComponentOrderProduct from "./ComponentOrderProduct";
import { updateOrderFromPending } from "@/actions/Dashboard/updateOrderFromPending";
import { updateOrderFromInProgress } from "@/actions/Dashboard/updateOrderFromInProgress";

export default function FromPendingUpdate({ order, updateOrderStatus }: { order: Order, updateOrderStatus: (orderId: number) => void }) {
  const [dialog, setDialog] = useState(false)



  async function nextState() {
    await updateOrderFromInProgress(order.id);
    setDialog(false);

    updateOrderStatus(order.id)
  }
  return (
    <Dialog open={dialog} onOpenChange={() => { setDialog(p => !p); updateOrderFromPending(order.id); }
    }>
      <DialogTrigger asChild>
        <div className="group/timer aspect-square w-full self-center rounded-full border-4 border-dotted border-gray-300">
          <ChevronRight className="ml-1 hidden h-full w-full justify-center self-center group-hover/timer:block" />
          <span className="inline-block h-full w-full justify-center group-hover/timer:hidden">
            <p className="text-center align-middle"> 1H24M</p>
          </span>
        </div>
      </DialogTrigger>

      <DialogContent className="mb-6 flex flex-col min-w-[1000px] p-8 overflow-y-scroll">
        <DialogTitle>
          Comandă
        </DialogTitle>
        <DialogDescription>
          {order.username}
        </DialogDescription>
        {order.products.map(product => (
          [...Array(product.quantity)].map((_, index) => (
            <ComponentOrderProduct key={`${product.product_id}-${index}`} product={product} />
          ))
        ))}

        <Button onClick={() => nextState()}>Confirmă Preparare</Button>

        <Card />

      </DialogContent>
    </Dialog >
  )
}