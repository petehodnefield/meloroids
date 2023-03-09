import React, { useState, useEffect } from 'react'
interface MelodyParams {
    style?: string,
    progression?: string,
    key?: string,
    tempo?: number
}

interface FormProps {
    melodyParams: MelodyParams,
    setMelodyParams: React.Dispatch<React.SetStateAction<MelodyParams>>,
    hoverStyle: string,

}
const TempoInput = ({ setMelodyParams, melodyParams, hoverStyle }: FormProps) => {
    const [tempoOpen, setTempoOpen] = useState(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
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
                       `

                    }
                    defaultValue={60}
                    type='number'
                    min='60'
                    max='200'
                    onChange={(e) => handleChange(e)}



                />
            </div>
            {/* Custom Checkbox */}
            <div className='checkbox-container'>

                <input type='checkbox' id='cb5'
                    onChange={() => setTempoOpen(!tempoOpen)}
                />

                <label htmlFor='cb5'>Randomize</label>
            </div>
            {/* VIDEO */}
        </div>
    )
}

export default TempoInput