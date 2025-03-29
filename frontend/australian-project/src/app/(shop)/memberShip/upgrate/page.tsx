'use client'
import { CartMemberShip } from "@/components";
import { IoCallOutline, IoCartOutline, IoSearchOutline } from "react-icons/io5";
import img2 from '../../../../../assets/img/img2.png'
import { useState } from "react";

export default function UPgrate() {
    const [selected, setSelected] = useState(0);

    return (
        <div className="pb-[100px]"> {/* padding abajo para que no se esconda contenido detrás de la barra */}
            {/* Barra de búsqueda superior */}
            <div className="flex justify-center w-full mt-4">
                <div className="relative flex items-center justify-center w-[80%]">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-[50px] bg-white rounded-full pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none placeholder-gray-400"
                    />
                    <IoSearchOutline
                        size={20}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                    />
                </div>
            </div>

            {/* Saludo */}
            <div>
                <h1 className="ml-10 text-sm text-gray-400 mt-2">Hi</h1>
                <p className="ml-10 text-xl mb-6">Tonni!</p>
            </div>

            {/* Botones de selección */}
            <div className="flex justify-center items-center space-x-4 mt-4 mb-10 p-2">
                {["Membership", "History order", "Customer"].map((label, index) => (
                    <button
                        key={index}
                        onClick={() => setSelected(index)}
                        className={`shadow-md bg-white w-[200px] h-10 flex justify-center items-center rounded-full border-2 
                        ${selected === index ? "border-blue-500" : "border-white"} 
                        focus:outline-none focus:ring-2 focus:ring-blue-300`}
                    >
                        <p className="text-xs">{label}</p>
                    </button>
                ))}
            </div>

            {/* Tarjeta de membresía */}
            <CartMemberShip
                texts={{
                    membershipTitle: 'Upgrade Membership',
                    description: 'Access to premium products and exclusive discounts. Fast deliveries.',
                    priceOption1: '$12.5/pw',
                    priceOption2: '$161.5/py'
                }}
                imageSrc={img2}
            />

            {/* Enlace adicional */}
            <div className="flex w-full flex-col items-end mt-[-20px]">
                <p className="text-sm text-gray-400 mb-2 mr-5">
                    Do you want normal membership? click here
                </p>
            </div>

            {/* 🔻 BARRA INFERIOR ACTUALIZADA */}
            <div className="fixed bottom-0 left-0 w-full bg-white z-[999] px-4 py-3 shadow-md flex items-center gap-4">
                {/* Botón: carrito blanco */}
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow">
                    <IoCartOutline size={24} className="text-gray-400" />
                </div>

                {/* Botón: llamada verde */}
                <div className="w-[50px] h-[50px] rounded-full bg-green-500 flex items-center justify-center shadow">
                    <IoCallOutline size={24} className="text-white" />
                </div>

                {/* Input de búsqueda */}
                <div className="flex-grow relative">
                    <input
                        type="text"
                        placeholder="Search...."
                        className="w-full h-[50px] bg-white rounded-full pl-4 pr-10 text-sm border border-gray-300 shadow placeholder-gray-400 focus:outline-none"
                    />
                    <IoSearchOutline
                        size={20}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                </div>
            </div>
        </div>
    );
}
