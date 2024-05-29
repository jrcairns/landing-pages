import { headers } from "next/headers"
import { mockProducts, redesigns } from "../config"

export function currentProduct() {
    if (typeof window === "undefined") {
        const host = process.env.NODE_ENV === "development"
            ? mockProducts[headers().get("host") as keyof typeof mockProducts]
            : headers().get("host")!

        if (host.includes("rsc")) {
            const pathname = headers().get("x-pathname")!
            if (redesigns.includes(pathname)) return "rsc_two"
            return "rsc"
        }

        if (host.includes("attractivo")) {
            return "attractivo"
        }

        return "rsc"
    } else {
        throw new Error("'@/current-product/server' must be called from the server. Use '@/current-product/client' in client components.")
    }
}