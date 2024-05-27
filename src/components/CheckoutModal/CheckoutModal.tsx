'use client';

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
import { useState } from "react";
import PickPayment from "./PickPayment";
import { validateAuth } from "@/actions/validateAuth";

export function CheckoutModal() {
  const [selectedDining, setSelectedDining] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [step, setStep] = useState<1|2>(1);

  const validate = async () => {
    // Call the Server Action when the button is clicked
    await validateAuth();

};

  function sendOrder() {
    alert(selectedDining + selectedPayment)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
      <button onClick={validate} className=" text-lg items-center w-full h-30 rounded-lg bg-orange-500 py-1.5 text-white duration-100 hover:bg-orange-600">Checkout</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] sm:min-h-[400px]">

          {step  === 1 ? (
            <PickDining setStep={setStep} selectedDining={selectedDining} setSelectedDining={setSelectedDining}/>
          ): (
            <PickPayment sendOrder={sendOrder} setStep={setStep} selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment}/>
          )}

      </DialogContent>  
    </Dialog>
  )
}
