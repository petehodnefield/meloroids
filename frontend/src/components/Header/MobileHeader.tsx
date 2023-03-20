import React from 'react'
import logoSmall from '../../../public/assets/logo/logo-small-white.png'
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import HamburgerMenu from './HamburgerMenu';

interface NavProps {

    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const MobileHeader = ({ isOpen, setIsOpen }: NavProps) => {
    const hoverStyles: string = 'hover:opacity-80 hover:cursor-pointer duration-200'

    return (
        <div className='h-20 bg-primary flex   items-center justify-center border-b-1 shadow-md border-secondary py-4 w-full sticky top-0 lg:hidden'>
            <Icon
                className={
                    `absolute my-auto left-4 text-2  ${hoverStyles}
                    ${isOpen ? 'hidden' : 'text-white'}
                    `
                }
                icon="ic:twotone-menu"
                onClick={() => setIsOpen(!isOpen)}
            />
            <div >
                <Link href='/'>
                    <Image
                        src={logoSmall}
                        alt='Meloroids logo'
                        className='h-12 w-full '
                    />
                </Link>
            </div>
        </div>
    )
}

export default MobileHeader