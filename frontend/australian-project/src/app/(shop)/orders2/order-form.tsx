'use client';

import { useCartStore } from '@/store/ui/cart-store';
import { useState } from 'react';

import AddressField from '../../../components/ui/Order/AddressField';
import SearchField from '../../../components/ui/Order/SearchField';
import ShippingMethod from '../../../components/ui/Order/ShippingMethod';
import PaymentMethod from '../../../components/ui/Order/PaymentMethod';
import CardSelector from '../../../components/ui/Order/CardSelector';



export default function OrderForm() {
  const { items: cartItems, clearCart } = useCartStore();
  const [address, setAddress] = useState('23 Lilydale St');
  const [shipping, setShipping] = useState('standard');
  const [payment, setPayment] = useState('card');
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      address,
      shipping,
      payment,
      items: cartItems,
    });
    setConfirmation('✅ Pedido enviado (simulado)');
    clearCart();
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-8">
  
        {/* Dirección y búsqueda - responsive */}
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <AddressField address={address} setAddress={setAddress} />
          <SearchField />
        </div>
  
        {/* Métodos de envío */}
        <ShippingMethod shipping={shipping} setShipping={setShipping} />
  
        {/* Métodos de pago */}
        <PaymentMethod
          payment={payment}
          setPayment={setPayment}
          address={address}
          setAddress={setAddress}
        />
  
        {/* Botón de pago */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition"
        >
          Pay
        </button>
  
        {/* Confirmación */}
        {confirmation && (
          <p className="text-green-600 text-center mt-4">{confirmation}</p>
        )}
      </form>
    </div>
  );
  

// //
//          order-form.tsx           ⬅ Componente principal del formulario
//      ├── SearchField.tsx          ⬅ Campo de búsqueda (solo en pantallas grandes)
//      ├── ShippingMethod.tsx       ⬅ Radios de envío: Express / Standard
//      ├── PaymentMethod.tsx        ⬅ Apple Pay, Tarjeta, PayPal, Afterpay
//           ├─ CardSelector.tsx     ⬅ (Opcional) tarjetas visuales separadas
//      └── AddressField.tsx         ⬅ Campo de dirección
//