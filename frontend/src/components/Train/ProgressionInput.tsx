import React, { useState } from 'react'
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

interface FormProps {
    melodyParams: MelodyParams,
    setMelodyParams: React.Dispatch<React.SetStateAction<MelodyParams>>,
    hoverStyle: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    checkboxChecked: Checkbox

}

const progressions = [
    {
        progression: 'I IV VI- V',
        icon: '🎶'
    },
    {
        progression: 'i bVII bVI',
        icon: '🎶'
    },
    {
        progression: 'i iv v',
        icon: '🎶'
    },
]

const ProgressionInput = ({ setMelodyParams, melodyParams, hoverStyle, handleChange, checkboxChecked }: FormProps) => {
    const [progressionOpen, setProgressionOpen] = useState(false)
    return (
        // Style Input
        <div className='w-full relative mb-6'>
            <div className='flex justify-between items-center w-full'>
                <label className='text-0.875 font-semibold'>Chord Progression</label>
                {/* Custom Checkbox */}
                <div className='checkbox-container'>

                    <input
                        type='checkbox'
                        checked={checkboxChecked.progressionRandom ? true : false}
                        id='progressionCheckbox'
                        onChange={(e) => handleChange(e)}

                    />

                    <label htmlFor='progressionCheckbox'>Randomize</label>
                </div>
                {/* VIDEO */}
            </div>
            <div
                className={`h-12 w-full border-2 rounded-lg flex justify-between items-center 
                ${checkboxChecked.progressionRandom ? 'pointer-events-none bg-medium opacity-40' : ''} `}
                onClick={() => setProgressionOpen(!progressionOpen)}
            >
                <div className='w-12 text-center'>🎶</div>
                <p className='text-left w-full text-0.875 font-semibold'>{melodyParams.progression}</p>
                <div className='w-12 h-12 flex items-center justify-center'>       ⌄</div>
            </div>
            {/* Style dropdown */}
            {progressionOpen ? (
                <div className='border-2 rounded-lg absolute w-full mt-3 menu-dropdown bg-white z-30'>
                    {progressions.map(progression => (
                        <div
                            key={progression.progression}
                            className={`h-12  text-dark  flex justify-between items-center rounded-lg ${hoverStyle}`}
                            onClick={() => {
                                setMelodyParams({
                                    ...melodyParams,
                                    progression: progression.progression
                                })
                                setProgressionOpen(!progressionOpen)
                            }}
                        >
                            <div className='w-12 text-center'>{progression.icon}</div>
                            <p className='text-left w-full text-0.875 font-semibold'>{progression.progression}</p>

                        </div>
                    ))}
                </div>
            ) : (
                ''
            )}
        </div>

    )
}

export default ProgressionInput