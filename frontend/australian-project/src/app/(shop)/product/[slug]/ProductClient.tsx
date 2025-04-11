"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductMobileSlideshow } from "@/components/product/slideshow/ProductMobileSlideshow";
import { ProductSlideshow } from "@/components/product/slideshow/ProductSlideshow";
import { SizeSelector } from "@/components";
import { ColorSelector } from "@/components/product/ColorSelector/ColorSelector";
import { Searchbar } from "@/components/ui/searchInput/Searchbar";
import { titleFont } from "@/config/fonts";
import { AddToCartSection } from "@/components/product/AddToCartSection/AddToCartSection";
import { ProductReviewSummary } from "@/components/product/ProductReviewSummary/ProductReviewSummary";
import { SimilarProducts } from "@/components/product/SimilarProducts/SimilarProducts";




export function ProductClient({ product }: { product: any }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const colorObj = product.colors.find((c: any) => c.name === selectedColor);
  const images = colorObj?.images || [];

  return (
    <>
      {/* ENCABEZADO SOLO EN DESKTOP */}
      <div className="hidden lg:block">
        <div className="flex w-full py-8 items-center justify-between">
          {/* Botón a inicio */}
          <div className="flex-1 pr-4">
            <button className="btn-primary w-full !rounded-r-full !rounded-l-none ml-auto">
              <Link href="/">Best deals with membership</Link>
            </button>
          </div>

          {/* Barra de búsqueda */}
          <div className="flex-1 pl-4">
            <Searchbar />
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* COLUMNA IZQUIERDA: SLIDESHOW + REVIEWS */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="h-[400px] overflow-hidden rounded-lg">
              <div className="hidden lg:block">
                <ProductSlideshow images={images} />
              </div>
              <div className="block lg:hidden">
                <ProductMobileSlideshow images={images} />
              </div>
            </div>

            {/* COMENTARIOS Y NOMBRE DEL PRODUCTO */}
            <ProductReviewSummary
              productName={product.name}
              reviewsCount={52}
              rating={4.9}
              avatars={[
                "/imgs/users/u1.jpg",
                "/imgs/users/u2.jpg",
                "/imgs/users/u3.jpg",
                "/imgs/users/u4.jpg",
                "/imgs/users/u5.jpg",
              ]}
            />
          </div>

          {/* COLUMNA DERECHA: DETALLES DEL PRODUCTO */}
          <div className="w-full lg:w-1/2 space-y-4 lg:mt-24">
            {/* Tallas disponibles */}
            {product.sizes?.length > 0 && (
              <SizeSelector
                availableSizes={product.sizes}
                selectedSize={selectedSize}
                onSizeChange={setSelectedSize}
              />
            )}

            {/* Colores disponibles */}
            <ColorSelector
              colors={product.colors}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
            />

            <div className="h-6" />

            {/* Botón de compra */}
            <AddToCartSection
              price={product.price}
              membershipPrice={product.membershipPrice}
              onAddToCart={() => {
                console.log("Agregar al carrito:", {
                  product,
                  selectedColor,
                  selectedSize,
                });
              }}
            />

            {/* Descripción del producto */}
            <p className="text-xs text-gray-600">{product.description}</p>
          </div>
        </div>
        
      </div>
    </>
  );
}
