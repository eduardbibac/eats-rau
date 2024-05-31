'use client';

import { Order } from "@/types/dbTypes";
import { useEffect, useState } from "react";

export default function OrderPage()  {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const eventSource = new EventSource('/api/orders');
    
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
      {orders.map((order,i) => <h1 key={i}>{`${order.id}: ${order.order_type} ${order.user_id}`}</h1>)}
    </>
  );
}
