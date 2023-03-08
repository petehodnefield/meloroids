import React, { useState } from 'react'
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
    allRandom: boolean
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

const ProgressionInput = ({ setMelodyParams, melodyParams, hoverStyle, allRandom }: FormProps) => {
    const [progressionOpen, setProgressionOpen] = useState(false)
    return (
        // Style Input
        <div className='w-full relative mb-6'>
            <div className='flex justify-between items-center w-full'>
                <label className='text-0.875 font-semibold'>Chord Progression</label>
                {/* Custom Checkbox */}
                <div className='checkbox-container'>
                    {allRandom ? (
                        <input checked={true} type='checkbox' id='cb3' />

                    ) : (
                        <input type='checkbox' id='cb3' />

                    )}
                    <label htmlFor='cb3'>Randomize</label>
                </div>
                {/* VIDEO */}
            </div>
            <div
                className={`h-12 w-full border-2 rounded-lg flex justify-between items-center 
                ${allRandom ? 'pointer-events-none bg-medium opacity-40' : ''}`}
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