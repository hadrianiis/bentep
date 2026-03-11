import { cn } from "@/lib/utils";
import { Media } from "@/components/ui/media";
import { TransitionTrigger } from "./ui/transition-trigger";
import { ProjectItemFragment } from "@/utils/mock-types";

interface ServicesGridVariantProps {
  services: ProjectItemFragment[];
  className?: string;
}

export function ServicesGridVariant({ services, className }: ServicesGridVariantProps) {
  if (services.length === 0) {
    return null;
  }

  return (
    <section className={className || ''}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-gap">
        {services.map((service) => (
          <ServiceItemVariant
            key={service._slug}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}

interface ServiceItemVariantProps {
  service: ProjectItemFragment;
}

function ServiceItemVariant({ service }: ServiceItemVariantProps) {
  const firstMedia = service.media.items[0]?.media;

  return (
    <TransitionTrigger
      href={`/services/${service._slug}`}
      className="group block relative overflow-hidden bg-muted rounded-[6px] hover:rounded-[18px] transition-[border-radius] duration-300 ease-quad-out w-full cursor-pointer aspect-[4/3]"
    >
      {firstMedia ? (
        <Media
          media={firstMedia}
          alt={service._title}
          className="size-full object-cover transition-transform duration-500 ease-quad-out group-hover:scale-[1.025]"
          quality={100}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={false}
          videoProps={{
            autoPlay: true,
            muted: true,
            loop: true,
            playsInline: true,
            className:
              "absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-quad-out group-hover:scale-[1.025]",
          }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground">No media</span>
        </div>
      )}

      {/* Text v pravom hornom rohu */}
      <div className="absolute top-0 right-0 bg-[#ffffff] text-black px-3 py-1.5 rounded-bl-[6px] hover:rounded-bl-[18px] transition-[border-radius] duration-300 ease-quad-out">
        <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl whitespace-nowrap transition-all duration-300 ease-quad-out group-hover:text-base sm:group-hover:text-lg md:group-hover:text-xl lg:group-hover:text-xl xl:group-hover:text-2xl 2xl:group-hover:text-2xl">
          {service._title}
        </h3>
      </div>
    </TransitionTrigger>
  );
}
