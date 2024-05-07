"use client";

import { QRCodeSVG } from "qrcode.react";

export default function QRCodeLoginSection () {
    return (
        <>
        <QRCodeSVG className="hidden lg:flex bg-gray-50 py-5 qr-code" value="some-token-here"/>
        <div className="lg:flex mt-4 items-end justify-between">
            {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
            <a href="#" className="text-xs text-gray-500">Are you a guest ? Request guest access</a>
            {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
        </div>
        </>
    );
}