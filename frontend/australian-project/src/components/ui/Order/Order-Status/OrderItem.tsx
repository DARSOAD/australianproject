'use client'

import Image from 'next/image'
import { QuantitySelector } from '@/components/product/quantity-selector/QuantitySelector'
import { IoCloseOutline } from 'react-icons/io5'

interface OrderItemProps {
  title: string;
  quantity: number;
  price: number;
  imageUrl?: string;
  onRemove?: () => void;
}

export const OrderItem = ({ title, quantity, price, imageUrl, onRemove }: OrderItemProps) => {
  return (
    <div className="flex items-center justify-between  bg-white shadow-md p-4 rounded-l-full text-xs">

      {/* Imagen + nombre + cantidad */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          )}
        </div>

        <div>
          <p className="font-medium text-sm">{title}</p>
          <QuantitySelector quantity={quantity} />
        </div>
      </div>

      {/* Precio y botón eliminar */}
      <div className="flex items-center space-x-2 lg:mr-36">
        <p className="text-blue-600 font-semibold text-sm mt-8">${price.toFixed(2)}</p>
        {onRemove && (
          <button onClick={onRemove} className="text-gray-400 hover:text-red-500 transition mb-7">
            <IoCloseOutline size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
