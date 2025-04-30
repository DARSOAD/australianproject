import { Searchbar } from "@/components/ui/searchInput/Searchbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ProductSlideshow } from "@/components/product/slideshow/ProductSlideshow";

type Props = {
  params: {
    slug: string;
  };
};

export default async function InfoPage({ params }: Props) {
  const res = await fetch(`http://localhost:3000/api/catalog/${params.slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const product = await res.json();
  const mainImage = product.colors[0].images[0];
  const images = product.colors.flatMap((color) => color.images);

  const maxLength = 800;
  const textoSuperior = product.descripcionLarga.slice(0, maxLength);
  const textoInferior = product.descripcionLarga.slice(maxLength);

  return (
    <div className="w-full p-4 min-h-screen px-6">
      {/* 🟦 ENCABEZADO SOLO EN DESKTOP */}
      <div className="hidden lg:block">
        <div className="flex w-full py-8 items-center justify-between">
          <div className="flex-1 pr-4">
            <button className="btn-primary w-full !rounded-r-full !rounded-l-none ml-auto">
              <Link href="/">Best deals with membership</Link>
            </button>
          </div>
          <div className="flex-1 pl-4">
            <Searchbar />
          </div>
        </div>
      </div>

      {/* ✅ SOLO EN MÓVILES */}
      <div className="block lg:hidden mt-8 space-y-4">
        {/* Imagen */}
        <div className="flex justify-center">
          <Image
            src={mainImage}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg object-contain"
          />
        </div>

        {/* Título */}
        <h2 className="text-2xl font-semibold">{product.name}</h2>

        {/* Descripción corta */}
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {product.description}
        </p>

        {/* ✅ Carrusel visible también en móvil */}
        <div className="mt-4">
          <ProductSlideshow images={images} title={product.name} />
        </div>
      </div>

      {/* ✅ EN PANTALLAS GRANDES */}
      <div className="hidden lg:grid grid-cols-5 gap-8 max-w-[1300px] mx-auto mt-12">
        {/* 🖼️ Columna izquierda: Imagen + descripción larga inferior */}
        <div className="col-span-2 flex flex-col items-start justify-start">
          <Image
            src={mainImage}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-contain"
          />
          <div className="mt-8">
            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
              {textoInferior}
            </p>
          </div>
        </div>

        {/* 🕳️ COLUMNA VACÍA CENTRAL */}
        <div className="col-span-1" />

        {/* 📄 Columna derecha: título + descripción + carrusel */}
        <div className="col-span-2 flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {textoSuperior}
          </p>
          <div className="mt-4">
            <ProductSlideshow images={images} title={product.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
