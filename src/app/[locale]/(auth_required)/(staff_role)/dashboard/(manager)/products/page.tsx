import { getAllProducts } from "@/actions/Dashboard/getAllProducts";
import DashNav from "../../DashNav";
import DashboardProducts from "./DashboardProducts";
import { DashboardProduct } from "@/types/ShopTypes";
import Image from "next/image"
import Link from "next/link"
import {
  ChevronDown,
  ChevronUp,
  File,
  ListIcon,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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
import { ColapseTable } from "./ColapseTable";
import ListItem from "./MenuTable";
import MenuTable from "./MenuTable";
import { getMenus } from "@/actions/Dashboard/getMenus";
import { getMenuProducts } from "@/actions/Dashboard/getMenuProducts";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";


export default async function DashboardPorducts() {

  const products = await getAllProducts();
  const menus = await getMenus();
  const menus_with_products = await Promise.all(menus!.map(async (menu) => {
    const products = await getMenuProducts(menu.id)
    return { ...menu, products };
  }))


  if (!products) return <h1>Erorr..</h1>
  return (
    <>
      <DashNav />
      <div className="container">
        <h1 className="text-center text-balance m-4">
          Add or Remove Products. Set Menu Items and Quantities. Organize with Drag-and-Drop: Easily arrange the order of menu items to highlight your best dishes.
        </h1>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              <ColapseTable label={'Toate Produsele'} activeSwitch={false}>
                <MenuTable items={products} />
              </ColapseTable>

              {menus_with_products?.map(menu => (
                <ColapseTable key={menu.menu_name} label={menu.menu_name} activeSwitch={true}>

                  <MenuTable items={menu.products as DashboardProduct[]} />
                </ColapseTable>
              ))}

            </main>
          </div>
        </div>
      </div>
    </>
  )
}

