"use client";

import  qr from "qrcode";
import { useEffect, useState } from "react";


export function QRCode() {

    const [src, setSrc] = useState<string>(''); 
    const generate = () => {
        qr.toString('some-key-string').then((val) =>setSrc(val) )
    }

    useEffect(() => {
        generate();
      }, []);

    return (
        <>
        <img className=" qr-code lg:block mt-4" src={src}/>
        </>
    );
}