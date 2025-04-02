'use client';

import Image from 'next/image';
import { LuPencilLine } from "react-icons/lu";

const suggestedProducts = [
  {
    id: 1,
    image: '/img/products/pillow.png',
    label: '',
  },
  {
    id: 2,
    image: '/img/products/walker.png',
    label: 'Add more',
  },
  {
    id: 3,
    image: '/img/products/device.png',
    label: 'Add more',
  },
];

export const SuggestedProducts = () => {
  return (
    <div className="flex items-center space-x-2 lg:space-x-12  ">
      {suggestedProducts.map((item, index) => (
        <div key={item.id} className="flex items-center space-x-1 lg:space-x-12">
          {/* Producto */}
          <div className="relative flex flex-col items-center">
            {item.label && (
              <span className="text-xs text-gray-400 mb-1">{item.label}</span>
            )}
            <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
              <Image
                src={item.image}
                alt="product"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            {/* Botón editar */}
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-white rounded-full shadow p-1">
              <LuPencilLine size={14} className="text-gray-400" />
            </div>
          </div>

          {/* Separador "+" (excepto después del último) */}
          {index < suggestedProducts.length - 1 && (
            <div className="text-gray-300 text-2xl font-light">+</div>
          )}
        </div>
      ))}
    </div>
  );
};
