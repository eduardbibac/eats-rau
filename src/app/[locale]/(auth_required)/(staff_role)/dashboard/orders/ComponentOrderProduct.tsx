import { DashboardProduct, Product } from "@/types/ShopTypes";
import { OrderProduct } from "@/types/dbTypes";
import Image from "next/image";

export default function ComponentOrderProduct({
  product,
}: {
  product: OrderProduct;
}) {
  return (
    <div className="py-2">
      <div className="flex flex-wrap gap-2 sm:py-2.5 lg:gap-4">
        <div className="sm:-my-2.5">
          <div className="h-42 group relative block w-24 overflow-hidden rounded-lg sm:h-full sm:w-40">
            <Image
              alt="Product image"
              className="aspect-square rounded-md object-cover"
              height="125"
              width="125"
              src={product.image_link}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
              {product.ro_product_name}
            </p>
          </div>

          <div>
            <span className="mb-1 block font-bold text-gray-800 md:text-lg">
              RON {product.price}
            </span>

            {/* <span className="flex items-center gap-1 text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              In stock
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
