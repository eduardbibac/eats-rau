'use client';

import { useEffect, useState } from "react";

export default function OrderPage()  {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
      // Initiate the first call to connect to SSE API
      const eventSource = new EventSource('/dashboard/orders')
      eventSource.addEventListener('message', (event) => {
        // Parse the data received from the stream into JSON
        // Add it the list of messages seen on the page
        const tmp = JSON.parse(event.data)
        // Do something with the obtained message
        setOrders(tmp)
      })
      eventSource.addEventListener('error', () => {
        eventSource.close()
      })

      // As the component unmounts, close listener to SSE API
      return () => {
        eventSource.close()
      }
   
    }, [])


return (
<>
  {orders.map(order => {
    <h1>{order}</h1>
  })}
</>
);
}



// const event = new EventSource('/orders')
// event.addEventListener('message', function(e) {     
//   console.log(e.data);
// }, false);
// event.addEventListener('open', function(e) {
// // successful connection.
// }, false);
// event.addEventListener('error', function(e) {
// // error occurred
// }, false);