'use client';

import { FaCcVisa } from 'react-icons/fa6';
import { FaCcMastercard } from 'react-icons/fa';

export default function CardSelector() {
  return (
    <div className="flex gap-4 ">
      {/* Tarjeta VISA */}
      <div className="w-56 h-32 rounded-xl p-3 bg-gradient-to-tr from-pink-400 to-orange-300 text-white shadow-md relative">
        <p className="text-xs">2333 3444 2676 1203</p>
        <p className="text-xs mt-1">
          MONTH/YEAR
          <br />
          04/05
        </p>
        <p className="absolute bottom-3 right-3 font-bold">TONY NGUYEN</p>
        <FaCcVisa className="mt-8" />
      </div>

      {/* Tarjeta MASTERCARD */}
      <div className="w-56 h-32 rounded-xl p-3 bg-gradient-to-tr from-purple-400 to-yellow-300 text-white shadow-md relative">
        <p className="text-xs">1562 3444 2678 2525</p>
        <p className="text-xs mt-1">
          MONTH/YEAR
          <br />
          04/05
        </p>
        <p className="absolute bottom-3 right-3 font-bold">T. NGUYEN</p>
        <FaCcMastercard className="mt-8" />
      </div>
    </div>
  );
}

//Si mañana traes las tarjetas desde una API, solo modificas CardSelector.tsx.