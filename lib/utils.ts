import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const trackConversion = () => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    // Send conversion event to Google Ads
    (window as any).gtag("event", "conversion", {
      send_to: "AW-17840114502/A1p3COiJ2tkbEMaW6rpC",
    })
    console.log("Conversion event tracked: AW-17840114502/A1p3COiJ2tkbEMaW6rpC")
  } else {
    console.warn("Google Ads tag not found")
  }
}