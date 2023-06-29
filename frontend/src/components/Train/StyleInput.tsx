import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import {ALL_GENRES} from '../../../utils/queries'


interface MelodyParams {
    genre?: string,    
    genreId?: string| number,
    progression?: string,
    key?: string,
    tempo?: number
    producerHandle: string
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
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    checkboxChecked: Checkbox
}

const StyleInput = ({ setMelodyParams, melodyParams, hoverStyle, handleChange, checkboxChecked
}: FormProps) => {

    const [styleOpen, setStyleOpen] = useState(false)

        const { loading: genreLoading, error: genreError, data: genreData } = useQuery(ALL_GENRES)

    if(genreLoading) return <div>Loading...</div>

    return (
        // Style Input
        <div className='w-full relative mb-6'>
            <div className='flex justify-between items-center w-full'>
                <label className='text-0.875 font-semibold'>Style</label>
                {/* Custom Checkbox */}
                {/* <div className='checkbox-container'>
                    <input
                        type='checkbox'
                        id='styleCheckbox'
                        checked={checkboxChecked.styleRandom ? true : false}
                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor='styleCheckbox'>Randomize</label>
                </div> */}
            </div>
            <div
                className={`h-12 w-full border-2 rounded-lg flex justify-between items-center  
                ${checkboxChecked.styleRandom ? 'pointer-events-none bg-medium opacity-40' : ''}`}
                onClick={() => setStyleOpen(!styleOpen)}
            >
                <div className='w-12 text-center'>🎶</div>
                <p className='text-left w-full text-0.875 font-semibold'>{melodyParams.genre}</p>
                <div className='w-12 h-12 flex items-center justify-center'>       ⌄</div>
            </div>
            {/* Style dropdown */}
            {styleOpen ? (
                <div className='border-2 rounded-lg absolute w-full mt-3 menu-dropdown bg-white z-40 max-h-14 overflow-scroll'>
                    {genreData.genres.map((genre: any) => (
                        <div
                            key={genre.genre}
                            className={`h-12  text-dark  flex justify-between items-center rounded-lg ${hoverStyle}`}
                            onClick={() => {
                                setMelodyParams({
                                    ...melodyParams,
                                    genre: genre.genre,
                                    genreId: genre._id
                                })
                                setStyleOpen(!styleOpen)
                            }}
                        >
                            <div className='w-12 text-center'>🎶</div>
                            <p className='text-left w-full text-0.875 font-semibold'>{genre.genre}</p>

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