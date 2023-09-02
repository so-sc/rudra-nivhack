import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(name: string): string {
  return name[0].toUpperCase() + name.slice(1)
}

export function isPastDate(date: string): boolean {
  // Converting DD-MM-YY to MM-DD-YY
  const _date = date.split("-")
  const predictDate = `${_date[1]}-${_date[0]}-${_date[2]}`

  const differenceBetweenDates = new Date(predictDate).getTime() - Date.now()
  return differenceBetweenDates < 0
}
