'use client';

import Image from 'next/image';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { TransitionTrigger } from './ui/transition-trigger';
import { servicesStanky } from '@/utils/services-stanky';
import { cn } from '@/lib/utils';

const words = 'Naše služby'.split(' ').join('\n');

const stanokHrefMap: Record<string, string> = {
  b2b: '/services/kancelarske-a-firemne-priestory',
  special: '/services/ambulancie-a-zdravotnicke-zariadenia',
  projektove: '/services/komplexne-upratovanie',
  tepovanie: '/services/tepovanie',
};

export function Services() {
  return (
    <section id="sluzby" className="relative flex flex-col py-20 mt-2.5 scroll-mt-20">
      <div className="mb-16 px-sides">
        <div className="flex justify-start">
          <TextGenerateEffect
            words={words}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black leading-tight text-left whitespace-pre-line"
          />
        </div>
      </div>

      <div className="px-sides">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gap">
          {servicesStanky.map((stanok) => {
            const href = stanokHrefMap[stanok.id];
            const hasImage = Boolean(stanok.imageUrl);

            const cardContent = (
              <>
                {hasImage ? (
                  <div className="absolute inset-0">
                    <Image
                      src={stanok.imageUrl!}
                      alt={stanok.imageAlt ?? stanok.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-quad-out group-hover:scale-[1.025]"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-muted" />
                )}
                <div
                  className={cn(
                    'absolute top-0 right-0 px-3 py-1.5 rounded-bl-[6px] transition-[border-radius] duration-300 ease-quad-out',
                    'bg-[#ffffff] text-black group-hover:rounded-bl-[18px]'
                  )}
                >
                  <h2 className="font-semibold text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl whitespace-nowrap transition-all duration-300 ease-quad-out group-hover:text-base sm:group-hover:text-lg md:group-hover:text-xl lg:group-hover:text-xl xl:group-hover:text-2xl 2xl:group-hover:text-2xl">
                    {stanok.title}
                  </h2>
                </div>
              </>
            );

            if (href) {
              return (
                <TransitionTrigger
                  key={stanok.id}
                  href={href}
                  className="group block relative overflow-hidden bg-muted rounded-[6px] hover:rounded-[18px] transition-[border-radius] duration-300 ease-quad-out w-full cursor-pointer aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {cardContent}
                </TransitionTrigger>
              );
            }

            return (
              <article
                key={stanok.id}
                className="group block relative overflow-hidden bg-muted rounded-[6px] w-full aspect-[4/3]"
              >
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
