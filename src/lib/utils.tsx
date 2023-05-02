import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Optimizing out classname inputs 
// eg py-2 optimized to p-2
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}