import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypingTextProps {
  text: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export const TypingText = ({ 
  text, 
  delay = 0, 
  speed = 50,
  onComplete,
  className 
}: TypingTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [displayText, text, started, speed, onComplete]);

  return (
    <span className={cn("inline-block", className)}>
      {displayText}
      {started && displayText.length < text.length && (
        <span className="animate-pulse ml-1">|</span>
      )}
    </span>
  );
};
