"use client"

import * as React from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function ColapseTable({ children, label }: { children: React.ReactNode, label: string }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="">
        <CollapsibleTrigger asChild>
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-orange-300 rounded-xl focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-800 dark:border-orange-700 dark:text-black hover:bg-orange-50 dark:hover:bg-orange-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
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
