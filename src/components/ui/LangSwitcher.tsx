
import {useTranslations} from 'next-intl';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link";


export default function LangSwitcher() {
  const t = useTranslations('Index');
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>Change Language</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Link locale="ro" href="/ro">
                    Romana
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link locale="en" href="/en">
                    English
                </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
}