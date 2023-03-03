import React from 'react'
import BtnDarkPill from '../Buttons/BtnDarkPill'

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center pt-10 pb-8 px-6 md:px-40">
            <h1 className="text-2.5 font-semibold mb-4">Become a <span className="text-primary"> <br />literate</span> producer.</h1>
            <div>
                <h2 className="text-primary text-1.125 font-semibold  mb-4">Gain an unfair advantage</h2>
                <p className="text-0.875 mb-4 	">Meloroids is the worlds best resource to gain instant inspiration for creating melodies. Finally learn the music theory behind your favorite songs.</p>
            </div>
            <a href="#threeSteps">
                <BtnDarkPill buttonText="Learn more" />
            </a>
        </section>
    )
}

export default Hero