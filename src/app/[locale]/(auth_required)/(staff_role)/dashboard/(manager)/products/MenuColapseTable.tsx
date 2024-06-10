"use client"

import * as React from "react"
import { ChevronsUpDown, ClipboardPlus, ClipboardX, Plus, X } from "lucide-react"

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
import { removeItemFromMenu } from "@/actions/Dashboard/removeItemFromMenu"
import { useRouter } from "next/navigation"
export function MenuColapseTable(
  { items, label, active, menu_id, all_products }:
    { items: DashboardProduct[], label: string, all_products: DashboardProduct[], active?: (any | undefined), menu_id?: number }) {

  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false)
  const [isActiveMenu, setIsActiveMenu] = React.useState<boolean>(active !== undefined ? active : true);

  React.useEffect(() => {
    if (menu_id)
      updateMenuActiveState(menu_id, isActiveMenu)
        .then()
  }, [isActiveMenu])

  async function handleMenuRemove(product_id: number) {
    if (!menu_id) return;
    await removeItemFromMenu(product_id, menu_id)
    router.refresh()

  }

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="relative flex flex-col justify-center">
        {active !== undefined ? <Switch checked={isActiveMenu} onCheckedChange={setIsActiveMenu} className='ml-2 absolute' id="active-menu" /> : null}
        <Button size="sm" variant="destructive" className="absolute self-end mr-20 h-8 gap-1">
          <Trash2 className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Șterge Meniu
          </span>
        </Button>


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
      <CollapsibleContent className={cn({ "opacity-55": !isActiveMenu }, "space-y-2")}>
        <Tabs defaultValue="all">
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead />
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Price
                      </TableHead>
                      <TableHead className="hidden md:table-cell text-right w-fit">
                        Currently Available
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        /
                      </TableHead>
                      <TableHead className="hidden md:table-cell text-left">
                        Portions each day
                      </TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map(product => (
                      <TableRow className="group/row">
                        <TableCell>
                          <div className="h-full flex flex-col justify-between">
                            <ChevronUp className="h-4 w-4" />
                            <ChevronDown className="h-4 w-4" />
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
          </TabsContent>
        </Tabs>
      </CollapsibleContent>
    </Collapsible>
  )
}
