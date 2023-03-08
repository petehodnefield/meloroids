import React from 'react'
import { Icon } from '@iconify/react';


const CopyPaste = () => {
    return (
        <div className='w-full relative bg-dark text-white h-12 flex items-center justify-center md:rounded-b-lg	'>
            <p className='text-0.75 font-semibold text-center'>Rocket 123 bpm a minor @mongamonga</p>
            <Icon className='absolute right-6 text-1.125' icon="uiw:copy" />

        </div>
    )
}

export default CopyPaste