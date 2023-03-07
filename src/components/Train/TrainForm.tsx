import React, { useState } from 'react'
import BtnDark from '../Buttons/BtnDark'
import KeyInput from './KeyInput'
import ProgressionInput from './ProgressionInput'
import StyleInput from './StyleInput'
import TempoInput from './TempoInput'



interface MelodyParams {
    style?: string,
    progression?: string,
    key?: string,
    tempo?: number
}

const TrainForm = () => {
    const hoverStyle = 'hover:box-border	 hover:ml-2 hover:mr-8 hover:cursor-pointer hover:bg-blue hover:text-white duration-100'

    const [melodyParams, setMelodyParams] = useState<MelodyParams>({
        style: 'Pop Punk',
        progression: 'I',
        key: 'Aminor',
        tempo: 120
    })

    console.log(melodyParams)

    return (
        <form className='flex flex-col items-center w-full px-6' action="">
            <StyleInput
                melodyParams={melodyParams}
                setMelodyParams={setMelodyParams}
                hoverStyle={hoverStyle}
            />
            <ProgressionInput
                melodyParams={melodyParams}
                setMelodyParams={setMelodyParams}
                hoverStyle={hoverStyle}
            />
            <KeyInput
                melodyParams={melodyParams}
                setMelodyParams={setMelodyParams}
                hoverStyle={hoverStyle}
            />
            <TempoInput
                melodyParams={melodyParams}
                setMelodyParams={setMelodyParams}
                hoverStyle={hoverStyle}
            />
            <BtnDark buttonText='Start' />
        </form>
    )
}

export default TrainForm