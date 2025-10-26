import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StoryCardProps {
  children: ReactNode;
  className?: string;
}

export const StoryCard = ({ children, className }: StoryCardProps) => {
  return (
    <div
      className={cn(
        "relative backdrop-blur-2xl bg-white/15 border border-white/30",
        "rounded-3xl p-8 md:p-12 shadow-2xl",
        "max-w-md w-full mx-4",
        "animate-scale-in",
        className
      )}
      style={{
        boxShadow: "0 10px 40px -10px hsl(330 81% 60% / 0.4), 0 0 30px hsl(330 81% 60% / 0.2)",
      }}
    >
      {children}
    </div>
  );
};
