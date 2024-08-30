import '../styles/Principal.css'
import Aside from '../components/Aside'
import ContenidoPrincipal from './Contenido_principal'
export default function Principal(){
    return(
        <main className='main'>
            <Aside/>
            <ContenidoPrincipal/>
        </main>
    )
}