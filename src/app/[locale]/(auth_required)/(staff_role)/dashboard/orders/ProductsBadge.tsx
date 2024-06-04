import {
  Coffee,
  CookingPot,
  Martini,
  MartiniIcon,
  Popcorn,
  Wine,
} from "lucide-react";

export default function ProductsBadge() {
  return (
    <>
      <span className="inline-flex max-h-5 items-center rounded-xl border border-gray-500 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-600">
        <div className="me-2 inline-flex content-center">
          <Martini className="h-3.5 w-3.5" />3
        </div>
        <div className="me-2 inline-flex content-center">
          <Popcorn className="h-3.5 w-3.5" />3
        </div>
        <div className="me-2 inline-flex content-center">
          <CookingPot className="h-3.5 w-3.5" />3
        </div>
      </span>
    </>
  );
}
