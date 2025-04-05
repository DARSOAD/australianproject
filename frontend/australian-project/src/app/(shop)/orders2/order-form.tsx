'use client';

import { useCartStore } from '@/store/ui/cart-store';
import { useState } from 'react';

import AddressField from '../../../components/ui/Order/Address/AddressField';
import { Searchbar } from "@/components/ui/searchInput/Searchbar";
import ShippingMethod from '../../../components/ui/Order/Shipping/ShippingMethod';
import PaymentMethod from '../../../components/ui/Order/Payment/PaymentMethod';
import CardSelector from '../../../components/ui/Order/Payment/CardSelector';
import { SlArrowLeft } from "react-icons/sl";





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
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-8">
  
        {/* Dirección y búsqueda - responsive */}
        <div className="w-full flex flex-col lg:flex-row gap-4">
          
          <div className="lg:w-2/5 lg:mt-7">
            <AddressField address={address} setAddress={setAddress} />
          </div>
          
          <div className="lg:w-1/5"></div>
          
          <div className="lg:w-2/5 hidden lg:block h-1/2 justify-center items-center">
            <Searchbar />
          </div>
        </div>
        
     <div className='w-4/5 mx-auto lg:mt-0'>

        <div className="  hidden lg:block ">
          <SlArrowLeft className="text-gray-500" />{/*Flecha */}
        </div>

        {/* Métodos de envío */}
        <div className='lg:mt-8'>
        <ShippingMethod shipping={shipping} setShipping={setShipping} />
        </div>


        {/* Métodos de pago */}
        <div className='mt-10'>
        <PaymentMethod
          payment={payment}
          setPayment={setPayment}
          address={address}
          setAddress={setAddress}
        />
       </div>


         {/* Botón de pago */}
        <button
          type="submit"
          className="w-full mt-4 bg-green-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition"
        >
          Pay
        </button>
  
        {/* Confirmación */}
        {confirmation && (
          <p className="text-green-600 text-center mt-4">{confirmation}</p>
        )}
        </div>
      </form>
    </div>
  );
} 