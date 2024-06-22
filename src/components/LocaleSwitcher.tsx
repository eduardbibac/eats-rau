"use client";

import { useLocale, useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";
import { MouseEventHandler } from "react";
import { UnitedStatesSVG } from "./svg/USA";
import { RomaniaSVG } from "./svg/RO";
import { useQueryClient } from "@tanstack/react-query";

export default function LangSwitcher() {
  function ChangeLanguage(lang: string): MouseEventHandler<HTMLButtonElement> {
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();

    // Return a function that accepts MouseEvent
    return (event) => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: lang },
      );
    };
  }

  const currentLocale = useLocale();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{currentLocale === 'ro' ? <RomaniaSVG /> : <UnitedStatesSVG />}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {currentLocale !== 'en' && (
          <DropdownMenuItem>
            <button className="flex items-center gap-1" onClick={ChangeLanguage("en")} >
              <UnitedStatesSVG />
              English
            </button>
          </DropdownMenuItem>
        )}
        {currentLocale !== 'ro' && (
          <DropdownMenuItem>
            <button className="flex items-center gap-1" onClick={ChangeLanguage("ro")} >
              <RomaniaSVG />
              Română
            </button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
