'use client'
import { useState } from 'react';
import { titleFont } from '@/config/fonts';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  password: string;
  address: string;
}

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
}

export default function NewAccountForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    address: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre completo es obligatorio.';
    }

    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no tiene un formato válido.';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria.';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres.';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'La dirección es obligatoria.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert('Formulario enviado con éxito');
      redirect('/auth/login')
      // Aquí puedes manejar el envío del formulario
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' }); // Limpiar errores al escribir
  };

  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Crear una nueva cuenta</h1>

      <div className="flex flex-col">
        {/* Nombre completo */}
        <label htmlFor="name" className="mb-2 text-gray-700 sm:w-50%">
          Nombre completo
        </label>
        <input
          id="name"
          className="px-5 py-2 border bg-gray-200 rounded mb-2"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="text-red-500">{errors.name}</span>}

        {/* Correo electrónico */}
        <label htmlFor="email" className="mb-2 text-gray-700">
          Correo electrónico
        </label>
        <input
          id="email"
          className="px-5 py-2 border bg-gray-200 rounded mb-2"
          type="email"
          placeholder="user@example.com"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}

        {/* Contraseña */}
        <label htmlFor="password" className="mb-2 text-gray-700">
          Contraseña
        </label>
        <input
          id="password"
          className="px-5 py-2 border bg-gray-200 rounded mb-2"
          type="password"
          placeholder="SecurePassword123!"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="text-red-500">{errors.password}</span>}

        {/* Dirección */}
        <label htmlFor="address" className="mb-2 text-gray-700">
          Dirección
        </label>
        <input
          id="address"
          className="px-5 py-2 border bg-gray-200 rounded mb-2"
          type="text"
          placeholder="123 Main St, City, Country"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <span className="text-red-500">{errors.address}</span>}

        {/* Botón para crear cuenta */}
        <button className="btn-primary mb-5" onClick={handleSubmit}>
          Crear cuenta
        </button>

        {/* Línea divisora */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        {/* Link a iniciar sesión */}
        <Link href="/auth/login" className="btn-secondary text-center">
          Ya tengo una cuenta
        </Link>
      </div>
    </div>
  );
}
