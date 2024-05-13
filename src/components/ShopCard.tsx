"use client";

import "@/styles/shop-card.css";
import { useState } from "react";

const mockdata = {
  image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: 'Pasta Sauce',
  price: 24.99,
};

interface ShopCardProps {
  image?: string
}

export default function ShopCard(props: ShopCardProps) {
  const { image = mockdata.image } = props;
  const { name, price } = mockdata;
  const [count, setCount] = useState(0);

return (
    <article className="shop-card max-w-lg rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <img className="object-cover aspect-[4/3]" src={image} alt="Hotel Photo" />
      </div>

      <div className="text-section mt-1 p-2">
        <h2 className="text-slate-700 font-semibold">{name}</h2>
        {/* <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p> */}

<div className="bot-section mt-3 flex items-end justify-between">
  <span className="split-text">
    <p className="text-lg font-bold text-black-500 leading-tight">RON</p>
    <p className="text-lg font-bold text-black-500 leading-tight">{price}</p>
  </span>

  <div className="w-full max-w-28">
  {count === 0 ? (
    <button onClick={() => setCount(count+1)} className="w-full flex justify-center items-center space-x-1.5 outline-none mr-1 mb-1 border border-solid border-red-500 rounded-full lg:px-4 md:px-2 sm:px-2 py-2 bg-transparent text-xs text-orange-500 font-bold uppercase focus:outline-none active:bg-orange-600 hover:bg-orange-600 hover:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      <p className="text-sm">Adauga</p>
    </button>
  ) : (
    <div className="w-full flex justify-center">
      <div className="relative flex items-center w-full">
        <button onClick={() => setCount(count-1)} type="button" className="w-1/3 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
          <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M1 1h16"/>
          </svg>
        </button>
        <input value={count} type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="w-1/3 bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required/>
        <button onClick={() => setCount(count+1)} type="button" className="w-1/3 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
          <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
          </svg>
        </button>
      </div>
    </div>
  )}
</div>
</div>
</div>
  </article>
);  
}

// outline-none mr-1 mb-1 border border-solid border-red-500 rounded-full px-4 py-2 bg-transparent text-xs text-red-500 font-bold uppercase focus:outline-none active:bg-red-600 hover:bg-red-600 hover:text-white