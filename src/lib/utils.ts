import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function formatedPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)
}

function formatedDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date))
}

export { cn, formatedPrice, formatedDate}
