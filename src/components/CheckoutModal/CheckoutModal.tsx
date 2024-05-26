import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PickDining from "./PickDining"

export function CheckoutModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <button className=" text-lg items-center w-full h-30 rounded-lg bg-orange-500 py-1.5 text-white duration-100 hover:bg-orange-600">Checkout</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] sm:min-h-[400px]">


          <PickDining />


      </DialogContent>
    </Dialog>
  )
}
