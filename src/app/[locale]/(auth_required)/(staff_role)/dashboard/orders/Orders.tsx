"use client";

import { Order } from "@/types/dbTypes";
import { useEffect, useState } from "react";
import { MobileLayout } from "./MobileLayout";
import CardOrder from "./CardOrder";

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/orders");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const eventSource = new EventSource("/api/orders/updates");
    eventSource.addEventListener("message", (event) => {
      let newOrders: Order[] = JSON.parse(event.data);
      if (!Array.isArray(newOrders)) {
        newOrders = [newOrders];
      }
      setOrders((p) => [...p, ...newOrders]);
    });

    eventSource.addEventListener("error", () => {
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
      <MobileLayout className="md:hidden" orders={orders} />
      <div className="hidden h-full max-h-full grid-cols-[1fr_1fr_100px] overflow-hidden bg-blue-100 md:grid">
        <div className="m-5 overflow-y-scroll">
          <span className="w-full rounded-xl bg-white">
            <h1 className="fixed">Incoming</h1>
          </span>
          <div className="grid gap-12 rounded-xl bg-white p-5 md:grid-cols-1 lg:grid-cols-2">
            {orders.map((order, i) => (
              <div key={order.id} className="h-12">
                <CardOrder />
                {/* <h1>
                  {`Order: ${order.id} | ${order.order_type} 
          ${Date.parse(order.is_scheduled_at) < Date.now() ? "NOW" : `Scheduled_AT: ${order.is_scheduled_at}`} | user: ${order.user_id}`}
                </h1> */}
              </div>
            ))}
          </div>
        </div>
        <div className="m-5 overflow-y-scroll">
          <span className="w-full rounded-xl bg-white">
            <h1 className="fixed">Ready for Pickup</h1>
          </span>
          <div className="grid gap-12 rounded-xl bg-white p-5 md:grid-cols-1 lg:grid-cols-2">
            {orders.map((order, i) => (
              <div key={order.id} className="h-12">
                <h1>
                  {`Order: ${order.id} | ${order.order_type} 
          ${Date.parse(order.is_scheduled_at) < Date.now() ? "NOW" : `Scheduled_AT: ${order.is_scheduled_at}`}\n user: ${order.user_id}`}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-rows-[3fr_1fr]">
          <h1
            style={{ writingMode: "vertical-lr" }}
            className="rotate-180 bg-green-300 text-center direction-reverse"
          >
            Completed
          </h1>
          <h1
            style={{ writingMode: "vertical-lr" }}
            className="rotate-180 bg-red-100 text-center"
          >
            Canceled
          </h1>
        </div>
      </div>
    </>
  );
}
