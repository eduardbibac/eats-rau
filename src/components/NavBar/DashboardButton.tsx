import { Link } from "@/navigation";

export default function DashboardButton(
  {href, label} : {href: any, label:string}) {
return (
  <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
  <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">    
    
      <div>
        <Link 
        // data-hilight=
        href={href}
        className="
        data-[hilight]:relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-orange-400
        inline-block text-black hover:text-gray-600">
          {label}
        </Link>
      </div>
  
  </div>
</div>
);
}