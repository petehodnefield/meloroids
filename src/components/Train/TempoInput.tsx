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
    allRandom: boolean,
    setAllRandom: React.Dispatch<React.SetStateAction<boolean>>
}
const TempoInput = ({ setMelodyParams, melodyParams, hoverStyle, allRandom, setAllRandom }: FormProps) => {
    const [tempoOpen, setTempoOpen] = useState(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const tempo = parseInt(e.target.value)
        setMelodyParams({
            ...melodyParams,
            tempo: tempo
        })
    }

    useEffect(() => {
        if (tempoOpen) setAllRandom(false)
    }, [tempoOpen])

    return (
        <div className='flex items-center gap-2 mb-6'>
            <div className='flex flex-col items-center'>
                <label className='text-0.875 font-semibold'>Tempo</label>
                <input
                    className={
                        `text-0.875 font-semibold w-20  rounded-lg h-12 border-2 text-center focus:outline-primary
                        ${allRandom || tempoOpen ? 'pointer-events-none bg-medium opacity-40' : ''}`

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
                {allRandom ? (
                    <input onClick={() => setTempoOpen(true)} checked={true} type='checkbox' id='cb5' />

                ) : (
                    <input type='checkbox' id='cb5'
                        onChange={() => setTempoOpen(!tempoOpen)}
                    />

                )}
                <label htmlFor='cb5'>Randomize</label>
            </div>
            {/* VIDEO */}
        </div>
    )
}

export default TempoInput