"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Order } from "@/types/dbTypes";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import ComponentOrderProduct from "./ComponentOrderProduct";
import { updateOrderFromPending } from "@/actions/Dashboard/updateOrderFromPending";
import { updateOrderFromInProgress } from "@/actions/Dashboard/updateOrderFromInProgress";
import { updateOrderToCompleted } from "@/actions/Dashboard/updateOrderToCompleted";

export default function FinishOrderModal({
  order,
  updateOrderStatus,
}: {
  order: Order;
  updateOrderStatus: (orderId: number, newStatus: string) => void;
}) {
  const [dialog, setDialog] = useState(false);

  async function nextState() {
    await updateOrderToCompleted(order.id);
    setDialog(false);

    updateOrderStatus(order.id, "completed");
  }
  return (
    <Dialog
      open={dialog}
      onOpenChange={() => {
        setDialog((p) => !p);
        updateOrderFromPending(order.id);
      }}
    >
      <DialogTrigger asChild>
        <div className="group/timer aspect-square w-full self-center rounded-full border-4 border-dotted border-gray-300">
          <ChevronRight className="ml-1 hidden h-full w-full justify-center self-center group-hover/timer:block" />
          <span className="inline-block h-full w-full justify-center group-hover/timer:hidden">
            <p className="text-center align-middle"> 1H24M</p>
          </span>
        </div>
      </DialogTrigger>

      <DialogContent className="mb-6 flex min-w-[1000px] max-h-[90vh] flex-col overflow-y-scroll p-8">
        <DialogTitle>Comandă</DialogTitle>
        <DialogDescription>{order.username}</DialogDescription>

        <Button onClick={() => nextState()}>Confirmă</Button>

        <Card />
      </DialogContent>
    </Dialog>
  );
}
