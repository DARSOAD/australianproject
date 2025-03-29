'use client';
import { useUiStore } from '@/store/ui/ui-store';
import { useState } from 'react';

export default function OrderForm() {
  const { items: cartItems, clearCart } = useUiStore();
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
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-10 bg-white rounded-xl shadow-lg">
      {/* Dirección */}
      <div className="relative">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-full pl-12 pr-4 py-2 focus:outline-none"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <span className="absolute top-2.5 left-4 text-gray-400">📍</span>
      </div>

      {/* Métodos de envío */}
      <div>
        <h3 className="text-lg font-semibold">Shipping Method</h3>
        <div className="space-y-2 mt-2">
          <label className="flex items-center space-x-3">
            <input type="radio" value="express" checked={shipping === 'express'} onChange={() => setShipping('express')} />
            <span>
              <strong>EXPRESS SHIPPING</strong> <br />
              <span className="text-sm text-gray-500">(Arrives between Saturday, Dec 21)</span>
            </span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="radio" value="standard" checked={shipping === 'standard'} onChange={() => setShipping('standard')} />
            <span>
              <strong>STANDARD SHIPPING</strong> <br />
              <span className="text-sm text-gray-500">(Arrives between Dec 21–25)</span>
            </span>
          </label>
        </div>
      </div>

      {/* Métodos de pago */}
      <div>
        <h3 className="text-lg font-semibold">Select Payment Method</h3>
        <div className="space-y-4 mt-2">
          <label className="flex items-center space-x-3">
            <input type="radio" value="apple" checked={payment === 'apple'} onChange={() => setPayment('apple')} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="w-6 h-6" />
            <span>Apple Pay</span>
          </label>

          <label className="flex items-start space-x-3">
            <input type="radio" value="card" checked={payment === 'card'} onChange={() => setPayment('card')} />
            <div className="flex-1">
              <p className="font-semibold">Credit Card or Debit Card</p>
              <p className="text-sm text-gray-500">Click one of your card</p>

              {/* Tarjetas */}
              <div className="flex gap-4 mt-3">
                <div className="w-40 h-24 rounded-xl p-3 bg-gradient-to-tr from-pink-400 to-orange-300 text-white shadow-md relative">
                  <p className="text-sm">2333 3444 2676 2323</p>
                  <p className="text-xs mt-1">MONTH/YEAR<br />04/05</p>
                  <p className="absolute bottom-3 right-3 font-bold">TONY NGUYEN</p>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="absolute bottom-2 left-3 h-5" />
                </div>
                <div className="w-40 h-24 rounded-xl p-3 bg-gradient-to-tr from-purple-400 to-yellow-300 text-white shadow-md relative">
                  <p className="text-sm">1562 3444 2676 8888</p>
                  <p className="text-xs mt-1">MONTH/YEAR<br />04/05</p>
                  <p className="absolute bottom-3 right-3 font-bold">T. NGUYEN</p>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png" className="absolute bottom-2 left-3 h-5" />
                </div>
              </div>
            </div>
          </label>

          <label className="flex items-center space-x-3">
            <input type="radio" value="paypal" checked={payment === 'paypal'} onChange={() => setPayment('paypal')} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5" />
            <span>cuonght@gmail.com</span>
          </label>

          <label className="flex items-center space-x-3">
            <input type="radio" value="afterpay" checked={payment === 'afterpay'} onChange={() => setPayment('afterpay')} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Afterpay-logo.svg" className="h-5" />
            <span>4 interest-free payment with Afterpay</span>
          </label>
        </div>
      </div>

      {/* Botón de Pagar */}
      <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition">
        Pay
      </button>

      {/* Confirmación */}
      {confirmation && <p className="text-green-600 text-center mt-4">{confirmation}</p>}
    </form>
  );
}
