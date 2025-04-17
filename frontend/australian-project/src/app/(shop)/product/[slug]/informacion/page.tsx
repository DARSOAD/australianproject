// src/app/product/[slug]/Informacion/page.tsx

import { Searchbar } from "@/components/ui/searchInput/Searchbar";
import Link from "next/link";


export default function InfoPage() {
    return (
      <div className="w-full  py-10">
        {/* ENCABEZADO SOLO EN DESKTOP */}
      <div className="hidden lg:block">
        <div className="flex w-full py-8 items-center justify-between">
          {/* Botón a inicio */}
          <div className="flex-1 pr-4">
            <button className="btn-primary w-full !rounded-r-full !rounded-l-none ml-auto">
              <Link href="/">Best deals with membership</Link>
            </button>
          </div>

          {/* Barra de búsqueda */}
          <div className="flex-1 pl-4">
            <Searchbar />
          </div>
        </div>
      </div>
      </div>
      
    );
  }
  