"use client";

import { useMemo } from "react";
import { projects } from "@/app/lib/data";
import ProjectCard from "@/components/project-card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ProjectsProps {
  selectedSkill: string | null;
}

export default function Projects({ selectedSkill }: ProjectsProps) {
  const filteredProjects = useMemo(() => {
    if (!selectedSkill) return projects;
    return projects.filter((project) =>
      project.tags.some(
        (tag) => tag.toLowerCase() === selectedSkill.toLowerCase()
      )
    );
  }, [selectedSkill]);

  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="bg-card py-16 md:py-24" ref={ref}>
      <div className="container">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            Project Portfolio
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A selection of my work in AI and software development.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-500 hover:scale-105 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isInView ? `${index * 100}ms` : "0ms",
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No projects found for the selected skill.
          </p>
        )}
      </div>
    </section>
  );
}
