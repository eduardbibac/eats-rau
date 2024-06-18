'use client';

import { deleteMenu } from "@/actions/Dashboard/deleteMenu";
import { deleteProduct } from "@/actions/Dashboard/deleteProduct";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteProduct({ product_id }: { product_id: number }) {
  const [dialog, setDialog] = useState(false)

  const router = useRouter();
  async function handleDelete() {
    await deleteProduct(product_id)
    setDialog(false)
    router.refresh()
  }

  async function handleCancel() {
    setDialog(false)
  }
  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogTrigger asChild>
        <Trash2 className="hover:text-red-500 hover:cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="mb-6 flex flex-col w-fit p-12">
        <DialogTitle>
          Sunteți sigur că vreți să ștergeți produsul ?
        </DialogTitle>
        <div className="flex justify-between mt-8">
          <Button onClick={handleCancel} className="w-fit ">Anulează</Button>
          <Button onClick={handleDelete} variant={"destructive"} className="w-fit">
            <Trash2 className="p-1 mr-1" />
            Șterge
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

