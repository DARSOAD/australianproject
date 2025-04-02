'use client';


import { useState } from 'react';

import { OrderItem } from '@/components/ui/Order/Order-Status/OrderItem';
import { SuggestedProducts } from '@/components/ui/Order/Order-Status/SuggestedProducts';
import { PriceOptions } from '@/components/ui/Order/Order-Status/PriceOptions';
import AddressField from '../../../../components/ui/Order/AddressField';
import SearchField from '../../../../components/ui/Order/SearchField';
import { CartMemberShip } from "@/components";



export default function OrderStatusPage() {
  const [address, setAddress] = useState('');


  return (
    <div className="flex flex-col justify-end pr-0">
      <div className="space-y-4 max-w-md w-full text-xs">
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

        <div >
           <h1 className=" text-sm text-gray-400 mt-8">
               Best deals with membership
            </h1>
            <p className=" text-xl mb-6">JOIN TODAY!</p>
        </div>

        {/*Ultimos antojitos  */}
        <div className="flex justify-end">
          <SuggestedProducts />
        </div>


          {/* Descuento por membresia  */}
         <PriceOptions />      

          
          {/*Cupon de descuentos  */}
          <div className="w-full h-10 bg-gray-50 rounded-full shadow-md px-4 flex items-center justify-between text-xs text-gray-700
          mb-5 mt-4">
            <span className="text-gray-500">Offers</span>

            <div className="flex items-center space-x-1 ml-44 ">
              <input
                type="text"
                placeholder="Add a promo code"
                className="bg-transparent outline-none text-gray-700 text-sm placeholder:text-gray-400 "
              />
            </div>
          </div>

          {/* Dirección y búsqueda - responsive */}
                  <div className="w-full flex flex-col lg:flex-row gap-4">
                    <AddressField address={address} setAddress={setAddress} />
                    <SearchField />
                  </div>

                  <div className="w-full mt-6 space-y-3 text-sm text-gray-500">
                    {/* Subtotal */}
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="text-blue-600 font-medium">$30.28</span>
                    </div>

                    {/* Shipping */}
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span className="text-blue-600 font-medium">$5.90</span>
                    </div>

                    {/* Separador */}
                    <hr className="my-2 border-gray-200" />

                    {/* Total */}
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-gray-600">TOTAL:</span>
                        <p className="text-xs text-gray-400">GTS included:</p>
                      </div>
                      <div className="text-right">
                        <span className="text-blue-600 font-bold">$30.28</span>
                        <p className="text-xs text-gray-400">$13.90</p>
                      </div>
                    </div>
                  </div>

          <div className='w-[95%] h-[60px] bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full 
          flex justify-center items-center transition mb-28'>
              <h1>Check out</h1>
         </div>
          


        
    </div>
  );
}
