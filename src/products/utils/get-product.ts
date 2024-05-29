import { headers } from "next/headers"

export function currentProduct() {
    if (typeof window === "undefined") {
        const host = process.env.NODE_ENV === "development"
            ? mockProducts[headers().get("host") as keyof typeof mockProducts]
            : headers().get("host")!

        if (host.includes("rsc")) {
            return "rsc"
        }

        if (host.includes("attractivo")) {
            return "attractivo"
        }

        if (host.includes("createfreeforms")) {
            return "createfreeforms"
        }

        return "rsc"
    } else {
        throw new Error("'@/current-product/server' must be called from the server. Use '@/current-product/client' in client components.")
    }
}

export const products = [
    "rsc.wtf",
    "attractivo.ca",
    "createfreeforms"
] as const

export const redesigns = [
    "/dashboard/forms"
]

// map localhost ports to product URLs to avoid host file setup
export const mockProducts = {
    "localhost:3000": "attractivo.ca",
    "localhost:3001": "rsc.wtf",
    "localhost:3002": "createfreeforms.com",
} as const