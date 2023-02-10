import { 
    REGISTRO_ERROR, 
    REGISTRO_EXITOSO,
    LIMPIAR_ALERTA,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    USUARIO_AUTENTICADO,
    CERRAR_SESION, 
} from "types"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {

        case REGISTRO_EXITOSO:
            return {
                ...state,
                mensaje: action.payload
            }

        case REGISTRO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }

        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                token: action.payload,
                autenticado: true

            }

        case LOGIN_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }

        case USUARIO_AUTENTICADO:
            return {
                ...state,
                usuario: action.payload,
                autenticado: true,
                mensaje: null,

            }

        case CERRAR_SESION: 
            localStorage.removeItem('token')
            return {
                ...state,
                usuario:null,
                autenticado: null,
                token: null,
                usuario: null,
                mensaje: null,
                

            }

        case LIMPIAR_ALERTA:
            return{
                ...state,
                mensaje: null
            }

        default:
            return state
    }
}
