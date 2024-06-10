"use client"

import * as React from "react"
import { ChevronsUpDown, ClipboardPlus, Plus, X } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { updateMenuActiveState } from "@/actions/Dashboard/updateMenuActiveState"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ColapseTable(
  { children, label, active, menu_id }:
    { children: React.ReactNode, label: string, active?: (any | undefined), menu_id?: number }) {


  const [isOpen, setIsOpen] = React.useState(false)
  const [isActiveMenu, setIsActiveMenu] = React.useState<boolean>(active !== undefined ? active : true);

  React.useEffect(() => {
    if (menu_id)
      updateMenuActiveState(menu_id, isActiveMenu)
        .then()
  }, [isActiveMenu])

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="relative flex flex-col justify-center">
        {active !== undefined ? <Switch checked={isActiveMenu} onCheckedChange={setIsActiveMenu} className='ml-2 absolute' id="active-menu" /> : null}
        <Button size="sm" disabled={!isActiveMenu} className="absolute self-end mr-20 h-8 gap-1">
          <ClipboardPlus className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Selectează Produs
          </span>
        </Button>

        <CollapsibleTrigger className="pl-14" asChild>
          <button type="button" className={cn(
            { 'text-black focus:ring-orange-200 border-orange-300 hover:bg-orange-50': isActiveMenu },
            { 'text-gray focus:ring-gray-200 border-gray-300 hover:bg-gray-100': !isActiveMenu },
            "flex items-center justify-between w-full p-5 font-medium rtl:text-right  border  rounded-xl focus:ring-4    gap-3")} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>{label}</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}
