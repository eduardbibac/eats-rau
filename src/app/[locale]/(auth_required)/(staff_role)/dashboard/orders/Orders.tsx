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

      <h1>All orders</h1>
<div className="grid grid-cols-[minmax(900px,_1fr)_600px_200px]">
      <div>
        <h1 className="ml-24">Incoming</h1>
        <div className="grid grid-cols-2">
        
          {orders.map((order,i) => 
          <h1 key={i}>
            {`Order: ${order.id} | ${order.order_type} 
            ${Date.parse(order.is_scheduled_at) < Date.now() ? 'NOW': `Scheduled_AT: ${order.is_scheduled_at}`  } | user: ${order.user_id}`}
          </h1>
          )}
        </div>
      </div>
    

    <h1>Ready for Pickup</h1>
    <div className="sticky">
      <h1 className="bg-green-300 h-[50vh]">Completed</h1>
      <h1 className="bg-red-100 h-[50vh]">Canceled</h1>
    </div>

  </div>

    </>
  );
}
