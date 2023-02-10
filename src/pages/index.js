/* eslint-disable react-hooks/exhaustive-deps */

import { Inter } from '@next/font/google'
import { Alerta } from 'components/Alerta'
import { DropZone } from 'components/DropZone'
import { Layout } from 'components/Layout'
import appContext from 'context/app/appContext'
import authContext from 'context/auth/authContex'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'



export default function Home() {

  //Extraer el usuario autenticado del LS
  const AuthContext = useContext(authContext);
  const { usuarioAutenticado } = AuthContext;

  //Extraer el mensaje de error de archivos
  const AppContext = useContext(appContext);
  const { mensaje_archivo, url } = AppContext;

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token){
      usuarioAutenticado()
    }
  }, [])

  //Copiar enlace
  


  return (
    <>
      <Layout>
        <div className="md:w-4/5 xl:w-3/5 mx-auto">
          {url ? (
            <div className='text-center text-2xl flex flex-col gap-6 justify-center items-center'>
              <p className='text-red-500 font-semibold'>Tu url es:</p>
              <p>{`${process.env.frontendURL}/enlaces/${url}`}</p>

              <button
                className='bg-red-200 p-2 rounded hover:rounded-xl hover:bg-red-300 transition-colors text-black w-48 hover:w-96'
                onClick={() => navigator.clipboard.writeText(
                  `${process.env.frontendURL}/enlaces/${url}`
                )}
              >
                Copiar enlace
              </button>
            </div>
          ) : (
            <>
              {mensaje_archivo && <Alerta />}
              <div className="lg:flex hover:shadow-lg p-4 bg-white rounded-lg py-10 transition-all">
                <DropZone />
                <div className="md:flex-1 m-4 lg:mt-0">
                  <h2 className='text-4xl mb-5 text-center'>Comparte archivos de forma sencilla</h2>
                  <p className='text-lg text-gray-500 leading-loose'>Obtén un enlace único y compartelo con quien quieras. <span className='font-semibold text-red-500'>NukSend App</span> incluye cifrado de archivos y protección con contraseña, te permite enviar archivos (de 1GB hasta 2.5GB) de forma segura. Al subir un archivo, <span className='font-semibold text-red-500'>NukSend App</span> genera un enlace que puedes compartir con tus colegas. Los archivos no se guardan en la nube.
                  </p>
                  <Link href="/crear-cuenta" className="mt-4 text-red-400 font-bold text-lg hover:text-red-600 transition-all flex justify-center">
                    Crear Cuenta para más beneficios
                  </Link>
                </div>
              </div>
            </>
          )
          }
        </div>
      </Layout >

    </>
  )
}
