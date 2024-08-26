import '../styles/Footer.css'
import { logoYoutube } from 'ionicons/icons';
import { logoX } from 'ionicons/icons';
import { logoWhatsapp } from 'ionicons/icons';
import { logoInstagram } from 'ionicons/icons';
import { logoFacebook } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

export default function Footer(){
    return(
        <footer className='footer'>
            <ul className="social-icons">
                <li className="icon-element">
                    <a href="" className="icon">
                        <IonIcon icon= {logoYoutube}/> 
                    </a>
                </li>
                <li className="icon-element">
                    <a href="" className="icon">
                        <IonIcon icon= {logoX}/> 
                    </a>
                </li>
                <li className="icon-element">
                    <a href="" className="icon">
                        <IonIcon icon= {logoWhatsapp}/> 
                    </a>
                </li>
                <li className="icon-element">
                    <a href="" className="icon">
                        <IonIcon icon= {logoInstagram}/> 
                    </a>
                </li>
                <li className="icon-element">
                    <a href="" className="icon">
                        <IonIcon icon= {logoFacebook}/> 
                    </a>
                </li>
            </ul>
            <ul className="menu">
                <li className="menu-element">
                    <a href="" className="menu-icons"> Sobre mi </a>
                </li>
                <li className="menu-element">
                    <a href="" className="menu-icons"> Donaciones </a>
                </li>
                <li className="menu-element">
                    <a href="" className="menu-icons"> Foro </a>
                </li>
            </ul>
            <p className="text"> @2024 | Todos los derechos reservados</p>
        </footer>
    )
}