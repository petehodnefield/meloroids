import React, { useState } from 'react'

const Train = () => {
    const [styleOpen, setStyleOpen] = useState(false)

    const [styleChoice, setStyleChoice] = useState('Pop Punk')
    const styles = [
        {
            style: 'Pop Punk',
            icon: '🎶'
        },
        {
            style: 'Trap',
            icon: '🎶'
        },
        {
            style: 'House',
            icon: '🎶'
        },
    ]

    console.log('style choice', styleChoice)
    return (
        <section
            className='bg-cover h-screen'
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }}
        >
            <div className='bg-white flex flex-col items-center w-full h-screen'>
                <h2 className='text-2 font-semibold'>Pick your parameters</h2>
                {/* Randomize ALL */}
                <div className='flex gap-2'>
                    <p className='text-0.875 font-semibold text-primary'>Randomize all</p>
                    <input type='checkbox' className='h-6 w-6' />
                </div>
                <form className='flex flex-col items-center w-full px-6' action="">

                    {/* Style Input */}
                    <div className='w-full relative'>
                        <div className='flex justify-between items-center w-full'>
                            <label className='text-0.875 font-semibold'>Style</label>
                            <div className='flex gap-2 mb-1'>
                                <p className='text-0.875 font-semibold text-primary'>Randomize all</p>
                                <input type='checkbox' className='h-6 w-6 ' />
                            </div>
                        </div>
                        <div
                            className='h-12 w-full border-2 rounded-lg flex justify-between items-center '
                            onClick={() => setStyleOpen(!styleOpen)}
                        >
                            <div className='w-12 text-center'>🎶</div>
                            <p className='text-left w-full text-0.875 font-semibold'>{styleChoice}</p>
                            <div className='w-12 h-12 flex items-center justify-center'>       ⌄</div>
                        </div>
                        {styleOpen ? (
                            <div className='border-2 rounded-lg absolute w-full mt-3'>
                                {styles.map(style => (
                                    <div
                                        key={style.style}
                                        className='h-12 w-full  flex justify-between items-center'
                                        onClick={() => {
                                            setStyleChoice(style.style)
                                            setStyleOpen(!styleOpen)
                                        }}
                                    >
                                        <div className='w-12 text-center'>{style.icon}</div>
                                        <p className='text-left w-full text-0.875 font-semibold'>{style.style}</p>

                                    </div>
                                ))}
                            </div>
                        ) : (
                            ''
                        )}

                        {/* <select className='text-0.875 font-semibold h-12 w-full border-2 px-4'>
                            {styles.map(style =>
                            (
                                <option
                                    key={style.style}
                                    className='px-4'
                                >
                                    {style.style}
                                </option>
                            ))}
                        </select> */}
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Train