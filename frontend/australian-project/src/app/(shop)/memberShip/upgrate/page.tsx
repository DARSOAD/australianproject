'use client'
import { CartMemberShip } from "@/components";
import { IoCallOutline, IoCartOutline, IoSearchOutline } from "react-icons/io5";
import img2 from '../../../../../assets/img/img2.png'
import { useState } from "react";


export default function UPgrate() {
    const [selected, setSelected] = useState(0);
    return (
        <div className="">
            <div className="flex justify-center w-full">
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

            <div>
                <h1 className="ml-10 text-sm text-gray-400 mt-2">
                    Hi
                </h1>
                <p className="ml-10 text-xl mb-6">Tonni!</p>
            </div>
            <div className="flex justify-center items-center space-x-4 mt-4 mb-10 p-2">
                {["Membership", "History order", "Customer"].map((label, index) => (
                    <button
                        key={index}
                        onClick={() => setSelected(index)}
                        className={`shadow-md bg-white w-[200px] h-10 flex justify-center items-center rounded-full border-2 
                        ${selected === index
                                ? "border-blue-500"
                                : "border-white"
                        } 
                        focus:outline-none focus:ring-2 focus:ring-blue-300
                        `}
                    >
                        <p className="text-xs">{label}</p>
                    </button>
                ))}
            </div>
            {/* <CartMemberShip /> */}
            <CartMemberShip
                texts={{
                    membershipTitle: 'Upgrate Membership',
                    description: ' Access to premium products and exclusive discounts. Fast deliveries.',
                    priceOption1: '$12.5/pw',
                    priceOption2: '$161.5/py'
                }} imageSrc={img2} />


            <div className="flex w-[100%] flex-col items-end mt-[-20px]">
                <p className="text-sm text-gray-400 mb-2 mr-5">Do you want normal membreship? click here</p>
            </div>

            {/* <div className="flex w-[100%] flex-col items-end right-[-50px] space-y-2 mb-10">
<p className="mr-10 text-sm">dhskjsdhkjchd</p>
<div/> */}


            <div className="fixed bottom-0 left-0 w-full flex gap-4 p-4">
                {/* Usamos gap-4 para agregar espacio entre los elementos */}
                <div className="relative flex items-center justify-center">
                    <div className="w-auto h-[50px] bg-white rounded-full pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none placeholder-gray-400">
                        <IoCartOutline size={40} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <div className="relative flex items-center justify-center">
                    <div className="w-auto h-[50px] bg-white rounded-full pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none placeholder-gray-400">
                        <IoCallOutline size={40} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <div className="relative flex items-center justify-center flex-grow">
                    <input
                        type="text"
                        placeholder="Search...."
                        className="w-full h-[50px] bg-white rounded-full pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none placeholder-gray-400"
                    />
                    <IoSearchOutline
                        size={20}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                    />
                </div>
            </div>



        </div>
    );
}

