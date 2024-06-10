"use client"

import * as React from "react"
import { Check, ChevronsUpDown, CirclePlus, ClipboardPlus, Plus, X } from "lucide-react"
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
import { useContext, useState } from "react";
import { validateAuth } from "@/actions/validateAuth";
import sendOrder from "@/actions/(auth_required)/sendOrder";
import { CartContext } from "@/providers/CartContextProvider";
import { CartItem, Product } from "@/types/ShopTypes";
import { useTranslations } from "next-intl";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { updateMenuActiveState } from "@/actions/Dashboard/updateMenuActiveState"
import { cn } from "@/lib/utils"
import { DashboardProduct } from "@/types/ShopTypes";
import Image from "next/image"
import {
  ChevronDown,
  ChevronUp,
  File,
  MoreHorizontal,
  Pencil,
  PlusCircle,
  Trash2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { addProductsToMenu } from "@/actions/Dashboard/addProductsToMenu";
import { useRouter } from "next/navigation";

export function AllProductsColapseTable(
  { items, label, active, menus }:
    { items: DashboardProduct[], label: string, active?: (any | undefined), menus: any }) {


  const [isOpen, setIsOpen] = React.useState(false)
  const [isActiveMenu, setIsActiveMenu] = React.useState<boolean>(active !== undefined ? active : true);
  const [checkedItems, setCheckedItems] = React.useState<number[]>([]);
  const [selectedMenu, setSelectedMenu] = React.useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const router = useRouter();
  const handleCheckboxChange = (event: any, product_id: number) => {
    const { checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, product_id]);
    } else {
      setCheckedItems(checkedItems.filter(item => item !== product_id));
    }
  };

  React.useEffect(() => {
    setCheckedItems([])
  }, [isOpen])

  async function add() {
    if (!selectedMenu) return
    await addProductsToMenu(checkedItems, selectedMenu)
    setIsDialogOpen(false);
    router.refresh()
  }

  return (

    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
    >

      <div className="relative flex flex-col justify-center">
        {active !== undefined ? <Switch checked={isActiveMenu} onCheckedChange={setIsActiveMenu} className='ml-2 absolute' id="active-menu" /> : null}
        <div className="absolute flex gap-4 self-end mr-12">
          {checkedItems.length > 0 ? (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" disabled={!isActiveMenu} className="">
                  <CirclePlus className="h-3.5 w-3.5 mr-1" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Selectează Produse pentru Meniu
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="mb-6 grid-rows-[80%_20%] w-full sm:min-h-[400px] sm:max-w-[625px]">
                <ul className="overflow-y-scroll h-full mt-8 grid w-full gap-6">
                  {menus.map((menu: any) => (
                    <li>
                      <input
                        type="radio"
                        onChange={(e) => setSelectedMenu(menu.id)}
                        id={menu.id}
                        name={menu.id}
                        value={menu.id}
                        className="peer hidden"
                        required
                      />
                      <Label
                        htmlFor={menu.id}
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-orange-600 peer-checked:text-orange-600 "
                      >
                        <div className="w-full text-lg font-semibold">{menu.menu_name}</div>
                        <div className="w-full">

                        </div>
                      </Label>
                    </li>
                  ))}
                </ul>
                <Button disabled={!selectedMenu ? true : false} onClick={add} className="h-fit self-end"> Adaugă</Button>
              </DialogContent>

            </Dialog>
          ) : null}
          <Button size="sm" disabled={!isActiveMenu} className="">
            <CirclePlus className="h-3.5 w-3.5 mr-1" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Adaugă Produs Nou
            </span>
          </Button>
        </div>

        <CollapsibleTrigger className="pl-14" asChild>
          <button type="button" className={cn(
            { 'text-black focus:ring-orange-200 border-orange-300 hover:bg-orange-50': isActiveMenu },
            { 'text-gray focus:ring-gray-200 border-gray-300 hover:bg-gray-100': !isActiveMenu },
            "flex items-center justify-between w-full p-5 font-medium rtl:text-right  border  rounded-xl focus:ring-4    gap-3")} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>{label}</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className=" w-[50px]" />
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Nume</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Preț
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map(product => (
                  <TableRow className="group/row" onClick={() => ''}>
                    <TableCell className="w-[50px]">
                      <input className={cn(
                        "flex items-center justify-center text-current peer h-5 w-5 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
                      )} type="checkbox" onChange={(e) => handleCheckboxChange(e, product.id)} />
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
                    <TableCell className="w-[100px]">
                      <div className="hidden group-hover/row:flex gap-8">
                        <Pencil className="hover:text-blue-500 hover:cursor-pointer" />
                        <Trash2 className="hover:text-red-500 hover:cursor-pointer" />
                      </div>
                    </TableCell>
                  </TableRow >
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </CollapsibleContent >
    </Collapsible >
  )
}
