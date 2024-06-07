import { getAllProducts } from "@/actions/Dashboard/getAllProducts";
import DashNav from "../../DashNav";
import DashboardProducts from "./DashboardProducts";
import { DashboardProduct } from "@/types/ShopTypes";

export default async function DashboardPorducts() {

  const products = await getAllProducts();
  if (!products) return <h1>Erorr..</h1>
  return (
    <>
      <DashNav />
      <div className="container">
        <h1>Add or Remove Products. Set Menu Items and Quantities. Organize with Drag-and-Drop: Easily arrange the order of menu items to highlight your best dishes.
        </h1>

        <DashboardProducts products={products} />

      </div>
    </>

  )
}