"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NavLink } from "./nav-link";
import { cn } from "@/lib/utils";
import { ServicesDropdown } from "./services-dropdown";

interface MobileMenuProps {
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

export function NavbarMobileMenu({ siteTitle, siteSubtitle, onContactClick }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Close menu when switching from mobile to desktop
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleContactClick = () => {
    setOpen(false);
    onContactClick?.();
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden font-black text-subtitle uppercase"
      >
        Menu
      </button>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => setOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="fixed inset-0 bg-background px-sides flex flex-col">
            {/* Header */}
            <header className="flex w-full justify-between items-center h-header">
              <Link
                href="/"
                className="text-subtitle font-black uppercase"
                onClick={handleLinkClick}
              >
                {siteTitle}
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="font-black text-subtitle uppercase"
              >
                Close
              </button>
            </header>

            {/* Navigation */}
            <div className="flex-1 flex flex-col justify-between items-start py-12">
              <nav className="">
                {links.map((link) => (
                  <div key={link.label} className="mb-4">
                    <NavLink
                      href={link.href}
                      className="block text-5xl sm:text-6xl md:text-7xl font-black uppercase hover:opacity-70 transition-opacity"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </NavLink>
                  </div>
                ))}
                <div className="mb-4">
                  <ServicesDropdown 
                    isMobile={true}
                    onClick={handleLinkClick}
                  />
                </div>
              </nav>

              {/* Footer */}
              <div className="mt-12">
                <p className="text-subtitle font-semibold opacity-30">
                  © 2025. All rights reserved.
                </p>
                {siteSubtitle && (
                  <p className="text-subtitle font-semibold opacity-30 mt-2">
                    {siteSubtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
