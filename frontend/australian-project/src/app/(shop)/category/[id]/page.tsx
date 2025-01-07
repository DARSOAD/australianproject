import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default async function categoryPage({ params }: Props) {
  const { id } = await params; // Usa `await` aquí para evitar el error
  const products = seedProducts.filter(product => product.gender === id)
  const labels: Record<Category, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  } 

  // if (id === 'kid'){
  //   notFound();
  // }
  return (
    <>
      <Title title={`Articulos de ${labels[id]}`} subtitle={"Todos los productos"} className={"mb-2"} />
      <ProductGrid products={products} />
    </>
  );
}
