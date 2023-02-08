import { 
    REGISTRO_ERROR, 
    REGISTRO_EXITOSO,
    LIMPIAR_ALERTA,
    LOGIN_EXITOSO,
    LOGIN_ERROR, 
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

        case LIMPIAR_ALERTA:
            return{
                ...state,
                mensaje: null
            }

        default:
            return state
    }
}
