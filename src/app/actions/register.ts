"use server"

import { currentProduct } from "@/products/utils/get-product"
import { cookies } from "next/headers";

const product = currentProduct()

interface ActionResult {
    error?: string;
    success: boolean
}

export async function register(initialState: any, data: FormData): Promise<ActionResult> {
    const email = data.get("email") ?? undefined
    const name = data.get("name") ?? undefined
    const phone = data.get("phone") ?? undefined

    return {
        success: true,
        error: "test"
    }

    /*
        service.submissions.create({
            data: JSON.stringify({ email, name, phone })
            product,
        })
    */
}