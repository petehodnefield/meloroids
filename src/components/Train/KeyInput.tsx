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
const KeyInput = ({ setMelodyParams, melodyParams, hoverStyle }: FormProps) => {
    const [keyOpen, setKeyOpen] = useState(false)

    return (
        <div className='w-full relative mb-6'>
            <div className='flex justify-between items-center w-full'>
                <label className='text-0.875 font-semibold'>Key</label>
                <div className='flex gap-2 mb-1'>
                    <p className='text-0.875 font-semibold text-medium'>Randomize</p>
                    <input type='checkbox' className='h-6 w-6 ' />
                </div>
            </div>
            <div
                className='h-12 w-full border-2 rounded-lg flex justify-between items-center '
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
                            <div className='w-12 text-center'>{key.icon}</div>
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