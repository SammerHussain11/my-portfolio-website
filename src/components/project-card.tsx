"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import VideoModal from "@/components/video-modal";

// Update the Project type to match your actual data structure
type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  // Remove liveUrl since it doesn't exist in your data
  // liveUrl: string; // ❌ REMOVE THIS
  demoVideoUrl?: string; // ✅ This exists in your data
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  const assetImageMap: Record<string, string> = {
    "project-fredcoach": "/assets/fredcoach-project-pic.png",
    "project-plagiarism": "/assets/content-examiner-project-pic.png",
    "project-object-detection": "/assets/live-object-detection-pic.png",
  };

  const assetImage = assetImageMap[project.imageUrl];
  const projectImage = PlaceHolderImages.find((p) => p.id === project.imageUrl);
  const imageToUse = assetImage || projectImage;

  return (
    <>
      <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-xl">
        {imageToUse && (
          <div className="aspect-video overflow-hidden">
            <Image
              src={assetImage || projectImage?.imageUrl || ""}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={projectImage?.imageHint}
            />
          </div>
        )}

        <CardHeader>
          <CardTitle className="font-headline text-xl">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground mb-4">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-start gap-2">
          {/* GitHub Button */}
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>

          {/* View Demo Button - Fixed logic */}
          <Button
            variant="default"
            size="sm"
            onClick={() => {
              if (project.demoVideoUrl) {
                setOpen(true);
              } else {
                // If you add liveUrl to your projects in the future
                // window.open(project.liveUrl || "#", "_blank");
                console.log("No demo video available");
              }
            }}
            disabled={!project.demoVideoUrl} // Optional: disable if no video
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Demo
          </Button>
        </CardFooter>
      </Card>

      {/* Video Modal */}
      {project.demoVideoUrl && (
        <VideoModal
          open={open}
          onOpenChange={setOpen}
          title={project.title}
          videoSrc={project.demoVideoUrl}
        />
      )}
    </>
  );
}
