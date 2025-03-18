"use client"

import { useState } from "react";
import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import FilterBar from "@/app/(shop)/category/filter"; 
import Breadcrumb from "@/components/ui/Breadcrumb/breadcrumb";
import Dropdown from "@/components/ui/dropdown/dropdown";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params; 
  const [selectedFilter, setSelectedFilter] = useState("all");
  
        const labels: Record<Category, string> = {
          men: "para hombres",
          women: "para mujeres",
          kid: "para niños",
          unisex: "para todos",
          };

            // Filtramos los productos según la categoría seleccionada
            const filteredProducts = seedProducts.filter((product) => {
              return product.gender === id && (selectedFilter === "all" || product.category === selectedFilter);
            });

      return (
      <>
      {/* Miga de pan*/} 
      <Breadcrumb categories={["Shop", labels[id]]} />
      {/* Barra de Filtros */}
      <div className="ml-4">  {/* Agrega un margen izquierdo */}
        <FilterBar selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      </div>

      {/* Grid de Productos */}
      <ProductGrid products={filteredProducts} />
    </>
  );
}
