import Image from "next/image";
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

type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Map project imageUrl to actual asset images
  const assetImageMap: Record<string, string> = {
    "project-fredcoach": "/assets/fredcoach-project-pic.png",
    "project-plagiarism": "/assets/content-examiner-project-pic.png",
    "project-object-detection": "/assets/live-object-detection-pic.png",
  };

  const assetImage = assetImageMap[project.imageUrl];
  const projectImage = PlaceHolderImages.find((p) => p.id === project.imageUrl);
  const imageToUse = assetImage || projectImage;

  return (
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
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2">
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
        <Button variant="default" size="sm" asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
