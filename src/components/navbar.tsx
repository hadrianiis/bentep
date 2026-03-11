"use client";

import Link from "next/link";
import { NavLink } from "./ui/nav-link";
import { NavbarMobileMenu } from "./ui/navbar-mobile-menu";
import { ServicesDropdown } from "./ui/services-dropdown";

interface NavbarProps {
  siteTitle: string;
  siteSubtitle?: string;
  onContactClick?: () => void;
}

const links = [
  {
    label: "Domov",
    href: "/",
  },
  {
    label: "Galéria",
    href: "/gallery",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
];

export function Navbar({ siteTitle, siteSubtitle, onContactClick }: NavbarProps) {
  return (
    <header className="px-sides flex justify-between md:grid grid-cols-12 gap-gap h-header items-center sticky top-0 z-50 bg-background">
      {/* Logo */}
      <Link
        href="/"
        className="text-subtitle col-span-5 font-black uppercase cursor-pointer w-max"
      >
        <span>{siteTitle}</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2 col-span-4">
        {links.map((item) => (
          <NavLink key={item.label} href={item.href}>
            {item.label}
          </NavLink>
        ))}
        <ServicesDropdown />
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden col-span-4 justify-self-end">
        <NavbarMobileMenu 
          siteTitle={siteTitle}
          siteSubtitle={siteSubtitle}
          onContactClick={onContactClick}
        />
      </div>

      {/* Subtitle */}
      {siteSubtitle && (
        <p className="hidden md:block text-subtitle font-semibold col-span-3 justify-self-end opacity-30">
          {siteSubtitle}
        </p>
      )}
    </header>
  );
}
