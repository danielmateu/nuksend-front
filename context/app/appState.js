import React, { useReducer } from 'react';
import appContext from './appContext';
import appReducer from './appReducer';

import { 
    AGREGAR_DESCARGAS,
    AGREGAR_PASSWORD,
    CREAR_ENLACE_ERROR,
    CREAR_ENLACE_EXITO,
    LIMPIAR_ALERTA,
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

    return (
        <appContext.Provider value={{
            ...state
        }}>
            {children}
        </appContext.Provider>
    )
}

export default AppState;

