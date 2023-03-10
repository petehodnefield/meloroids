import React from 'react'

const SignupForm = () => {
    const inputStyle: string = 'text-1  font-semibold border-light border-2 w-full h-12 rounded-lg pl-4 focus:outline-primary focus:duration-400'
    const labelStyle: string = 'text-0.875 font-semibold mb-0.5'
    const formInputWrapperStyle: string = 'flex flex-col w-full mb-4'

    const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
    }
    return (
        <form id='signupForm' onSubmit={(e) => handleFormSubmit(e)}>
            <div className={`${formInputWrapperStyle}`}>
                <label className={`${labelStyle}`}>Username</label>
                <input type='text' required className={inputStyle} />
            </div>
            <div className={`${formInputWrapperStyle}`}>
                <label className={`${labelStyle}`}>Email Address</label>
                <input type='email' required className={inputStyle} />
            </div>
            <div className={`${formInputWrapperStyle}`}>
                <label className={`${labelStyle}`}>Create Password</label>
                <input type='password' required className={inputStyle} />
                <p className='text-0.75 text-primary font-semibold h-12 flex items-center'>Atleast 8 letters or numbers + special chars.</p>
            </div>
            <button type='submit' className=' mb-6 bg-dark text-white  text-1 font-semibold h-12 w-full md:w-48 rounded  hover:opacity-80 duration-200'>Create Account</button>
        </form>
    )
}

export default SignupForm