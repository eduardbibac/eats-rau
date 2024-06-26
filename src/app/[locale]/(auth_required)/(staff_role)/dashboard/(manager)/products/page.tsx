import { getAllProducts } from "@/actions/Dashboard/getAllProducts";
import DashNav from "../../DashNav";
import { DashboardProduct } from "@/types/ShopTypes";
import { AllProductsColapseTable } from "./AllProductsColapseTable";
import { getMenus } from "@/actions/Dashboard/getMenus";
import { getMenuProducts } from "@/actions/Dashboard/getMenuProducts";

import CreateMenu from "./CreateMenu";
import MenuColapseTable from "./MenuColapseTable";

export default async function DashboardPorducts() {
  const products = await getAllProducts();
  const menus = await getMenus();
  const menus_with_products = await Promise.all(
    menus!.map(async (menu) => {
      const products = await getMenuProducts(menu.id);
      return { ...menu, products };
    }),
  );

  if (!products) return <h1>Erorr..</h1>;
  return (
    <>
      <DashNav />
      <div className="container">
        <h1 className="m-4 text-balance text-center">
          Adăugați sau eliminați produse. Setați elementele și cantitățile din
          meniu. Creați meniuri noi. Organizați cu ușurință ordinea elementelor
          din meniu pentru a vă evidenția cele mai bune preparate.
        </h1>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              <AllProductsColapseTable
                items={products}
                label={"Toate Produsele"}
                menus={menus}
              />

              {menus_with_products?.map((menu) => (
                <MenuColapseTable
                  products={menu.products as DashboardProduct[]}
                  key={menu.menu_name}
                  label={menu.menu_name}
                  active={menu.is_active}
                  menu_id={menu.id}
                />
              ))}

              <CreateMenu />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
