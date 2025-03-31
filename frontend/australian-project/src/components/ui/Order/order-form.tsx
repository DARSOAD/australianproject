'use client';

import { useCartStore } from '@/store/ui/cart-store';
import { useState } from 'react';
import { FaApplePay } from "react-icons/fa6";
import { SiAfterpay } from "react-icons/si";
import InputField from '../inputfield/InputField';




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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Dirección */}
      <InputField
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            icon={
              <span className="material-symbols-outlined text-gray-400 text-md">
                edit
              </span>
            }
            rightIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />  

      {/* Métodos de envío */}
      <div className="ml-10">
        <h3 className="text-md font-normal text-gray-700">Shipping Method</h3>
        <div className="space-y-3">
          <label className="flex items-start space-x-3">
            <input
              type="radio"
              value="express"
              checked={shipping === 'express'}
              onChange={() => setShipping('express')}
              className="mt-1"
            />
            <div>
              <p className="font-normal">EXPRESS SHIPPING</p>
              <p className="text-xs text-gray-500">(Arrives between Saturday, Dec 21)</p>
            </div>
          </label>
          <label className="flex items-start space-x-3">
            <input
              type="radio"
              value="standard"
              checked={shipping === 'standard'}
              onChange={() => setShipping('standard')}
              className="mt-1"
            />
            <div>
              <p className="font-normal">STANDARD SHIPPING</p>
              <p className="text-xs text-gray-500">(Arrives between Dec 21–25)</p>
            </div>
          </label>
        </div>
      </div>

      {/* Métodos de pago */}
      <div className='ml-10'>
        <h3 className="text-md font-normal text-gray-700 mb-2">Select Payment Method</h3>
        <div className="space-y-5">
          {/* Apple Pay */}
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              value="apple"
              checked={payment === 'apple'}
              onChange={() => setPayment('apple')}
            />
            
            <span>Apple Pay</span>
            <FaApplePay />
          </label>

          {/* Tarjeta */}
          <label className="flex items-start space-x-3">
            <input
              type="radio"
              value="card"
              checked={payment === 'card'}
              onChange={() => setPayment('card')}
              className="mt-1"
            />
            <div className="flex-1">
              <p className="font-normal">Credit Card or Debit card</p>
              <p className="text-xs text-gray-500">Click one of your card</p>
              <div className="flex gap-4 mt-3">
                <div className="w-56 h-32 rounded-xl p-3 bg-gradient-to-tr from-pink-400 to-orange-300 text-white shadow-md relative">
                  <p className="text-xs">2333 3444 2676 2323</p>
                  <p className="text-xs mt-1">
                    MONTH/YEAR
                    <br />
                    04/05
                  </p>
                  <p className="absolute bottom-3 right-3 font-bold">TONY NGUYEN</p>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                    className="absolute bottom-2 left-3 h-5"
                  />
                </div>
                <div className="w-56 h-32 rounded-xl p-3 bg-gradient-to-tr from-purple-400 to-yellow-300 text-white shadow-md relative">
                  <p className="text-xs">1562 3444 2676 8888</p>
                  <p className="text-xs mt-1">
                    MONTH/YEAR
                    <br />
                    04/05
                  </p>
                  <p className="absolute bottom-3 right-3 font-bold">T. NGUYEN</p>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png"
                    className="absolute bottom-2 left-3 h-5"
                  />
                </div>
              </div>
            </div>
          </label>

          {/* Paypal */}
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              value="paypal"
              checked={payment === 'paypal'}
              onChange={() => setPayment('paypal')}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              className="h-5"
            />
            <span>cuonght@gmail.com</span>
          </label>

          {/* Afterpay */}
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              value="afterpay"
              checked={payment === 'afterpay'}
              onChange={() => setPayment('afterpay')}
            />
           <SiAfterpay />
            <span>4 interest-free payment with Afterpay</span>
          </label>
        </div>
      </div>

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
  );
}
