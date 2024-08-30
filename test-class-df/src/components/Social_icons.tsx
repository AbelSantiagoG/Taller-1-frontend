import { logoYoutube } from 'ionicons/icons';
import { logoX } from 'ionicons/icons';
import { logoWhatsapp } from 'ionicons/icons';
import { logoInstagram } from 'ionicons/icons';
import { logoFacebook } from 'ionicons/icons';
import { logoGithub } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
export default function SocialIcons(){
    return(
        <ul className="social-icons">
            <li className="icon-element">
                <a href="https://www.youtube.com/@Fernanfloo" className="icon" target='_blank'>
                    <IonIcon icon= {logoYoutube}/> 
                </a>
            </li>
            <li className="icon-element">
                <a href="https://x.com/xokaspov" className="icon" target='_blank'>
                    <IonIcon icon= {logoX}/> 
                </a>
            </li>
            <li className="icon-element">
                <a href="https://wa.me/573053575021" className="icon" target='_blank'>
                    <IonIcon icon= {logoWhatsapp}/> 
                </a>
            </li>
            <li className="icon-element">
                <a href="https://www.instagram.com/cristiano?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="icon" target='_blank'>
                    <IonIcon icon= {logoInstagram}/> 
                </a>
            </li>
            <li className="icon-element">
                <a href="https://www.facebook.com/barackobama?locale=es_LA" className="icon" target='_blank'>
                    <IonIcon icon= {logoFacebook}/> 
                </a>
            </li>
            <li className="icon-element">
                <a href="https://github.com/AbelSantiagoG" className="icon" target='_blank'>
                    <IonIcon icon= {logoGithub}/> 
                </a>
            </li>
    </ul>
    )
}  
    
