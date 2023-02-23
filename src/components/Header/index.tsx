import React from 'react'
import { Icon } from '@iconify/react';
import logoSmall from '../../../public/assets/logo/logo-small.png'
import Image from 'next/image';
import Link from 'next/link';



const Header = () => {
    const hoverStyles: string = 'hover:text-primary hover:cursor-pointer hover:transition-250'


    return (
        <div className='bg-primary flex relative justify-center border-b-1 shadow-md border-dark py-4 sticky top-0'>
            <Icon className={`absolute left-4 top-4 text-3xl text-white ${hoverStyles}`} icon="ic:twotone-menu" />
            <Link href='/'>
                <Image
                    src={logoSmall}
                    alt='Meloroids logo'
                    className='h-full w-8'
                />
            </Link>
        </div>
    )
}

export default Header