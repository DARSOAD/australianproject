import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { Searchbar } from "@/components/ui/searchInput/Searchbar";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params:{
    slug: string;
  }
}



async function getProduct(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/catalog/${slug}`, {
      cache: 'no-store',
    });


    if (!res.ok) return undefined;


    return await res.json();
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return undefined;
  }
}


export default async function productPage(props: Props) {

  const { slug } = await props.params;
  const product = await getProduct(slug);

  if (!product){
    notFound();
  }


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

      {/* Imagen y descripción en una fila en pantallas grandes */}
      <div className="max-w-7xl mx-auto px-11 lg:pl-15 lg:ml-44">
        <div className="lg:flex lg:w-4/5 py-8 items-start justify-between lg:px-[10%]">
          {/* Imagen */}
          <div className=" lg:w-1/2 pr-10 mb-6 lg:mb-0 lg:mr-24">
            <img
              src={product.images?.[0] || "/images/default.png"}
              alt={product.name}
              className="w-full h-[300px] object-contain rounded-xl shadow-md"
            />
          </div>

          {/* Descripción */}
          <div className=" px-15 lg:w-1/2 ">
            <h1 className="text-xs font-normal mb-4">{product.name}</h1>
            <p className="text-gray-700 text-justify text-base font-normal mt-6">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Contenedor para la fila (descripción y carrusel) */}
      <div className="lg:flex w-full lg:px-[20%] py-8 items-start justify-center">
        {/* Descripción 2 (Lado izquierdo) */}
        <div className="lg:w-1/2 pr-6 mb-6 lg:mb-0 hidden lg:block">
          <p className="text-gray-700 text-justify text-base font-normal">{product.description2}</p>
        </div>

        {/* Carrusel (Lado derecho) */}
        <div className="lg:w-1/2 pl-6">
          <div className="w-full max-w-md mx-auto mt-6">
            {/* Mobile */}
            <div className="lg:hidden block w-full max-w-md mx-auto overflow-hidden rounded-md shadow-sm h-[200px]">
              <ProductMobileSlideshow images={product.images} title={product.title} />
            </div>

            {/* Desktop */}
            <div className="hidden lg:block h-[150px] max-w-[80%] mx-auto">
              <ProductSlideshow images={product.images} title={product.title} />
            </div>
          </div>
        </div>
      </div>

</>

  );
}  