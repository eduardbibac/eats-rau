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
import { Armchair, MoveRight, Package2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

type PickDiningProps = {
  selectedDining: string;
  setSelectedDining: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<1 | 2>>;
};

export default function PickDining(props: PickDiningProps) {
  const { selectedDining, setSelectedDining, setStep } = props;
  const t = useTranslations("Shop");
  return (
    <>
      <DialogHeader>
        <DialogTitle>{t("For dine-in or pickup ?")}</DialogTitle>
        <DialogDescription>{t("Your meal, your way:")}</DialogDescription>
      </DialogHeader>
      {/* <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">How much do you expect to use each month?</h3> */}
      <ul className="grid w-full gap-6">
        <li>
          <input
            type="radio"
            checked={selectedDining === "dine_in"}
            onChange={(e) => setSelectedDining(e.target.value)}
            id="dine_in"
            name="hosting"
            value="dine_in"
            className="peer hidden"
            required
          />
          <Label
            htmlFor="dine_in"
            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-orange-600 peer-checked:text-orange-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-orange-500"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">{t("Dine In")}</div>
              <div className="w-full">
                {t("Relax and enjoy your meal in our cafeteria")}
              </div>
            </div>
            <Armchair />
            {/* <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> */}
          </Label>
        </li>
        <li>
          <input
            type="radio"
            checked={selectedDining === "pickup"}
            onChange={(e) => setSelectedDining(e.target.value)}
            id="pickup"
            name="hosting"
            value="pickup"
            className="peer hidden"
          />
          <Label
            htmlFor="pickup"
            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-orange-600 peer-checked:text-orange-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-orange-500"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">{t("Pickup")}</div>
              <div className="w-full">
                {t(
                  "Your order will be packaged and ready for you to take away",
                )}
              </div>
            </div>
            <Package2 />
            {/* <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> */}
          </Label>
        </li>
      </ul>

      <DialogFooter>
        <Button
          disabled={selectedDining.length === 0}
          onClick={() => setStep(2)}
          className="bg-orange-500 hover:bg-orange-600"
          type="submit"
        >
          {t("Next")}
          <MoveRight className="ml-2" />
        </Button>
      </DialogFooter>
    </>
  );
}

{
  /* <div className="grid gap-4 py-4">
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
</div> */
}
