import { Link } from "@/navigation";

export default function DashboardButton({
  href,
  label,
}: {
  href: any;
  label: string;
}) {
  return (
    <div
      id="navbar-collapse-with-animation"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
    >
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
        <div>
          <Link
            href={href}
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          >
            {label}
          </Link>
        </div>
      </div>
    </div>
  );
}
