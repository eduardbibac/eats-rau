"use client";

import { deleteMenu } from "@/actions/Dashboard/deleteMenu";
import { deleteProduct } from "@/actions/Dashboard/deleteProduct";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteProduct({ product_id }: { product_id: number }) {
  const [dialog, setDialog] = useState(false);

  const router = useRouter();
  async function handleDelete() {
    await deleteProduct(product_id);
    setDialog(false);
    router.refresh();
  }

  async function handleCancel() {
    setDialog(false);
  }
  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogTrigger asChild>
        <Trash2 className="hover:cursor-pointer hover:text-red-500" />
      </DialogTrigger>

      <DialogContent className="mb-6 flex w-fit flex-col p-12">
        <DialogTitle>Sunteți sigur că vreți să ștergeți produsul ?</DialogTitle>
        <div className="mt-8 flex justify-between">
          <Button onClick={handleCancel} className="w-fit">
            Anulează
          </Button>
          <Button
            onClick={handleDelete}
            variant={"destructive"}
            className="w-fit"
          >
            <Trash2 className="mr-1 p-1" />
            Șterge
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
