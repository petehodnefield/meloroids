import React, {useState} from 'react'
import { useMutation } from '@apollo/client'
import { SIGNUP } from 'utils/mutations'
import Auth from 'utils/auth'

const SignupForm = () => {
    const inputStyle: string = 'text-1  font-semibold border-light border-2 w-full h-12 rounded-lg pl-4 focus:outline-primary focus:duration-400'
    const labelStyle: string = 'text-0.875 font-semibold mb-0.5'
    const formInputWrapperStyle: string = 'flex flex-col w-full mb-4'

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        email: '',
        instagramHandle: ''
    })
console.log('userInfo', userInfo)
    const [signUp, {loading, error, data}] = useMutation(SIGNUP)

if (loading) return <div>Loading....</div>

    const handleFormSubmit = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()

        try {
            const {data} = await signUp({variables: {username: userInfo.username, password: userInfo.password, email: userInfo.email, instagramHandle: userInfo.instagramHandle}})
            Auth.login(data.createUser.token)

        }
        catch(e) {
            console.log(e)
        }

    }
    return (
        <form id='signupForm' onSubmit={handleFormSubmit}>
            <div className={`${formInputWrapperStyle}`}>
                <label className={`${labelStyle}`}>Username</label>
                <input type='text' required className={inputStyle} onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}/>
            </div>
            <div className={`${formInputWrapperStyle}`}>
                <label className={`${labelStyle}`}>Email Address</label>
                <input type='email' required className={inputStyle} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}/>
            </div>
            <div className={`${formInputWrapperStyle}`}>
                <label className={`${labelStyle}`}>Create Password</label>
                <input type='password' required className={inputStyle} onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}/>
                <p className='text-0.75 text-primary font-semibold h-12 flex items-center'>Atleast 8 letters or numbers + special chars.</p>
            </div>
            <div className={`${formInputWrapperStyle}`}>
                <label className={`${labelStyle}`}>Instagram Handle</label>
                <input type='text' required className={inputStyle} onChange={(e) => setUserInfo({...userInfo, instagramHandle: e.target.value})}/>
            </div>
            <button type='submit' className=' mb-6 bg-dark text-white  text-1 font-semibold h-12 w-full md:w-48 rounded  hover:opacity-80 duration-200'>Create Account</button>
        </form>
    )
}

export default SignupForm