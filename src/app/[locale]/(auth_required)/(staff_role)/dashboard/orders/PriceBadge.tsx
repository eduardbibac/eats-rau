import {
  Banknote,
  CircleDollarSign,
  Coffee,
  CookingPot,
  HandCoins,
  Martini,
  MartiniIcon,
  Popcorn,
  Wine,
} from "lucide-react";

export default function PriceBadge({ price }: { price: number }) {
  return (
    <>
      <span className="inline-flex max-h-5 items-center rounded-xl border border-gray-500 px-2.5 py-0.5 text-xs font-medium text-black">
        <div className="me-2 inline-flex content-center">
          <HandCoins className="me-1 h-4 w-4 font-semibold" />
          <p className="font-semibold">{`RON ${price}`}</p>
        </div>
      </span>
    </>
  );
}
