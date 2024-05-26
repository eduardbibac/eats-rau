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

export default function PickDining () {
return (
  <>
  <DialogHeader>
      <DialogTitle>For dine-in or pickup ?</DialogTitle>
      <DialogDescription>
        Pickup orders will be packaged and ready to go
      </DialogDescription>
    </DialogHeader>
  {/* <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">How much do you expect to use each month?</h3> */}
<ul className="grid w-full gap-6">
    <li>
        <input type="radio" id="dine_in" name="hosting" value="dine_in" className="hidden peer" required />
        <Label htmlFor="dine_in" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div className="block">
                <div className="w-full text-lg font-semibold">Dine In</div>
                <div className="w-full">And chill in the cafeteria</div>
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Label>
    </li>
    <li>
        <input type="radio" id="pickup" name="hosting" value="pickup" className="hidden peer"/>
        <Label htmlFor="pickup" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block">
                <div className="w-full text-lg font-semibold">Pickup</div>
                <div className="w-full">And eat somewhere else</div>
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Label>
    </li>
</ul>

    <DialogFooter>
      <Button className="bg-orange-500" type="submit">Next 1/2</Button>
    </DialogFooter>
  </>
);
}



{/* <div className="grid gap-4 py-4">
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor="name" className="text-right">
      Name
    </Label>
    <Input
      id="name"
      defaultValue="Pedro Duarte"
      className="col-span-3"
    />
  </div>
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor="username" className="text-right">
      Username
    </Label>
    <Input
      id="username"
      defaultValue="@peduarte"
      className="col-span-3"
    />
  </div>
</div> */}