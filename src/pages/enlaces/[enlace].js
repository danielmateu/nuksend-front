
import { useRouter } from 'next/router'

const Enlace = () => {

    const router = useRouter()
    const { enlace } = router.query

    return <p>Desde Enlace: {enlace}.js</p>
}

export default Enlace
