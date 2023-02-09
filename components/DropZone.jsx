
import { useCallback, useContext, useState } from "react";
import { useDropzone } from 'react-dropzone'
import { clienteAxios } from "config/axios";
import authContext from "context/auth/authContex";
import { Formulario } from "./Formulario";


export const DropZone = () => {

    //Extraer el usuario autenticado del LS
    const AuthContext = useContext(authContext);
    const { usuarioAutenticado } = AuthContext;

    // const onDrop = useCallback(async (acceptedFiles) => {
    //     console.log(acceptedFiles)
    //     //Crear FormData
    //     const formData = new FormData();
    //     formData.append('archivo', acceptedFiles[0]);

    //     const resultado = await clienteAxios.post('/api/archivos', formData)
    //     console.log(resultado.data);

    // }, [])

    const onDropAccepted = useCallback (async(acceptedFiles) => {
        const formData = new FormData();
        formData.append('archivo', acceptedFiles[0]);

        const resultado = await clienteAxios.post('/api/archivos', formData)
        console.log(resultado.data);
    },[])

    const onDropRejected = () => {
        console.log('Archivo demasiado grande')
    }

    //Extraer contenido de dropzone
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive
    } = useDropzone({ 
        // onDrop, 
        onDropAccepted, 
        onDropRejected, 
        maxSize: 1000000 })

    const archivos = acceptedFiles.map(archivo => (
        <li
            key={archivo.lastModified}
            className="bg-white flex-1 p-3 shadow-lg hover:shadow-none rounded transition-all ">
            {/* <p className="">{archivo.name.split('.jpg')}</p> */}
            <p className="">{archivo.path}</p>
            <p className="text-end">Tamaño: <span className="text-gray-400">{(archivo.size / Math.pow(1024, 2)).toFixed(2)} MB</span></p>
        </li>
    ))

    //Crear enlace
    const crearEnlace = async () => {
        

        console.log('desde crear enlace')
    }

    return (
        <div className='flex md:flex-1 max-h-96 flex-col items-center justify-center border-dashed border-4 border-gray-500 hover:border-gray-600 bg-gray-100 rounded transition-all mx-4'>


            <div className="w-full p-4">
                {/* <h4 className="text-center text-2xl">Archivos agregados</h4>  */}
                {/* {usuarioAutenticado && <Formulario />} */}


                {
                    acceptedFiles.length > 0 ? (
                        <div className = 'w-full p-4  flex flex-col justify-center gap-6'>
                            <h4 className="text-center text-2xl tex-gray-400">Archivo cargado</h4>
                            <ul>
                                {archivos}
                            </ul>

                            <button 
                            className="bg-gray-300 hover:bg-gray-400 px-10 hover:px-6 rounded py-2 my-6 hover:text-white transition-all"
                            onClick={crearEnlace}
                            >Crea el enlace</button>
                        </div>

                    ) : (
                        <div {...getRootProps({ className: 'dropzone w-full py-32' })}>
                            <div className="text-center">
                                {
                                    isDragActive ? <p className="text-2xl text-gray-500">Suelta el archivo</p> : <p className="text-2xl text-gray-500">Arrastra el archivo aquí</p>
                                }
                                {/* <p className="text-2xl">Selecciona un archivo y arrástralo aquí</p> */}
                                <button className="bg-gray-300 hover:bg-gray-400 px-10 hover:px-6 rounded py-2 my-6 hover:text-white transition-all">Selecciona tu archivo</button>
                            </div>
                        </div>
                            )
                    }
            </div>
        </div>
    )
}
