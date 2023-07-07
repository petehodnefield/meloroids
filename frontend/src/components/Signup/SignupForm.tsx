import React, {useState} from 'react'
import { useMutation } from '@apollo/client'
import { SIGNUP } from 'utils/mutations'
import Auth from 'utils/auth'

const SignupForm = () => {
    const inputStyle: string = 'text-1  font-semibold border-light border-2 w-full h-12 rounded-lg pl-4 focus:outline-primary focus:duration-400'
    const labelStyle: string = 'text-0.875 font-semibold mb-0.5'
    const formInputWrapperStyle: string = 'flex flex-col w-full'
    const errorMessage: string = `text-0.875 font-semibold text-red mt-2`
    const formInputError: string = `bg-formError border-red focus:outline-red`

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        email: '',
        instagramHandle: ''
    })
    const [formErrors, setFormErrors  ] = useState({
        passwordMatchError: '',
        emailMatchError: ''
    })
    const [signUp, {loading, error, data}] = useMutation(SIGNUP)
    
    if (loading) return <div>Loading....</div>

    const comparePassword = async(password: string) => {
        if (password !== userInfo.password) {
            setFormErrors({...formErrors, passwordMatchError: 'The passwords do not match!'})
        }
        else {
            setFormErrors({...formErrors, passwordMatchError: ''})
        }
    }
    const compareEmail = async(email: string) => {
        if (email !== userInfo.email) {
            setFormErrors({...formErrors, emailMatchError: 'The emails do not match!'})
        }
        else {
            setFormErrors({...formErrors, emailMatchError: ''})
        }
    }

    const handleFormSubmit = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        if(formErrors) {
            window.alert('There are errors in your form. Please fix them and try submitting again.')
            return
        }
        else {
            try {
                const {data} = await signUp({variables: {username: userInfo.username, password: userInfo.password, email: userInfo.email, instagramHandle: userInfo.instagramHandle}})
                Auth.login(data.createUser.token)
    
            }
            catch(e) {
                console.log(e)
            }
        }
    }
    return (
        <form id='signupForm' onSubmit={handleFormSubmit}>
            <div className={`${formInputWrapperStyle} mb-8`}>
                <label htmlFor='username' className={`${labelStyle}`}>Username</label>
                <input minLength={3} maxLength={20} id='username' type='text' required className={inputStyle} onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}/>
            </div>
            <div className={`${formInputWrapperStyle} mb-4`}>
                <label htmlFor='email' className={`${labelStyle}`}>Email Address</label>
                <input minLength={6} maxLength={30} id='email' type='email' required className={inputStyle} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}/>
            </div>
            <div className={`${formInputWrapperStyle} mb-8`}>
                <label htmlFor='confirmEmail' className={`${labelStyle}`}>Confirm Email Address</label>
                <input minLength={6} maxLength={30} id='confirmEmail' type='email' required 
                    className={`${inputStyle} ${formErrors.emailMatchError ? formInputError : ''}`} onChange={(e) => {
                    compareEmail(e.target.value)
                }}/>
                {formErrors.emailMatchError ? <p className={`${errorMessage}`}>{formErrors.emailMatchError}</p>: ''}

            </div>
            <div className={`${formInputWrapperStyle} mb-0`}>
                <label htmlFor='password' className={`${labelStyle}`}>Password</label>
                <input minLength={8} maxLength={20} id='password' type='password' required className={inputStyle} onChange={(e) => {
                    setUserInfo({...userInfo, password: e.target.value})

                }}/>
                <p className='text-0.75 text-primary font-semibold h-12 flex items-center'>Atleast 8 letters or numbers + special chars.</p>
            </div>
            <div className={`${formInputWrapperStyle} mb-8`}>
                <label htmlFor='confirmPassword' className={`${labelStyle}`}>Confirm Password</label>
                <input minLength={8} maxLength={20} id='confirmPassword' type='password' required 
                     className={`${inputStyle} ${formErrors.passwordMatchError ? formInputError : ''}`}  onChange={(e) => {
                    comparePassword(e.target.value)
                }}/>
                {formErrors.passwordMatchError ? <p className={`${errorMessage}`}>{formErrors.passwordMatchError}</p>: ''}
            </div>
            <div className={`${formInputWrapperStyle} mb-8`}>
                <label htmlFor='instagram' className={`${labelStyle}`}>Instagram Handle</label>
                <input minLength={1} maxLength={20} id='instagram' type='text' className={inputStyle} onChange={(e) => setUserInfo({...userInfo, instagramHandle: e.target.value})}/>
            </div>
            <button type='submit' className=' mb-6 bg-dark text-white  text-1 font-semibold h-12 w-full md:w-48 rounded  hover:opacity-80 duration-200'>Create Account</button>
        </form>
    )
}

export default SignupForm