'use client';

import { FeaturedProject } from './featured-project';
import { mockProjects } from '@/utils/mock-data';

export function Featured() {
  return (
    <section className="relative flex items-center justify-center px-sides m-0 p-0">
      <div className="w-full m-0 p-0">
        <FeaturedProject project={mockProjects.items[0]} />
      </div>
    </section>
  );
}
