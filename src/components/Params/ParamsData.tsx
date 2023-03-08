import React from 'react'

const ParamsData = () => {
  return (
    <div className='flex flex-col items-center py-10 pb-8'>
      <h2 className='text-2.5 text-primary font-semibold mb-8'>"Rocket"</h2>
      {/* Data wrapper */}
      <div className='pb-6'>
        {/* Chords (literal) */}
        <div className='flex flex-col items-center mb-4'>
          <h3 className='text-1 font-semibold text-medium'>🎼 Chords (literal):</h3>
          <p className='text-2 font-semibold'>A- | G  |  F |  G</p>
        </div>
        {/* Chords (numerals) */}
        <div className='flex flex-col items-center mb-4'>
          <h3 className='text-1 font-semibold text-medium'>🎼 Chords (numerals):</h3>
          <p className='text-2 font-semibold'>i bVII bVI bVII</p>
        </div>
        {/* Key */}
        <div className='flex flex-col items-center mb-4'>
          <h3 className='text-1 font-semibold text-medium'>🔑 Key:</h3>
          <p className='text-2 font-semibold'>A minor</p>
        </div>
        {/* Tempo */}
        <div className='flex flex-col items-center'>
          <h3 className='text-1 font-semibold text-medium'>🏃🏽‍♂️ Tempo:</h3>
          <p className='text-2 font-semibold'>123 bpm</p>
        </div>
      </div>
      <button className='pr-2 bg-primary text-white h-12 w-44 rounded text-1 font-semibold hover:cursor-pointer hover:opacity-80 duration-200'><span className='text-green'>•</span> MIDI</button>
    </div>
  )
}

export default ParamsData