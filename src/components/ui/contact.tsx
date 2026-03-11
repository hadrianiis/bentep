"use client";

import { InfoFragment } from "@/utils/mock-types";

interface ContactProps {
  info: InfoFragment;
  children: React.ReactNode;
}

export function Contact({ info, children }: ContactProps) {
  const handleContactClick = () => {
    // You can add contact modal logic here
    console.log('Contact clicked');
  };

  return (
    <button onClick={handleContactClick}>
      {children}
    </button>
  );
}
