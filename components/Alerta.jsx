import authContext from "context/auth/authContex"
import { useContext } from "react"



export const Alerta = () => {

    const AuthContext = useContext(authContext)
    const { mensaje } = AuthContext

    return (
        <div className='bg-gray-200 p-4 my-4 text-center rounded text-lg text-red-400 font-semibold'>
            <h4>{mensaje}</h4>
        </div>
    )
}
