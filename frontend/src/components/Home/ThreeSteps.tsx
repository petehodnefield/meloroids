import Image from 'next/image'
import React from 'react'
import point from '../../../public/assets/images/point.jpg'
import producer from '../../../public/assets/images/music-producer.jpg'
import mixingConsole from '../../../public/assets/images/mixing-console.jpg'
const ThreeSteps = () => {
    return (
        <section id='threeSteps' className='w-full bg-dark text-white flex flex-col items-center pt-12 pb-20 md:px-8'>
            <h2 className='text-1.5 font-semibold mb-6 lg:text-2'>3 Steps to Killer Melodies:</h2>
            <div className='grid grid-rows-3	grid-cols-1	 md:grid-cols-3	md:grid-rows-1 gap-y-8 md:gap-x-2 lg:gap-x-12'>
                {/* Step 1 */}
                <div className='flex flex-col items-center max-w-xxs text-center	'>
                    <h3 className='text-1.125 font-semibold mb-2' >Step 1: <span className='text-primary italic'>Choose a genre</span></h3>
                    <div className='h-48 w-40 mb-4'>
                        <Image
                            src={point}
                            alt='A hand pointing at a screen.'
                            className='h-full w-full rounded'
                        />
                    </div>
                    <p className='text-0.875 '>Meloroids comes equipped with different genres, ranging from pop punk to dark.</p>
                </div>
                {/* Step 2 */}
                <div className='flex flex-col items-center max-w-xxs text-center	'>
                    <h3 className='text-1.125 font-semibold mb-2' >Step 2: <span className='text-primary italic'>Choose parameters</span></h3>
                    <div className='h-48 w-40 mb-4'>
                        <Image
                            src={producer}
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
                        <Image
                            src={mixingConsole}
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