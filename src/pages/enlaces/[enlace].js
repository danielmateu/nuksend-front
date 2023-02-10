
import { Layout } from 'components/Layout'
import { clienteAxios } from 'config/axios'
import { useRouter } from 'next/router'


export async function getServerSideProps({ params }) {

    const { enlace } = params
    const resultado = await clienteAxios.get(`/api/enlaces/${enlace}`);
    console.log(resultado);
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

const Enlace = ({enlace}) => {

    const router = useRouter()
    // const { enlace } = router.query

    return (
        <Layout>
            <h1 className="text-4xl text-center text-gray-700">Descarga tu archivo</h1>

            <div className="flex items-center justify-center mt-10">
                <a
                    download
                    href={`${process.env.backendURL}/api/archivos/${enlace.archivo}`}
                    className="bg-red-500 text-center px-10 py-2 rounded text-white cursor-pointer hover:bg-gray-900 transition-all">Aquí</a>
            </div>
        </Layout>
    )
}

export default Enlace
