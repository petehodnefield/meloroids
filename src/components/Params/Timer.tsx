import React from 'react'

const Timer = () => {
    return (
        <div className='bg-quad text-white flex flex-col items-center py-4 pb-6'>
            <h3 className='text-1 font-semibold'>Timer</h3>
            <p className='text-2 font-semibold'>10:00</p>
            <button className='h-12 w-44 bg-white text-dark text-0.875 font-semibold rounded hover:cursor-pointer hover:opacity-80 duration-200'>Start</button>
        </div>
    )
}

export default Timer