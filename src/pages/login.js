/* eslint-disable react-hooks/exhaustive-deps */
import { Alerta } from 'components/Alerta'
import { Layout } from 'components/Layout'
import authContext from 'context/auth/authContex'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import * as Yup from 'yup'

const Login = () => {

    //Acceder al state
    const AuthContext = useContext(authContext);
    const { mensaje, iniciarSesion, autenticado } = AuthContext;

    const router = useRouter();

    useEffect(() => {
        if(autenticado) {
            router.push('/')
        }
    }, [autenticado])
    

    //Validación formulario con Formik y Yup
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
            password: Yup.string().required('El password es obligatorio').min(6, 'El password debe ser de al menos 6 caracteres')
        }),
        onSubmit: valores => {
            iniciarSesion(valores)
        }
    })

    
    return (
        <Layout>
            <div className="md:w-4/5  xl:w-3/5 mx-auto mb-32">
                <h2 className="text-4xl text-gray-500 text-center">Página de Login</h2>
                <div className="flex justify-center">
                    <div className="w-full max-w-lg">
                        <form 
                        className="bg-white rounded hover:shadow-lg p-10 m-6 transition-all"
                        onSubmit={formik.handleSubmit}
                        >
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="email">Email</label>
                                <input
                                type="email"
                                className="p-4 bg-slate-100 rounded appearance-none focus:outline-none" 
                                placeholder='Introduce tu @mail'
                                id='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.email && formik.errors.email ? (
                                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                            <p className="font-semibold">{formik.errors.email}</p>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="password">Password</label>
                                <input
                                type="password"
                                className="p-4 bg-slate-100 rounded appearance-none focus:outline-none" 
                                placeholder='Introduce tu constraseña'
                                id='password'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.password && formik.errors.password ? (
                                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                            <p className='font-semibold'>{formik.errors.password}</p>
                                        </div>
                                    ): null
                                }
                            </div>

                            <input 
                            type="submit"
                            value='Iniciar Sesión' 
                            className='w-full bg-sky-200 hover:bg-sky-300 transition-colors py-4 rounded my-2'
                            />
                            {mensaje && <Alerta/>}
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login