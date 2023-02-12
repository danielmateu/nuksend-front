
import { Alerta } from 'components/Alerta'
import { Layout } from 'components/Layout'
import { clienteAxios } from 'config/axios'
import appContext from 'context/app/appContext'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'




export async function getServerSideProps({ params }) {

    const { enlace } = params
    const resultado = await clienteAxios.get(`/api/enlaces/${enlace}`);
    // console.log(resultado);
    return {
        props: {
            enlace: resultado.data,
        },
    }
}

export async function getServerSidePaths() {

    const enlaces = await clienteAxios.get('/api/enlaces')

    return {
        paths: enlaces.data.enlaces.map(enlace => ({
            params: { enlace: enlace.url }
        })),
        fallback: false
    }
}

const Enlace = ({ enlace }) => {

    const AppContext = useContext(appContext)
    const {mostrarAlerta, mensaje_archivo} = AppContext

    const router = useRouter()
    const [tienePassword, setTienePassword] = useState(enlace.password)
    const [password, setPassword] = useState('')

    console.log(tienePassword);

    console.log(enlace);
    // const { enlace } = router.query

    const verificarPassword = async e => {
        e.preventDefault()
        // console.log('verificando password');
        const data = {
            password
        }

        try {
            const resultado = await clienteAxios.post(`/api/enlaces/${enlace.enlace}`, data);
            console.log(resultado);

            setTienePassword(resultado.data.password)
        } catch (error) {
            console.log(error.response.data.msg);
            mostrarAlerta(error.response.data.msg);
        }

    }

    return (
        <Layout>
            {
                tienePassword ? (
                    <>
                        <p className='text-center'>Este enlace está protegido por un Password, para descargar el archivo, introduce el password correcto </p>
                        <div className=" w-full md:w-8/12 mx-auto">
                            <form
                                className="bg-white rounded hover:shadow-lg p-10 m-6 transition-all"
                                onSubmit={verificarPassword}
                            >
                                <div className="mb-4 flex flex-col">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="p-4 bg-slate-100 rounded appearance-none focus:outline-none"
                                        placeholder='Introduce tu password'
                                        id='password'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />

                                </div>
                                <input
                                    type="submit"
                                    value='Validar Password'
                                    className='w-full bg-green-200 hover:bg-green-300 transition-colors py-4 rounded my-2'
                                />

                                {mensaje_archivo && <Alerta />}
                            </form>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="text-4xl text-center text-gray-700">Descarga tu archivo</h1>

                        <div className="flex items-center justify-center mt-10">
                            <a
                                download
                                href={`${process.env.backendURL}/api/archivos/${enlace.archivo}`}
                                className="bg-red-500 text-center px-10 py-2 rounded text-white cursor-pointer hover:bg-gray-900 transition-all">Aquí</a>
                        </div>
                    </>
                )
            }

        </Layout>
    )
}

export default Enlace
