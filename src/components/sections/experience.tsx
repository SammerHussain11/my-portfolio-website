import { experiences, education } from "@/app/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
              {experiences.map((exp, index) => (
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
                  <p className="text-sm font-medium text-primary">
                    {exp.company}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent-foreground mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline text-2xl font-semibold mb-6">
              Education
            </h3>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  {education.institution}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{education.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {education.duration}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
