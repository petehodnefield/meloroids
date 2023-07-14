import React, {useState, useContext} from 'react'
import { NavigationContext } from '@/pages/_app';
import FullHeader from './FullHeader';
import HamburgerMenu from './HamburgerMenu';
import MobileHeader from './MobileHeader';

interface NavProps {
    navSelected: string
    setNavSelected: React.Dispatch<React.SetStateAction<string>>
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ isOpen, setIsOpen }: NavProps) => {
const [navigationSelected, setNavigationSelected] = useContext(NavigationContext)

    return (
        <div className='relative lg:w-full lg:flex lg:justify-center bg-primary'>
            <MobileHeader
                setIsOpen={setIsOpen}
                isOpen={isOpen}
            ></MobileHeader>
            <FullHeader
                
            ></FullHeader>

            {isOpen ? <HamburgerMenu
                setIsOpen={setIsOpen}
            /> : ''}

        </div>
    )
}

export default Header