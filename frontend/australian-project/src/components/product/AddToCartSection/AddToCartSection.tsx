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
    <div className="space-y-3 flex flex-col items-center">
    <div className="inline-flex items-center bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition gap-4">  
    <button onClick={onAddToCart} className="text-xm font-medium">
      Add to Cart
    </button>

    {/* Separador */}
    <span className="text-xl font-semibold">|</span>

    {/* Precio + precio membership juntos */}
    <div className="flex items-center gap-2">
      <span className="text-base font-semibold">${price.toFixed(2)}</span>

      <div className="bg-green-700 rounded-full px-3 py-1 text-sm font-medium text-white">
        Price membership: ${membershipPrice.toFixed(2)}
      </div>
    </div>
  </div>

  {/* Detalles de abajo */}
  <div className="text-sm text-gray-600 text-center flex flex-col sm:flex-row  gap-2">
    <p>
      <span className="text-gray-400">Delivery:</span>{" "}
      <span className="font-medium">{formattedRange}</span>
    </p>
    <span className="hidden sm:inline-block">|</span>
    <p>
      <span className="text-gray-400">Plan:</span>{" "}
      <span className="font-medium">${installment} /4</span>
    </p>
    <span>
      <SiAfterpay />
    </span>
  </div>
</div>

  );
};
