import React from 'react'

export const Footer = () => {
  return (
    <>
      <div className="fixed bottom-0 flex flex-col items-center gap-4 bg-white w-full">
        {/* Botón verde */}
        <button className="relative flex items-center justify-between w-full max-w-md bg-green-600 text-white font-semibold py-4 px-6 rounded-full shadow-lg">
          <span>Add to Cart</span>
          <span>|</span>
          <span>$30.28</span>
          
          {/* Precio con membresía */}
          <span className="absolute right-2 bg-green-700 text-white text-xs px-3 py-1 rounded-full shadow-md">
            Price membership: $23.05
          </span>
        </button>

        {/* Botón azul */}
        <button className="flex items-center justify-center w-full max-w-md bg-blue-500 text-white font-semibold py-4 px-6 rounded-full shadow-lg">
          BEST PRICES WITH MEMBERSHIP
        </button>
      </div>
    </>
  )
}
