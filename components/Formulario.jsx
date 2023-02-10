import appContext from 'context/app/appContext';
import React, { useContext, useState } from 'react'

export const Formulario = () => {

    //Context de la app
    const AppContext = useContext(appContext);
    const { agregarPassword, agregarDescargas } = AppContext;

    const [password, setPassword] = useState(false)

    // const [selectedOption, setSelectedOption] = useState('')

    // const handleDescargas = (e) => {
    //     setSelectedOption(Number(e.target.value))
    // }

    return (
        <div className='w-full flex flex-col gap-4 '>
            <div className="">
                <label htmlFor="" className='text-gray-600'>Eliminar tras:</label>
                <select
                    onChange={e => agregarDescargas(Number(e.target.value))}
                    className='appereance-none w-full bg-white border border-gray-400 leading-none focus:outline-none p-2 shadow-lg rounded'>
                    <option value="" disabled>--Selecciona--</option>
                    <option value="1">1 descarga</option>
                    <option value="5">5 descargas</option>
                    <option value="10">10 descargas</option>
                    <option value="20">20 descargas</option>
                </select>
            </div>

            <div className="mb-6">
                <div className="flex justify-between">
                    <label htmlFor="" className='text-gray-600'>Contraseña </label>
                    <input
                        type="checkbox"
                        onChange={() => setPassword(!password)}
                    />
                </div>

                {
                    password ? (
                        <input
                            type="password"
                            className='appereance-none w-full bg-whiteborder leading-none focus:outline-none p-2 shadow-lg'
                            onChange={(e) => agregarPassword(e.target.value)}
                        />
                    ) : null
                }
            </div>
        </div>
    )
}
