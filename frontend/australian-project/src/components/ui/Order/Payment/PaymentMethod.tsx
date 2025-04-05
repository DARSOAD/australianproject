'use client';

import { SiApplepay, SiAfterpay } from 'react-icons/si';
import { IoLogoPaypal } from 'react-icons/io5';
import { TbPencilMinus } from 'react-icons/tb';
import { FaCcVisa } from 'react-icons/fa6';
import { FaCcMastercard } from 'react-icons/fa';
import CardSelector from '../Payment/CardSelector';
import { IoAddOutline } from "react-icons/io5";

interface Props {
  payment: string;
  setPayment: (value: string) => void;
  address: string;
  setAddress: (value: string) => void;
}

export default function PaymentMethod({
  payment,
  setPayment,
  address,
  setAddress,
}: Props) {
  return (
    <div className="ml-5">
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
            <span className="text-base font-normal">Apple Pay</span>
            <SiApplepay className="mt-1 text-2xl" />
          </div>
        </label>

       {/* Card */}
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
            
            {/* Aquí alineamos el ícono en la misma línea que el texto y aumentamos el espacio */}
            <div className="flex items-center space-x-32 lg:space-x-4 mt-1"> {/* Aumentamos el espacio entre el texto y el ícono */}
              <p className="text-xs text-gray-500">Click one of your card</p>
              <IoAddOutline className="text-gray-500 text-lg cursor-pointer" />
            </div>
            
            <div className="flex gap-4 mt-3">
              {/* TARJETAS VISA Y MASTERCARD */}
              <CardSelector />
            </div>
          </div>
        </label>


        {/* Paypal */}
        <label className="flex items-start space-x-3 w-full text-xs">
          <input
            type="radio"
            value="paypal"
            checked={payment === 'paypal'}
            onChange={() => setPayment('paypal')}
            className="mt-1"
          />
          <div className="w-full">
            <p className="text-base font-normal">Paypal</p>
            <div className="relative flex items-center w-full h-10 bg-gray-50 rounded-full mt-1">
              <IoLogoPaypal className="absolute left-3 text-xl text-blue-600" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="cuonght@gmail.com"
                className="w-full pl-10 pr-10 bg-transparent focus:outline-none text-sm text-gray-500"
              />
              <TbPencilMinus className="absolute right-8 text-gray-400 text-lg" />
            </div>
          </div>
        </label>

        {/* Afterpay */}
        <label className="flex items-start space-x-3 w-full">
          <input
            type="radio"
            value="afterpay"
            checked={payment === 'afterpay'}
            onChange={() => setPayment('afterpay')}
            className="mt-1"
          />
          <div className="w-full">
            <p className="text-base font-normal">4 interest-free payment with Afterpay</p>
            <div className="relative flex items-center w-full h-10 bg-gray-50 rounded-full mt-1">
              <SiAfterpay className="absolute left-3 text-xl text-black" />
              <input
                type="text"
                value=""
                onChange={() => {}}
                placeholder=""
                className="w-full pl-10 pr-10 bg-transparent focus:outline-none text-sm text-gray-500"
              />
              <TbPencilMinus className="absolute right-8 text-gray-400 text-lg" />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
