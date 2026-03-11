'use client';

import { Hero } from '@/components/Hero';
import { Featured } from '@/components/Featured';
import { Services } from '@/components/Services';
import Faq02 from '@/components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Featured />
      <Services />
      <Faq02 />
    </div>
  );
}
