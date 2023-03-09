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
interface Checkbox {
    allRandom: boolean,
    styleRandom: boolean,
    progressionRandom: boolean,
    keyRandom: boolean,
    tempoRandom: boolean
}

interface ChangeProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    checkboxChecked: Checkbox
}

const TrainForm = ({ handleChange, checkboxChecked }: ChangeProps) => {
    const hoverStyle = 'hover:box-border	 hover:ml-2 hover:mr-8 hover:cursor-pointer hover:bg-blue hover:text-white duration-100'

    const [melodyParams, setMelodyParams] = useState<MelodyParams>({
        style: 'Pop Punk',
        progression: 'I',
        key: 'Aminor',
        tempo: 120
    })


    return (
        <form
            className='flex flex-col items-center w-full px-6'
            action="">
            <StyleInput
                melodyParams={melodyParams}
                setMelodyParams={setMelodyParams}
                hoverStyle={hoverStyle}
                handleChange={handleChange}
                checkboxChecked={checkboxChecked}
            />
            <ProgressionInput
                melodyParams={melodyParams}
                setMelodyParams={setMelodyParams}
                hoverStyle={hoverStyle}
                handleChange={handleChange}
                checkboxChecked={checkboxChecked}

            />
            <KeyInput
                melodyParams={melodyParams}
                setMelodyParams={setMelodyParams}
                hoverStyle={hoverStyle}
                handleChange={handleChange}
                checkboxChecked={checkboxChecked}

            />
            <TempoInput
                melodyParams={melodyParams}
                setMelodyParams={setMelodyParams}
                hoverStyle={hoverStyle}
                handleChange={handleChange}
                checkboxChecked={checkboxChecked}

            />
            <BtnDark buttonText='Start' ></BtnDark>
        </form >
    )
}

export default TrainForm