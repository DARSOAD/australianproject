'use client'

import { useState } from "react";
import { ProductTop } from "@/interfaces";
import Image from 'next/image';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


interface Props {
    product: ProductTop;
}

export const ProductSliderItem = ({ product }: Props) => {
    const [displayImage, setDisplayImage] = useState(product.images[0])
    return (
        <div className="flex flex-col md:flex-row items-center  bg-white rounded-b-[175px] w-fit overflow-hidden shadow-lg h-64">
            {/* Imagen del producto, Detalles del producto, Precio y Descuento, Botón con precio de membresía */}
            <div className="flex justify-center items-center h-2/3">
                <img
                    src={`/products/${displayImage}`}
                    alt={product.title}
                    className="!w-1/2 !h-auto !object-contain"
                />
                {/* Detalles del producto, Precio y Descuento, Botón con precio de membresía */}
                <div className="flex-col items-center justify-center h-full pt-10 space-y-2">
                    {/* Detalles del producto */}            
                    <div className="text-left pl-2">
                        <h2 className="font-semibold text-gray-700 text-xs">{product.title}</h2>
                    </div>
                    {/* Precio y descuento,  Botón con precio de membresía */}
                    <div className="text-white flex items-center justify-center space-x-2 max-w-xs p-2 bg-blue-600 rounded-full">
                        <span className="line-through text-xs">${(product.price * 1.2).toFixed(2)}</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-xs">${product.price.toFixed(2)}</span>
                        {/* <span className="text-xs scale-50">Price membership:</span>
                        <span className="text-xs scale-50"><strong>${(product.price * 0.85).toFixed(2)}</strong></span> */}
                    </div>

                    <p className="text-gray-400 text-xs pl-2">Off today!</p>
                </div>
            </div>

            
                
        </div>
    
    )
}
