
import { useCallback, useContext, useState } from "react";
import { useDropzone } from 'react-dropzone'
import { clienteAxios } from "config/axios";
import authContext from "context/auth/authContex";
import { Formulario } from "./Formulario";





export const DropZone = () => {

    //Extraer el usuario autenticado del LS
    const AuthContext = useContext(authContext);
    const { usuarioAutenticado } = AuthContext;

    const onDrop = useCallback(async (acceptedFiles) => {
        console.log(acceptedFiles)

        //Crear FormData
        const formData = new FormData();
        formData.append('archivo', acceptedFiles[0]);

        const resultado = await clienteAxios.post('/api/archivos', formData)
        console.log(resultado.data);

    }, [])

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive
    } = useDropzone({ onDrop })

    return (
        <div className='flex md:flex-1 max-h-96 flex-col items-center justify-center border-dashed border-4 border-gray-500 hover:border-gray-600 bg-gray-100 rounded transition-all mx-4'>

            <div className="w-full p-4">
                {/* <h4 className="text-center text-2xl">Archivos agregados</h4>  */}
                {/* {usuarioAutenticado && <Formulario />} */}

                <div {...getRootProps({ className: 'dropzone w-full py-32' })}>
                    <div className="text-center">
                        {
                            isDragActive ? <p className="text-2xl text-gray-500">Suelta el archivo</p> : <p className="text-2xl text-gray-500">Arrastra el archivo aquí</p>
                        }
                        {/* <p className="text-2xl">Selecciona un archivo y arrástralo aquí</p> */}
                        <button className="bg-gray-300 hover:bg-gray-400 px-10 hover:px-6 rounded py-2 my-6 hover:text-white transition-all">Selecciona tu archivo</button>
                    </div>
                </div>

                {/* </div> */}
            </div>
        </div>
    )
}
