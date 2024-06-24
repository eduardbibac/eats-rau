import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function unique(a: any) {
  return a.sort().filter(function (value: any, index: any, array: any) {
    return index === 0 || value !== array[index - 1];
  });
}

export function toLocalDate(date: Date): string {
  // Formatting options
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
  };

  // Check if the provided date is not today's date
  const now = new Date();
  const isDifferentDay =
    date.getDate() !== now.getDate() ||
    date.getMonth() !== now.getMonth() ||
    date.getFullYear() !== now.getFullYear();

  // If it's a different day, include month and day formatting
  if (isDifferentDay) {
    options.month = "2-digit";
    options.day = "2-digit";
  }

  return date.toLocaleString("en-GB", options);
}
