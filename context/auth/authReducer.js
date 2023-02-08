import { CERRAR_SESION } from "types"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {

        case CERRAR_SESION:
            return { 
                ...state,
                usuario: action.payload,
                autenticado: true
            }

        default:
            return state
    }
}
