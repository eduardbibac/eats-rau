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
import {
  Armchair,
  CreditCard,
  DollarSign,
  MoveLeft,
  Package2,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

type PickDiningProps = {
  selectedPayment: string;
  setSelectedPayment: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<1 | 2>>;
  sendOrder: () => void;
};

export default function PickDining(props: PickDiningProps) {
  const { selectedPayment, setSelectedPayment, setStep, sendOrder } = props;
  const t = useTranslations("Shop");

  return (
    <>
      <DialogHeader>
        <DialogTitle>{t("Select your payment option")}</DialogTitle>
        <DialogDescription>{t("Cash and card accepted")}</DialogDescription>
      </DialogHeader>
      {/* <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">How much do you expect to use each month?</h3> */}
      <ul className="grid w-full gap-6">
        <li>
          <input
            type="radio"
            checked={selectedPayment === "cash"}
            onChange={(e) => setSelectedPayment(e.target.value)}
            id="cash"
            name="hosting"
            value="cash"
            className="peer hidden"
            required
          />
          <Label
            htmlFor="cash"
            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-orange-600 peer-checked:text-orange-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-orange-500"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">
                {t("On Premise")}
              </div>
              <div className="w-full">
                {t("Pay with cash or card when you pick up your order")}
              </div>
            </div>
            <DollarSign />
            {/* <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> */}
          </Label>
        </li>
        <li>
          <input
            type="radio"
            checked={selectedPayment === "card"}
            onChange={(e) => setSelectedPayment(e.target.value)}
            id="card"
            name="hosting"
            value="card"
            className="peer hidden"
          />
          <Label
            htmlFor="card"
            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-orange-600 peer-checked:text-orange-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-orange-500"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">{t("Online")}</div>
              <div className="w-full">
                {t("Pay securely online using Stripe")}
              </div>
            </div>
            <CreditCard />
            {/* <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> */}
          </Label>
        </li>
      </ul>

      <DialogFooter className="flex flex-row justify-between sm:justify-between">
        <Button onClick={() => setStep(1)} variant={"outline"} type="submit">
          <MoveLeft className="mr-2" />
          {t("Previous")}
        </Button>
        <Button
          disabled={selectedPayment.length === 0}
          onClick={sendOrder}
          className="bg-orange-500 hover:bg-orange-600"
          type="submit"
        >
          {selectedPayment === "card"
            ? t("Confirm and Pay")
            : t("Confirm Order")}
        </Button>
      </DialogFooter>
    </>
  );
}
