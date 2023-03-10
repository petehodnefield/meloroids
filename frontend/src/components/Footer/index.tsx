import Image from 'next/image'
import React from 'react'
import logoFull from '../../../public/assets/logo/logo-full-white.png'
import Link from 'next/link'
const Footer = () => {
    const currentYear: number = new Date().getFullYear()
    return (
        <footer className='flex h-24 flex-col items-center text-white lg:pb-4 lg:pt-1 justify-center  bg-primary lg:h-auto'>

            <Link className='h-9 mb-1.5 my-4 lg:h-12 lg:mb-3' href='/'>
                <Image
                    className='h-full  object-contain '
                    src={logoFull}
                    alt='Logo for meloroids'
                />
            </Link>
            <p className='text-0.75 font-semibold mb-0.5 lg:mb-1'>No more illiterate producers.</p>
            <p className='text-0.625 mb-3 lg:mb-0'>©{currentYear} Meloroids LLC</p>
        </footer>

    )
}

export default Footer