'use client';

import { Order } from "@/types/dbTypes";
import { useEffect, useState } from "react";

export default function Orders()  {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/orders');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  
  useEffect(() => {
    const eventSource = new EventSource('/api/orders/updates');
    eventSource.addEventListener('message', (event) => {
      let newOrders: Order[] = JSON.parse(event.data);
      if (!Array.isArray(newOrders)) { newOrders = [newOrders]; }
      setOrders((p) => [...p, ...newOrders])
    });

    eventSource.addEventListener('error', () => {
      eventSource.close();
      // Optionally, implement retry logic or inform the user here
    });

    // As the component unmounts, close listener to SSE API
    return () => {
      eventSource.close();
    };
  }, []);

return (
<>
{/* <h1>All orders</h1> */}
<div className="grid grid-cols-[1fr_1fr_100px] bg-blue-100 h-full max-h-full overflow-hidden">

  <div className="overflow-y-scroll m-5">
  <span className="bg-white w-full rounded-xl"><h1 className="fixed ">Incoming</h1></span>
    <div className="bg-white p-5 rounded-xl gap-12 grid md:grid-cols-1 lg:grid-cols-2">
    {orders.map((order, i) => (
      <div key={order.id} className="h-12 ">
        <h1>
          {`Order: ${order.id} | ${order.order_type} 
          ${Date.parse(order.is_scheduled_at) < Date.now() ? 'NOW' : `Scheduled_AT: ${order.is_scheduled_at}`} | user: ${order.user_id}`}
        </h1>
      </div>
    ))}
    </div>
  </div>
  <div className="overflow-y-scroll m-5">
    <span className="bg-white w-full rounded-xl"><h1 className="fixed ">Ready for Pickup</h1></span>
    <div className="bg-white p-5 rounded-xl gap-12 grid md:grid-cols-1 lg:grid-cols-2">
    {orders.map((order, i) => (
      <div key={order.id} className="h-12">
        <h1>
          {`Order: ${order.id} | ${order.order_type} 
          ${Date.parse(order.is_scheduled_at) < Date.now() ? 'NOW' : `Scheduled_AT: ${order.is_scheduled_at}`}\n user: ${order.user_id}`}
        </h1>
      </div>
    ))}
    </div>
  </div>


  <div className="grid grid-rows-[3fr_1fr]">
      <h1 style={{ writingMode: 'vertical-lr' }} className="rotate-180 text-center direction-reverse bg-green-300">Completed</h1>
      <h1 style={{ writingMode: 'vertical-lr' }}  className="rotate-180 text-center bg-red-100">Canceled</h1>
  </div>
</div>


</>
)}
{/* <div className="h-[100dvh] bg-[#ebebe9]">
  <div className="grid grid-cols-[1fr_1fr_100px] h-full">
    <div className="overflow-scroll">
      <h1 className="ml-24">Incoming</h1>
      <div className="grid grid-cols-2">
        {orders.map((order, i) => (
          <div className="h-12">
            <h1 key={i}>
              {`Order: ${order.id} | ${order.order_type} 
              ${Date.parse(order.is_scheduled_at) < Date.now() ? 'NOW' : `Scheduled_AT: ${order.is_scheduled_at}`} | user: ${order.user_id}`}
            </h1>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h1>Ready for Pickup</h1>
      <div className="grid grid-cols-2">
        <h1>Order</h1>
      </div>
    </div>

    <div className="grid grid-rows-[1fr_1fr]">
      <h1 className="bg-green-300">Completed</h1>
      <h1 className="bg-red-100">Canceled</h1>
    </div>
  </div>
</div> */}