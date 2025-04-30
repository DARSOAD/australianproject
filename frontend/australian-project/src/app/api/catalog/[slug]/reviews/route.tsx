// app/api/product/[slug]/reviews/route.ts

import { NextResponse } from "next/server";

const mockReviews = [
  {
    slug: "orthopedic-neck-pillow",
    reviews: [
      {
        autor: "Valeria",
        comentario: "Pillow provides excellent support for extended periods. I love it!",
        rating: 5,
        avatar: "/imgs/users/u1.jpg",
      },
      {
        autor: "Camila",
        comentario: "Súper cómodo, me ayudó con el dolor de cuello.",
        rating: 5,
        avatar: "/imgs/users/u2.jpg",
      },
      {
        autor: "Ana",
        comentario: "Muy útil para descansar mejor.",
        rating: 4,
        avatar: "/imgs/users/u3.jpg",
      },
      {
        autor: "Laura",
        comentario: "Producto excelente, me encantó el diseño.",
        rating: 5,
        avatar: "/imgs/users/u4.jpg",
      },
    ],
  },
];

type ContextType = {
  params: {
    slug: string;
  };
};

export async function GET(req: Request, context: ContextType) {
  const { slug } = context.params;

  const producto = mockReviews.find((r) => r.slug === slug);
  return NextResponse.json(producto?.reviews || []);
}
