import { validateRequest } from "@/auth/validateRequest";
import Link from "next/link";
import MobileNavBarLinks from "./MobileNavBarLinks";
import NavActiveClient from "./NavActiveClient";

export default async function MobileNavBar() {
const { user } = await validateRequest();
return (
  <div className="md:hidden fixed bottom-0 left-0 z-50 w-full mx-auto">
    <div className="px-7 bg-white shadow-lg rounded-t-2xl">
        <div className="flex">
          <MobileNavBarLinks></MobileNavBarLinks>

          <NavActiveClient>
            {user ? (
              <Link href='/settings' className="flex-1 group">
              <div className="mb-active-text flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-orange-500">
                  <span className="block px-1 pt-1 pb-1">
                    {/* // TODO: Link ICON */}
                      <i className="far fa-home text-2xl pt-1 mb-1 block"></i>
                      <span className="block text-xs pb-2">Settings</span>
                      <span className="block w-5 mx-auto h-1 group-hover:bg-orange-500 rounded-full"></span>
                  </span>
              </div>
              </Link>
            ) : (
              <Link href='/login' className="flex-1 group">
                <div className="mb-active-text flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-orange-500">
                    <span className="block px-1 pt-1 pb-1">
                      {/* // TODO: Link ICON */}
                        <i className="far fa-home text-2xl pt-1 mb-1 block"></i>
                        <span className="block text-xs pb-2">Login</span>
                        <span className="block w-5 mx-auto h-1 group-hover:bg-orange-500 rounded-full"></span>
                    </span>
                </div>
              </Link>
            )}
           
          </NavActiveClient>
        </div>
    </div>
</div>
);
}