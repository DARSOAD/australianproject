"use client";

import React from "react";
import Link from "next/link";

interface Product {
  slug: string;
  name: string;
  price: number;
  membershipPrice: number;
  images: string[];
}

interface Props {
  products: Product[];
}

export const SimilarProducts: React.FC<Props> = ({ products }) => {
  return (
    <div className="mt-16">
      <h3 className="text-gray-500 font-semibold text-sm mb-4 uppercase tracking-wide">
        Similar Products
      </h3>

      <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
        {products.map((product) => (
          <Link key={product.slug} href={`/product/${product.slug}`} className="min-w-[200px] bg-white rounded-xl shadow-sm p-4 flex flex-col items-center hover:shadow-md transition">
            <img
              src={product.images?.[0] || "/imgs/placeholder.jpg"}
              alt={product.name}
              className="w-36 h-36 object-contain mb-4"
            />
            <p className="text-sm text-gray-700 font-medium text-center">{product.name}</p>
            <p className="text-sm text-blue-500 font-semibold">${product.price.toFixed(2)}</p>
            <p className="text-sm text-green-600 font-semibold">${product.membershipPrice.toFixed(2)} <span className="text-[10px] uppercase text-green-500">Price Membership</span></p>
            <div className="text-gray-400 mt-2">
              🛒
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
