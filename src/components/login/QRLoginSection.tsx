"use client";

import router from "next/router";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

export default function QRLoginSection () {
    const [qrCode, setQrCode] = useState<string>();
    // const [startTime, setStartTime] = useState(Date.now());

    // // Polling
    // useEffect(() => {
    //     const interval = setInterval(async () => {
    //       const response = await fetch(`/login/qr`, { 
    //         cache: 'no-store',
    //         method: "POST",
    //         body: JSON.stringify({qr_string:qrCode})
    //       })
    
    //       // If the status is 302, update the data and clear the interval
    //       if (response.status == 302) {
    //         const location = response.headers.get('Location');
    //         if (location) {
    //           router.push(location);
    //         }
    //         clearInterval(interval);
    //       }
    
    //       // If 5 minutes have passed, clear the interval 
    //       // (stop polling)
    //       if (Date.now() - startTime >= 5 * 60 * 1000) {
    //         clearInterval(interval);
    //       }
    //     }, 4000); // Polls every 4 seconds
    
    //     // Cleanup function to clear the interval when the component unmounts
    //     return () => clearInterval(interval);
    //   }, [qrCode]);
      
    // // QR String Fetch
    // useEffect(() => {
    //     fetch(`/login/qr`, { cache: 'no-store' })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         setQrCode(data)
    //       })
    //   }, [])


    return (
        <>
        {/* // TODO: RAU.BIBBAC.RO GETURL OR smth*/}
        <h1>{qrCode}</h1>
        <QRCodeSVG className="hidden lg:flex bg-gray-50 py-5 qr-code" value={`rau.bibac.ro/login/qr?${qrCode}`}/>
        <div className="lg:flex mt-4 items-end justify-between">
            {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
            <a href="#" className="text-xs text-gray-500">Are you a guest ? Request guest access</a>
            {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
        </div>
        </>
    );
}


