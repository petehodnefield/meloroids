
import React, {useEffect, useState} from 'react'
import Image from "next/image"
import Link from "next/link"
import heroImage from '../../public/assets/images/hero-img.png'
import quickieImage from '../../public/assets/images/quickie.png'
import trainImage from '../../public/assets/images/train.png'
import ctaImage from '../../public/assets/images/cta-img.png'
import Auth from 'utils/auth'
export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  const [authorized, setAuthorized] = useState(false)
  const btn:string = 'h-12 w-48 rounded text-1 font-semibold flex items-center justify-center'
  const btnPrimary:string = 'bg-primary'
  const btnOutline: string = 'bg-transparent border-1 border-white'

  useEffect(() => {
    setHydrated(true);
    Auth.loggedIn() ? setAuthorized(true): setAuthorized(false)
  }, []);

  return (
    <div>
      {/* Hero section */}
      <div className="relative flex justify-center flex-col items-center">
        <Image
              src={heroImage}
              alt='A guitar and keyboard floating in space'
              className='absolute top-0 left-0 h-full w-full object-cover z-0 hero__img'
            />
         <div className='relative w-full h-600 flex items-center max-w-70'>
          {/* Background Image */}
            <div className='relative text-white max-w-660 flex flex-col'>
              <h1 className='text-3 font-semibold mb-6'>Music Production Simplified</h1>
              <h2 className='text-1.5 font-medium mb-8'>Focus on what <span className='font-bold'>truly</span> matter</h2>
              <h3 className='text-1.125 font-medium mb-8'>Meloroids is the <span className='font-bold '>antidote to beat block</span>, allowing producers
                  to be able to focus on producing their highest quality work.
              </h3>
              <Link href={`${authorized ? '/quickie': '/signup'}`} className={`${btn} ${btnPrimary}`}>Get started</Link>
            </div>
         </div>
      </div>

      {/* Features section */}
      <section className='h-1000 flex items-center justify-center features__bg'>
        <div className='max-w-70 flex flex-col items-center'>
          <h2 className='text-1.5 font-semibold text-darklight tracking-widest uppercase mb-2'>Features</h2>
          <h3 className='text-3 font-semibold mb-8'>Focus on the Essentials</h3>
          {/* Two card container */}
          <div className='flex gap-12'>
            {/* Quickie */}
            <div className='flex flex-col items-center bg-white shadow-3xl rounded-4xl max-w-30 p-10'>
              <h4 className='text-2.5 font-semibold text-primary mb-4'>Quickie</h4>
              <p className='text-1.125 font-medium pb-4'><span className='font-bold'>We all know</span> how annoying it is to come up with a name for our beat every time we sit down to make music.</p>
              <p className='text-1.125 font-medium pb-6'><span className='font-bold text-primary'>Quickie</span> is beat/loop name generator that perfectly formats your files, allowing you to focus all your energy on making music.</p>
              <div>
                <Image
                  src={quickieImage}
                  alt='A snapshot of Quickie by Meloroids'
                  className='rounded-2xl features__img'
                />
              </div>
            </div>
            {/* Train */}
            <div className='flex flex-col items-center bg-white shadow-3xl rounded-4xl max-w-30 p-10'>
              <h4 className='text-2.5 font-semibold text-primary mb-4'>Train</h4>
              <p className='text-1.125 font-medium pb-4'><span className='text-primary font-bold'>Train</span> provides instant inspiration by showing you popular chord progressions for different genres. </p>
              <p className='text-1.125 font-medium pb-6'>Constraints are set <span className='italic font-bold text-primary'>before</span> you make your music, <span className='font-bold'>making writer&#39; block virtually impossible.</span></p>
              <div>
                <Image
                  src={trainImage}
                  alt='A snapshot of Train by Meloroids'
                  className='rounded-2xl features__img'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative h-400 flex justify-center'>
        <Image
          src={ctaImage}
          alt='A music studio'
          className='absolute top-0 left-0 w-full h-full object-cover z-0 cta__img'
        />
        <div className='relative text-white flex flex-col items-center justify-center text-center'>
          <h2 className='text-3 font-semibold mb-4'>Become a better producer!</h2>
          <h3 className='max-w-660 text-1.25 font-medium mb-8'>Join the growing community of producers that are focusing on what truly matters. Ignite your creativity through minimalism.</h3>
          <div className='flex gap-8'>
            <Link className={`${btn} ${btnPrimary}`} href={`${authorized ? '/quickie': '/signup'}`} >Get started</Link>
            <Link className={`${btn} ${btnOutline}`} href={'/'}>Try the demo</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
