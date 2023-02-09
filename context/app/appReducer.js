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
} from 'types'
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {

        case MOSTRAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: action.payload,

            }

        case LIMPIAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: null
            }

        default:
            return state
    }
}