'use client';

import * as React from "react"
import { ClipboardX } from "lucide-react"
import { debounce } from "lodash"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Switch } from "@/components/ui/switch"
import { updateMenuActiveState } from "@/actions/Dashboard/updateMenuActiveState"
import { cn } from "@/lib/utils"
import { DashboardProduct } from "@/types/ShopTypes";
import Image from "next/image"
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { removeItemFromMenu } from "@/actions/Dashboard/removeItemFromMenu"
import DeleteMenu from "./DeleteMenu"
import { Input } from "@/components/ui/input"
import { updateMenuListPositions } from "@/actions/Dashboard/updateMenuListPositions"
import { useRouter } from "next/navigation"
export default function MenuColapseTable(
  { initialPorducts, label, active, menu_id }:
    { initialPorducts: DashboardProduct[], label: string, active?: (any | undefined), menu_id: number }) {

  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false)
  const [isActiveMenu, setIsActiveMenu] = React.useState<boolean>(active !== undefined ? active : true);
  const [products, setProducts] = React.useState<DashboardProduct[]>(initialPorducts)
  const [inputValues, setInputValues] = React.useState<number[]>([]);
  React.useEffect(() => {
    updateMenuActiveState(menu_id, isActiveMenu)
      .then()
  }, [isActiveMenu])

  async function handleMenuRemove(product_id: number) {
    await removeItemFromMenu(product_id, menu_id)
    router.refresh()
  }

  function moveItemUp(index: number) {
    if (index === 0) return; // Can't move the first item up
    let newItems = [...products];
    [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
    setProducts(newItems);
    debouncedUpdate(newItems)
  }

  function moveItemDown(index: number) {
    if (index === products.length - 1) return; // Can't move the last item down
    const newItems = [...products];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    setProducts(newItems);
    debouncedUpdate(newItems)
  };

  function handleInputChange(e: any, index: number) {
    const newInputs = [...inputValues]

    newInputs[index] = e.target.value;
  }

  const debouncedUpdate = debounce((items: DashboardProduct[]) => {
    const newListPositions = items.map((p, i) => [p.id, i + 1])
    updateMenuListPositions(menu_id, newListPositions)
  }, 1500)

  // const isMounted = React.useRef(false);
  // React.useEffect(() => {
  //   if (!isMounted.current) {
  //     isMounted.current = true;
  //     return;
  //   }
  //   debouncedUpdate()
  // }, [products])

  React.useEffect(() => {
    const newInputs = products.map((_, i) => i + 1);
    setInputValues(newInputs);
  }, [])


  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="bg-white sticky top-0 flex flex-col justify-center">
        {active !== undefined ? <Switch checked={isActiveMenu} onCheckedChange={setIsActiveMenu} className='ml-2 absolute' id="active-menu" /> : null}

        <DeleteMenu menu_id={menu_id} />


        <CollapsibleTrigger className="pl-14" asChild>
          <button type="button" className={cn(
            { 'text-black focus:ring-orange-200 border-orange-300 hover:bg-orange-50': isActiveMenu },
            { 'text-gray focus:ring-gray-200 border-gray-300 hover:bg-gray-100': !isActiveMenu },
            "flex items-center justify-between w-full p-5 font-medium rtl:text-right  border  rounded-xl focus:ring-4    gap-3")} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>{label}</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className={cn({ "opacity-55": !isActiveMenu }, "space-y-2")}>
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead />
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Imagine</span>
                  </TableHead>
                  <TableHead>Nume</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Preț
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-right w-fit">
                    Disponibil acum
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    /
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-left">
                    Porții în fiecare zi
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, i) =>
                (
                  <TableRow key={product.id} className="group/row">
                    <TableCell>
                      <div className="flex gap-3 items-center">
                        <Input value={inputValues[i]} onChange={(e) => handleInputChange(e, i)} className="w-10 text-center" />
                        <div className="h-full flex flex-col gap-1">
                          <Button onClick={() => moveItemUp(i)} variant={'outline'}>
                            <ChevronUp className="" />
                          </Button>
                          <Button onClick={() => moveItemDown(i)} variant={'outline'}>
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
                    <TableCell className="hidden md:table-cell text-right">
                      {product.current_quantity}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      /
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-left">
                      {product.menu_quantity}
                    </TableCell>
                    <TableCell className="w-[12em]">
                      <div className="hidden group-hover/row:flex gap-8">
                        <ClipboardX onClick={() => handleMenuRemove(product.id)} className="hover:text-blue-500 hover:cursor-pointer" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </CollapsibleContent >
    </Collapsible >
  )
}

