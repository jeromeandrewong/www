import { type ClassValue, clsx } from "clsx";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const copy = async (url: string, message: string) => {
    await navigator.clipboard.writeText(url);
    toast(message + " copied to clipboard", {
        icon: "📋",
        style: { padding: "10px", background: "#10b981" },
        position: "bottom-center",
        duration: 1500,
    });
};
