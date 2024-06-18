'use client';

import { addProductsToMenu } from "@/actions/Dashboard/addProductsToMenu";
import { createNewMenu } from "@/actions/Dashboard/createNewMenu";
import { createNewProduct } from "@/actions/Dashboard/createNewProduct";
import { updateProduct } from "@/actions/Dashboard/updateProduct";
import ShopCard from "@/components/ShopCard";
import { RomaniaSVG } from "@/components/svg/RO";
import { UnitedStatesSVG } from "@/components/svg/USA";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { DashboardProduct, Product } from "@/types/ShopTypes";
import { CirclePlus, Pencil } from "lucide-react";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function UpdateProduct({ initialProduct }: { initialProduct: DashboardProduct }) {
  const [dialog, setDialog] = useState(false)
  const [product, setProduct] = useState<DashboardProduct>(initialProduct)
  const [image, setImage] = useState<File>();
  const router = useRouter();

  async function update() {

    await updateProduct(product)
    setDialog(false);
    router.refresh();
  }

  function uploadImage(e: any) {
    const { files } = e.target;
    if (!files) return;

    const formData = new FormData();
    formData.append("file", files[0]);
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.image_link)
          setProduct((prev) => ({ ...prev, image_link: data.image_link }))
      })
      .catch(error => console.error(error));


    // setDialog(false)
  }

  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogTrigger asChild>
        <Pencil className="hover:text-blue-500 hover:cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="mb-6 flex flex-col min-w-[1000px] p-8">
        <DialogTitle>
          Adaugă un Produs Nou
        </DialogTitle>
        <DialogDescription>
          Introduceți informații pentru produs
        </DialogDescription>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex gap-2">
              <RomaniaSVG className="w-6" />
              <Label className="mt-3" htmlFor="ro_name">Nume Produs Română</Label>
            </div>

            <Input defaultValue={initialProduct.ro_product_name} onChange={(e) => setProduct(prevProduct => ({ ...prevProduct, ro_product_name: e.target.value }))} id="ro_name" type="text" placeholder="Nume Produs" />
          </div>
          <div>
            <div className="flex gap-2">
              <UnitedStatesSVG className="w-6" />
              <Label className="mt-3" htmlFor="en_name">Nume Produs Engleză </Label>
            </div>
            <Input defaultValue={initialProduct.en_product_name} onChange={(e) => setProduct(prevProduct => ({ ...prevProduct, en_product_name: e.target.value }))} id="en_name" type="text" placeholder="Nume Produs" />
          </div>
        </div>

        <Label className="mt-3" htmlFor="price">Preț RON</Label>
        <Input defaultValue={initialProduct.price} id="price" type="text" placeholder="Preț"
          onChange={(e) => setProduct(prevProduct => ({ ...prevProduct, price: parseFloat(e.target.value) }))} />

        <Label className="mt-3" htmlFor="categories">Categorii</Label>
        <Input id="categories" type="text" placeholder="Categorii" />

        <Label className="mt-3" htmlFor="picture">Poză</Label>
        <Input id="picture" type="file"
          onChange={(e) => uploadImage(e)} />


        <Button disabled={
          !((product.ro_product_name.length > 3 && product.ro_product_name != initialProduct.ro_product_name)
            || (product.en_product_name.length > 3 && product.en_product_name != initialProduct.en_product_name)
            || (product.price > 0 && product.price != initialProduct.price)
            || (product.image_link.length > 0 && product.image_link != initialProduct.image_link)
          )}
          onClick={update} className="w-fit ml-auto ">Actualizează</Button>

        <div className="flex">
          <div className=" flex flex-col self-center mt-4 w-full h-full bg-slate-50 p-12 rounded-xl">
            <div className="self-center w-[300px]">
              <ShopCard disabled={true} product={
                {
                  name: product.ro_product_name,
                  image: product.image_link,
                  price: product.price,

                  categories: product.ro_categories,
                  id: product.id,
                  list_position: 0,
                  quantity: 0
                }
              } />
            </div>
            <div className="flex self-center mt-4 gap-2">
              <RomaniaSVG className="w-6" />
              <Label className="self-center" htmlFor="card">Previzualizare Produs</Label>
            </div>
          </div>
          <div className=" flex flex-col self-center mt-4 w-full h-full bg-slate-50 p-12 rounded-xl">
            <div className="self-center w-[300px]">
              <ShopCard disabled={true} product={
                {
                  name: product.en_product_name,
                  image: product.image_link,
                  price: product.price,

                  categories: product.ro_categories,
                  id: product.id,
                  list_position: 0,
                  quantity: 0
                }
              } />
            </div>
            <div className="flex self-center mt-4 gap-2">
              <UnitedStatesSVG className="w-6" />
              <Label className="self-center" htmlFor="card">Previzualizare Produs</Label>
            </div>
          </div>
        </div>

      </DialogContent>
    </Dialog >
  )
}

