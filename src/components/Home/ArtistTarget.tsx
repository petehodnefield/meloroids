import Image from 'next/image'
import React from 'react'
import artistTargetImg from '../../../public/assets/images/artist-target.png'
import BtnDark from '../Buttons/BtnDark'
const ArtistTarget = () => {
    return (
        <section className='flex flex-col items-center pt-10 pb-10  lg:justify-center w-full lg:pt-14 lg:pb-16'>
            <div className='lg:flex lg:max-w-70 lg:w-full justify-between '>
                <div className=''>
                    <div className='flex flex-col items-center px-6 pb-4 lg:px-0 lg:items-start lg:pb-0'>
                        {/* Header wrapper */}
                        <div className='mb-2 flex flex-col items-center lg:flex-row lg:items-end lg:gap-2'>
                            <h2 className='text-2.5 text-primary font-semibold'>ARTIST TARGET </h2>
                            <span className='text-1.5 lg:text-2'>by Meloroids</span>
                        </div>
                        {/* Coming soon */}
                        <h3 className='text-2 font-semibold lg:text-2.5'>COMING SOON</h3>
                    </div>
                    {/* Train img SMALL */}
                    <img
                        src='https://images.unsplash.com/photo-1621535484902-f946de404eb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80'
                        alt='A rapper wearing a ski mask smoking a cigarette. Photo by David Huck on Unsplash.'
                        className='object-cover px-6 h-48 w-full rounded  lg:hidden'
                    />
                    <div className='px-6 pt-6 pb-8 lg:px-0 lg:max-w-660'>
                        <p className='text-1 mb-5'>With Artist Target, you can experiment with different melodies and harmonies while also learning how to emulate the sound of your favorite artists. Whether you're an experienced musician or just starting out, our feature is a fun and effective way to improve your songwriting skills.</p>
                        <p className='text-1'><span className='italic font-semibold'>Here's how it works: </span>simply select an artist from our database, and Artist Target will analyze the song's key, tempo, and other parameters. Then, it's up to you to write a melody that matches those same parameters.</p>
                    </div>
                    <BtnDark buttonText='Join the waitlist' />
                </div>
                {/* Train img SMALL */}
                <img
                    src='https://images.unsplash.com/photo-1621535484902-f946de404eb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80'
                    alt='A rapper wearing a ski mask smoking a cigarette. Photo by David Huck on Unsplash.'
                    className='hidden object-cover px-6 h-88 w-88 rounded-full  lg:block lg:p-0'
                />
            </div>
        </section>
    )
}

export default ArtistTarget