"use client";

import {useTranslations} from 'next-intl';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { usePathname, useRouter} from '@/navigation';
import {useParams} from 'next/navigation';
import { MouseEventHandler } from 'react';
 
function changeLanguage(lang: string): MouseEventHandler<HTMLButtonElement> {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  // Return a function that accepts MouseEvent
  return (event) => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: lang}
    );
  };
}

export default function LangSwitcher() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>Change Language</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <button onClick={changeLanguage('ro')}>Romana</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <button onClick={changeLanguage('en')}>English</button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
}