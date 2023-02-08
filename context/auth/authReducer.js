import { 
    REGISTRO_ERROR, 
    REGISTRO_EXITOSO,
    LIMPIAR_ALERTA, 
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

        case LIMPIAR_ALERTA:
            return{
                ...state,
                mensaje: null
            }

        default:
            return state
    }
}
