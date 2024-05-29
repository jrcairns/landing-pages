import { Calendar } from "@/components/ui/calendar";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Globe from "@/components/magicui/globe";
import Marquee from "@/components/magicui/marquee";
import {
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
    MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Input } from "../ui/input";

const files = [
    {
        name: "bitcoin.pdf",
        body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
    },
    {
        name: "finances.xlsx",
        body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
    },
    {
        name: "logo.svg",
        body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
    },
    {
        name: "keys.gpg",
        body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
    },
    {
        name: "seed.txt",
        body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
    },
];

const features = [
    {
        Icon: FileTextIcon,
        name: "Save your files",
        description: "We automatically save your files as you type.",
        href: "/",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            >
                {files.map((f, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                        )}
                    >
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium dark:text-white ">
                                    {f.name}
                                </figcaption>
                            </div>
                        </div>
                        <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                    </figure>
                ))}
            </Marquee>
        ),
    },
    {
        Icon: InputIcon,
        name: "Full text search",
        description: "Search through all your files in one place.",
        href: "/",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="flex h-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
                <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    <Input placeholder="Type a command or search" className="flex h-10 w-full border-none focus:!ring-0 rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
                <div className="max-h-[300px] overflow-y-auto overflow-x-hidden">
                    <div className="overflow-hidden p-1 text-foreground">
                        <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">Suggestions</div>
                        <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50">#478,343 /games/dice</div>
                        <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50">deposits.xlsx</div>
                        <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50">#478,335 /games/mines</div>
                        <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50">bets.xlsx</div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        Icon: GlobeIcon,
        name: "Multilingual",
        description: "Supports 100+ languages and counting.",
        href: "/",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Globe className="top-0 h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105 sm:left-40" />
        ),
    },
    {
        Icon: CalendarIcon,
        name: "Calendar",
        description: "Use the calendar to filter your files by date.",
        className: "col-span-3 lg:col-span-1",
        href: "/",
        cta: "Learn more",
        background: (
            <Calendar
                mode="single"
                selected={new Date(2022, 4, 11, 0, 0, 0)}
                className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
];

export default function Features() {
    return (
        <section className="w-full" id="features">
            <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
            </BentoGrid>
        </section>
    );
}
