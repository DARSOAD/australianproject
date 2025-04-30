// app/shop/product/[slug]/reviews/page.tsx

"use client";

import { useEffect, useState } from "react";
import { ProductReviewSummary } from "@/components/product/ProductReviewSummary/ProductReviewSummary";
import { Star } from "lucide-react"; // Asegúrate de tener este paquete

interface Comentario {
  autor: string;
  comentario: string;
  rating: number;
  avatar: string;
}

interface Props {
  params: {
    slug: string;
  };
}

export default function ComentariosPage({ params }: Props) {
  const { slug } = params; // Obtenemos el slug del producto
  const [comentarios, setComentarios] = useState<Comentario[]>([]);

  useEffect(() => {
    // Cargar los comentarios desde la API
    fetch(`/api/product/${slug}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Comentarios obtenidos:", data);
        setComentarios(data);
      })
      .catch((error) => {
        console.error("Error al cargar comentarios:", error);
      });
  }, [slug]);

  // Calcular el promedio de las estrellas
  const averageRating = comentarios.length
    ? comentarios.reduce((sum, c) => sum + c.rating, 0) / comentarios.length
    : 0;

  // Obtener los primeros 4 avatares para pasarlos al resumen de reseñas
  const avatars = comentarios.slice(0, 4).map((c) => c.avatar);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
      {/* Resumen de reseñas */}
      <ProductReviewSummary
        productName="Orthopedic Neck Pillow"
        slug={slug}
        reviewsCount={comentarios.length}
        rating={averageRating}
        avatars={avatars}
      />

      {/* Mostrar comentarios */}
      <div className="space-y-6">
        {comentarios.map((c, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-white shadow-lg rounded-2xl"
          >
            <img
              src={c.avatar}
              alt={c.autor}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex space-x-1 text-yellow-500 mb-1">
                {/* Mostrar las estrellas basadas en el rating */}
                {Array.from({ length: c.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-sm text-gray-600">{c.comentario}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
