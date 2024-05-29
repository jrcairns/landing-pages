"use client"

import { useCurrentProduct } from "@/current-product/client"

export function ProductDevtools() {
    const product = useCurrentProduct()

    if (process.env.NODE_ENV !== "development") return <></>;

    return <div className="text-xs p-2 fixed bottom-2 left-1/2 -translate-x-1/2 z-10 rounded bg-primary text-primary-foreground">{product}</div>
}