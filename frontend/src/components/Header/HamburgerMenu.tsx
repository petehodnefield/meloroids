import React from 'react'
import { Icon } from '@iconify/react';


interface NavProps {

    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const HamburgerMenu = ({ setIsOpen }: NavProps) => {

    return (
        <div className='fixed bg-secondary top-0 left-0 h-screen w-1/2 lg:hidden pull-out'>HamburgerMenu
            <Icon onClick={() => setIsOpen(false)} className='text-white text-2 absolute right-4 top-4 hover:cursor-pointer' icon="material-symbols:close-rounded" />
        </div>
    )
}

export default HamburgerMenu