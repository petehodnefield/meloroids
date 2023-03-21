import React, { useState } from 'react'

const keys = [
    {
        key: 'A minor',
        icon: '🎼'
    },
    {
        key: 'E minor',
        icon: '🎼'
    },
    {
        key: 'D minor',
        icon: '🎼'
    },
]

interface MelodyParams {
    genre?: string,
    genreId?: string| number,

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
interface FormProps {
    melodyParams: MelodyParams,
    setMelodyParams: React.Dispatch<React.SetStateAction<MelodyParams>>,
    hoverStyle: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    checkboxChecked: Checkbox


}
const KeyInput = ({ setMelodyParams, melodyParams, hoverStyle, handleChange, checkboxChecked }: FormProps) => {
    const [keyOpen, setKeyOpen] = useState(false)

    return (
        <div className='w-full relative mb-6'>
            <div className='flex justify-between items-center w-full'>
                <label className='text-0.875 font-semibold'>Key</label>
                {/* Custom Checkbox */}
                <div className='checkbox-container'>

                    <input
                        type='checkbox'
                        id='keyCheckbox'
                        checked={checkboxChecked.keyRandom ? true : false}

                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor='keyCheckbox'>Randomize</label>
                </div>
                {/* VIDEO */}

            </div>
            <div
                className={`h-12 w-full border-2 rounded-lg flex justify-between items-center 
                ${checkboxChecked.keyRandom || !melodyParams.genre ?  'pointer-events-none bg-medium opacity-40' : ''}`}
                onClick={() => setKeyOpen(!keyOpen)}
            >
                <div className='w-12 text-center'>🎼</div>
                <p className='text-left w-full text-0.875 font-semibold'>{melodyParams.key}</p>
                <div className='w-12 h-12 flex items-center justify-center'>       ⌄</div>
            </div>
            {/* Style dropdown */}
            {keyOpen ? (
                <div className='border-2 rounded-lg absolute w-full mt-3 menu-dropdown bg-white z-10'>
                    {keys.map(key => (
                        <div
                            key={key.key}
                            className={`h-12  text-dark  flex justify-between items-center rounded-lg ${hoverStyle}`}
                            onClick={() => {
                                setMelodyParams({
                                    ...melodyParams,
                                    key: key.key
                                })
                                setKeyOpen(!keyOpen)
                            }}
                        >
                            <div className='w-12 text-center'>🎼</div>
                            <p className='text-left w-full text-0.875 font-semibold'>{key.key}</p>

                        </div>
                    ))}
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default KeyInput