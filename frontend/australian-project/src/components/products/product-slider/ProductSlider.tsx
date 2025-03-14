'use client'

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ProductTop } from "@/interfaces";
import { ProductSliderItem } from "./ProductSliderItem";

interface Props {
    productsTop: ProductTop[];
}

export const ProductSlider = ({ productsTop }: Props) => {    
    return (
            <section className="flex flex-col items-center justify-center h-72">
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                className="w-full max-w-lg max-h-full"
            >
            {productsTop.map(product => (                
                <SwiperSlide key={product.id}>
                    <ProductSliderItem product={product} />
                </SwiperSlide>
            ))}
            {/* Personalización con Tailwind */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background-color: #6b7280 !important; /* bg-gray-500 */
                    border-radius: 9999px !important; /* rounded-full */
                    opacity: 0.5 !important;
                    transition: all 300ms ease-in-out !important;
                }

                .swiper-pagination-bullet-active {
                    background-color: #8f9193 !important; /* bg-gray-700 */
                    width: 1rem !important; /* w-8 */
                    height: 0.5rem !important; /* h-2 */
                    border-radius: 9999px !important; /* rounded-full */
                    opacity: 1 !important;
                }
            `}</style>
            </Swiper>
        </section>
        
    );
};

export default ProductSlider;
