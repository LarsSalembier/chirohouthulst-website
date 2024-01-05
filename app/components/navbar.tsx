"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const routes = [
    {label: "Home", href: "/"},
    {label: "Kalender", href: "/kalender"},
    {label: "Over ons", href: "/over-ons"},
    {label: "Leiding", href: "/leiding"},
    {label: "Contact", href: "/contact"},
];

type NavbarProps = {
    imageUrl: string,
    imageAlt: string,
    title: string,
}

export function Navbar(props: NavbarProps) {
    return (
        <header className="relative h-2/3 flex justify-center w-full">
            <Image
                className="absolute top-0 left-0 z-0 w-full h-full object-cover"
                src={props.imageUrl}
                alt={props.imageAlt}
                fill={true}
            />
            <div className="absolute top-0 left-0 z-1 w-full h-full backdrop-brightness-50"/>
            <div className="flex flex-col p-8 text-2xl z-10 relative text-slate-50 w-full max-w-7xl">
                <div className="flex items-center justify-between">
                    <div className="sm:flex hidden">
                        <Link href="/" className="font-bold">
                            <h1>Chiro Houthulst</h1>
                        </Link>
                    </div>
                    <NavigationMenu className="sm:flex hidden">
                        <NavigationMenuList>
                            {routes.map((route) => (
                                <NavigationMenuItem key={route.href}>
                                    <Link href={route.href} legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={
                                                navigationMenuTriggerStyle() + " bg-transparent"
                                            }
                                        >
                                            {route.label}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex justify-center items-center h-[50vw] max-h-[50vh] z-10 relative text-slate-50 ">
                    <p className="text-3xl sm:text-5xl uppercase font-bold">
                        {props.title}
                    </p>
                </div>
            </div>
        </header>
    );
}
