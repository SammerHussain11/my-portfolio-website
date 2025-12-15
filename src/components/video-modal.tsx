"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  videoSrc: string;
}

export default function VideoModal({
  open,
  onOpenChange,
  title,
  videoSrc,
}: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-lg font-semibold">
            {title} – Demo
          </DialogTitle>
        </DialogHeader>

        <video
          src={videoSrc}
          controls
          autoPlay
          playsInline
          className="w-full max-h-[75vh] bg-black object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}
