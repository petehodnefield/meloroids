import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoFull from '../../../public/assets/logo/logo-full-white.png'
import Nav from './Nav'

interface NavProps {
    navSelected: string
    setNavSelected: React.Dispatch<React.SetStateAction<string>>
}

const FullHeader = ({ setNavSelected, navSelected }: NavProps) => {
    return (
        <header className='hidden bg-primary lg:flex h-24  items-center justify-between px-48 w-full header-w xl:px-0'>
            <div className='h-10 mb-2 '>
                <Link
                    onClick={() => setNavSelected('')}
                    className='w-full h-full'
                    href='/'>

                    <Image
                        src={logoFull}
                        alt='Melprods'
                        className='h-full w-full'
                    />
                </Link >

            </div>
            <Nav
                navSelected={navSelected}
                setNavSelected={setNavSelected}
            />
        </header>
    )
}

export default FullHeader