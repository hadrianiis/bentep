"use client";

import { Navbar } from "./navbar";

export function NavbarWrapper() {
  const handleContactClick = () => {
    console.log('Contact clicked');
    // Tu môžeš pridať logiku pre contact modal alebo navigáciu
  };

  return (
    <Navbar 
      siteTitle="Upratovacie služby Brezno"
      siteSubtitle="Upratovacie služby Brezno"
      onContactClick={handleContactClick}
    />
  );
}
