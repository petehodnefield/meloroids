import React, {useState} from 'react'
import {LOGIN} from '../../../utils/mutations'
import { useMutation } from '@apollo/client'
import Auth from '../../../utils/auth'
import Link from 'next/link'

const LoginForm = () => {
    const inputStyle: string = 'text-1  font-semibold border-light border-2 w-full h-12 rounded-lg pl-4 focus:outline-primary focus:duration-400'
    const labelStyle: string = 'text-0.875 font-semibold mb-0.5'
    const formInputWrapperStyle: string = 'flex flex-col w-full mb-4'
    const formExtraInputWrapperStyle: string = 'flex flex-col w-full mb-2'

    // State handling login form information
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    })
    const[errorMessage, setErrorMessage] = useState('')

    const [login, {loading, error, data}] = useMutation(LOGIN)

    const handleFormSubmit = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        try {
            const {data} = await  login({variables:{username: userInfo.username, password: userInfo.password}})
            Auth.login(data.login.token)
        }catch(e) {
            setErrorMessage('Username and/or password is incorrect. Please try again.')
            console.log(e)
        }
           }
    return (
        <form id='loginForm' onSubmit={(e) => handleFormSubmit(e)}>
            <div className={`${formInputWrapperStyle}`}>
                <label className={`${labelStyle}`}>Username</label>
                <input type='text' required className={inputStyle} onChange={(e) => setUserInfo({...userInfo, username: e.target.value})} />
            </div>

            <div className={`${formExtraInputWrapperStyle}`}>
                <label className={`${labelStyle}`}>Password</label>
                <input type='password' required className={inputStyle} onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}/>
                <Link href={'/reset-password'} className='text-0.875  font-semibold h-12 flex items-center'>Forgot password?</Link>
                {errorMessage ? <p className='text-red font-semibold mb-2'>{errorMessage}</p>: ''}
            </div>
            <button type='submit' className=' mb-6 bg-dark text-white  text-1 font-semibold h-12 w-full md:w-48 rounded  hover:opacity-80 duration-200'>Login</button>
        </form>)
}

export default LoginForm