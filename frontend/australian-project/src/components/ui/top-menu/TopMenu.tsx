'use client'
import { titleFont } from '@/config/fonts'
import { useUiStore } from '@/store';
import Link from 'next/link'
import React from 'react'
import {IoSearchOutline, IoCartOutline } from 'react-icons/io5'
import { RiMenu2Line, RiMenuFold3Fill } from "react-icons/ri";
import { useState, useEffect } from "react";


export const TopMenu = () => {
    const openMenu = useUiStore(state => state.openSideMenu);
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
    <nav className=
    {`w-full px-6 py-4 bg-white md:bg-gray-50 shadow-sm md:shadow-none transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 z-50 shadow-md" : "relative"
      }`}
    
    >

        {/* Contenedor izquierdo (menú y logo) */}
        <div className='text-gray-400 hover:text-gray-600 flex items-center space-x-4'>
            <button className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 md:hidden' onClick={() => openMenu()}>
                <RiMenu2Line className='w-5 h-5'/>
            </button>
            <div className="text-gray-400 pl-6 font-semibold text-lg lg:pl-0">LOGO SPACE</div>
        </div>


        {/* Perfil con botón (derecha), center menu, carrito */}
        
        <div className='flex items-center justify-between'>
            <div className='hidden sm:block text-sm text-gray-400'>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href='/category/men'>Hombres</Link>
                <span className="text-gray-300">|</span>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href='/category/women'>Mujeres</Link>
                <span className="text-gray-300">|</span>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href='/category/kid'>kid</Link>
                <span className="text-gray-300">|</span>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href='/memberShip'>MemberShip</Link>
            </div>
            <div className="flex items-center space-x-4 bg-white rounded-full shadow-lg px-3 py-2">
                <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-400 text-xs hidden md:block">Log in</span>
                <span className="text-gray-400 block">{">"}</span>
            </div>
             <Link href='/cart' className='mx-2 hidden md:block  bg-white rounded-full shadow-lg px-3 py-2'>
                <div className='relative'>
                    <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>3</span>
                    <IoCartOutline className='w-5 h-5 text-gray-400'/>
                </div>
            </Link>
        </div>

        
        

    </nav>
  )
}
