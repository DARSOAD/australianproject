'use client';

import { useState } from 'react';

const options = [
  {
    id: 'retail',
    label: ['Retail price'],
    prices: ['$30.28', '$0.00', '$0.00'],
    color: 'text-blue-500',
  },
  {
    id: 'membership',
    label: ['Price membership'],
    prices: ['$23.50', '$50.63', '$45.90'],
    color: 'text-blue-500',
  },
  {
    id: 'membership-2',
    label: ['Price membership', 'more 2 items'],
    prices: ['$18.50', '$43.50', '$36.70'],
    color: 'text-green-600',
  },
];

export const PriceOptions = () => {
  const [selected, setSelected] = useState('retail');

  return (
    <div className="space-y-3 mt-6 ml-8 lg:mr-44 lg:ml-0">
      {options.map((option) => (
        <label
          key={option.id}
          className="flex items-start justify-between cursor-pointer"
        >
          {/* Izquierda: radio + texto en columna */}
          <div className="flex items-start space-x-2 w-2/5">
            <input
              type="radio"
              name="pricing"
              checked={selected === option.id}
              onChange={() => setSelected(option.id)}
              className="w-4 h-4 accent-green-600"
            />
            <div className="text-xs leading-5">
              {/* ✅ Esto cambia la forma de mostrar los labels */}
              <div className={`${selected !== option.id ? 'text-gray-400' : 'text-gray-800'}`}>
                {option.label.map((line, i) => (
                  <span
                    key={i}
                    className="block lg:inline"
                  >
                    {line}{' '}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Derecha: precios con grid alineado y margen derecho */}
          <div className="grid grid-cols-3 gap-x-4 w-3/5 text-right pr-4 lg:pr-0">
            {option.prices.map((price, i) => (
              <span
                key={i}
                className={`text-xs font-semibold ${option.color}`}
              >
                {price}
              </span>
            ))}
          </div>
        </label>
      ))}
    </div>
  );
};
