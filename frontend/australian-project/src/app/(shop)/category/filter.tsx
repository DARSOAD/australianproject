"use client"

import { useState } from "react";
import Dropdown from "@/components/ui/dropdown/dropdown";

const filterOptions = [
  { id: "all", label: "Ergonomic chairs",},
  { id: "jackets", label: "Ergonomic chairs" },
  { id: "hoodies", label: "Ergonomic chairs"},
  { id: "pants", label: "Ergonomic chairs" },
];


interface FilterBarProps {
    selectedFilter: string;
    setSelectedFilter: (filter: string) => void;
  }
  
  export default function SortAndFilter() {
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
    const [sortOption, setSortOption] = useState("Recomendado"); // Opción activa de ordenamiento
    const [selectedDropdownOption, setSelectedDropdownOption] = useState("Más Vendido"); // Opción interna del menú desplegable
    const [isOpen, setIsOpen] = useState(false);

    const filteredOptions = ["Más Vendido", "Mejor Valorado", "Nuevos"];

  
   
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* 🔹 Filtros Circulares */}
      <div className="flex space-x-4">
    {filterOptions.map((filter) => (
        <div key={filter.id} className="flex flex-col items-center space-y-1">
        {/* Círculo de Filtro */}
        <button
            className={`w-16 h-16 flex items-center justify-center rounded-full border-2 transition-all ${
            selectedFilter === filter.id
                ? "border-blue-500 bg-blue-100"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onClick={() => setSelectedFilter(filter.id)}
        >
            {/* Aquí puedes agregar un icono o imagen si es necesario */}
        </button>

        {/* Nombre de la Categoría */}
        <span className="text-sm text-gray-700">{filter.label}</span>
    </div>
  ))}
    </div>

      {/* 🔹 Botones de Ordenamiento con Estilo Seleccionado */}
      <div className="flex space-x-2 text-sm relative">
        {/* 🔸 Botón de "Recomendado" con menú desplegable */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`px-4 py-2 border rounded-full transition-all flex items-center ${
              sortOption === "Recomendado"
                ? "border-blue-500 text-blue-500 bg-white shadow-md"
                : "border-gray-300 bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Recomendado <span className="ml-2">▼</span>
          </button>

          {/* 🛑 Menú desplegable SOLO si "Recomendado" está activo */}
          {isOpen && (
            <ul className="absolute left-0 mt-2 min-w-[150px] bg-white border rounded-md shadow-lg z-10">
              {filteredOptions.map((option, index) => (
                <li key={index}>
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-gray-200 cursor-pointer ${
                      selectedDropdownOption === option ? "bg-blue-100" : ""
                    }`}
                    onClick={() => {
                      setSelectedDropdownOption(option); // Cambia solo la opción interna del menú
                      setIsOpen(false); // Cierra el menú
                    }}
                    role="menuitem"
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/*  Otros botones ("Más Popular", "Precio") sin menú desplegable */}
        {["Más Popular", "Precio"].map((option) => (
          <button
            key={option}
            className={`px-4 py-2 border rounded-full transition-all ${
              sortOption === option
                ? "border-blue-500 text-blue-500 bg-white shadow-md"
                : "border-white bg-gray-200 hover:bg-white"
            }`}
            onClick={() => {
              setSortOption(option); // Cambia el estado de ordenamiento
              setIsOpen(false); // Cierra el menú desplegable si está abierto
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}