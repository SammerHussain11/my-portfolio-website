"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { portfolioData, socialLinks } from "@/app/lib/data";
import profilePic from "@/assets/profile-pic.jpeg";
import { MoveRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Hero() {
  const profileImageUrl = profilePic as string;
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="home" className="py-16 md:py-28" ref={ref}>
      <div
        className={`container grid grid-cols-1 items-center gap-12 md:grid-cols-2 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 className="font-headline text-3xl md:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {portfolioData.name}
          </h1>
          <p className="text-base md:text-lg text-primary font-medium">
            {portfolioData.title}
          </p>
          <p className="max-w-xl mx-auto md:mx-0 text-muted-foreground text-sm md:text-base">
            {portfolioData.summary}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start text-sm">
            <Button asChild size="lg">
              <a href="#contact">
                Contact Me <MoveRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            {socialLinks.map(
              (social) =>
                social.name === "LinkedIn" && (
                  <Button key={social.name} asChild variant="outline" size="lg">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="mr-2 h-5 w-5" />
                      {social.name}
                    </a>
                  </Button>
                )
            )}
          </div>
        </div>
        <div className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 order-1 md:order-2">
          <Image
            src={profileImageUrl}
            alt={`${portfolioData.name} profile`}
            width={400}
            height={400}
            priority
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 24vw"
            className="rounded-full object-cover shadow-lg border-4 border-card w-full h-full"
          />
          <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
