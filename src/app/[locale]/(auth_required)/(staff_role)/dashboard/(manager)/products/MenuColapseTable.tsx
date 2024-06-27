"use client";

import * as React from "react";
import { ClipboardX, RotateCw, Unplug } from "lucide-react";
import { debounce } from "lodash";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";
import { updateMenuActiveState } from "@/actions/Dashboard/updateMenuActiveState";
import { cn } from "@/lib/utils";
import { DashboardProduct } from "@/types/ShopTypes";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { removeItemFromMenu } from "@/actions/Dashboard/removeItemFromMenu";
import DeleteMenu from "./DeleteMenu";
import { Input } from "@/components/ui/input";
import { updateMenuListPositions } from "@/actions/Dashboard/updateMenuListPositions";
import { useRouter } from "next/navigation";
import { refreshMenuProducts } from "@/actions/Dashboard/refreshMenuProducts";
import { closeMneuProducts } from "@/actions/Dashboard/closeMneuProducts";
export default function MenuColapseTable({
  products,
  label,
  active,
  menu_id,
}: {
  products: DashboardProduct[];
  label: string;
  active?: any | undefined;
  menu_id: number;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isActiveMenu, setIsActiveMenu] = React.useState<boolean>(
    active !== undefined ? active : true,
  );
  const [inputValues, setInputValues] = React.useState<any[]>([]);

  React.useEffect(() => {
    updateMenuActiveState(menu_id, isActiveMenu);
  }, [isActiveMenu, menu_id]);

  async function handleMenuRemove(product_id: number) {
    await removeItemFromMenu(product_id, menu_id);
    router.refresh();
  }

  async function moveItemUp(index: number) {
    if (index === 0) return; // Can't move the first item up
    let newItems = [...products];
    [newItems[index], newItems[index - 1]] = [
      newItems[index - 1],
      newItems[index],
    ];
    products = [...newItems];
    await updateList(newItems);
    router.refresh();
  }

  async function moveItemDown(index: number) {
    if (index === products.length - 1) return; // Can't move the last item down
    const newItems = [...products];
    [newItems[index], newItems[index + 1]] = [
      newItems[index + 1],
      newItems[index],
    ];
    products = [...newItems];
    await updateList(newItems);
    router.refresh();
  }

  async function moveItemTo(index: number, to: number) {
    const newItems = [...products];
    [newItems[index], newItems[to]] = [newItems[to], newItems[index]];
    products = [...newItems];

    await updateList(newItems);
    router.refresh();
  }

  function handleLoseFocus(index: number) {
    if (inputValues[index] === "") {
      const newInputs = [...inputValues];
      newInputs[index] = 1;
      setInputValues(newInputs);
    }
    // The index of the input and (to) the value of the input
    moveItemTo(index, inputValues[index] - 1);
  }
  function handleInputChange(e: any, index: number) {
    let { value } = e.target;

    console.log(value);

    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      if (value > products.length) value = products.length;
      if (value <= 0) if (value !== "") value = 1;
      const newInputs = [...inputValues];
      newInputs[index] = value;
      setInputValues(newInputs);
    }
  }

  async function updateList(items: DashboardProduct[]) {
    const newListPositions = items.map((p, i) => [p.id, i + 1]);
    await updateMenuListPositions(menu_id, newListPositions);
  }

  React.useEffect(() => {
    const newInputs = products.map((_, i) => i + 1);
    setInputValues(newInputs);
  }, [products]);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="sticky top-0 flex flex-col justify-center bg-white">
        {active !== undefined ? (
          <Switch
            checked={isActiveMenu}
            onCheckedChange={setIsActiveMenu}
            className="absolute ml-2"
            id="active-menu"
          />
        ) : null}

        <DeleteMenu menu_id={menu_id} />

        <CollapsibleTrigger className="pl-14" asChild>
          <button
            type="button"
            className={cn(
              {
                "border-orange-300 text-black hover:bg-orange-50 focus:ring-orange-200":
                  isActiveMenu,
              },
              {
                "text-gray border-gray-300 hover:bg-gray-100 focus:ring-gray-200":
                  !isActiveMenu,
              },
              "flex w-full items-center justify-between gap-3 rounded-xl border p-5 font-medium focus:ring-4 rtl:text-right",
            )}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>{label}</span>
            <svg
              data-accordion-icon
              className="h-3 w-3 shrink-0 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent
        className={cn({ "opacity-55": !isActiveMenu }, "space-y-2")}
      >
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead />
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Imagine</span>
                  </TableHead>
                  <TableHead>Nume</TableHead>
                  <TableHead className="hidden md:table-cell">Preț</TableHead>
                  <TableHead className="hidden w-fit text-right md:table-cell">
                    <div className="flex items-center justify-end gap-2">
                      Disponibil acum
                      <Unplug className="hover:cursor-pointer hover:text-red-500"
                        onClick={async () => { await closeMneuProducts(menu_id); router.refresh() }} />
                      <RotateCw className="hover:cursor-pointer hover:text-blue-500"
                        onClick={async () => { await refreshMenuProducts(menu_id); router.refresh() }} />

                    </div>
                  </TableHead>
                  <TableHead className="hidden md:table-cell">/</TableHead>
                  <TableHead className="hidden text-left md:table-cell">
                    Porții în fiecare zi
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, i) => (
                  <TableRow key={product.id} className="group/row">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Input
                          onBlur={() => handleLoseFocus(i)}
                          value={inputValues[i]}
                          onChange={(e) => handleInputChange(e, i)}
                          className="w-10 text-center"
                        />
                        <div className="flex h-full flex-col gap-1">
                          <Button
                            onClick={() => moveItemUp(i)}
                            variant={"outline"}
                          >
                            <ChevronUp className="" />
                          </Button>
                          <Button
                            onClick={() => moveItemDown(i)}
                            variant={"outline"}
                          >
                            <ChevronDown className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={product.image_link}
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {product.ro_product_name}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {product.price}
                    </TableCell>
                    <TableCell className="hidden text-right md:table-cell">
                      {product.current_quantity}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">/</TableCell>
                    <TableCell className="hidden text-left md:table-cell">
                      {product.menu_quantity}
                    </TableCell>
                    <TableCell className="w-[12em]">
                      <div className="hidden gap-8 group-hover/row:flex">
                        <ClipboardX
                          onClick={() => handleMenuRemove(product.id)}
                          className="hover:cursor-pointer hover:text-blue-500"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
}

