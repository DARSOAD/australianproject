import { notFound } from "next/navigation";
import { ProductClient } from "./ProductClient"; // Importa el componente visual interactivo

interface Props {
  params: {
    slug: string;
  };
}

// Obtiene el producto desde tu API
async function getProduct(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/catalog/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) return undefined;

    return await res.json();
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return undefined;
  }
}

// Componente principal de la página de producto
export default async function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
