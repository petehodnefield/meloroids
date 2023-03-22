import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const LoopFileName = ({loopName}) => {

  const [value, setValue] = useState('Rocket 123 bpm a minor @mongamonga')


  return (
    <div className='bg-dark w-full h-12 text-white flex items-center justify-center'>
      <p className='text-0.75 font-semibold'>Rocket 123 bpm a minor @mongamonga</p>
      <CopyToClipboard text={loopName}>
          <Icon className='absolute right-6 text-1.125' icon="ph:copy-simple" />

      </CopyToClipboard>
    </div>
  )
}

export default LoopFileName