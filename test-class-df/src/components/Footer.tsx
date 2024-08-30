import '../styles/Footer.css'
import SocialIcons from './Social_icons'
import MenuFooter from './Menu_footer'

export default function Footer(){
    return(
        <footer className='footer'>
            <SocialIcons/>
            <MenuFooter/>
            <p className="text"> @2024 | Todos los derechos reservados</p>
        </footer>
    )
}