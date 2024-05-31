import { Link } from "@/navigation";

export default function DesktopNavButton(
  {href, label} : {href: any, label: string}
) {
return (
<>
<div>
  <Link href={href} className="inline-block text-black hover:text-gray-600">{label}</Link>
</div>
</>
);
}