import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Media } from '@/components/ui/media';
import Link from 'next/link';
import { ServicePricingSection } from '@/components/ui/service-pricing-section';
import { servicesStanky } from '@/utils/services-stanky';

const words = 'Ambulancie a zdravotnícke zariadenia'.split(' ').join('\n');

export default function AmbulancieAZdravotnickeZariadeniaPage() {
  return (
    <div className="min-h-screen py-20">
      <section className="relative flex py-20">
            <div className="px-sides w-full">
              <TextGenerateEffect
                words={words}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]"
              />
            </div>
      </section>

      <section className="px-sides">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden bg-muted rounded-[6px] aspect-square">
            <Media
              media={{
                __typename: 'BlockImage',
                url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=800&fit=crop',
                alt: 'Ambulancie a zdravotnícke zariadenia (Špeciál)',
                width: 800,
                height: 800,
              }}
              alt="Ambulancie a zdravotnícke zariadenia"
              className="size-full object-cover"
              quality={100}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Špeciál – Sterilita a dodržiavanie noriem</h2>
            <p className="text-lg text-muted-foreground">
              Špecializované upratovanie zdravotníckych zariadení so zameraním na sterilitu,
              dodržiavanie hygienických noriem a legislatívy. Dezinfekcia podľa sanitačného
              poriadku.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Naše služby:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="border-l-2 border-primary/30 pl-4">
                  <span className="font-semibold text-foreground">Sanity Care</span> –
                  Špecializované upratovanie čakární a ambulancií s dôrazom na dezinfekciu podľa
                  sanitačného poriadku.
                </li>
                <li className="border-l-2 border-primary/30 pl-4">
                  <span className="font-semibold text-foreground">Germ-Free Zone</span> – Hĺbková
                  dekontaminácia priestorov (vhodné pre operačné sály alebo rizikovejšie prostredia).
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <Link
                href="/kontakt"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Kontaktujte nás
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicePricingSection
        title="Cenník pre zdravotnícke zariadenia"
        subtitle="Špecializované upratovanie a dezinfekcia – cenová ponuka na požiadanie."
        plans={servicesStanky.find((s) => s.id === 'special')?.items ?? []}
        highlightedIndex={0}
      />
    </div>
  );
}
