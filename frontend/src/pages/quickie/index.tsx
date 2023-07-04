import LoopFileName from '@/components/Train/LoopFileName';
import React, {useEffect, useState} from 'react'
import {randomWord} from '../../../utils/data/words'
import {DateToggle} from '../../components/Quickie/DateToggle'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import background from '../../../public/assets/images/music-studio.png'
import Image from 'next/image';
const Quickie = () => {
  
    const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;
    const word: string = randomWord



  return (
    <div className='quickie h-screen flex flex-col items-center py-12 relative'>
      <Image
      src={background}
      alt='A music studio with an imac at the center'
      className='absolute top-0 h-full object-cover z-0 w-full'
      />
        <div className='flex flex-col items-center justify-between	 bg-white shadow-3xl pt-10 rounded-xl w-96 relative'>
          <h2 className='text-2.5 font-semibold mb-4 text-primary'>Quickie</h2>

        <DateToggle/>

             <Link onClick={() => window.location.reload()}  href="/quickie">
              <Icon
                className=" text-2 hover:cursor-pointer mb-4 hover:opacity-80"
                icon="mdi:dice-6"
              />
            </Link>
          <LoopFileName loopName={`${word} @mongamonga_`}/>
        </div>
    </div>
  )
}

export default Quickie