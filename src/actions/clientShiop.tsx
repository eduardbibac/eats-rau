// 'use client';
// import { useMutation } from "@tanstack/react-query";
// import { getShopProducts } from "./getShopProducts";

// const { data, mutate: server_getProducts, isPending} = useMutation({
//   mutationFn: getShopProducts,
// })

// if (isPending) {
//   return <span>Loading...</span>
// }

// if (isError) {
//   return <span>Error: {error.message}</span>
// }
// export default function testingactions() {
// return(
//   <button onClick={() => server_getProducts()}>
//     Click
//   </button>
// );
// }