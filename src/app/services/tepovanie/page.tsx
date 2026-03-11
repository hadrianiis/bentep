import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Media } from '@/components/ui/media';
import { ServicePricingSection } from '@/components/ui/service-pricing-section';
import { servicesStanky } from '@/utils/services-stanky';

const words = 'Tepovanie gauča'.split(' ').join('\n');

export default function TepovanieGaucaPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative flex py-20">
            <div className="px-sides w-full">
              <TextGenerateEffect
                words={words}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]"
              />
            </div>
      </section>

      {/* Content Section */}
      <section className="px-sides">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative overflow-hidden bg-muted rounded-[6px] aspect-square">
            <Media
              media={{
                __typename: "BlockImage",
                url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
                alt: "Tepovanie gauča",
                width: 800,
                height: 800,
                blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
              }}
              alt="Tepovanie gauča"
              className="size-full object-cover"
              quality={100}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Profesionálne tepovanie gauča</h2>
            <p className="text-lg text-muted-foreground">
              Naša špecializácia na tepovanie gaučov zahŕňa kompletnú renováciu a modernizáciu vašich sedacích súprav. 
              Používame len kvalitné materiály a moderné techniky, aby sme vám poskytli najlepší výsledok.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Naše služby:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Kompletná demontáž a montáž</li>
                <li>• Výber a nákup nových materiálov</li>
                <li>• Tepovanie sedadiel a opierok</li>
                <li>• Oprava a výmena výplní</li>
                <li>• Finálne úpravy a kontrola kvality</li>
              </ul>
            </div>
            <div className="pt-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Kontaktujte nás
              </button>
            </div>
          </div>
        </div>
      </section>

      <ServicePricingSection
        title="Cenník tepovania"
        subtitle="Transparentné ceny podľa rozsahu a typu čistenia."
        plans={servicesStanky.find((s) => s.id === 'tepovanie')?.items ?? []}
        highlightedIndex={0}
      />
    </div>
  );
}
