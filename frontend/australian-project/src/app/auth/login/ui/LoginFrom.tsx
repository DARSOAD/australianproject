'use client'
import { authenticate } from '@/actions'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useActionState } from 'react'
import { IoInformationOutline } from 'react-icons/io5'

export const LoginFrom = () => {
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined,);

    console.log({ errorMessage });
    console.log({ isPending });


    return (
        <form action={formAction} className="flex flex-col">

            <label htmlFor="email">Correo electrónico</label>
            <input
                className="px-5 py-2 border bg-gray-200 rounded mb-5"
                type="email"
                name='email' />


            <label htmlFor="email">Contraseña</label>
            <input
                className="px-5 py-2 border bg-gray-200 rounded mb-5"
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
            <button
                disabled={isPending}
                type='submit'
                className={clsx({
                    'btn-primary': !isPending,
                    'btn-disabled ': isPending,
                })}>
                Ingresar
            </button>

            {/* <Button className="mt-4 w-full" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button> */}



            {/* divisor line */}
            <div className="flex items-center my-5">
                <div className="flex-1 border-t border-gray-500"></div>
                <div className="px-2 text-gray-800">O</div>
                <div className="flex-1 border-t border-gray-500"></div>
            </div>

            <Link
                href="/auth/new-account"
                className="btn-secondary text-center">
                Crear una nueva cuenta
            </Link>

        </form>
    )
}
