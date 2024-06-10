'use client';

import { createNewMenu } from "@/actions/Dashboard/createNewMenu";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateMenu() {
  const [menuName, setMenuName] = useState('')
  const [dialog, setDialog] = useState(false)

  const router = useRouter();
  async function handleClick() {
    await createNewMenu(menuName)
    setDialog(false)
    router.refresh()
  }
  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogTrigger asChild>
        <Button className="w-fit mr-auto ml-auto mt-8">Adaugă Meniu Nou</Button>
      </DialogTrigger>

      <DialogContent className="mb-6 flex flex-col w-fit p-12">
        <DialogTitle>
          Introduceți numele pentru noul meniu
        </DialogTitle>
        <Input value={menuName} onChange={(e) => setMenuName(e.target.value)} type="menu" placeholder="Nume Meniu" />
        <Button disabled={!(menuName.length > 4)} onClick={handleClick} className="w-fit ml-auto ">Creează</Button>
      </DialogContent>
    </Dialog>
  )
}

