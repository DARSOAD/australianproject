'use client'
import React, { useState } from "react";
import { IoPencil } from "react-icons/io5";

interface InputFieldProps {
    label?: string;
    type?: string;
    value?: string;
    name?: string;
    icon?:React.ReactNode; 
    pattern?:string;
    required?:boolean;
    placeholder?:string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ label, type, value, name, icon, pattern, required, placeholder, onChange }: InputFieldProps) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            {label && <label className="text-gray-500 text-sm">{label.toUpperCase()}</label>}
            <div className="relative">
                <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                readOnly={!isEditing}
                pattern={pattern}
                required={required}
                placeholder={placeholder}
                className='text-xs w-full bg-gray-50 rounded-full px-8 py-3 focus:outline-none focus:border-blue-500 shadow-lg'
                />
                {/* Icono personalizado a la derecha */}
                {icon && <span className="absolute right-10 top-2">{icon}</span>}
                
            </div>
        </div>
    );
}
