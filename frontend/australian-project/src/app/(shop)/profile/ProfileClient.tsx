'use client';
import { useEffect, useState } from "react";
import { FiSmartphone } from "react-icons/fi";
import { PiPencilSimpleLight, PiPencilSimpleLine  } from "react-icons/pi";
import { Searchbar } from "@/components/ui/searchInput/Searchbar";
import { IoBagOutline, IoDocumentTextOutline, IoLogOutOutline } from "react-icons/io5";

export default function ProfileClient({ user }: { user: any }) {  

    
    const [formData, setFormData] = useState({
        username: user.username || "Tonynguyen",
        email: user.email || "cuonght@gmail.com",
        phone: user.phone || "0452209186",
        address: user.address || "004 Riley Street, 2050 Sydney, Australia"
    });

    return (
        <>
        <Searchbar/>
        <div className="flex justify-center items-center">
            {/* Imagen de perfil */}
            <div className="relative">
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    className="w-24 h-24 rounded-full shadow-lg"
                />
                {/* Botón de edición */}
                <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
                    <PiPencilSimpleLight size={16} className="text-gray-600" />
                </button>
            </div>           
        </div>

        {/* Username, Email, Phone, Address, Password */}
        <div className='mt-10'>
            <div className="w-full relative">
                <label className="input-primary-label">USERNAME</label>
                <div className="w-full flex">
                    <input
                        placeholder={formData.username}
                        className='input-primary'
                        type="text"
                        name='username'
                        required 
                    />
                </div>               
            </div>
            <div className="w-full relative">
                <label className="input-primary-label">EMAIL</label>
                <div className="w-full flex">
                    <input
                        placeholder={formData.email}
                        className='input-primary'
                        type="email"
                        name='email'
                        required 
                    />
                </div>
                
            </div>
            
            <label className="input-primary-label">PHONE</label>
            <div className="w-full relative">
                <div className="w-full flex">
                    <input
                        placeholder={formData.phone}
                        className='input-primary'
                        type="number"
                        name='phone'
                        required 
                    />
                    <FiSmartphone 
                                    size={20} 
                                    className='input-primary-icon' 
                                />
                </div>
            </div>

            <label className="input-primary-label">ADDRESS</label>
            <div className="w-full relative">
                <div className="w-full flex">
                    <input
                        placeholder={formData.address}
                        className='input-primary'
                        type="number"
                        name='phone'
                        required 
                    />
                    <PiPencilSimpleLine 
                                    size={20} 
                                    className='input-primary-icon' 
                                />
                </div>
                
            </div>
            
            <label className="input-primary-label">PASSWORD</label>
            <div className="w-full relative">
                <div className="w-full flex">
                    <input
                        placeholder='********'
                        className='input-primary'
                        type="password"
                        name='password'
                        required 
                    />
                    <PiPencilSimpleLine 
                                    size={20} 
                                    className='input-primary-icon' 
                                />
                </div>
                
            </div>
        </div>

        {/* History order, Privacy, Sign out. */}
        <div className="flex justify-center items-center space-y-2 mt-10">
            <div className="w-80 ml-auto">
                 {/* Opción: History Order */}
                <div className="flex justify-between items-center py-3">
                    <div className="flex items-center space-x-4">
                    <IoBagOutline className="text-gray-500 text-xl" />
                    <span className="text-gray-800">History order</span>
                    </div>
                    <span className="text-gray-400 pr-10">&gt;</span>
                </div>

                {/* Opción: Privacy & Policy */}
                <div className="flex justify-between items-center py-3">
                    <div className="flex items-center space-x-4">
                    <IoDocumentTextOutline className="text-gray-500 text-xl" />
                    <span className="text-gray-800">Privacy & policy</span>
                    </div>
                    <span className="text-gray-400 pr-10">&gt;</span>
                </div>

                {/* Opción: Sign Out (Deshabilitado) */}
                <div className="flex items-center space-x-4 py-3 text-gray-400 cursor-not-allowed border-t-2 mr-8 mb-40">
                    <IoLogOutOutline className="text-xl" />
                    <span>Sign out</span>
                </div>
            </div>
        </div>
        </>
    );
}
