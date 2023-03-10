import React from 'react'
import FullHeader from './FullHeader';
import HamburgerMenu from './HamburgerMenu';
import MobileHeader from './MobileHeader';

interface NavProps {
    navSelected: string
    setNavSelected: React.Dispatch<React.SetStateAction<string>>
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ navSelected, setNavSelected, isOpen, setIsOpen }: NavProps) => {


    return (
        <div className='relative lg:w-full lg:flex lg:justify-center bg-primary'>
            <MobileHeader
                setIsOpen={setIsOpen}
                isOpen={isOpen}
            ></MobileHeader>
            <FullHeader
                navSelected={navSelected}
                setNavSelected={setNavSelected}
            ></FullHeader>

            {isOpen ? <HamburgerMenu
                setIsOpen={setIsOpen}
            /> : ''}

        </div>
    )
}

export default Header