import React from 'react'
import { Icon } from '@iconify/react';
import logoSmall from '../../../public/assets/logo/logo-small-white.png'
import Image from 'next/image';
import Link from 'next/link';

interface NavProps {

    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const HamburgerMenu = ({ setIsOpen }: NavProps) => {

    return (
        <div className='fixed bg-dark top-0 left-0 h-screen w-2/3 lg:hidden pull-out flex flex-col justify-start items-center z-50'>
            <Icon onClick={() => setIsOpen(false)} className='text-white text-2 absolute right-6 top-4 hover:cursor-pointer hover:opacity-80 duration-200' icon="material-symbols:close-rounded" />
            {/* Meloroids small logo */}
            <div className=' mt-4 mb-6 h-12 w-8'>
                <Image
                    src={logoSmall}
                    alt='The Meloroids logo consisting of an eight note and a syringe.'
                    className='h-full w-full'
                />
            </div>

            {/* NavLinks */}
            <ul className='flex flex-col items-start w-full pl-6 md:pl-8'>
                <li className='text-white text-1 font-semibold mb-4  hover:text-light duration-200'>
                    <Link
                        href='/'
                        onClick={() => setIsOpen(false)}
                    >Home</Link>
                </li>
                <li
                    className='text-white text-1 font-semibold hover:text-light duration-200 mb-4'>
                    <Link
                        href='/train-setup'
                        onClick={() => setIsOpen(false)}
                    >Train</Link>
                </li>
                <li
                    className='text-white text-1 font-semibold hover:text-light duration-200 mb-4'>
                    <Link
                        href='/quickie'
                        onClick={() => setIsOpen(false)}
                    >Quickie</Link>
                </li>
            </ul>
        </div>
    )
}

export default HamburgerMenu