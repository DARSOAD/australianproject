'use client'

import { useState } from "react";
import { Product } from "@/interfaces";
import Image from 'next/image';
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { secondaryFont } from "@/config/fonts";


interface Props {
    product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
    const [displayImage, setDisplayImage] = useState(product.images[0])
    return (
        <div className='rounded-3xl overflow-hidden fade-in shadow-2xl'>
            <Link href={`/product/${product.slug}`}>
                <Image
                    src={`/products/${displayImage}`}
                    alt={product.title}
                    className="w-full object-cover rounded-md"
                    width={500}
                    height={500}
                    onMouseEnter={() => setDisplayImage(product.images[1])}
                    onMouseLeave={() => setDisplayImage(product.images[0])}
                />
            </Link>
            <div className='p-4 flex flex-col'>
                <Link className={`${secondaryFont.className} text-[#131313] hover:text-blue-600`} href={`/product/${product.slug}`}>
                    {product.title}
                </Link>
                <span className='text-blue-600'>${product.price}</span>
                <div className='text-green-600 flex items-center justify-between'>
                    <div className="flex items-center gap-2">
                        <span>${product.price}</span>
                        {/* Clase responsiva para "PRICE MEMBERSHIP" */}
                        <span className={`${secondaryFont.className} text-[50%] sm:text-[60%] lg:text-[80%]`}>PRICE MEMBERSHIP</span>
                    </div>
                    <IoCartOutline className="w-5 h-5 text-gray-700 ml-auto" /> {/* Icono de carrito */}
                </div>
            </div>

        </div>
    )
}
