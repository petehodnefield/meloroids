import React from 'react'

const LoginForm = () => {
    const inputStyle: string = 'text-1  font-semibold border-light border-2 w-full h-12 rounded-lg pl-4 focus:outline-primary focus:duration-400'
    const labelStyle: string = 'text-0.875 font-semibold mb-0.5'
    const formInputWrapperStyle: string = 'flex flex-col w-full mb-4'
    const formExtraInputWrapperStyle: string = 'flex flex-col w-full mb-2'

    const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
    }
    return (
        <form id='loginForm' onSubmit={(e) => handleFormSubmit(e)}>
            <div className={`${formInputWrapperStyle}`}>
                <label className={`${labelStyle}`}>Username</label>
                <input type='text' required className={inputStyle} />
            </div>

            <div className={`${formExtraInputWrapperStyle}`}>
                <label className={`${labelStyle}`}>Password</label>
                <input type='password' required className={inputStyle} />
                <p className='text-0.875  font-semibold h-12 flex items-center'>Forgot password?</p>
            </div>
            <button type='submit' className=' mb-6 bg-dark text-white  text-1 font-semibold h-12 w-full md:w-48 rounded  hover:opacity-80 duration-200'>Login</button>
        </form>)
}

export default LoginForm