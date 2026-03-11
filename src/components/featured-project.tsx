import { ProjectItem } from "@/components/ui/project";
import { ProjectItemFragment } from "@/utils/mock-types";

interface FeaturedProjectProps {
  project: ProjectItemFragment;
  className?: string;
}

export function FeaturedProject({ project, className }: FeaturedProjectProps) {
  return (
    <section className={`m-0 p-0 ${className || ''}`}>
      <div className="m-0 p-0">
        <ProjectItem project={project} mode="featured" />
      </div>
    </section>
  );
}
