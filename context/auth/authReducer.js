import { REGISTRO_EXITOSO, USUARIO_AUTENTICADO } from "types"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {

        case REGISTRO_EXITOSO:
            return {
                ...state,
                mensaje: action.payload
            }

        // case USUARIO_AUTENTICADO:
        //     return {
        //         ...state,
        //         usuario: action.payload,
        //         autenticado: true
        //     }



        default:
            return state
    }
}
