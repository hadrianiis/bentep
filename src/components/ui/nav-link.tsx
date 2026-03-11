"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const isActive = usePathname() === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "font-semibold text-subtitle transition-opacity duration-300 cursor-pointer",
        isActive ? "opacity-100" : "opacity-30 hover:opacity-60",
        className
      )}
    >
      {children}
    </Link>
  );
}
