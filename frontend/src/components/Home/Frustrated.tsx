import React from 'react'
import BtnPrimary from '../Buttons/BtnPrimary'
const Frustrated = () => {
    return (
        <section className="pt-7 pb-12 flex flex-col items-center px-6 md:px-20 lg:max-w-58 xl:max-w-70  lg:pt-10 lg:pb-14 lg:px-0 lg:items-start">
            <h2 className="text-2 font-semibold mb-3 lg:mb-6">
                With Meloroids, you will <span className="text-primary">finally begin to understand music theory</span>
            </h2>
            <div className='lg:flex '>
                {/* Text content */}
                <div className='flex flex-col items-center lg:items-start'>
                    <div className="mb-6 lg:max-w-660">
                        <p className="text-1 italic mb-2 lg:mb-4">How many times have you tried to learn music theory?</p>
                        <p className="text-1 italic">How many times have you made a genuine effort to try to learn how chords are formed, how to make chord progressions, only to become increasingly frustrated?</p>
                    </div>
                    {/* Frustrated image */}
                    <div className="w-64 h-64 bg-cover rounded	lg:hidden" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }} />
                    <div className="py-10 lg:max-w-660 lg:p-0 lg:mb-6">
                        <p className="text-0.875 mb-4">I know the struggle producers face trying to grasp the concepts of music theory. The internet is filled with teachers who overcomplicate concepts, and most producers don’t realize the true power of understanding music theory</p>
                        <p className="text-0.875">Meloroids is a one-of-a-kind platform that will provide you with instant inspiration for whatever genre you are trying to produce. You will learn and immediately apply music theory concepts.</p>
                    </div>
                    <a href="#howItWorks">
                        <BtnPrimary buttonText="How it works" />
                    </a>
                </div>
                {/* Large frustrated image */}
                <div className="hidden w-64 h-64 bg-cover rounded ml-20	lg:block mt-2" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }} />
            </div>

        </section>
    )
}

export default Frustrated