/* NEXTJS ROUTER.REFRESH() BUG?
I think router.refresh() won't function properly if your render doesn't depend directly on a server prop
I ran into this issue when I was passing props to a client component from a server component, then setting it to a useState variable to use in the client component, clientItems.map(...) wasn't working with router.refresh(), but using serverComponentProps made it so router.refresh() triggers the changes properly. Thankfully before getting to having issues, I was using serverComponentProps directly and it was working properly, the diff between the changes led me to believe this is the cause.

For example
'use client';
export function ClientComponent({serverComponentProps}:{serverComponentProps:number[]})
const  [items, setItems] = useState(serverComponentProps)

// router.refresh() won't work here
items.map(i=><h1>{i}</h1>)

// if serverComponentProps changed then router.refresh() works here
serverComponentProps.map(i=><h1>{i}</h1>)

Yes, so router.refresh() just triggers a rerender of the server component, if the way you fetch data doesn't change the serverComponent when you call router.refresh() then the component won't change it seems. Basically you have to write changes to DB (in my case at least) before calling router.refresh() then it will work. (fully SSR and UI updates fully latency dependent, lol literally liveware with zero benefits of using Nextjs since we can't mix the two, at least not how I was doing it)

---- This doesn't actually work
Now the problem is we can't use useEffect, to get around this
Set it as normal
const  [items, setItems] = useState(serverComponentProps)
Now update the serverComponentProps on every items change
React.useEffect(() => {
  serverComponentProps = [...items]
}, [items])
And finally make it so your component triggers a rerender on serverComponentProps change

 */
