import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { TypingText } from "./TypingText";

interface AnimatedTextProps {
  texts: string[];
  delay?: number;
  typingSpeed?: number;
  onComplete?: () => void;
}

export const AnimatedText = ({ 
  texts, 
  delay = 2500, 
  typingSpeed = 50,
  onComplete 
}: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);

  const handleTypingComplete = () => {
    setShowNext(true);
  };

  useEffect(() => {
    if (showNext && currentIndex < texts.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setShowNext(false);
      }, delay);
      return () => clearTimeout(timer);
    } else if (currentIndex === texts.length - 1 && showNext && onComplete) {
      onComplete();
    }
  }, [showNext, currentIndex, texts.length, delay, onComplete]);

  return (
    <div className="space-y-4 min-h-[200px] flex flex-col justify-center">
      {texts.map((text, index) => (
        <div
          key={index}
          className={cn(
            "text-lg md:text-xl text-white/95 transition-all duration-700",
            index === currentIndex 
              ? "opacity-100 translate-y-0" 
              : index < currentIndex 
              ? "opacity-0 -translate-y-4 absolute" 
              : "opacity-0 translate-y-4 absolute"
          )}
        >
          {index === currentIndex && (
            <TypingText 
              text={text} 
              speed={typingSpeed}
              onComplete={handleTypingComplete}
            />
          )}
        </div>
      ))}
    </div>
  );
};
