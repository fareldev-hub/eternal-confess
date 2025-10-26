import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface LoveSliderProps {
  value: number;
  onChange: (value: number) => void;
  label?: string;
}

export const LoveSlider = ({ value, onChange, label }: LoveSliderProps) => {
  return (
    <div className="w-full space-y-4">
      {label && (
        <p className="text-xl text-white/90 font-medium text-center">
          {label} <span className="text-pink-300 font-bold text-2xl">{value}%</span>
        </p>
      )}
      <Slider
        value={[value]}
        onValueChange={(vals) => onChange(vals[0])}
        max={100}
        step={1}
        className="w-full"
      />
    </div>
  );
};
