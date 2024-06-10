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

export default function AllProductsTable({ items }: { items: DashboardProduct[] }) {
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Adaugă Produs Nou
            </span>
          </Button>
        </div>
      </div>
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
                    <TableCell className="w-[100px]">
                      <div className="hidden group-hover/row:flex gap-8">
                        <Pencil className="hover:text-blue-500 hover:cursor-pointer" />
                        <Trash2 className="hover:text-red-500 hover:cursor-pointer" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}