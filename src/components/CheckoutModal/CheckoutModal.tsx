"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PickDining from "./PickDining";
import { useContext, useState } from "react";
import PickPayment from "./PickPayment";
import { validateAuth } from "@/actions/validateAuth";
import sendOrder from "@/actions/(auth_required)/sendOrder";
import { CartContext } from "@/providers/CartContextProvider";
import { CartItem, Product } from "@/types/ShopTypes";
import { useTranslations } from "next-intl";

export function CheckoutModal() {
  const [dialog, setDialog] = useState(false);
  const [selectedDining, setSelectedDining] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const { cart, setCart } = useContext(CartContext);
  const t = useTranslations("Shop");
  const products = cart.map((item: CartItem) => ({
    id: item.product.id,
    quantity: item.count,
  }));

  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogTrigger asChild>
        <button
          onClick={() => validateAuth()}
          className="h-30 w-full items-center rounded-lg bg-orange-500 py-1.5 text-lg text-white duration-100 hover:bg-orange-600"
        >
          {t("Checkout")}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:min-h-[400px] sm:max-w-[625px]">
        {step === 1 ? (
          <PickDining
            setStep={setStep}
            selectedDining={selectedDining}
            setSelectedDining={setSelectedDining}
          />
        ) : (
          <PickPayment
            sendOrder={() => {
              sendOrder(selectedDining, selectedPayment, products);
              setCart([]);
              setDialog(false);
            }}
            setStep={setStep}
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
