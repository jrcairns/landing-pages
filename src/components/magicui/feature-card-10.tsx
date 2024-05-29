import { cn } from "@/lib/utils";
import { format, startOfWeek } from "date-fns";
import { CheckIcon, Flame, LockKeyholeOpen, MoreHorizontal, PlusCircle } from "lucide-react";
import Link from "next/link";
import { RegisterInterest } from "../register-interest";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import AvatarCircles from "./avatar-circles";
import DotPattern from "./dot-pattern";
import Marquee from "./marquee";
import { Rating } from "./rating";

function Success() {
    return <div className="w-full text-foreground space-x-2 flex items-center justify-center h-[50px] bg-muted/40 border border-input">
        <span className="text-sm">Thank you for registering!</span>
        <CheckIcon className="size-4" />
    </div>
}


export function FeatureCard10() {
    return (
        <div className="flex h-full w-full transform-gpu flex-col items-center md:justify-between gap-5 md:rounded-lg md:outline md:outline-primary/5 md:bg-background md:overflow-hidden md:shadow md:flex-row">
            <DotPattern
                className={cn(
                    "hidden md:block dark:opacity-50 [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
                )}
            />
            <div className="md:max-w-xl flex flex-col md:pl-16 py-16">
                <h1 className="text-balance text-4xl sm:text-5xl font-medium tracking-tighter md:text-6xl">
                    Create forms and go live <span className="relative px-2"><span className="absolute inset-x-0 bottom-1 h-9 sm:h-10 md:h-16 bg-orange-300/70"></span><span className="relative">instantly</span></span>.
                </h1>
                <div className="mt-4">
                    <p className="text-primary/80 text-pretty">Instantly create and deploy custom forms with unique web URLs in seconds. Simplify your workflow and start tracking analytics effortlessly.</p>
                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center space-x-2">
                            <CheckIcon strokeWidth={3} className="h-5 w-5 rounded-full bg-green-200 dark:bg-green-500 dark:text-black p-1 flex" />
                            <span className="font-medium text-sm flex-1">Instant custom form generation</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <CheckIcon strokeWidth={3} className="h-5 w-5 rounded-full bg-green-200 dark:bg-green-500 dark:text-black p-1 flex" />
                            <span className="font-medium text-sm flex-1">Seamless URL deployment</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <CheckIcon strokeWidth={3} className="h-5 w-5 rounded-full bg-green-200 dark:bg-green-500 dark:text-black p-1 flex" />
                            <span className="font-medium text-sm flex-1">Real-time data analytics</span>
                        </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-8 relative rounded-md">
                        <RegisterInterest
                            successComponent={<Success />}
                        >
                            <div className="bg-background">
                                <div className="bg-muted/40 min-h-[50px] relative shadow items-center flex w-full rounded-md border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed">
                                    <div className="text-xs font-medium text-muted-foreground rounded-l-md border-r border-input flex items-center px-2">
                                        <span>https://vooli.ca/f/</span>
                                    </div>
                                    <input name="email" className="!outline-none block flex-1 px-2.5 bg-transparent" placeholder="feedback-form" />
                                    <div className="p-1 sm:w-auto w-full hidden sm:block">
                                        <Button
                                            type="submit"
                                            className={cn(
                                                "flex group relative w-full gap-2 overflow-hidden",
                                                "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2",
                                            )}
                                        >
                                            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-background opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96" />
                                            <span>Claim URL</span>
                                            <LockKeyholeOpen className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <Button
                                type="submit"
                                className={cn(
                                    "flex sm:hidden mt-2 group relative w-full gap-2 overflow-hidden",
                                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2",
                                )}
                            >
                                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-background opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96" />
                                <span>Claim URL</span>
                                <LockKeyholeOpen className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                            </Button>
                        </RegisterInterest>
                    </div>
                    <div className="flex space-x-4 items-center mt-6">
                        <AvatarCircles />
                        <div className="flex flex-col space-y-1">
                            <Rating />
                            <p className="text-sm font-medium text-primary/80">
                                <span className="font-semibold">200+</span> happy customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative w-full xl:w-1/2 flex-1 bg-gradient-to-br from-transparent to-muted/40 dark:to-muted/10">
                <div
                    className="relative -right-[60px] top-[-130px] max-h-[650px] grid [transform:rotate(-15deg)translateZ(10px);]"
                >
                    <div className="relative mt-6 overflow-hidden">
                        <div className="gap-0 min-[1200px]:columns-2">
                            <Marquee
                                vertical
                                className={cn(
                                    "[--duration:60s]",
                                )}
                            >
                                <Card className="mb-4 w-full cursor-pointer break-inside-avoid">
                                    <CardHeader>
                                        <CardTitle>Details</CardTitle>
                                        <CardDescription>
                                            Provide some general details about your form.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="space-y-2">
                                                <Label>Title</Label>
                                                <Input placeholder="Feedback form" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Description</Label>
                                                <Input placeholder="June sale feedback form" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="mb-4 w-full cursor-pointer break-inside-avoid">
                                    <CardHeader>
                                        <CardTitle>Fields</CardTitle>
                                        <CardDescription>
                                            Manage the fields you want users to submit.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-40">Type</TableHead>
                                                    <TableHead className="text-right">Required</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow >
                                                    <TableCell>
                                                        <div className="space-y-2">
                                                            <Select defaultValue="text">
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select a type" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="text">Text</SelectItem>
                                                                    <SelectItem value="email">Email</SelectItem>
                                                                    <SelectItem value="textarea">Long Text</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-right">

                                                        <div className="space-y-2">
                                                            <Switch defaultChecked={true} />
                                                        </div>

                                                    </TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell>
                                                        <div className="space-y-2">
                                                            <Select defaultValue="email">
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select a type" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="text">Text</SelectItem>
                                                                    <SelectItem value="email">Email</SelectItem>
                                                                    <SelectItem value="textarea">Long Text</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-right">

                                                        <div className="space-y-2">
                                                            <Switch />
                                                        </div>

                                                    </TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell>
                                                        <div className="space-y-2">
                                                            <Select defaultValue="textarea">
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select a type" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="text">Text</SelectItem>
                                                                    <SelectItem value="email">Email</SelectItem>
                                                                    <SelectItem value="textarea">Long Text</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-right">

                                                        <div className="space-y-2">
                                                            <Switch defaultChecked={true} />
                                                        </div>

                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                    <CardFooter className="justify-center border-t p-4 bg-muted/40">
                                        <Button type="button" size="sm" variant="ghost" className="gap-1">
                                            <PlusCircle className="h-3.5 w-3.5" />
                                            Add field
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card className="mb-4 w-full cursor-pointer break-inside-avoid">
                                    <CardHeader className="pb-3">
                                        <CardDescription>This Month</CardDescription>
                                        <CardTitle className="text-4xl">488</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-2">
                                            <Badge variant="outline" className="text-[11px]">-11.42%</Badge>
                                            <span>from last month</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Progress value={0} aria-label="17.42% increase" />
                                    </CardFooter>
                                </Card>
                                <Card className="mb-4 w-full cursor-pointer break-inside-avoid">
                                    <CardHeader>
                                        <CardTitle>Forms</CardTitle>
                                        <CardDescription>
                                            Manage your forms and view their performance.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="max-w-56">Name</TableHead>
                                                    <TableHead className="hidden md:table-cell">Status</TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Submissions
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Last submission
                                                    </TableHead>
                                                    <TableHead className="text-right md:text-left">
                                                        Actions
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="font-medium max-w-40 truncate">
                                                        <p className="truncate w-full">
                                                            2024 Spring Sale Feedback Form
                                                        </p>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="duration-0 capitalize" variant="outline">Archived</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <div className="flex items-end space-x-1 leading-none">
                                                            244
                                                            <Flame className="fill-orange-300 text-foreground h-4 w-4" />
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <div className="span truncate block">
                                                            {format(startOfWeek(new Date, { weekStartsOn: 1 }), 'yyyy-MM-dd hh:mm a')}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-right md:text-left">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    aria-haspopup="true"
                                                                    size="icon"
                                                                    variant="ghost"
                                                                >
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">Toggle menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem asChild>
                                                                    <Link href="#">Edit</Link>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-medium max-w-56 truncate">
                                                        <p className="truncate w-full">
                                                            New form
                                                        </p>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="duration-0 capitalize" variant="outline">Drafted</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <div className="flex items-end space-x-1 leading-none">
                                                            0
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <span>-</span>
                                                    </TableCell>
                                                    <TableCell className="text-right md:text-left">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    aria-haspopup="true"
                                                                    size="icon"
                                                                    variant="ghost"
                                                                >
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">Toggle menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem asChild>
                                                                    <Link href="#">Edit</Link>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-medium max-w-56 truncate">
                                                        <p className="truncate w-full">
                                                            Feedback form
                                                        </p>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="duration-0 capitalize">Published</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <div className="flex items-end space-x-1 leading-none">
                                                            66
                                                            <Flame className="fill-orange-300 text-foreground h-4 w-4" />
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        {format(startOfWeek(new Date, { weekStartsOn: 1 }), 'yyyy-MM-dd hh:mm a')}
                                                    </TableCell>
                                                    <TableCell className="text-right md:text-left">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    aria-haspopup="true"
                                                                    size="icon"
                                                                    variant="ghost"
                                                                >
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">Toggle menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem asChild>
                                                                    <Link href="#">Edit</Link>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </Marquee>
                            <Marquee
                                vertical
                                className={cn(
                                    "[--duration:30s]",
                                )}
                            >
                                <Card className="mb-4 w-full cursor-pointer break-inside-avoid">
                                    <CardHeader className="pb-3">
                                        <CardDescription>This Week</CardDescription>
                                        <CardTitle className="text-4xl">172</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-2">
                                            <Badge className="text-[11px]">+17.42%</Badge>
                                            <span>from last week</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Progress value={17.42} aria-label="17.42% increase" />
                                    </CardFooter>
                                </Card>
                                <Card className="mb-4 w-full cursor-pointer break-inside-avoid">
                                    <CardHeader className="pb-3">
                                        <CardTitle>Your forms</CardTitle>
                                        <CardDescription className="max-w-lg text-balance leading-relaxed">
                                            Introducing our dynamic forms dashboard for seamless
                                            management and insightful analysis.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Button asChild>
                                            <Link href="#">Create new form</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card className="mb-4 w-full cursor-pointer break-inside-avoid">
                                    <CardHeader>
                                        <CardTitle>Details</CardTitle>
                                        <CardDescription>
                                            Provide some general details about your form.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="space-y-2">
                                                <Label>Title</Label>
                                                <Input placeholder="Feedback form" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Description</Label>
                                                <Input placeholder="June sale feedback form" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="mb-4 w-full cursor-pointer break-inside-avoid">
                                    <CardHeader>
                                        <CardTitle>Forms</CardTitle>
                                        <CardDescription>
                                            Manage your forms and view their performance.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="max-w-56">Name</TableHead>
                                                    <TableHead className="hidden md:table-cell">Status</TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Submissions
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Last submission
                                                    </TableHead>
                                                    <TableHead className="text-right md:text-left">
                                                        Actions
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="font-medium max-w-40 truncate">
                                                        <p className="truncate w-full">
                                                            2024 Spring Sale Feedback Form
                                                        </p>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="duration-0 capitalize" variant="outline">Archived</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <div className="flex items-end space-x-1 leading-none">
                                                            244
                                                            <Flame className="fill-orange-300 text-foreground w-4" />
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <div className="span truncate block">
                                                            {format(startOfWeek(new Date, { weekStartsOn: 1 }), 'yyyy-MM-dd hh:mm a')}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-right md:text-left">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    aria-haspopup="true"
                                                                    size="icon"
                                                                    variant="ghost"
                                                                >
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">Toggle menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem asChild>
                                                                    <Link href="#">Edit</Link>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-medium max-w-56 truncate">
                                                        <p className="truncate w-full">
                                                            New form
                                                        </p>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="duration-0 capitalize" variant="outline">Drafted</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <div className="flex items-end space-x-1 leading-none">
                                                            0
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <span>-</span>
                                                    </TableCell>
                                                    <TableCell className="text-right md:text-left">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    aria-haspopup="true"
                                                                    size="icon"
                                                                    variant="ghost"
                                                                >
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">Toggle menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem asChild>
                                                                    <Link href="#">Edit</Link>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-medium max-w-56 truncate">
                                                        <p className="truncate w-full">
                                                            Feedback form
                                                        </p>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <Badge className="duration-0 capitalize">Published</Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        <div className="flex items-end space-x-1 leading-none">
                                                            66
                                                            <Flame className="fill-orange-300 text-foreground w-4" />
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        {format(startOfWeek(new Date, { weekStartsOn: 1 }), 'yyyy-MM-dd hh:mm a')}
                                                    </TableCell>
                                                    <TableCell className="text-right md:text-left">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button
                                                                    aria-haspopup="true"
                                                                    size="icon"
                                                                    variant="ghost"
                                                                >
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">Toggle menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem asChild>
                                                                    <Link href="#">Edit</Link>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
