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
      className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:order-2 md:col-span-6 md:block md:w-auto md:basis-auto"
    >
      <div className="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-center md:gap-x-7 md:gap-y-0">
        <div>
          <Link
            href={href}
            className="inline-flex items-center gap-x-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
          >
            {label}
          </Link>
        </div>
      </div>
    </div>
  );
}
