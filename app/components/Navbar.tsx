import React from 'react';
import Image from 'next/image';
import Logo from '../../public/assets/images/landing-page/apple-watch-design-studio-logo.jpeg'

export default function Navbar(){
    return(
        <div>
            <div className='p-8 mb-20'>
                <Image src={Logo} alt='store-logo' height='20' width='90'/>
            </div>
        </div>
    )   
}