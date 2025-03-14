

import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'


export const Searchbar = () => {    
    return (
        <div className='w-full px-4 relative py-8 md:px-0'>
            <input
                type="text"
                placeholder='Search...'
                className='text-xs w-full bg-gray-50 rounded-full px-8 py-3 focus:outline-none focus:border-blue-500 shadow-lg md:rounded-r-none'
            />
            <IoSearchOutline 
                size={20} 
                className='input-primary-icon' 
            />    
        </div>
    
    )
}