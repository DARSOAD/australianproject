import { ProductGrid, Title } from "@/components";
import { Searchbar } from "@/components/ui/searchInput/Searchbar";
import ProductSlider from "@/components/products/product-slider/ProductSlider";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";

const products = initialData.products;
const productsTop = initialData.productsTop;

export default function Home() {
  return (
    <>
      {/* <Title title={"Tienda"} subtitle={"Todos los productos"} className={"mb-2"} /> */}
      <ProductSlider productsTop={productsTop}/>
      <Searchbar/>
      <ProductGrid products={products}/>
      
      
    </>
  );
}
