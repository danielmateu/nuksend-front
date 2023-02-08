import { clienteAxios } from 'config/axios';
import { useReducer } from 'react';
import {
    REGISTRO_ERROR,
    REGISTRO_EXITOSO,
    LIMPIAR_ALERTA
} from 'types';
import authContext from './authContex';
import authReducer from './authReducer';



const AuthState = ({ children }) => {

    //Estado inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        autenticado: null,
        usuario: null,
        mensaje: null
    };

    //Definir el reducer
    const [state, dispatch] = useReducer(authReducer, initialState)

    //Registrar usuario
    const registrarUsuario = async datos => {
        // console.log('Desde registrar usuario');
        // console.log(datos);
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            // console.log(respuesta.data.msg);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.msg,
            })


        } catch (error) {
            // console.log(error.response.data.msg);
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })
        }

        //Limpiar alerta despues de 3 segundos
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA
            })
        }, 3000)
    }



    return (
        <authContext.Provider value={{
            ...state,

            registrarUsuario

        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthState;