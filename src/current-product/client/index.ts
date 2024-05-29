import { usePathname } from "next/navigation"
import { mockProducts, redesigns } from "../config"

export function useCurrentProduct() {
    if (typeof window !== "undefined") {
        const pathname = usePathname()
        const host = mockProducts[window.location.host as keyof typeof mockProducts]

        if (host.includes("betterhelp")) {
            if (redesigns.includes(pathname)) return "betterhelp_two"
            return "betterhelp"
        }

        if (host.includes("regain")) {
            return "regain"
        }

        if (host.includes("teencounselling")) {
            return "teencounselling"
        }

        return "betterhelp"
    } else {
        throw new Error("'@/current-product/client' must be called from a client component. Use '@/current-product/server' for server-side calls.")
    }

}