import { experiences, education } from "@/app/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

export default function Experience() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-16 md:py-24 bg-card" ref={ref}>
      <div className="container">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            Experience & Education
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            My professional journey and academic background.
          </p>
        </div>

        <div
          className={`grid gap-12 lg:grid-cols-2 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h3 className="font-headline text-2xl font-semibold mb-6">
              Work Experience
            </h3>
            <div className="relative flex flex-col gap-8 border-l-2 border-border pl-6 md:pl-8">
              <div className="absolute -left-[2px] top-0 h-full w-0.5 bg-primary"></div>
              {experiences.map((exp, index) => {
                const companyLogos: Record<string, string> = {
                  Decotechs: "/logos/decotechs.png",
                  "CoreTech Innovations": "/logos/coretech-innovation.png",
                };
                const companyLogo = companyLogos[exp.company];

                return (
                  <div key={index} className="relative">
                    <div className="absolute -left-[35px] md:-left-[43px] top-1 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <exp.icon className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {exp.duration}
                    </p>
                    <h4 className="font-headline text-lg font-semibold mt-1">
                      {exp.role}
                    </h4>
                    <div className="flex items-center gap-2 md:gap-3 mt-2">
                      {companyLogo && (
                        <div className="flex-shrink-0 h-6 md:h-7 w-auto">
                          <Image
                            src={companyLogo}
                            alt={exp.company}
                            width={28}
                            height={28}
                            className="h-full w-auto object-contain"
                          />
                        </div>
                      )}
                      <p className="text-sm font-medium text-primary">
                        {exp.company}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent-foreground dark:text-white mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-headline text-2xl font-semibold mb-6">
              Education
            </h3>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 h-12 md:h-14 w-auto">
                    <Image
                      src="/logos/quest-logo.png"
                      alt="Quaid-e-Awam University Logo"
                      width={48}
                      height={48}
                      className="h-full w-auto rounded-sm object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-headline text-lg md:text-xl break-words">
                      {education.institution}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-base">{education.degree}</p>
                </div>
                <div className="space-y-2 border-t pt-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Duration
                    </p>
                    <p className="text-sm text-foreground">
                      {education.duration}
                    </p>
                  </div>
                  {education.cgpa && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        CGPA
                      </p>
                      <p className="text-sm text-foreground">
                        {education.cgpa}
                      </p>
                    </div>
                  )}
                  {education.location && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Location
                      </p>
                      <p className="text-sm text-foreground">
                        {education.location}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
