'use client';


import { useState } from 'react';

import { OrderItem } from '@/components/ui/Order/Status/OrderItem';
import { SuggestedProducts } from '@/components/ui/Order/Suggested-products/SuggestedProducts';
import { PriceOptions } from '@/components/ui/Order/Princing/PriceOptions';
import AddressField from '../../../../components/ui/Order/Address/AddressField';
import { Searchbar } from "@/components/ui/searchInput/Searchbar";
import { CartMemberShip } from "@/components";
import OrderSummary from '@/components/ui/Order/Summary/OrderSummary';
import { SlArrowLeft } from "react-icons/sl";



export default function OrderStatusPage() {
  const [address, setAddress] = useState('');


  return (
    <div className="flex flex-col justify-end pr-0 px-7">
      
     {/* Encabezado para pantalla grande */}
        <div className='hidden lg:flex justify-between w-full'>
          <div className="flex w-full gap-4">
            {/* AddressField ocupa el 40% */}
            <div className="lg:w-2/5 lg:mt-7 ">
            <AddressField address={address} setAddress={setAddress} />
            </div>
            
            <div className="lg:w-1/5"></div>
            
            <div className="lg:w-2/5 hidden lg:block h-1/2 justify-center items-center">
              <Searchbar />
            </div>
          </div>
        </div>

        <div className="  hidden lg:block lg:ml-28 lg:mb-16">
          <SlArrowLeft className="text-gray-500" />{/*Flecha */}
        </div>


          <div className="hidden lg:block text-gray-400 lg:ml-48 text-xs ">
            <p>Your order</p>
          </div>

        {/* PRODUCTOS*/}
        <div className="w-full flex flex-col lg:flex-row lg:items-start gap-4">
          {/* Sección izquierda vacía o con otros elementos */}
          <div className="hidden lg:block lg:w-[10%]" />

          {/* Productos: ocupan mitad derecha y más anchos en lg */}
          <div className="w-full lg:w-[90%] space-y-4 text-xs">
            <OrderItem
              title="Orthopedic neck pillow"
              quantity={2}
              price={36.0}
              imageUrl="/img/products/pillow.png"
              onRemove={() => console.log('Eliminar producto 1')}
            />
            <OrderItem
              title="Orthopedic neck pillow"
              quantity={1}
              price={36.0}
              imageUrl="/img/products/walker.png"
              onRemove={() => console.log('Eliminar producto 2')}
            />
            <OrderItem
              title="Orthopedic neck pillow"
              quantity={2}
              price={36.0}
              imageUrl="/img/products/pillow.png"
              onRemove={() => console.log('Eliminar producto 3')}
            />
          </div>
         </div>

    {/*Anuncio */}
    <div className='lg:ml-36 ml-5' >
           <h1 className=" text-sm text-gray-400 mt-8 ">
               Best deals with membership
            </h1>
            <p className=" text-xl mb-6">JOIN TODAY!</p>
        </div>


        {/*Ultimos antojitos  */}
        <div className="flex justify-center lg:justify-end lg:mr-[10rem]">
          <SuggestedProducts />
        </div>


          {/* Descuento por membresia  */}
          <div className='lg:ml-32 '>
         <PriceOptions />      
          <div/>
      
          
          {/* Cupon de descuentos */}
          <div className="w-full lg:flex lg:justify-end">
            <div className="w-full bg-gray-50 shadow-md px-4 py-2 text-xs text-gray-700 mb-5 mt-4
              flex flex-row lg:flex-row lg:items-center lg:justify-between lg:w-[50%] rounded-l-full lg:mt-8">

              <span className="text-gray-500 ml-7 ">Offers</span>

              <input
                type="text"
                placeholder="Add a promo code"
                className="bg-transparent outline-none text-gray-700 text-sx placeholder:text-gray-400 
                w-full lg:w-auto lg:min-w-[200px] text-right mr-5 lg:mr-24"
              />
            </div>
          </div>



          {/* Dirección y búsqueda - responsive MOVIL */}
                  <div className="w-full flex flex-col lg:flex-row gap-4 lg:hidden  rounded-l-full">
                    <AddressField address={address} setAddress={setAddress} />
                  </div>
                  
        {/*SUBTOTAL /TOAL */}
          <div className="w-[95%] lg:flex lg:justify-end ">
            <div className="w-full lg:w-fulls lg:mr- ">
              <OrderSummary />
            </div>
          </div>

         </div>
    </div>
  );
}
