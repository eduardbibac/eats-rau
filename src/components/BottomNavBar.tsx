import "@/styles/bottom-navbar.css";

export default function BottomNavBar() {
    return (
<>
<div className="bottom-navbar min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 pt-5 pb-24">
    <div className="w-full max-w-md mx-auto">

        <div className="px-7 bg-white shadow-lg rounded-2xl">
            <div className="flex">
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                        <span className="block px-1 pt-1 pb-1">
                            <i className="far fa-home text-2xl pt-1 mb-1 block"></i>
                            <span className="block text-xs pb-2">Home</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                        <span className="block px-1 pt-1 pb-1">
                            <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
                            <span className="block text-xs pb-2">Explore</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                        <span className="block px-1 pt-1 pb-1">
                            <i className="far fa-search text-2xl pt-1 mb-1 block"></i>
                            <span className="block text-xs pb-2">Search</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                        <span className="block px-1 pt-1 pb-1">
                            <i className="far fa-cog text-2xl pt-1 mb-1 block"></i>
                            <span className="block text-xs pb-2">Settings</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>
            </div>
        </div>

    </div>
</div>

{/* // <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
        </a>
    </div>
</div>
</>

    );
}
