import React from 'react'
import { Icon } from '@iconify/react';


const ThreeCards = () => {
    return (
        <section id='howItWorks' className='bg-quad w-full'>
            <div className='  py-16 text-white   md:px-2 cards-grid	'>
                {/* First card */}
                <div className='bg-primary h-full w-64 rounded-lg flex flex-col items-center px-6 py-10'>
                    <Icon className='text-2 mb-2' icon="fluent-emoji-high-contrast:thinking-face" />
                    <h3 className='text-1 font-semibold mb-1'>Analysis Paralysis</h3>
                    <p className='text-0.75'>Meloroids has 1 million+ possible melody combinations. It can give you instant inspiratipon to cut down on the amount of thinking you have to do to make your melody.</p>
                </div>
                {/* Second card */}
                <div className='bg-primary h-full  w-64 rounded-lg flex flex-col items-center px-6 py-10'>
                    <Icon className='text-2.5 mb-2' icon="material-symbols:mic-outline-sharp" />
                    <h3 className='text-1 font-semibold mb-1'>New Artists</h3>
                    <p className='text-0.75'>Meloroids is soon onboarding the data from some of the most popular musical artists. You will be able to see their most popular chord progressions, keys, & tempos.</p>
                </div>
                {/* Third card */}
                <div className='bg-primary h-full  w-64 rounded-lg flex flex-col items-center px-6 py-10'>
                    <Icon className='text-2.5 mb-2' icon="ic:outline-queue-music" />
                    <h3 className='text-1 font-semibold mb-1'>Music Theory</h3>
                    <p className='text-0.75'>Learn and immediately apply music theory concepts. Meloroids succeeds where other services have failed at teaching producers music theory.</p>
                </div>
            </div>
        </section>
    )
}

export default ThreeCards