import {React} from 'react';
import {ContainerBanner} from '../../styled';
import { ButtonBanner } from '../../styled';

export const Banner = () => {   
    return(
        
        <ContainerBanner>
            <ButtonBanner><span><img src="https://imagepng.org/whatsapp-icone-icon/whatsapp-icone/" alt="" /></span><a href="https://api.whatsapp.com/send?phone=5585991155517">Entre em contato</a></ButtonBanner>
        </ContainerBanner>  
        
        
    ) 
}