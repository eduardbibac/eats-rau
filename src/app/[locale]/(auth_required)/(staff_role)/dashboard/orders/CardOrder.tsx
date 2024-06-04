import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PriceBadge from "./PriceBadge";
import ProductsBadge from "./ProductsBadge";
import { ChevronRight } from "lucide-react";

export default function CardOrder() {
  return (
    <Card className="w-full select-none">
      <CardContent className="grid grid-cols-[80%_20%] p-4">
        <div className="flex flex-col justify-around gap-2">
          <p className="font-semibold leading-none tracking-tight text-gray-600">
            #3123124{" "}
          </p>
          <p className="mb-2 font-semibold leading-none tracking-tight text-gray-500">
            Bibac Eduard Cristian
          </p>
          <div className="inline-flex gap-2">
            <ProductsBadge />
            <PriceBadge />
          </div>

          <div className="">
            <span className="inline-flex max-h-5 w-fit items-center rounded-xl border border-gray-500 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-600">
              Pickup today, at 19:30
            </span>

            <span className="inline-flex max-h-5 w-fit items-center rounded-xl border border-gray-500 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-600">
              Unpaid
            </span>
          </div>
        </div>

        <div className="group/timer aspect-square w-full self-center rounded-full border-4 border-dotted border-gray-300">
          <ChevronRight className="ml-1 hidden h-full w-full justify-center self-center group-hover/timer:block" />
          <span className="inline-block h-full w-full justify-center group-hover/timer:hidden">
            <p className="text-center align-middle"> 1H24M</p>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
