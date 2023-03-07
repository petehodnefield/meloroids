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
    hoverStyle: string
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

const ProgressionInput = ({ setMelodyParams, melodyParams, hoverStyle }: FormProps) => {
    const [progressionOpen, setProgressionOpen] = useState(false)
    return (
        // Style Input
        <div className='w-full relative mb-6'>
            <div className='flex justify-between items-center w-full'>
                <label className='text-0.875 font-semibold'>Chord Progression</label>
                <div className='flex gap-2 mb-1'>
                    <p className='text-0.875 font-semibold text-medium'>Randomize</p>
                    <input type='checkbox' className='h-6 w-6 ' />
                </div>
            </div>
            <div
                className='h-12 w-full border-2 rounded-lg flex justify-between items-center '
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