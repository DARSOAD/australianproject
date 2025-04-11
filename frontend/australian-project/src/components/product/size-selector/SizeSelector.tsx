"use client";

import clsx from "clsx";

export type Size = string;

interface Props {
  selectedSize: Size;
  availableSizes: Size[];
  onSizeChange: (size: Size) => void;
}

export const SizeSelector = ({ selectedSize, availableSizes, onSizeChange }: Props) => {
  if (!availableSizes || !Array.isArray(availableSizes)) return null;

  return (
    <div className="my-6">
      <h3 className="text-xs font-semibold text-gray-500 text-center mb-4 uppercase tracking-wider">
        Select Size
      </h3>

      <div className="flex items-center justify-center gap-6 overflow-x-auto overflow-y-hidden no-scrollbar px-4">
      {availableSizes.map((size) => {
          const isSelected = size === selectedSize;

          return (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={clsx(
                "transition-all duration-300 font-bold",
                isSelected
                  ? "text-black text-3xl scale-125"
                  : "text-gray-400 text-xl opacity-50 blur-[1px] hover:blur-0 hover:opacity-100"
              )}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};
