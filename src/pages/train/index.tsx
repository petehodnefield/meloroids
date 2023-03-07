import TrainForm from '@/components/Train/TrainForm'
import React, { useState } from 'react'

const Train = () => {
    const [styleOpen, setStyleOpen] = useState(false)

    const [styleChoice, setStyleChoice] = useState('Pop Punk')


    console.log('style choice', styleChoice)
    return (
        <section
            className='bg-cover h-screen'
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }}
        >
            <div className='bg-white flex flex-col items-center w-full h-screen py-8'>
                <h2 className='text-2 font-semibold mb-5'>Pick your parameters</h2>
                {/* Randomize ALL */}
                <div className='flex gap-2 mb-2'>
                    <p className='text-0.875 font-semibold text-primary'>Randomize all</p>
                    <input type='checkbox' className='h-6 w-6' />
                </div>
                <TrainForm
                    styleOpen={styleOpen}
                    setStyleOpen={setStyleOpen}
                    setStyleChoice={setStyleChoice}
                    styleChoice={styleChoice}
                />
            </div>
        </section>
    )
}

export default Train