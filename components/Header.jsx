/* eslint-disable react-hooks/exhaustive-deps */
import appContext from 'context/app/appContext';
import authContext from 'context/auth/authContex';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';


export const Header = () => {

    const router = useRouter();

    //Extraer el Usuario del Storage
    const AuthContext = useContext(authContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = AuthContext;

    //Context de la app
    const AppContext = useContext(appContext);
    const { limpiarState } = AppContext;

    useEffect(() => {
    usuarioAutenticado();
    }, [])

    const redireccionar = () => {
        router.push('/')
        limpiarState();
    }
    


    return (
        <header className='flex flex-col sm:flex-row items-center justify-between p-10 '>
            <a
                // href='/'
                onClick={() => redireccionar()}
                className='font-bold text-red-500  gap-1 text-2xl sm:text-4xl cursor-pointer'

            >
                NukSend <span className='text-gray-500 '>App</span>
            </a>

            {usuario ? (

                <div className='flex items-center gap-4'>
                    <p>Hola {usuario.nombre}</p>
                    <button
                        className='bg-red-200 p-2 rounded hover:rounded-xl hover:bg-red-300 transition-colors text-black '
                        onClick={cerrarSesion}
                    >
                        Cerrar Sesión
                    </button>
                </div>


            ) : (
                <nav className='flex gap-4'>
                    <Link href='/login' className='bg-sky-200 px-4 hover:rounded-xl py-2  rounded hover:bg-sky-300 transition-all text-gray-500 '>Iniciar Sesión</Link>
                    <Link href='/crear-cuenta' className='bg-green-200 px-4 hover:rounded-xl py-2  rounded hover:bg-green-300 transition-all text-gray-500 '>Crear Cuenta</Link>
                </nav >
            )}


        </header >
    )
}
