import Image from 'next/image'
import React from 'react'

const ThreeSteps = () => {
    return (
        <section className='bg-dark text-white flex flex-col items-center pt-12 pb-14'>
            <h2 className='text-1.5 font-semibold mb-6'>3 Steps to Killer Melodies:</h2>
            <div className='flex flex-col items-center'>
                {/* Step 1 */}
                <div className='flex flex-col items-center max-w-xxs text-center	pb-8'>
                    <h3 className='text-1.125 font-semibold mb-2' >Step 1: <span className='text-primary italic'>Choose a genre</span></h3>
                    <div className='h-48 w-40 mb-4'>
                        <img
                            src='https://images.unsplash.com/photo-1545262841-5283004cef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80'
                            alt='A hand pointing at a screen'
                            className='h-full w-full rounded'
                        />
                    </div>
                    <p className='text-0.875'>Meloroids comes equipped with different genres, ranging from pop punk to dark.</p>
                </div>
                {/* Step 2 */}
                <div className='flex flex-col items-center max-w-xxs text-center	pb-8'>
                    <h3 className='text-1.125 font-semibold mb-2' >Step 2: <span className='text-primary italic'>Choose parameters</span></h3>
                    <div className='h-48 w-40 mb-4'>
                        <img
                            src='https://images.unsplash.com/photo-1627773755683-dfcf2774596a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2352&q=80'
                            alt='Music producer working on a beat at a computer. Photo by TechAvation on Unsplash.'
                            className='h-full w-full rounded'
                        />
                    </div>
                    <p className='text-0.875'>Select a tempo, chord progression, & key for your melody. Or choose to randomize everything and see what happens.</p>
                </div>
                {/* Step 3 */}
                <div className='flex flex-col items-center max-w-xxs text-center	'>
                    <h3 className='text-1.125 font-semibold mb-2' >Step 3: <span className='text-primary italic'>Write a hit</span></h3>
                    <div className='h-48 w-40 mb-4'>
                        <img
                            src='https://images.unsplash.com/photo-1518972559570-7cc1309f3229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
                            alt='A studio mixing bord with many colors. Photo by Dylan McLeod on Unsplash'
                            className='h-full w-full rounded'
                        />
                    </div>
                    <p className='text-0.875'>Once started, Meloroids will provide you with a MIDI of the selected chord progression. Then, it is up to you to write a killer melody.</p>
                </div>
            </div>
        </section>
    )
}

export default ThreeSteps