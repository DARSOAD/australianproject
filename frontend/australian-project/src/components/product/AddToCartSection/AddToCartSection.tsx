"use client";
import { SiAfterpay } from "react-icons/si";


import React from "react";

interface Props {
  price: number;
  membershipPrice: number;
  onAddToCart: () => void;
}

export const AddToCartSection: React.FC<Props> = ({ price, membershipPrice, onAddToCart }) => {
  // Fecha estimada de entrega (hoy + 15 días)
  const today = new Date();
  const deliveryStart = new Date(today);
  const deliveryEnd = new Date(today);
  deliveryStart.setDate(today.getDate() + 15);
  deliveryEnd.setDate(today.getDate() + 19);

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

  const formattedRange = `${formatDate(deliveryStart)}–${formatDate(deliveryEnd)}`;
  const installment = (price / 4).toFixed(2);

  return (
    <div className="space-y-3">
      {/* Botón curvo y contenido */}
      <div className="flex items-center justify-between bg-green-500 text-white px-4 py-3 rounded-full w-full hover:bg-green-600 transition">
        <div className="flex items-center gap-2">
          <button onClick={onAddToCart} className="text-xm font-medium lg:ml-6">
            Add to Cart
          </button>
          <span className="text-xl font-semibold lg:ml-2">|</span>
          <span className="text-base font-semibold lg:ml-4">${price.toFixed(2)}</span>
        </div>

        {/* Precio con membership */}
        <div className="bg-green-700 rounded-full px-3 py-1 text-sm font-medium text-white">
          Price membership: ${membershipPrice.toFixed(2)}
        </div>
      </div>

      {/* Detalles abajo */}
      <div className="text-sm text-gray-600 text-center flex flex-col sm:flex-row justify-center gap-2">
        <p>
          <span className="text-gray-400">Delivery:</span>{" "}
          <span className="font-medium">{formattedRange}</span>
        </p>
        <span className="hidden sm:inline-block">|</span>
        
        <p>
            <span className="text-gray-400">Plan:</span>{" "}
          <span className="font-medium">${installment} /4</span>
        </p>
        <span><SiAfterpay /></span>
      </div>
    </div>
  );
};
