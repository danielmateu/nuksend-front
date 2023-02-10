import React, { useReducer } from 'react';
import appContext from './appContext';
import appReducer from './appReducer';
import { clienteAxios } from 'config/axios';
import {
    AGREGAR_DESCARGAS,
    AGREGAR_PASSWORD,
    CREAR_ENLACE_ERROR,
    CREAR_ENLACE_EXITO,
    LIMPIAR_ALERTA,
    LIMPIAR_STATE,
    MOSTRAR_ALERTA,
    SUBIR_ARCHIVO,
    SUBIR_ARCHIVO_ERROR,
    SUBIR_ARCHIVO_EXITO
} from 'types';


const initialState = {
    mensaje_archivo: null,
    nombre: '',
    nombre_original: '',
    cargando: null,
    descargas: 1,
    password: '',
    autor: null,
    url: '',
};


const AppState = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, initialState)

    //Muestra una alerta    
    const mostrarAlerta = msg => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: msg
        })

        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA
            })
        }, 3000);
    }

    //Sube los archivos al servidor
    const subirArchivo = async (formData, nombreArchivo) => {

        dispatch({
            type: SUBIR_ARCHIVO,
        })

        // console.log('Subiendo archivo...');
        try {
            const resultado = await clienteAxios.post('/api/archivos', formData)
            // console.log(resultado.data);

            dispatch({
                type: SUBIR_ARCHIVO_EXITO,
                payload: {
                    nombre: resultado.data.archivo,
                    nombre_original: nombreArchivo
                }
            })
            
            //Limpiar alerta despues de 3 segundos
            setTimeout(() => {
                dispatch({
                    type: LIMPIAR_ALERTA
                })
            }, 3000)

            return;

        } catch (error) {
            console.log(error);
            dispatch({
                type: SUBIR_ARCHIVO_ERROR,
                payload: error.response.data.msg,
            })

        }
    }

    //Crea un enlace una vez que se subió el archivo
    const crearEnlace = async () => {
        const data = {
            nombre: state.nombre,
            nombre_original: state.nombre_original,
            descargas: state.descargas,
            password: state.password,
            autor: state.autor
        }

        try {
            const resultado = await clienteAxios.post('/api/enlaces', data);
            // console.log(resultado.data.msg);
            dispatch({
                type: CREAR_ENLACE_EXITO,
                payload: resultado.data.msg
            })
        } catch (error) {
            // console.log(error);
            dispatch({
                type: CREAR_ENLACE_ERROR,
                payload: error.response.data.msg,

            })
        }
    }

    //Limpiar state
    const limpiarState = () => {
        dispatch({
            type: LIMPIAR_STATE,

        })
    }

    return (
        <appContext.Provider value={{
            ...state,
            mostrarAlerta,
            subirArchivo,
            crearEnlace,
            limpiarState
        }}>
            {children}
        </appContext.Provider>
    )
}

export default AppState;

