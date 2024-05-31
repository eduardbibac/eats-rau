import { Link } from "@/navigation";

export default function DesktopSingInButton(
  {href, label} : {href: any, label: string}
) {
return (
<Link href={href} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500">
    {label}
</Link>
)
}