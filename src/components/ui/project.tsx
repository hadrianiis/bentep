
import { cn } from "@/lib/utils";
import { Media } from "@/components/ui/media";
import { TransitionTrigger } from "./transition-trigger";
import { ProjectItemFragment } from "@/utils/mock-types";

interface ProjectItemProps {
  project: ProjectItemFragment;
  mode: "featured" | "grid";
  className?: string;
}

export function ProjectItem({ project, mode, className }: ProjectItemProps) {
  const firstMedia = project.media.items[0]?.media;

  return (
    <TransitionTrigger
      href={`/projects/${project._slug}`}
      className={cn(
        className,
        "group block relative overflow-hidden bg-muted rounded-[6px] hover:rounded-[18px] transition-[border-radius] duration-300 ease-quad-out w-full cursor-pointer",
        mode === "featured" ? "aspect-square md:aspect-video" : "aspect-square"
      )}
    >
      {firstMedia ? (
        <Media
          media={firstMedia}
          alt={project._title}
          className="size-full mr-4 object-cover transition-transform duration-500 ease-quad-out group-hover:scale-[1.025]"
          quality={100}
          sizes={
            mode === "featured"
              ? "100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
          priority={mode === "featured"}
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

    </TransitionTrigger>
  );
}
