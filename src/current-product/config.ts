export const products = [
    "rsc.wtf",
    "attractivo.ca",
] as const

export const redesigns = [
    "/dashboard/forms"
]

// map localhost ports to product URLs to avoid host file setup
export const mockProducts = {
    "localhost:3000": "rsc.wtf",
    "localhost:3001": "attractivo.ca",
} as const