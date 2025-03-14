'use client'
import { authenticate } from '@/actions'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useActionState } from 'react'
import { IoInformationOutline } from 'react-icons/io5'
import { useState } from "react"

export const LoginFrom = () => {
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined,);
    const [formData, setFormData] = useState({
        name: "Tonynguyen",
        email: "cuonght@gmail.com",
        phone: "0452209186",
        address: "004 Riley Street, 2050 Sydney, Australia",
        password: "********",
    });


    return (
        <form action={formAction} className="flex flex-col space-y-5">
            <input
                placeholder='Your email or phone'
                className='input-primary'
                type="text"
                name='contact'
                pattern="^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+|\+?[0-9]{7,15})$"
                required />
            <input
                placeholder='Your password'
                className='input-primary'
                type="password"
                name='password'
            />
            <div className='flex h-8 items-end space-x-1'>
                {errorMessage && (
                    <>
                        <IoInformationOutline className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                )}
            </div>
            {/* <button
                disabled={isPending}
                type='submit'
                className={clsx({
                    'btn-primary': !isPending,
                    'btn-disabled ': isPending,
                })}>
                Ingresar
            </button> */}
            <button
                disabled={isPending}
                
                className={clsx(
                    
                    {
                        'btn-primary': !isPending,
                        'btn-disabled': isPending,                    
                    },
                    'w-80 !rounded-l-full !rounded-r-none ml-auto' // Sobrescribe rounded-full con !important
                )}
                >
                <Link
                    href="/"
                    >
                    Sign in
                </Link>
            </button>
            


            {/* <Button className="mt-4 w-full" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button> */}



            {/* divisor line */}
            <div className="flex items-center my-5 px-10">
                <div className="flex-1 border-t border-gray-500"></div>
                <div className="px-2 text-gray-800">O</div>
                <div className="flex-1 border-t border-gray-500"></div>
            </div>

            <Link
                href="/auth/new-account"
                className="btn-secondary text-center mx-10">
                Crear una nueva cuenta
            </Link>

        </form>
    )
}
