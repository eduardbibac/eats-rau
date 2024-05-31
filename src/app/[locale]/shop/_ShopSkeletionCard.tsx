export default function ShopSkeletonCard () {
  return (
    <div className=' relative animate-pulse bg-gray-200 max-w-lg rounded-xl p-3' >
      <div className='aspect-[4/3] w-full relative flex items-end overflow-hidden rounded-xl object-cover bg-gray-300 max-w-lg p-3'>
        <div className='h-fu11 w-full bg-gray-200' />
      </div>
        <div className='mt-4 flex flex-col gap-2 rounded-lg'/>
        <div className='bg-gray-300 h-4 w-full mb-2'/>
        <div className='flex items-center gap-10'>
          <div className='bg-gray-300 h-12 w-full rounded-sm'/>
          <div className='bg-gray-300 h-10 w-80 rounded-full'/>
        </div>
    </div>
  );
}


// import "@/styles/shop-card.css";

// export default function ShopSkeletonCard( ) {
// return (
//     <article className="animate-pulse shop-card max-w-lg rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
//       <div className="relative flex items-end overflow-hidden rounded-xl">
//         <div className="object-cover aspect-[4/3]"></div>
//       </div>

//       <div className="text-section mt-1 p-2">
//         <h2 className="text-slate-700 font-semibold"></h2>
//         {/* <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p> */}

// <div className="bot-section mt-3 flex items-end justify-between">
//   <span className="split-text">
//     <p className="text-lg font-bold text-black-500 leading-tight">RON</p>
//     <p className="text-lg font-bold text-black-500 leading-tight"></p>
//   </span>

//   <div className="w-full max-w-28">
//     <div className="w-full flex justify-center items-center space-x-1.5 outline-none mr-1 mb-1 border border-solid border-red-500 rounded-full lg:px-4 md:px-2 sm:px-2 py-2 bg-transparent text-xs text-orange-500 font-bold uppercase focus:outline-none active:bg-orange-600 hover:bg-orange-600 hover:text-white">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//       </svg>
//       <p className="text-sm">Adauga</p>
//     </div>

// </div>
// </div>
// </div>
//   </article>
// );  
// }
