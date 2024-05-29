"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { setTheme } = useTheme();

    return (
        <div>
            <Button
                variant={"ghost"}
                className="w-fit h-fit"
                onClick={() => setTheme("light")}
            >
                Light
            </Button>
            <Button
                onClick={() => setTheme("dark")}
                className="w-fit h-fit"
            >
                Dark
            </Button>
        </div>
    );
}
