"use client";

import { cn } from "@/lib/utils";

interface AvatarCirclesProps {
    className?: string;
    numPeople?: number;
}

export default function AvatarCircles({
    numPeople,
    className,
}: AvatarCirclesProps) {
    return (
        <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
            <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/women/8.jpg"
                alt=""
            />
            <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt=""
            />
            <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/men/22.jpg"
                alt=""
            />
            <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt=""
            />
            <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/men/28.jpg"
                alt=""
            />
        </div>
    );
}
