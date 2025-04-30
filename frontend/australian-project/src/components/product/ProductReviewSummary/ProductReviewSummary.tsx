import Link from "next/link";
import { FaCircleInfo } from "react-icons/fa6";
import React from "react";

interface Props {
  productName: string;
  slug: string;
  reviewsCount: number;
  rating: number;
  avatars: string[];
}

export const ProductReviewSummary: React.FC<Props> = ({
  productName,
  reviewsCount,
  rating,
  avatars,
  slug,
}) => {
  return (
    <div className="space-y-2 mt-6 text-center">
      <span className="font-normal text-gray-500">Rehanb</span>

      <div className="flex items-center gap-2 mt-2 justify-center">
        <h1 className="text-xm font-semibold">{productName}</h1>
        <Link href={`/product/${slug}/informacion`}>
          <button className="text-red-600 text-xl hover:scale-110 transition">
            <FaCircleInfo />
          </button>
        </Link>
      </div>

      {/* Contenedor con flex para alinear elementos */}
      <Link href={`/product/${slug}/reviews`} className="w-full">
        <div className="cursor-pointer hover:opacity-80 transition flex flex-col sm:flex-row sm:justify-center sm:gap-4 items-center sm:items-center">
          {/* Avatares de las personas que han dejado reseñas */}
          <div className="flex -space-x-2">
            {avatars.slice(0, 4).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`user-${index}`}
                className="w-8 h-8 rounded-full border-2 border-white shadow"
              />
            ))}
            {avatars.length > 4 && (
              <div className="w-8 h-8 rounded-full bg-gray-300 text-xs flex items-center justify-center font-medium">
                +{avatars.length - 4}
              </div>
            )}
          </div>

          <span className="hidden sm:inline-block">|</span>

          <div className="text-sm text-gray-600 flex flex-col sm:flex-row sm:gap-4">
            <p>
              <span className="font-semibold">Review:</span> {reviewsCount}
            </p>
            <span className="hidden sm:inline-block">|</span>
            <p>
              <span className="font-semibold">Product rate:</span> {rating}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

