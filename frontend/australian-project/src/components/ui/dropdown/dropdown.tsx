import { useState } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

export default function Dropdown({ options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Botón Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 border rounded-full bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {selectedOption}
        <span className="ml-2">▼</span> {/* Flecha de dropdown */}
      </button>

      {/* Menú Desplegable */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-lg">
          {options.map((option, index) => (
            <li
            
              key={index}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
