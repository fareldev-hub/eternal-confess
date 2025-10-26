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
        "relative backdrop-blur-3xl bg-black/40 border border-white/20",
        "rounded-3xl p-8 md:p-12 shadow-2xl",
        "max-w-md w-full mx-4",
        "animate-scale-in",
        "transition-all duration-500 hover:scale-[1.02]",
        className
      )}
      style={{
        boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px hsl(330 81% 60% / 0.3)",
      }}
    >
      {children}
    </div>
  );
};
