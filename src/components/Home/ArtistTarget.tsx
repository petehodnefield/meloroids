import Image from 'next/image'
import React from 'react'
import artistTargetImg from '../../../public/assets/images/artist-target.png'
import BtnDark from '../Buttons/BtnDark'
const ArtistTarget = () => {
    return (
        <section className='flex flex-col items-center pt-10 pb-10'>
            <div className='text-center px-6 pb-4'>
                <div className='mb-2'>
                    <h2 className='text-2.5 text-primary font-semibold'>ARTIST TARGET </h2>
                    <span className='text-1.5'>by Meloroids</span>
                </div>
                <h3 className='text-2 font-semibold'>COMING SOON</h3>
            </div>
            {/* Train img */}
            <Image
                src={artistTargetImg}
                alt='Artist Taget showing a photo of the rapper Juice WRLD as well as paramters for his song.'
                className='object-cover px-6 h-48 w-4/5 rounded border-2 border-primary'
            />
            <div className='px-6 pt-6 pb-8'>
                <p className='text-1 mb-5'>With Artist Target, you can experiment with different melodies and harmonies while also learning how to emulate the sound of your favorite artists. Whether you're an experienced musician or just starting out, our feature is a fun and effective way to improve your songwriting skills.</p>
                <p className='text-1'><span className='italic font-semibold'>Here's how it works: </span>simply select an artist from our database, and Artist Target will analyze the song's key, tempo, and other parameters. Then, it's up to you to write a melody that matches those same parameters.</p>
            </div>
            <BtnDark buttonText='Join the waitlist' />
        </section>
    )
}

export default ArtistTarget