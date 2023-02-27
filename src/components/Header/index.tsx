import React from 'react'
import FullHeader from './FullHeader';

import MobileHeader from './MobileHeader';

interface NavProps {
    navSelected: string
    setNavSelected: React.Dispatch<React.SetStateAction<string>>
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ navSelected, setNavSelected, isOpen, setIsOpen }: NavProps) => {


    return (
        <div className='lg:w-full lg:flex lg:justify-center bg-primary'>
            <MobileHeader
                setIsOpen={setIsOpen}
                isOpen={isOpen}
            ></MobileHeader>
            <FullHeader
                navSelected={navSelected}
                setNavSelected={setNavSelected}
            ></FullHeader>
        </div>
    )
}

export default Header