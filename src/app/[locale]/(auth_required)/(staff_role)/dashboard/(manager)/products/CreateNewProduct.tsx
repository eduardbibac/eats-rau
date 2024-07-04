"use client";

import { addProductsToMenu } from "@/actions/Dashboard/addProductsToMenu";
import { createNewMenu } from "@/actions/Dashboard/createNewMenu";
import { createNewProduct } from "@/actions/Dashboard/createNewProduct";
import ShopCard from "@/components/ShopCard";
import { RomaniaSVG } from "@/components/svg/RO";
import { UnitedStatesSVG } from "@/components/svg/USA";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DashboardProduct, Product } from "@/types/ShopTypes";
import { CirclePlus } from "lucide-react";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const defaultProduct: DashboardProduct = {
  ro_product_name: "Nume Produs",
  ro_categories: [],
  en_product_name: "Product Name",
  en_categories: [],
  price: 99.99,
  image_link: "/images/placeholder.png",

  id: 9999,
  menu_quantity: 0,
  current_quantity: 0,
  list_position: 0,
};

export default function CreateNewProduct() {
  const [dialog, setDialog] = useState(false);
  const [product, setProduct] = useState<DashboardProduct>(defaultProduct);
  const [image, setImage] = useState<File>();
  const router = useRouter();

  async function addProduct() {
    await createNewProduct(product);
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
      .then((response) => response.json())
      .then((data) => {
        if (data.image_link)
          setProduct((prev) => ({ ...prev, image_link: data.image_link }));
      })
      .catch((error) => console.error(error));

    // setDialog(false)
  }

  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogTrigger asChild>
        <Button size="sm" className="">
          <CirclePlus className="mr-1 h-3.5 w-3.5" />
          Adaugă Produs Nou
        </Button>
      </DialogTrigger>

      <DialogContent className="mb-6 flex max-h-[95vh] min-w-[400px] flex-col overflow-y-scroll p-8 lg:min-w-[1000px]">
        <DialogTitle>Adaugă un Produs Nou</DialogTitle>
        <DialogDescription>
          Introduceți informații pentru produs
        </DialogDescription>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div className="flex gap-2">
              <RomaniaSVG className="w-6" />
              <Label className="mt-3" htmlFor="ro_name">
                Nume Produs Română
              </Label>
            </div>

            <Input
              onChange={(e) =>
                setProduct((prevProduct) => ({
                  ...prevProduct,
                  ro_product_name: e.target.value,
                }))
              }
              id="ro_name"
              type="text"
              placeholder="Nume Produs"
              className="min-h-[40px]"
            />
          </div>
          <div>
            <div className="flex gap-2">
              <UnitedStatesSVG className="w-6" />
              <Label className="mt-3" htmlFor="en_name">
                Nume Produs Engleză{" "}
              </Label>
            </div>
            <Input
              onChange={(e) =>
                setProduct((prevProduct) => ({
                  ...prevProduct,
                  en_product_name: e.target.value,
                }))
              }
              id="en_name"
              type="text"
              placeholder="Nume Produs"
              className="min-h-[40px]"
            />
          </div>
        </div>

        <Label className="mt-3" htmlFor="price">
          Preț RON
        </Label>
        <Input
          className="min-h-[40px]"
          id="price"
          type="text"
          placeholder="Preț"
          onChange={(e) =>
            setProduct((prevProduct) => ({
              ...prevProduct,
              price: parseFloat(e.target.value),
            }))
          }
        />

        <Label className="mt-3" htmlFor="categories">
          Categorii
        </Label>
        <Input
          className="min-h-[40px]"
          id="categories"
          type="text"
          placeholder="Categorii"
        />

        <Label className="mt-3" htmlFor="picture">
          Poză
        </Label>
        <Input
          className="min-h-[40px]"
          id="picture"
          type="file"
          onChange={(e) => uploadImage(e)}
        />

        <Button
          disabled={
            !(
              product.ro_product_name.length > 3 &&
              product.ro_product_name != defaultProduct.ro_product_name &&
              product.en_product_name.length > 3 &&
              product.en_product_name != defaultProduct.en_product_name &&
              product.price > 0 &&
              product.image_link.length > 0 &&
              product.image_link != defaultProduct.image_link
            )
          }
          onClick={addProduct}
          className="ml-auto w-fit"
        >
          Creează
        </Button>

        <div className="grid sm:flex">
          <div className="mt-4 flex h-full w-full flex-col self-center rounded-xl bg-slate-50 p-12">
            <div className="w-[250px] self-center">
              <ShopCard
                disabled={true}
                product={{
                  name: product.ro_product_name
                    ? product.ro_product_name
                    : defaultProduct.ro_product_name,
                  image: product.image_link
                    ? product.image_link
                    : defaultProduct.image_link,
                  price: product.price ? product.price : defaultProduct.price,

                  categories: product.ro_categories,
                  id: product.id,
                  list_position: 0,
                  quantity: 1,
                }}
              />
            </div>
            <div className="mt-4 flex gap-2 self-center">
              <RomaniaSVG className="w-6" />
              <Label className="self-center" htmlFor="card">
                Previzualizare Produs
              </Label>
            </div>
          </div>
          <div className="mt-4 flex h-full w-full flex-col self-center rounded-xl bg-slate-50 p-12">
            <div className="w-[250px] self-center">
              <ShopCard
                disabled={true}
                product={{
                  name: product.en_product_name
                    ? product.en_product_name
                    : defaultProduct.en_product_name,
                  image: product.image_link
                    ? product.image_link
                    : defaultProduct.image_link,
                  price: product.price ? product.price : defaultProduct.price,

                  categories: product.ro_categories,
                  id: product.id,
                  list_position: 0,
                  quantity: 1,
                }}
              />
            </div>
            <div className="mt-4 flex gap-2 self-center">
              <UnitedStatesSVG className="w-6" />
              <Label className="self-center" htmlFor="card">
                Previzualizare Produs
              </Label>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
