import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StoryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export const StoryButton = ({ 
  children, 
  onClick, 
  variant = "primary",
  className 
}: StoryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300",
        "hover:scale-110 active:scale-95",
        variant === "primary" && [
          "bg-gradient-to-r from-purple-500 to-pink-500",
          "hover:from-purple-600 hover:to-pink-600",
          "shadow-lg hover:shadow-2xl",
          "animate-pulse-glow",
        ],
        variant === "secondary" && [
          "bg-white/20 backdrop-blur-sm border border-white/40",
          "hover:bg-white/30",
        ],
        className
      )}
    >
      {children}
    </Button>
  );
};
