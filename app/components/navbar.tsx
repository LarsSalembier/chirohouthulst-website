"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type Route = {
  label: string;
  href: string;
  isExternal: boolean;
  icon?: React.JSX.Element;
};

const routes: Route[] = [
  { label: "Home", href: "/", isExternal: false },
  { label: "Kalender", href: "/kalender", isExternal: false },
  { label: "Leiding", href: "/leiding", isExternal: false },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ChiroHouthulst",
    isExternal: true,
    icon: <Facebook />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/chirohouthulst",
    isExternal: true,
    icon: <Instagram />,
  },
];

interface NavbarProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
}

export function Navbar({ imageUrl, imageAlt, title }: NavbarProps) {
  const MenuItem = (route: Route) => {
    return (
      <NavigationMenuItem key={route.href}>
        <Link href={route.href} passHref legacyBehavior={!route.isExternal}>
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} bg-transparent`}
            target={route.isExternal ? "_blank" : undefined}
            rel={route.isExternal ? "noopener noreferrer" : undefined}
            aria-label={route.label}
          >
            {route.icon ?? route.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  };

  return (
    <header className="relative h-2/3 flex justify-center w-full">
      <Image
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        src={imageUrl}
        alt={imageAlt}
        fill={true}
        priority={true}
      />
      <div
        className="absolute top-0 left-0 z-1 w-full h-full backdrop-brightness-50"
        aria-hidden="true"
      />
      <nav className="flex flex-col p-8 text-2xl z-10 relative text-slate-50 w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <h1 className="sm:flex hidden font-bold">
            <Link href="/">Chiro Houthulst</Link>
          </h1>
          <NavigationMenu className="sm:flex hidden">
            <NavigationMenuList aria-label="Primary navigation">
              {routes.map((route) => MenuItem(route))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-center items-center h-[50vw] max-h-[50vh] z-10 relative">
          <p className="text-3xl sm:text-5xl uppercase font-bold">{title}</p>
        </div>
      </nav>
    </header>
  );
}
