import { Button } from "@/components/ui/button";
import { portfolioData, socialLinks } from "@/app/lib/data";
import { Mail, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Contact() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="py-16 md:py-24 bg-card" ref={ref}>
      <div
        className={`container text-center max-w-2xl mx-auto transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-muted-foreground">
          I'm open to new opportunities and collaborations. If you have a
          project in mind or just want to connect, feel free to reach out.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Resume Download Button */}
          <Button size="lg" asChild className="w-full sm:w-auto">
            <a
              href="/assets/resume/Sammer Hussain Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          {/* Email Button */}
          <Button size="lg" asChild className="w-full sm:w-auto">
            <a href={`mailto:${portfolioData.email}`}>
              <Mail className="mr-2 h-5 w-5" />
              Send an Email
            </a>
          </Button>

          {/* Social Buttons */}
          {socialLinks
            .filter((s) => s.name !== "Email")
            .map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="mr-2 h-5 w-5" />
                  Connect on {social.name}
                </a>
              </Button>
            ))}
        </div>
      </div>
    </section>
  );
}
