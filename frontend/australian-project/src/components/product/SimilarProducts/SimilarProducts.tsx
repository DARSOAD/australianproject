"use client";

import React from "react";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";

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
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="min-w-[250px] max-w-[270px] w-full h-[340px] bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition relative"
          >
            {/* Imagen */}
            <img
              src={product.images?.[0] || "/imgs/placeholder.jpg"}
              alt={product.name}
              className="w-full h-36 object-contain mb-4"
            />

            {/* Bloque de información al fondo */}
            <div className="mt-auto w-full">
              <p className="text-sm text-gray-700 font-medium mb-1">
                {product.name}
              </p>

              <p className="text-sm text-blue-500 font-semibold mb-1">
                ${product.price.toFixed(2)}
              </p>

              <div className="flex items-center justify-between w-full">
                <div className="text-sm text-green-600 font-semibold">
                  ${product.membershipPrice.toFixed(2)}{" "}
                  <span className="text-[10px] uppercase text-green-500">
                    Price Membership
                  </span>
                </div>

                <BsCart3 className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
