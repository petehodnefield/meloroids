import Image from 'next/image'
import React from 'react'
import logoFull from '../../../public/assets/logo/logo-full.png'
import Link from 'next/link'
const Footer = () => {
    const currentYear: number = new Date().getFullYear()
    return (
        <footer className='flex flex-col items-center justify-center pb-4 bg-tertiary'>

            <Link href='/'>
                <Image
                    className='h-16  object-contain mb-2'
                    src={logoFull}
                    alt='Logo for meloroids'
                />
            </Link>
            <p className='text-0.875 mb-1'>No more illiterate producers.</p>
            <p className='text-0.75'>©{currentYear} Meloroids LLC</p>
        </footer>

    )
}

export default Footer