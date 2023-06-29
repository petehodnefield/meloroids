import LoopFileName from '@/components/Train/LoopFileName';
import React, {useEffect, useState} from 'react'
import {randomWord} from '../../../utils/data/words'
import Link from 'next/link';
import { Icon } from '@iconify/react';
const Quickie = () => {
    const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;
    const word: string = randomWord
    console.log(word)
  return (
    <div className='quickie h-screen flex flex-col items-center py-12'>
        <div className='flex flex-col items-center bg-white shadow-3xl p-12 rounded-xl w-96'>
          <h2 className='text-2 font-semibold mb-4'>Loop Name:</h2>
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