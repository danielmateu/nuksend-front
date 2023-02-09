/* eslint-disable react-hooks/exhaustive-deps */

import { Inter } from '@next/font/google'
import { DropZone } from 'components/DropZone'
import { Layout } from 'components/Layout'
import authContext from 'context/auth/authContex'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  //Extraer el usuario autenticado del LS
  const AuthContext = useContext(authContext);
  const { usuarioAutenticado } = AuthContext;  

  useEffect(() => {
    usuarioAutenticado()
  }, [])
  

  return (
    <>
      <Layout>
        <div className="md:w-4/5 xl:w-3/5 mx-auto">
          <div className="lg:flex hover:shadow-lg p-4 bg-white rounded-lg py-10 transition-all">
            <DropZone/>
            <div className="md:flex-1 m-4 lg:mt-0">
              <h2 className='text-4xl mb-5'>Comparte archivos de forma sencilla</h2>
              <p className='text-lg text-gray-500 leading-loose'>Obtén un enlace único y compartelo con quien quieras. <span className='font-semibold'>NukSend App</span> incluye cifrado de archivos y protección con contraseña, te permite enviar archivos (de 1GB hasta 2.5GB) de forma segura. Al subir un archivo, <span className='font-semibold'>NukSend App</span> genera un enlace que puedes compartir con tus colegas. Los archivos no se guardan en la nube.
              </p>
              <Link href="/crear-cuenta" className="mt-4 text-red-400 font-bold text-lg hover:text-red-600 transition-all flex justify-center">
                Crear Cuenta para más beneficios
              </Link>
            </div>
          </div>
        </div>
      </Layout>

    </>
  )
}
