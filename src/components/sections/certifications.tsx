import { certifications } from "@/app/lib/data";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Certifications() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="certifications" className="py-16 md:py-24" ref={ref}>
      <div className="container">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            My professional credentials and qualifications.
          </p>
        </div>
        <div
          className={`grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={{
                transitionDelay: isInView ? `${index * 50}ms` : "0ms",
              }}
            >
              <Card className="flex items-center p-4">
                <cert.icon className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                <div className="flex-grow">
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    Issuer: {cert.issuer}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
