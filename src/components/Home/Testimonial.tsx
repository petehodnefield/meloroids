import Image from 'next/image'
import React from 'react'
import peterTestimonial from '../../../public/assets/images/peter-headshot.jpg'
const Testimonial = () => {
    return (
        <article className='bg-light flex flex-col items-center px-6 pb-4 py-6 md:px-20'>
            <div className='h-12 w-12 mb-3'>
                <Image
                    src={peterTestimonial}
                    alt='Headshot of producer mongamonga outdoors wearing a red hat'
                    className='h-full w-full rounded '
                />
            </div>
            <div className='text-center'>
                <p className='text-0.75 font-semibold mb-1'>“Meloroids changed the way I make melodies. I can make a placement quality loop in about 5 minutes that would’ve taken me 20+ without Meloroids.”</p>
                <p className='text-0.625 italic'>~ mongamonga, Guitarist</p>
            </div>
        </article>
    )
}

export default Testimonial