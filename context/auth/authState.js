import React, { useReducer, } from 'react';
import { authContext, authReducer } from './';


const AuthState = ({ children }) => {
    
    //Estado inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        autenticado: null,
        usuario: null,
        mensaje: null
    };

    //Definir state
    const [state, dispatch] = useReducer(authReducer, initialState)

    return (
        <authContext.Provider value={{
            ...state
        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthState;