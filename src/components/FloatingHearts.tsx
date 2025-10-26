import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    setHearts(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((i) => (
        <Heart
          key={i}
          className="absolute text-pink-300/30"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
            fontSize: `${20 + Math.random() * 30}px`,
          }}
          fill="currentColor"
        />
      ))}
      <style>{`
        .lucide-heart {
          animation: heart-float linear infinite;
        }
      `}</style>
    </div>
  );
};
