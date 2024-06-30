'use client';
import React, { useState, useEffect } from 'react';
import { getUserOrders } from '@/actions/(auth_required)/getUserOrders';
import { OrderHistoryEntry } from '@/types/dbTypes';
import OrderStepper from './OrderStepper';

function getStatusColor(status) {
  switch (status) {
    case 'pending':
      return 'orange';
    case 'in_progress':
      return 'blue';
    case 'ready_for_pickup':
      return 'purple';
    case 'completed':
      return 'green';
    case 'canceled':
      return 'red';
    default:
      return 'grey';
  }
}

export default function UserOrders() {
  const [orders, setOrders] = useState<OrderHistoryEntry[]>([]);
  const [activeOrder, setActiveOrder] = useState<OrderHistoryEntry | undefined>(undefined);
  const [isActive, setIsActive] = useState<Boolean[]>([]);

  useEffect(() => {
    getUserOrders().then(data => {
      const stuff = data as OrderHistoryEntry[];
      setOrders(stuff);
      setActiveOrder(stuff.find(order => order.order_status === 'in_progress'));
    });
  }, []);



  return (
    <div className='grid grid-cols-1 gap-4 w-[320px] sm:w-[600px]' >
      {orders.map((order, index) => (
        <>
          <button onClick={() => setIsActive(prev => [...prev.slice(0, index), !prev[index], ...prev.slice(index + 1)])} className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Order #{order.id} - {order.order_type.toUpperCase()}</h5>
            <p>{new Date(order.is_scheduled_at).toLocaleString()}</p>
            <p className="font-normal text-gray-700">Status: <span style={{ color: getStatusColor(order.order_status) }}>{order.order_status.toUpperCase()}</span></p>
            <p className="font-normal text-gray-700">Payment Method: {order.payment_method.toUpperCase()}</p>
            <p className="font-normal text-gray-700">Payment Status: {order.payment_status.toUpperCase()}</p>
            <p className="font-normal text-gray-700"></p>
          </button >
          <div className="flex justify-center">
            {isActive[index] ? (<OrderStepper order_id={order.id} />) : null}
          </div>
        </>
      ))
      }
    </div >
  );
}
