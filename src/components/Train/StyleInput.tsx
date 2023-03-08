import React, { useState } from 'react'

const styles = [
    {
        style: 'Pop Punk',
        icon: '🎶'
    },
    {
        style: 'Trap',
        icon: '🎶'
    },
    {
        style: 'House',
        icon: '🎶'
    },
]
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

const StyleInput = ({ setMelodyParams, melodyParams, hoverStyle, allRandom
}: FormProps) => {

    const [styleOpen, setStyleOpen] = useState(false)

    return (
        // Style Input
        <div className='w-full relative mb-6'>
            <div className='flex justify-between items-center w-full'>
                <label className='text-0.875 font-semibold'>Style</label>
                {/* Custom Checkbox */}
                <div className='checkbox-container'>
                    {allRandom ? (
                        <input checked={true} type='checkbox' id='cb2' />

                    ) : (
                        <input type='checkbox' id='cb2' />

                    )}
                    <label htmlFor='cb2'>Randomize</label>
                </div>
            </div>
            <div
                className={`h-12 w-full border-2 rounded-lg flex justify-between items-center  
                ${allRandom ? 'pointer-events-none bg-medium opacity-40' : ''}`}
                onClick={() => setStyleOpen(!styleOpen)}
            >
                <div className='w-12 text-center'>🎶</div>
                <p className='text-left w-full text-0.875 font-semibold'>{melodyParams.style}</p>
                <div className='w-12 h-12 flex items-center justify-center'>       ⌄</div>
            </div>
            {/* Style dropdown */}
            {styleOpen ? (
                <div className='border-2 rounded-lg absolute w-full mt-3 menu-dropdown bg-white z-40'>
                    {styles.map(style => (
                        <div
                            key={style.style}
                            className={`h-12  text-dark  flex justify-between items-center rounded-lg ${hoverStyle}`}
                            onClick={() => {
                                setMelodyParams({
                                    ...melodyParams,
                                    style: style.style
                                })
                                setStyleOpen(!styleOpen)
                            }}
                        >
                            <div className='w-12 text-center'>{style.icon}</div>
                            <p className='text-left w-full text-0.875 font-semibold'>{style.style}</p>

                        </div>
                    ))}
                </div>
            ) : (
                ''
            )}
        </div>

    )
}

export default StyleInput