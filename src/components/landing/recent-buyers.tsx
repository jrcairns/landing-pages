"use client"

import React from "react";
import { toast } from "sonner";

export function RecentBuyers() {
    React.useEffect(() => {
        const intervalId = setInterval(() => {
            toast(<div className="bg-blue-500">hello</div>)
        }, 5000)

        return () => clearInterval(intervalId);
    }, [])
    return null;
}