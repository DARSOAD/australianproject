'use client'
import React, { useState } from "react";
import { TbPencilMinus } from "react-icons/tb";
import { HiMagnifyingGlass } from "react-icons/hi2";



interface InputFieldProps {
  label?: string;
  type?: string;
  value?: string;
  name?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;    // ← Nuevo: Ícono adicional al lado derecho
  pattern?: string;
  required?: boolean;
  placeholder?: string;
  containerClassName?: string;    // ← Nuevo: clases para el contenedor
  inputClassName?: string;        // ← Nuevo: clases para el input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  type ='text',
  value,
  name,
  icon,
  rightIcon,
  pattern,
  required,
  placeholder,
  containerClassName,
  inputClassName,
  onChange,
}: InputFieldProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={containerClassName}>
      {/* Label opcional */}
      {label && <label className="text-gray-500 text-xs">{label}</label>}

      {/* Contenedor interno (flex para iconos, input, etc.) */}
      <div className="relative flex items-center">
        {/* Ícono izquierdo (opcional) */}
        {icon && (
          <span className="mr-2 text-gray-400 flex items-center">
            {icon}
          </span>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          readOnly={isEditing} /// En false porque nnunca la cambias
          pattern={pattern}
          required={required}
          placeholder={placeholder}
          className={`bg-gray-50 rounded-full px-3 py-2 focus:outline-none focus:border-blue-500 shadow-lg 
            text-xs w-full
            ${inputClassName ?? ""}`}
        />

        {/* Ícono de lupa a la derecha dentro del input */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <HiMagnifyingGlass  size={18} />
        </span>
      </div>
    </div>
  );
}
