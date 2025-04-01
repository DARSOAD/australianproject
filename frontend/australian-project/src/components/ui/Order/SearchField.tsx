'use client';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";


export default function SearchField() {
  return (
    <div className="w-full max-w-sm hidden lg:block">
      <div className="relative flex items-center h-10 bg-gray-50 rounded-full shadow-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-4 pr-10 bg-transparent focus:outline-none text-sm text-gray-700"
        />
        <HiOutlineMagnifyingGlass />

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        
      </div>
    </div>
  );
}
