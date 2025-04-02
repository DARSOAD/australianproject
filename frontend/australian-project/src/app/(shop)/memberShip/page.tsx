'use client'
import { CartMemberShip } from "@/components";
import { IoCallOutline, IoCartOutline, IoSearchOutline } from "react-icons/io5";
import img1 from '../../../../assets/img/img1.png'
import img2 from '../../../../assets/img/img2.png'


export default function MemberShip() {

    return (
        <div className="">
            <div>
                <h1 className="ml-10 text-sm text-gray-400 mt-2">
                    Best deals with membership
                </h1>
                <p className="ml-10 text-xl mb-6">JOIN TODAY!</p>
            </div>
            {/* <CartMemberShip /> */}
            <CartMemberShip
                texts={{
                    membershipTitle: 'Membership',
                    description: ' Access to premium products and exclusive discounts. Fast deliveries.',
                    priceOption1: '$12.5/pw',
                    priceOption2: '$161.5/py'
                }} imageSrc={img2} />
            <CartMemberShip
                texts={{
                    membershipTitle: 'Membership for busiess',
                    description: ' Volume discounts and loyaltu perks.',
                    priceOption1: '$12.5/pw',
                    priceOption2: '$161.5/py'
                }} imageSrc={img2} />


                <div className="fixed bottom-0 left-0 w-full flex gap-4 p-4 bg-white z-50">
                {/* Botón: carrito blanco */}
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-white rounded-full shadow-md">
                    <IoCartOutline size={24} className="text-gray-400" />
                </div>

                {/* Botón: llamada verde */}
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-blue-500 rounded-full shadow-md">
                    <IoCallOutline size={24} className="text-white" />
                </div>

                {/* Input de búsqueda */}
                <div className="relative flex items-center justify-center flex-grow">
                    <input
                        type="text"
                        placeholder="Search...."
                        className="w-full h-[50px] bg-white rounded-full pl-4 pr-10 border text-sm text-gray-800 shadow-md focus:outline-none placeholder-gray-400"
                    />
                    <IoSearchOutline
                        size={20}
                        className="absolute right-3 text-gray-400"
                    />
                </div>
            </div>
        </div>
    );
}