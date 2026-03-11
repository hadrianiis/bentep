'use client';

import { TextGenerateEffect } from './ui/text-generate-effect';

const words = 'Profesionálne tepovanie'.split(' ').join('\n');

export function Hero() {
  return (
    <section className="relative flex items-center justify-center px-sides mb-2.5 py-20">
      <div className="w-full">
        <div className="flex justify-end">
          <div className="px-sides">
            <TextGenerateEffect 
              words={words} 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black leading-tight text-right whitespace-pre-line"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
