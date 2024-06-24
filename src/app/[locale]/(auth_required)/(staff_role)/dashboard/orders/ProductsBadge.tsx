import {
  Coffee,
  CookingPot,
  Martini,
  MartiniIcon,
  Popcorn,
  Wine,
} from "lucide-react";

type BadgeProps = { drinks?: number, snacks?: number, meals?: number }

export default function ProductsBadge(props: BadgeProps) {
  const { drinks, snacks, meals } = props;
  return (
    <>
      {(drinks != 0 || snacks != 0 || meals != 0) && (
        <span className="inline-flex max-h-5 items-center rounded-xl border border-gray-500 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-600">
          {drinks != 0 && (
            <div className="me-2 inline-flex content-center">
              <Martini className="h-3.5 w-3.5" />{drinks}
            </div>
          )}
          {snacks != 0 && (
            <div className="me-2 inline-flex content-center">
              <Popcorn className="h-3.5 w-3.5" />{snacks}
            </div>
          )}
          {meals != 0 && (
            <div className="me-2 inline-flex content-center">
              <CookingPot className="h-3.5 w-3.5" />{meals}
            </div>)}
        </span>
      )}

    </>
  );
}
