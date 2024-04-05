'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

type Route = {
  label: string;
  href: string;
  isExternal: boolean;
  icon?: React.JSX.Element;
};

const routes: Route[] = [
  { label: 'Kalender', href: '/#kalender', isExternal: false },
  { label: 'Leidingsploeg', href: '/leidingsploeg', isExternal: false },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/ChiroHouthulst',
    isExternal: true,
    icon: <Facebook />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/chirohouthulst',
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
      <NavigationMenuItem
        key={route.href}
        className={
          route.isExternal || route.label == 'Leidingsploeg'
            ? 'flex'
            : 'hidden md:flex'
        }
      >
        <Link href={route.href} passHref legacyBehavior={!route.isExternal}>
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} bg-transparent`}
            target={route.isExternal ? '_blank' : undefined}
            rel={route.isExternal ? 'noopener noreferrer' : undefined}
            aria-label={route.label}
          >
            {route.icon ?? route.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  };

  return (
    <header className='relative flex h-2/3 w-full justify-center'>
      <Image
        className='absolute left-0 top-0 z-0 h-full w-full object-cover'
        src={imageUrl}
        alt={imageAlt}
        fill={true}
        priority={true}
      />
      <div
        className='z-1 absolute left-0 top-0 h-full w-full backdrop-brightness-50'
        aria-hidden='true'
      />
      <nav className='relative z-10 flex w-full max-w-7xl flex-col p-8 text-2xl text-slate-50'>
        <div className='flex items-center justify-between'>
          <aside className='flex flex-row items-center justify-center gap-4'>
            <Link href='/'>
              <Image
                src='/logo.png'
                alt='Logo Chiro Houthulst'
                width={48}
                height={48}
              />
              <p className='hidden font-bold md:flex'>Chiro Houthulst</p>
            </Link>
          </aside>
          <NavigationMenu>
            <NavigationMenuList aria-label='Primary navigation'>
              {routes.map((route) => MenuItem(route))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='relative z-10 flex h-[50vw] max-h-[50vh] items-center justify-center'>
          <p className='text-3xl font-bold uppercase sm:text-5xl'>{title}</p>
        </div>
      </nav>
    </header>
  );
}
