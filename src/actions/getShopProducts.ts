'use server';

import { Product } from "@/types/ShopTypes";

export async function getShopProducts () {
  const images = [
    'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9',
    'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
  ] as const
  
  const productDB: Product[] = [
    { id: 1, name: 'Paste Sauce', price: 24.99, category:'breakfast', image: images[0] },
    { id: 2, name: 'Pesto Tagli', price: 34.99, category:'drinks', image: images[1]},
    { id: 3, name: 'Icecream', price: 5.99, category:'lunch', image: images[2]},
    { id: 4, name: 'Pizza', price: 34.49, category:'lunch', image: images[3]},
    { id: 5, name: 'Pizza', price: 34.49, category:'lunch', image:images[1]},
    { id: 6, name: 'Pizza', price: 34.49, category:'lunch', image:images[2]},
    { id: 7, name: 'Pizza', price: 34.49, category:'lunch', image:images[3]},
    { id: 8, name: 'Pizza', price: 34.49, category:'lunch', image:images[3]},
    { id: 9, name: 'Pizza', price: 34.49, category:'lunch', image:images[0]},
    { id: 10, name: 'Pizza', price: 34.49, category:'desert', image:images[1]},
    
  ];
  
  // TODO:
  await new Promise(r => setTimeout(r, 500));
  return productDB;
}