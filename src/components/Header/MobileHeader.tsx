import React from 'react'
import logoSmall from '../../../public/assets/logo/logo-small-white.png'
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface NavProps {

    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const MobileHeader = ({ isOpen, setIsOpen }: NavProps) => {
    const hoverStyles: string = 'hover:text-dark hover:cursor-pointer duration-200'

    return (
        <div className='h-16 bg-primary flex relative justify-center border-b-1 shadow-md border-secondary py-4 sticky top-0 lg:hidden'>
            <Icon
                className={`absolute my-auto left-4 text-2 text-white ${hoverStyles}`}
                icon="ic:twotone-menu"
                onClick={() => setIsOpen(!isOpen)}
            />
            <Image
                src={logoSmall}
                alt='Meloroids logo'
                className='h-12 w-full'
            />
        </div>
    )
}

export default MobileHeader