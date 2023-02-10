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

        case SUBIR_ARCHIVO:
            return {
                ...state,
                cargando: true,
            }

        case SUBIR_ARCHIVO:
            return {
                ...state,
                cargando: true,
            }

        case SUBIR_ARCHIVO_EXITO:
            return {
                ...state,
                mensaje_archivo: 'Archivo subido correctamente',
                cargando: false,
                nombre: action.payload.nombre,
                nombre_original: action.payload.nombre_original
            }
        case SUBIR_ARCHIVO_ERROR:
            return {
                ...state,
                mensaje_archivo: 'Hubo un error al subir el archivo',
                cargando: false,
            }

        case CREAR_ENLACE_EXITO:
            return {
                ...state,
                url: action.payload,

            }

        case CREAR_ENLACE_ERROR:
            return {
                ...state,
                mensaje_archivo: 'Hubo un error al crear el enlace',
                cargando: false,

            }

        case LIMPIAR_STATE:
            return {
                ...state,
                mensaje_archivo: null,
                nombre: '',
                nombre_original: '',
                cargando: null,
                descargas: 1,
                password: '',
                autor: null,
                url: '',

            }

        case AGREGAR_PASSWORD:
            return {
                ...state,
                password: action.payload,
            }

        default:
            return state
    }
}