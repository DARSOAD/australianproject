'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const ProductSlideshow = ({ images, title, className }: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <div className={className}>
            <Swiper
                // style={{
                //     '--swiper-navigation-color': '#fff',
                //     '--swiper-pagination-color': '#fff',
                // } as React.CSSProperties}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                    delay:2500
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay ]}
                className="mySwiper2"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={image}>
                       <div className="mx-auto max-h-[500px] w-auto relative aspect-auto">
                    <Image
                        src={image}
                        alt="Product image"
                        width={600} // puedes ajustar esto si quieres que sea más pequeño
                        height={0} // Next.js lo necesita aunque sea 0
                        className="object-contain rounded-lg"
                        priority={index === 0}
                    />
                    </div>

                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={image}>
                        <Image
                            width={300}
                            height={300}
                            src={image}
                            alt="Product image"
                            className="w-full h-full  object-cover rounded-lg"
                            priority={index === 0} // Añadir prioridad solo a la primera imagen
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
