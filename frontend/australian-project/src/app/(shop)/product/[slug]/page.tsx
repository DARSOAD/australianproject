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

    
 
  {/* Imagen principal */}
  <div className=" max-w-[500px] mx-[10%] justify-center bg-white">
    <img
      src={product.images?.[0] || "/images/default.png"}
      alt={product.name}
      className="w-full max-w-[500px] h-[300px] object-contain rounded-xl shadow-md mb-6 "
    />
  </div>

  {/* Contenido (título y descripción) */}
  <main className="max-w-2xl mx-[10%] px-4 ">
    <h1 className="text-sm font-normal mb-4">{product.name}</h1>
    <p className="text-gray-700 text-justify mb-6 text-xs font-normal">{product.description}</p>

    {/* Carrusel o galería */}
    <div className="w-full max-w-md mx-auto mt-6">
      {/* Mobile */}
      <div className=" lg:hidden block w-full max-w-md mx-auto overflow-hidden rounded-md shadow-sm h-[200px]">
        <ProductMobileSlideshow images={product.images} title={product.title} />
      </div>

      {/* Desktop */}
      <div className="hidden md:block h-[200px]">
        <ProductSlideshow images={product.images} title={product.title} />
      </div>
    </div>
  </main>
</>

  );
}  