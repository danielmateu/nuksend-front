import { Formulario } from "./Formulario"


export const DropZone = () => {
    return (
        <div className='flex md:flex-1 max-h-96 flex-col items-center justify-center border-dashed border-4 border-gray-500 hover:border-gray-600 bg-gray-100 rounded transition-all'>
            <Formulario/>
        </div>
    )
}
