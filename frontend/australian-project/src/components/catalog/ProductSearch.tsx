'use client';

import React, { useState, useEffect } from 'react';
import InputField from '../../components/ui/inputfield/InputField';
import ProductCard from './ProductCard';

const LOCAL_STORAGE_KEY = 'recentSearches';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Cargar historial desde localStorage al iniciar
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setRecentSearches(JSON.parse(stored));
  }, []);

  // Guardar historial cada vez que se hace una búsqueda
  useEffect(() => {
    if (searchTerm.trim() === '') return;

    const delayDebounceFn = setTimeout(() => {
      fetchProducts(searchTerm);

      // Guardar en historial si no existe aún
      if (!recentSearches.includes(searchTerm.trim())) {
        const updatedHistory = [searchTerm.trim(), ...recentSearches].slice(0, 5); // solo los 5 más recientes
        setRecentSearches(updatedHistory);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedHistory));
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const fetchProducts = async (query: string) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/catalog?search=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Error en la búsqueda');
      const data = await response.json();
      setProducts(data);
    } catch (err: any) {
      setError(err.message || 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  const handleRecentClick = (term: string) => {
    setSearchTerm(term);
  };

  const handleClearHistory = () => {
    setRecentSearches([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <div className="p-4">
      <InputField
        placeholder="Search for product "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Historial reciente */}
      <div  className='w-[90%] mx-auto mt-5'>
      {recentSearches.length > 0 && (
        <div className="mt-2 text-sm text-gray-600">
          <div className="flex justify-between items-center mb-1">
            <span className="font-normal text-gray-700">RECENT</span>
            <button onClick={handleClearHistory} className="text-blue-500 text-xs hover:underline">
              CLEAR
            </button>
          </div>
          <ul className="space-y-1">
            {recentSearches.map((item, i) => (
              <li
                key={i}
                onClick={() => handleRecentClick(item)}
                className="cursor-pointer text-gray-500 hover:text-black transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4">
        {loading && <p className="text-gray-400">Buscando productos...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && products.map((product) => (
          <ProductCard key={product.id || product.name} product={product} />
        ))}

        {!loading && !error && products.length === 0 && searchTerm !== '' && (
          <p className="text-gray-500 mt-2">No se encontraron productos.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default ProductSearch;
