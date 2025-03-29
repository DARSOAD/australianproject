// src/components/ui/order/OrderForm.tsx
'use client';

import { useUiStore } from '@/store/ui/ui-store';

import { useState } from 'react';

export default function OrderForm() {
  const { cartItems, clearCart } = useUiStore(); // productos seleccionados
  const [address, setAddress] = useState('');
  const [shipping, setShipping] = useState('standard');
  const [payment, setPayment] = useState('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify({
          address,
          shipping,
          payment,
          items: cartItems,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        clearCart();
        setConfirmation('¡Pedido realizado con éxito!');
      } else {
        setConfirmation('Ocurrió un error.');
      }
    } catch (error) {
      console.error(error);
      setConfirmation('Error al conectar con el servidor.');
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white rounded-xl shadow-md max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Dirección"
        className="w-full p-2 border rounded"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <div>
        <h2 className="text-lg font-semibold mb-2">Método de Envío</h2>
        <label className="block">
          <input type="radio" value="express" checked={shipping === 'express'} onChange={() => setShipping('express')} />
          <span className="ml-2">Envío Exprés</span>
        </label>
        <label className="block">
          <input type="radio" value="standard" checked={shipping === 'standard'} onChange={() => setShipping('standard')} />
          <span className="ml-2">Envío Estándar</span>
        </label>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Método de Pago</h2>
        <label className="block">
          <input type="radio" value="card" checked={payment === 'card'} onChange={() => setPayment('card')} />
          <span className="ml-2">Tarjeta</span>
        </label>
        <label className="block">
          <input type="radio" value="paypal" checked={payment === 'paypal'} onChange={() => setPayment('paypal')} />
          <span className="ml-2">PayPal</span>
        </label>
        {/* Aquí podrías agregar opciones como ApplePay, AfterPay... */}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
      >
        {isSubmitting ? 'Enviando...' : 'Pagar'}
      </button>

      {confirmation && <p className="mt-4 text-center">{confirmation}</p>}
    </form>
  );
}
