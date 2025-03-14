

import Link from 'next/link';
import { LoginFrom } from './ui/LoginFrom';
import { useUiStore } from '@/store';
import React from 'react';


  export default function () {
    return (
      
      <div className="flex flex-col min-h-screen pt-16 sm:pt-52">
        <div className='my-8 px-10'>
          <p className='text-xs text-gray-400 pl-10'>Best deals with membership</p>
          <h1 className='text-sm text-gray-600 pl-10'>JOIN TODAY!</h1>
        </div>        
        <LoginFrom />        
      </div>
    );
  }
