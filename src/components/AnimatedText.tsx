import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  texts: string[];
  delay?: number;
  onComplete?: () => void;
}

export const AnimatedText = ({ texts, delay = 1800, onComplete }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < texts.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, texts.length, delay, onComplete]);

  return (
    <div className="space-y-4 min-h-[200px] flex flex-col justify-center">
      {texts.map((text, index) => (
        <p
          key={index}
          className={cn(
            "text-lg md:text-xl text-white/95 transition-all duration-500",
            index === currentIndex ? "opacity-100 animate-fade-in" : "opacity-0 absolute"
          )}
        >
          {text}
        </p>
      ))}
    </div>
  );
};
