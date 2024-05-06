// https://play.tailwindcss.com/MIwj5Sp9pw
import "@/styles/login.css";

export default function Home() {
    return(
<div className="login-form py-16">
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="image hidden lg:block lg:w-1/2 bg-cover"></div>
        <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Sign in</h2>
            <p className="mt-10 text-xl text-gray-600 text-center">To continue, sign in using your university-issued Microsoft account</p>
            <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
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
            <div className="hidden lg:block mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div className="hidden lg:block mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                </div>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>
            <div className="hidden lg:block mt-8">
                <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
            </div>
            <div className="hidden lg:flex mt-4 items-end justify-between">
                {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
                <a href="#" className="text-xs text-gray-500 uppercase">or guest sign up</a>
                {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
            </div>
        </div>
    </div>
</div>
    );
}
