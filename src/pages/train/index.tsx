import TrainForm from '@/components/Train/TrainForm'
import React, { useState } from 'react'

const Train = () => {
    const [allRandom, setAllRandom] = useState(false)

    console.log('random', allRandom)


    return (

        <section
            className='bg-cover h-screen md:py-12 md:flex md:justify-center'
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }}
        >
            <div className='bg-white flex flex-col items-center w-full h-screen md:h-fit py-8 md:max-w-26 md:rounded md:pb-10'>
                <h2 className='text-2 font-semibold mb-5'>Pick your parameters</h2>
                {/* Custom Checkbox */}
                <div className='checkbox-container'>
                    <input type='checkbox' id='cb1' onClick={() => setAllRandom(!allRandom)} />
                    <label htmlFor='cb1' className='text-dark'>Randomize all</label>
                </div>
                <TrainForm
                    allRandom={allRandom}
                    setAllRandom={setAllRandom}
                />
            </div>
        </section>
    )
}

export default Train