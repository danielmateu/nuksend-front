import appContext from "context/app/appContext"
import authContext from "context/auth/authContex"
import { useContext } from "react"



export const Alerta = () => {

    //Extraer mensaje  para usuario
    const AuthContext = useContext(authContext)
    const { mensaje } = AuthContext

    //Extraer mensaje para archivo 
    const AppContext = useContext(appContext)
    const { mensaje_archivo } = AppContext


    return (
        <div className='bg-gray-600 p-4 my-4 text-center rounded text-lg text-red-400 font-semibold'>
            <h4>{ mensaje || mensaje_archivo }</h4>
        </div>
    )
}
