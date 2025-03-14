'use client'
import { auth } from '@/auth.config'
import { PasswordForm } from './PaswordForm';

export default async function PasswordPage() {

    return (
        <div className="flex flex-col min-h-screen pt-16 sm:pt-52">
            <div className='my-8 px-10'>
                <p className='text-xs text-gray-400 pl-10'>We will send the code to your phone</p>
                <h1 className='text-sm text-gray-600 pl-10'>FORGUET YOUR PASSWORD?</h1>
            </div>        
            <PasswordForm />   
        </div>

    );

    
    
}
