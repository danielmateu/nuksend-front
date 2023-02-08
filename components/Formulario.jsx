import React, { useState } from 'react'

export const Formulario = () => {

    const [password, setPassword] = useState(false)

    //agregarPassword
    const agregarPassword = (e) => {
        
        console.log(e);
        
    }

    return (
        <div className='w-full my-4'>
            <div className="p-4">
                <label htmlFor="" className='text-gray-600'>Eliminar tras:</label>
                <select
                    onChange={e => agregarDescargas(Number(e.target.value))}
                    name=""
                    id=""
                    className='appereance-none w-full bg-whiteborder leading-none focus:outline-none p-2 shadow-lg'>
                    <option value="" disabled>--Selecciona--</option>
                    <option value="1">1 descarga</option>
                    <option value="5">5 descargas</option>
                    <option value="10">10 descargas</option>
                    <option value="20">20 descargas</option>
                </select>
            </div>

            <div className=" p-4">
                <label htmlFor="" className='text-gray-600'>Contraseña </label>
                <input
                    type="checkbox"
                    onChange={() => setPassword(!password)}
                />

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
