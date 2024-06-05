"use client";

import { Order } from "@/types/dbTypes";
import { useEffect, useState } from "react";
import { MobileLayout } from "./MobileLayout";
import CardOrder from "./CardOrder";
import "./orders.css";

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
      <MobileLayout className="custom-mobile-orders-layout" orders={orders} />
      <div className="custom-desktop-orders-layout hidden gap-2 xl:gap-5 h-full max-h-full overflow-hidden gird grid-cols-[1fr_1fr_4em] xl:grid-cols-[2fr_1fr_4em] main-grid-3xl bg-white md:grid">
        <div className="overflow-y-scroll">
          <div className="h-8 w-full bg-white">
            <h1 className="fixed">Incoming</h1>
          </div>
          {/* grid-cols-[minmax(360px,_1fr)] lg:grid-cols-[repeat(2,_minmax(330px,_1fr))] */}

          <div className="grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] gap-4 rounded-xl bg-white p-5">
            {orders.map((order, i) => (
              <div key={order.id} className="">
                <CardOrder />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-y-scroll">
          <div className="h-8 w-full bg-white">
            <h1 className="fixed">Incoming</h1>
          </div>
          {/* 3xl:  1660*/}
          <div className="grid grid-cols-1 grid-3xl gap-4 rounded-xl bg-white p-5">
            {orders.map((order, i) => (
              <div key={order.id} className="">
                <CardOrder />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-rows-[3fr_1fr]">
          <h1
            style={{ writingMode: "vertical-lr" }}
            className="rotate-180  border-2 border-green-400 text-center direction-reverse"
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
