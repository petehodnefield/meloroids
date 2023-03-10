import ParamsData from '@/components/Params/ParamsData'
import Timer from '@/components/Params/Timer'
import TimerStart from '@/components/Params/TimerStart'
import React, { useState } from 'react'

const Params = () => {
    const [startTimer, setStartTimer] = useState(false)
    return (
        <div className='bg-cover min-h-screen  flex items-start justify-center'
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }}>
            <div className='flex flex-col items-center w-full md:py-12 lg:flex-row lg:max-w-48 lg:justify-between'>
                <ParamsData />
                <Timer
                    setStartTimer={setStartTimer}
                    startTimer={startTimer}
                />
            </div>
            {startTimer ? (
                <TimerStart
                setStartTimer={setStartTimer}
                startTimer={startTimer}
            />
            ): (
                ''
            )}
            
        </div>
    )
}

export default Params