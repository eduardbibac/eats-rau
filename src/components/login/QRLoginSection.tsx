"use client";

import getURL from "@/lib/getURL";
import { useEffectOnce } from "@/lib/useEffectOnce";
import { useRouter } from 'next/navigation'
import router from "next/router";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

export default function QRLoginSection () {
    const [qrCode, setQrCode] = useState<string>();
    const [startTime, setStartTime] = useState(Date.now());
    const router = useRouter()

    // Polling
    useEffect(() => {
        const interval = setInterval(async () => {
          const res = await fetch(`/login/qr`, { 
            cache: 'no-store',
            method: "POST",
            body: JSON.stringify({qr_string:qrCode})
          })
          console.log(res.status);

          // If the status is 201, update the data and clear the interval
          if (res.status == 201) {
            clearInterval(interval);
            router.push('/');
            router.refresh();
          }
    
          // If 1 minute has passed, clear the interval 
          // (stop polling)
          if (Date.now() - startTime >= 1 * 60 * 1000) {
            clearInterval(interval);
          }
        }, 4000); // Polls every 4 seconds
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
      }, [qrCode]);
      
    // QR String Fetch
    useEffectOnce(() => {
        if(window.innerWidth < 768) return; // Don't do polling on mobile devices
        fetch(`/login/qr`, { cache: 'no-store' })
          .then((res) => res.json())
          .then((data) => {
            setQrCode(data)
        })
    })


    return (
        <>
        <QRCodeSVG className="hidden lg:flex py-5 qr-code" value={getURL(`/login/qr?qr_string=${qrCode}`)}/>
        <div className="lg:flex mt-4 items-end justify-between">
            {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
            <a href="#" className="text-xs text-gray-500">Are you a guest ? Request guest access</a>
            {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
        </div>
        </>
    );
}


