// https://play.tailwindcss.com/MIwj5Sp9pw
import { QRCode } from "@/components/qrcode";
import "@/styles/login.css";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {
    return(
<div className="login-form py-16">
    <div className="form-container lg:min-h-auto flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="image block w-1/2 bg-cover"></div>
        <div className="h-full flex flex-col w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Sign in</h2>
            <p className="mt-10 text-xl text-gray-600 text-center">To continue, sign in using your university-issued Microsoft account</p>
            <a href="#" className="flex items-center mt-auto lg:mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                <div className="px-4 py-3">
                    <svg className="h-6 w-6" viewBox="0 0 40 40">
                    <path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)"></path><path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)"></path><path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)"></path><path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)"></path>
                    </svg>
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Microsoft</h1>
            </a>
            <div className="hidden lg:flex mt-4 items-center justify-between">
                <span className="border-b w-1/6 lg:w-1/5"></span>
                <p className="text-xs text-center text-gray-500 uppercase">or quick session with QR</p>
                <span className="border-b w-1/6 lg:w-1/5"></span>
            </div>
            <QRCodeSVG className="hidden lg:flex bg-gray-50 py-5 qr-code" value="some-token-here"/>
            <div className="lg:flex mt-4 items-end justify-between">
                {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
                <a href="#" className="text-xs text-gray-500">Are you a guest ? Request guest access</a>
                {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
            </div>
        </div>
    </div>
</div>
    );
}
