import React, { useState, useEffect } from 'react'
import BtnDark from '../Buttons/BtnDark'
import KeyInput from './KeyInput'
import ProgressionInput from './ProgressionInput'
import StyleInput from './StyleInput'
import TempoInput from './TempoInput'
import Link from 'next/link'


interface MelodyParams {
    genre?: string,
    genreId?: string | number,
    progression?: string,
    progressionId?: string,
    is_major?: boolean | string,
    key?: string,
    keyId?: string,
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
        genre: '',
        genreId: '',
        progression: '',
        progressionId: '',
        is_major: '',
        key: '',
        keyId: '',
        tempo: 60
    })

    useEffect(() => (
        setMelodyParams({
            ...melodyParams,
            progression: '',
            key: ''
        })
    ), [melodyParams.genre])

    console.log(melodyParams)

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
            {checkboxChecked.allRandom ? (
                 <Link
                 href={`/train/random`}>
                    <button className={`bg-dark text-white  text-1 font-semibold h-12 w-48 rounded  hover:opacity-80  button-fade-in`}>
                        Start
                    </button>
                </Link>
            ): (
                <Link
                    href={`/train/${melodyParams.genreId}/${melodyParams.progressionId}/${melodyParams.keyId}/${melodyParams.tempo}`}
                    className={`${!melodyParams.genreId || !melodyParams.keyId || !melodyParams.progressionId ? 'pointer-events-none opacity-30' : ' button-fade-in'}`}
                >
                    <button className={`bg-dark text-white  text-1 font-semibold h-12 w-48 rounded  hover:opacity-80 duration-200`}>
                        Start
                    </button>
                </Link>
            )}
           
        </form >
    )
}

export default TrainForm