import { AnimatedGridPattern } from "@/components/magicui/animate-grid-pattern";
import { FeatureCard10 } from "@/components/magicui/feature-card-10";
import { cn } from "@/lib/utils";

export default function Attractivo() {
    return (
        <div className="bg-muted/40">
            <div className="fixed inset-0 w-screen h-screen">
                <AnimatedGridPattern
                    numSquares={50}
                    maxOpacity={0.2}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "opacity-75 dark:opacity-25 md:dark:opacity-50",
                        "[mask-image:radial-gradient(100vw_circle_at_center,white,transparent)]",
                        "md:[mask-image:radial-gradient(60vw_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
            </div>
            <div className="px-4 sm:container md:bg-transparent relative min-h-screen flex items-center">
                <FeatureCard10 />
            </div>
        </div>
    )
}