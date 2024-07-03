import { LogOut, Settings, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "@/navigation";
import { logout } from "@/actions/auth/logout";
import { getTranslations } from "next-intl/server";
import { validateRequest } from "@/actions/auth/validateRequest";

export async function AvatarMenu() {
  const t = await getTranslations("Navigation");
  const { user } = await validateRequest();

  function getInitials(name: string) {
    const parts = name.split(/[\s-]+/);
    const initials = parts.map(part => part[0].toUpperCase());
    return initials.join('');
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
          <AvatarFallback>{getInitials(user?.username as string)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <Link href="/settings">{t('Settings')}</Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            {/* <span onClick={}>Sign Out</span> */}
            <form action={logout}>
              <button type="submit">{t('Sign out')}</button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
