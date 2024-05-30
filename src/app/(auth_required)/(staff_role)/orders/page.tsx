'use client';

import { useEffect, useState } from "react";

export default function OrderPage()  {
  const [orders, setOrders] = useState<Order[]>([]);
  const eventSource = new EventSource('/dashboard/orders');

  useEffect(() => {
    // Initiate the first call to connect to SSE API
    
    eventSource.addEventListener('message', (event) => {
      // Parse the data received from the stream into JSON
      const newOrders: Order[] = JSON.parse(event.data);
      // Update the list of orders
      setOrders([...orders, ...newOrders]);
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
      {/* {orders.map((order,i) => <h1 key={i}>{order.id}</h1>)} */}
    </>
  );
}
