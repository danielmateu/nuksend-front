import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React from 'react'

export const Header = () => {

    const router = useRouter()

    const redireccionar = () => {
        router.push('/')
    }

    return (
        <header className='flex flex-col sm:flex-row items-center justify-between p-10 '>
            <Link
            href='/'
            className='font-bold text-red-500  gap-1 text-2xl sm:text-4xl'
            onClick={redireccionar}
            >
                NukSend <span className='text-gray-500 '>App</span>
            </Link>

            <nav className='flex gap-4'>
                <Link href='/login' className='bg-sky-200 p-2 rounded-2xl hover:bg-sky-300 transition-colors text-gray-500 '>Iniciar Sesión</Link>
                <Link href='/crear-cuenta' className='bg-green-200 p-2 rounded-2xl hover:bg-green-300 transition-colors text-gray-500 '>Crear Cuenta</Link>
            </nav>
        </header>
    )
}
