import React from 'react'
import Link from "next/link"
import TrainCards from './TrainCards'
import BtnPrimary from '../Buttons/BtnPrimary'


const Train = () => {
    const background: string = 'https://images.unsplash.com/photo-1677076903765-07cce911a40f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2573&q=80'

    return (
        <section id="train" className="bg-tertiary py-16 flex flex-col items-center">
            <div className="px-6 ">
                <h2 className="inline-block text-2 font-semibold text-primary mr-2 mb-4">TRAIN </h2>
                <h3 className="inline-block text-1.125 font-semibold ">  by Meloroids</h3>
                <p className="text-0.875 mb-4">Lorem ipsum dolor sit amet consectetur. Euismod mattis proin rutrum vulputate mi. Enim nullam ipsum donec sed ornare vitae diam ut et. Tempus quis interdum quis scelerisque leo condimentum sed nulla.</p>
                <Link href='/train'><BtnPrimary buttonText='Get started'></BtnPrimary></Link>
            </div>
            <img
                src={background}
                className='rounded-full h-60 w-60 my-12'
            />
            <TrainCards />

        </section>
    )
}

export default Train