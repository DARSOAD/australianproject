import {ProductMobileSlideshow} from "@/components/product/slideshow/ProductMobileSlideshow";
import {ProductSlideshow} from "@/components/product/slideshow/ProductSlideshow";
import { QuantitySelector, SizeSelector } from "@/components";
import { Searchbar } from "@/components/ui/searchInput/Searchbar";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

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

export default async function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const images = product?.colors?.[0]?.images || [];

  return (
    <>
      {/* ENCABEZADO */}
      <div className="hidden lg:block">
        <div className="flex w-full py-8 items-center justify-between">
          {/* Botón */}
          <div className="flex-1 pr-4">
            <button className="btn-primary w-full !rounded-r-full !rounded-l-none ml-auto">
              <Link href="/">Best deals with membership</Link>
            </button>
          </div>

          {/* Searchbar */}
          <div className="flex-1 pl-4">
            <Searchbar />
          </div>
        </div>
      </div>

      {/* Carrusel del producto móvil */}
      <div className="lg:hidden">
        <ProductMobileSlideshow images={images} />
      </div>

      {/* Carrusel del producto pc */}
      <div className="hidden lg:block px-28">
        <ProductSlideshow images={images} />
      </div>
    </>
  );
}
