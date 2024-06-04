import "./TBottomNavBar.css";

export default function TBottomNavBar() {
  return (
    <>
      <div className="bottom-navbar min-w-screen flex min-h-screen items-center justify-center bg-gray-100 px-5 pb-24 pt-5">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-2xl bg-white px-7 shadow-lg">
            <div className="flex">
              <div className="group flex-1">
                <a
                  href="#"
                  className="mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 pb-1 pt-1">
                    <i className="far fa-home mb-1 block pt-1 text-2xl"></i>
                    <span className="block pb-2 text-xs">Home</span>
                    <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-indigo-500"></span>
                  </span>
                </a>
              </div>
              <div className="group flex-1">
                <a
                  href="#"
                  className="mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 pb-1 pt-1">
                    <i className="far fa-compass mb-1 block pt-1 text-2xl"></i>
                    <span className="block pb-2 text-xs">Explore</span>
                    <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-indigo-500"></span>
                  </span>
                </a>
              </div>
              <div className="group flex-1">
                <a
                  href="#"
                  className="mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 pb-1 pt-1">
                    <i className="far fa-search mb-1 block pt-1 text-2xl"></i>
                    <span className="block pb-2 text-xs">Search</span>
                    <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-indigo-500"></span>
                  </span>
                </a>
              </div>
              <div className="group flex-1">
                <a
                  href="#"
                  className="mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 pb-1 pt-1">
                    <i className="far fa-cog mb-1 block pt-1 text-2xl"></i>
                    <span className="block pb-2 text-xs">Settings</span>
                    <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-indigo-500"></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
      <div className="fixed bottom-0 right-0 z-10 mb-4 mr-4 flex items-end justify-end">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            className="block h-16 w-16 transform rounded-full shadow transition-all hover:rotate-12 hover:scale-110 hover:shadow-lg"
          >
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
            />
          </a>
        </div>
      </div>
    </>
  );
}
