"use client";

import React from "react";
import clsx from "clsx";

interface ColorOption {
  name: string;
  hex: string;
}

interface Props {
  colors: ColorOption[];
  selectedColor: string;
  onColorChange: (colorName: string) => void;
}

export const ColorSelector: React.FC<Props> = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className="my-6">
      <h3 className="text-sm font-semibold text-gray-500 text-center mb-4 uppercase tracking-wider">
        Select Color
      </h3>

<div className="flex items-center justify-center gap-6 overflow-x-auto overflow-y-hidden no-scrollbar px-4 py-4">
        {colors.map((color) => {
          const isSelected = color.name === selectedColor;

          return (
            <button
              key={color.name}
              onClick={() => onColorChange(color.name)}
              className={clsx(
                "w-8 h-8 rounded-full transition-all duration-300",
                isSelected
                  ? "scale-125 blur-0 shadow-md"
                  : "scale-90 blur-[1px] opacity-60 hover:blur-0 hover:opacity-100"
              )}
              style={{ backgroundColor: color.hex }}
            />
          );
        })}
      </div>
    </div>
  );
};
