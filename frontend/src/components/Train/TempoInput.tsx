import React, { useState, useEffect } from 'react'
interface MelodyParams {
    style?: string,
    progression?: string,
    key?: string,
    tempo?: number,
    producerHandle: string

}

interface Checkbox {
    allRandom: boolean,
    styleRandom: boolean,
    progressionRandom: boolean,
    keyRandom: boolean,
    tempoRandom: boolean,
    
}
interface FormProps {
    melodyParams: MelodyParams,
    setMelodyParams: React.Dispatch<React.SetStateAction<MelodyParams>>,
    hoverStyle: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    checkboxChecked: Checkbox


}
const TempoInput = ({ setMelodyParams, melodyParams, hoverStyle, handleChange, checkboxChecked }: FormProps) => {
    const [tempoOpen, setTempoOpen] = useState(false)

    function handleNumberChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const tempo = parseInt(e.target.value)
        setMelodyParams({
            ...melodyParams,
            tempo: tempo
        })
    }

    return (
        <div className='flex items-center gap-2 mb-6'>
            <div className='flex flex-col items-center'>
                <label className='text-0.875 font-semibold'>Tempo</label>
                <input
                    className={
                        `text-0.875 font-semibold w-20  rounded-lg h-12 border-2 text-center focus:outline-primary
                       ${checkboxChecked.tempoRandom ? 'pointer-events-none bg-medium opacity-40' : ''}`

                    }
                    defaultValue={60}
                    type='number'
                    min='60'
                    max='200'
                    onChange={(e) => handleNumberChange(e)}



                />
            </div>
            {/* Custom Checkbox */}
            {/* <div className='checkbox-container'>

                <input
                    type='checkbox'
                    checked={checkboxChecked.tempoRandom ? true : false}

                    id='tempoCheckbox'
                    onChange={(e) => handleChange(e)}
                />

                <label htmlFor='tempoCheckbox'>Randomize</label>
            </div> */}
        </div>
    )
}

export default TempoInput