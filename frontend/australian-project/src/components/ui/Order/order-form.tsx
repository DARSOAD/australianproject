'use client';

import { useCartStore } from '@/store/ui/cart-store';
import { useState } from 'react';
import { SiApplepay } from "react-icons/si";//apple pay
import { SiAfterpay } from "react-icons/si"; //after pay flechas 
import { IoIosArrowDown } from "react-icons/io";//flecha
import { TbPencilMinus } from "react-icons/tb";// lapiz
import { FaCcMastercard } from "react-icons/fa";//master
import { FaCcVisa } from "react-icons/fa6";//visa
import { IoLogoPaypal } from "react-icons/io5";// paypal

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
    <div className="w-full max-w-2xl mx-auto px-4">
    <form onSubmit={handleSubmit} className="space-y-8">
    {/* Dirección */}
    {/* Dirección y búsqueda - responsive */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 px-4">
          {/* Address Field */}
          <div className="w-full lg:w-[45%]">
            <div className="relative flex items-center h-10 bg-gray-50 rounded-full shadow-md px-4">
              {/* Label flotante (opcional) */}
              <span className="absolute left-4 top-[-10px] bg-white text-gray-500 text-xs px-1">
                Address
              </span>

              {/* Icono izquierdo */}
              <TbPencilMinus className="absolute left-3 text-gray-400 text-lg" />

              {/* Input de dirección */}
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Your address"
                className="w-full pl-10 pr-10 bg-transparent focus:outline-none text-sm text-gray-700"
              />

              {/* Icono derecho */}
              <IoIosArrowDown className="absolute right-3 text-green-500 text-lg" />
            </div>
          </div>

          {/* Search Field: solo visible en pantallas grandes */}
          <div className="w-full lg:w-[45%] hidden lg:block">
            <div className="relative flex items-center h-10 bg-gray-50 rounded-full shadow-md px-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-4 pr-10 bg-transparent focus:outline-none text-sm text-gray-700"
              />
              {/* Icono lupa */}
              <svg
                className="absolute right-3 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="18"
                height="18"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </div>
          </div>
        </div>



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
              className="mb-7"
            />
            <div className="flex flex-col">
            <span text-base font-semibold>Apple Pay</span>
            <SiApplepay className="mt-1 text-2xl" />
            </div>
          </label>

          
          {/*=============================*/}
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
                  <p className="text-xs">2333 3444 2676 1203</p>
                  <p className="text-xs mt-1">
                    MONTH/YEAR
                    <br />
                    04/05
                  </p>
                  <p className="absolute bottom-3 right-3 font-bold">TONY NGUYEN</p>
                  <FaCcVisa className='mt-8'/>
                </div>
                <div className="w-56 h-32 rounded-xl p-3 bg-gradient-to-tr from-purple-400 to-yellow-300 text-white shadow-md relative">
                  <p className="text-xs">1562 3444 2678 2525</p>
                  <p className="text-xs mt-1">
                    MONTH/YEAR
                    <br />
                    04/05
                  </p>
                  <p className="absolute bottom-3 right-3 font-bold">T. NGUYEN</p>
                  <FaCcMastercard className='mt-8'/>
                </div>
              </div>
            </div>
          </label>

          {/* Paypal */}
          <label className="flex items-start space-x-3 w-full">
              {/* Radio button */}
              <input
                type="radio"
                value="paypal"
                checked={payment === 'paypal'}
                onChange={() => setPayment('paypal')}
                className="mt-1"
              />

              {/* Contenido a la derecha del radio */}
              <div className="w-full ">
                <p className="text-base font-semibold">Paypal</p>

                {/* Input con ícono adentro */}
                <div className="relative flex items-center w-full h-10 bg-gray-50 rounded-full  mt-1 ">
                  
                  {/* Icono de PayPal dentro del input */}
                  <IoLogoPaypal className="absolute left-3 text-xl text-blue-600" />

                  {/* Campo de correo */}
                  <input
                    type="text"
                    value={"cuonght@gmail.com"}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="cuonght@gmail.com"
                    className="w-full pl-10 pr-10 bg-transparent focus:outline-none text-sm text-gray-500"
                  />

                  {/* Icono de lápiz al lado derecho */}
                  <TbPencilMinus className="absolute right-3 text-gray-400 text-lg" />
                </div>
              </div>
            </label>


          {/* Afterpay */}
          
          <label className="flex items-start space-x-3 w-full">
              {/* Radio button */}
              <input
                type="radio"
                value="paypal"
                checked={payment === 'paypal'}
                onChange={() => setPayment('paypal')}
                className="mt-1"
              />

              {/* Contenido a la derecha del radio */}
              <div className="w-full ">
                <p className="text-base font-semibold">4 interest-free payment with Afterpay</p>

                {/* Input con ícono adentro */}
                <div className="relative flex items-center w-full h-10 bg-gray-50 rounded-full  mt-1 ">
                  
                  {/* Icono de Afterpay dentro del input */}
                  <SiAfterpay className="absolute left-3 text-xl text-black" />

                  {/* Campo de correo */}
                  <input
                    type="text"
                    value={""}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder=""
                    className="w-full pl-10 pr-10 bg-transparent focus:outline-none text-sm text-gray-500"
                  />

                  {/* Icono de lápiz al lado derecho */}
                  <TbPencilMinus className="absolute right-3 text-gray-400 text-lg" />
                </div>
              </div>
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
    </div>
  );
}