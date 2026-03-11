"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServicesDropdownProps {
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
}

const services = [
  { label: "Služby (prehľad)", href: "/#sluzby" },
  { label: "Kancelárske a firemné priestory", href: "/services/kancelarske-a-firemne-priestory" },
  { label: "Ambulancie a zdravotnícke zariadenia", href: "/services/ambulancie-a-zdravotnicke-zariadenia" },
  { label: "Komplexné upratovanie", href: "/services/komplexne-upratovanie" },
  { label: "Tepovanie", href: "/services/tepovanie" },
];

export function ServicesDropdown({ className, onClick, isMobile = false }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (!isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMobile]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleServiceClick = () => {
    setIsOpen(false);
    onClick?.();
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150); // 150ms delay before closing
    }
  };

  if (isMobile) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "font-black uppercase transition-opacity duration-300 cursor-pointer flex items-center gap-2",
            "hover:opacity-70",
            className
          )}
        >
          Služby
          <svg
            className={cn(
              "w-6 h-6 transition-transform duration-200",
              isOpen ? "rotate-180" : ""
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="mt-4 ml-4">
            {services.map((service) => (
              <div key={service.href} className="mb-2">
                <Link
                  href={service.href}
                  onClick={handleServiceClick}
                  className="block text-3xl sm:text-4xl md:text-5xl font-black uppercase hover:opacity-70 transition-opacity"
                >
                  {service.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "font-semibold text-subtitle transition-opacity duration-300 cursor-pointer flex items-center gap-1",
          "opacity-30 hover:opacity-60",
          className
        )}
      >
        Služby
        <svg
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-background/95 backdrop-blur-sm border border-border/20 rounded-md shadow-xl z-50">
          <div className="py-1">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={handleServiceClick}
                className="block px-4 py-2 text-sm text-subtitle hover:opacity-100 hover:bg-background/50 transition-all duration-200 opacity-70"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
