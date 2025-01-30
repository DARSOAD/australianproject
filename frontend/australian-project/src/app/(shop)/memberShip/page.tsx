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

