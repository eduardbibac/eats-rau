'use server';

export default async function sendOrder (dineIn:string, payment_method:string, product_ids: string[]) {
  console.log(dineIn + payment_method + product_ids);

  if(dineIn === 'pickup' || dineIn === 'dine_in') {
    if(payment_method === 'cash' || payment_method === 'card'){
      if(product_ids.length <= 0) return;
      console.log('success')
    }
  }
  

}