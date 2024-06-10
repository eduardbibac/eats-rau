'use client';

import { createNewMenu } from "@/actions/Dashboard/createNewMenu";
import { deleteMenu } from "@/actions/Dashboard/deleteMenu";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteMenu({ menu_id }: { menu_id: number }) {
  const [dialog, setDialog] = useState(false)

  const router = useRouter();
  async function handleDelete() {
    await deleteMenu(menu_id)
    setDialog(false)
    router.refresh()
  }

  async function handleCancel() {
    setDialog(false)
  }
  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogTrigger asChild>
        <Button size="sm" variant="destructive" className="absolute self-end mr-20 h-8 gap-1">
          <Trash2 className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Șterge Meniu
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="mb-6 flex flex-col w-fit p-12">
        <DialogTitle>
          Sunteți sigur că vreți să ștergeți meniul ?
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

