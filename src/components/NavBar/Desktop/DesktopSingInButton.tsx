import { Link } from "@/navigation";

export default function DesktopSingInButton({
  href,
  label,
}: {
  href: any;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="hidden items-center gap-x-2 rounded-xl border border-transparent bg-lime-400 px-3 py-2 text-sm font-medium text-black transition hover:bg-lime-500 focus:bg-lime-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 md:inline-flex"
    >
      {label}
    </Link>
  );
}
