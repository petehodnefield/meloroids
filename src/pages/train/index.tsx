import TrainForm from '@/components/Train/TrainForm'
import React, { useState } from 'react'

const Train = () => {



    return (
        <section
            className='bg-cover h-screen md:py-12 md:flex md:justify-center'
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }}
        >
            <div className='bg-white flex flex-col items-center w-full h-screen md:h-fit py-8 md:max-w-26 md:rounded md:pb-10'>
                <h2 className='text-2 font-semibold mb-5'>Pick your parameters</h2>
                {/* Randomize ALL */}
                <div className='flex gap-2 mb-2'>
                    <p className='text-0.875 font-semibold text-primary'>Randomize all</p>
                    <input type='checkbox' className='h-6 w-6' />
                </div>
                <TrainForm />
            </div>
        </section>
    )
}

export default Train