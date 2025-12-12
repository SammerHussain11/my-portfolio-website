"use client";

import { skills } from "@/app/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

interface SkillsProps {
  selectedSkill: string | null;
  onSkillSelect: (skill: string | null) => void;
}
export default function Skills({ selectedSkill, onSkillSelect }: SkillsProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-16 md:py-24" ref={ref}>
      <div className="container">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            My proficiency in key technologies. Click a skill to filter
            projects.
          </p>
          {selectedSkill && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <p className="text-sm text-muted-foreground">
                Filtering by:{" "}
                <span className="font-semibold text-primary">
                  {selectedSkill}
                </span>
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onSkillSelect(null)}
              >
                Clear filter
              </Button>
            </div>
          )}
        </div>
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{
                transitionDelay: isInView ? `${index * 50}ms` : "0ms",
              }}
            >
              <Card
                className={`flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-accent/50 ${
                  selectedSkill === skill.name
                    ? "bg-accent/80 shadow-md ring-2 ring-primary"
                    : "bg-card"
                }`}
                onClick={() =>
                  onSkillSelect(
                    skill.name === selectedSkill ? null : skill.name
                  )
                }
              >
                {skill.logo && (
                  <div className="mb-2 flex items-center justify-center">
                    <Image
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                )}
                <h4 className="font-semibold text-sm sm:text-base">
                  {skill.name}
                </h4>
                <div className="w-full bg-secondary rounded-full h-1.5 mt-2">
                  <div
                    className="bg-primary h-1.5 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
