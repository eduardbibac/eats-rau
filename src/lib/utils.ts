import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function unique(a:any) {
  return a.sort().filter(function(value:any, index:any, array:any) {
      return (index === 0) || (value !== array[index-1]);
  });
}
