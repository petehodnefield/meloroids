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

interface RandomProps {
    allRandom: boolean,
    setAllRandom: React.Dispatch<React.SetStateAction<boolean>>
}

const TrainForm = ({ allRandom, setAllRandom }: RandomProps) => {
    const hoverStyle = 'hover:box-border	 hover:ml-2 hover:mr-8 hover:cursor-pointer hover:bg-blue hover:text-white duration-100'

    const [melodyParams, setMelodyParams] = useState<MelodyParams>({
        style: 'Pop Punk',
        progression: 'I',
        key: 'Aminor',
        tempo: 120
    })

    console.log(melodyParams)

    return (
        <form
            className='flex flex-col items-center w-full px-6'
            action="">
            <StyleInput
                melodyParams={melodyParams}
                setMelodyParams={setMelodyParams}
                hoverStyle={hoverStyle}
                allRandom={allRandom}
            />
            <ProgressionInput
                melodyParams={melodyParams}
                setMelodyParams={setMelodyParams}
                hoverStyle={hoverStyle}
                allRandom={allRandom}


            />
            <KeyInput
                melodyParams={melodyParams}
                setMelodyParams={setMelodyParams}
                hoverStyle={hoverStyle}
                allRandom={allRandom}

            />
            <TempoInput
                melodyParams={melodyParams}
                setMelodyParams={setMelodyParams}
                hoverStyle={hoverStyle}
                allRandom={allRandom}
                setAllRandom={setAllRandom}

            />
            <BtnDark buttonText='Start' ></BtnDark>
        </form >
    )
}

export default TrainForm