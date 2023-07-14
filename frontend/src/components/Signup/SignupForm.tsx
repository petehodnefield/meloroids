import React, {useState, useEffect} from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { SIGNUP } from 'utils/mutations'
import { USERNAME, USER_EMAIL } from 'utils/queries'
import Auth from 'utils/auth'
import { Icon } from '@iconify/react'
const SignupForm = () => {
    const inputStyle: string = 'text-1  font-semibold  border-2 w-full h-12 rounded-lg pl-4  focus:duration-400'
    const labelStyle: string = 'text-0.875 font-semibold mb-0.5'
    const formInputWrapperStyle: string = 'flex flex-col w-full'
    const errorMessage: string = `text-0.875 font-semibold text-red mt-2`
    const formInputError: string = `bg-formError border-red focus:outline-red`
    const successInputStyle: string = `border-confirm bg-confirmLight focus:outline-confirm`
    const failureInputStyle: string = `border-deny bg-denyLight focus:outline-deny`
    const checkMarkStyle:string = 'text-2 text-confirm absolute right-2.5 top-2.5'
    const xMarkStyle: string = 'text-2 text-red absolute right-2.5 top-2.5'

   
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        email: '',
        instagramHandle: ''
    })
    const [usernameAvailable, setUsernameAvailable] = useState<null | boolean>(null)
    const [emailAvailable, setEmailAvailable] = useState<null | boolean>(null)
    const [emailMatch, setEmailMatch] = useState<null | boolean>(null)
    const [passwordMatch, setPasswordMatch] = useState<null | boolean>(null)
    const [formErrors, setFormErrors  ] = useState({
        passwordMatchError: '',
        passwordCriteriaError: 'a',
        emailMatchError: '',
        usernameExistError: '',
        usernameCriteriaError: '',
        emailExistError: '',
        emailCriteriaError: ''
    })
    console.log('errors', formErrors)

    const [signUp, {loading, error, data}] = useMutation(SIGNUP)
    const {loading: usernameLoading, data: usernameData, error: usernameError} = useQuery(USERNAME, {
        variables: {username: userInfo.username}
    })
    const {loading: userEmailLoading, data: userEmailData, error: userEmailError} = useQuery(USER_EMAIL, {
        variables: {email: userInfo.email}
    })
  
    if (loading ) return <div>Loading....</div>

    const checkIfUsernameExists = async() => {
        if(usernameData.username && usernameData.username.username) {
            const username = usernameData.username.username
            setFormErrors({...formErrors, usernameExistError: 'Username already taken!'})
            setUsernameAvailable(false)

        }else {
            setFormErrors({...formErrors, usernameExistError: ''})
            setUsernameAvailable(true)

        }
    }
    const checkUsernameCriteria = async(e: string) => {
        
        if( e.length >= 2) {
            setFormErrors({...formErrors, usernameCriteriaError: ''})        
        }
        else if(e.length < 2) {
            setFormErrors({...formErrors, usernameCriteriaError: 'Invalid username! Must be at least 2 characters.'})
        }
       
    }
    const checkIfEmailExists = async() => {
        if(userEmailData.userEmail && userEmailData.userEmail.email) {
            const email = userEmailData.userEmail.email
            setFormErrors({...formErrors, emailExistError: 'Email already in use!'})
            setEmailAvailable(false)

        }else {
            setFormErrors({...formErrors, emailExistError: ''})
            setEmailAvailable(true)

        }
    }

    const checkEmailCriteria = async(e: string) => {
        const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(e.match(emailFormat) && e.length >=8) {
            setFormErrors({...formErrors, emailCriteriaError: ''})        
        }
        else if(!e.match(emailFormat) || e.length < 8) {
            setFormErrors({...formErrors, emailCriteriaError: 'Invalid email format!'})
        }
       
    }
    const checkPasswordCriteria = async(e: string) => {
        const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(e.match(passwordFormat) && e.length >=8) {
            setFormErrors({...formErrors, passwordCriteriaError: ''})        
        }
        else if(e.length < 8) {
            setFormErrors({...formErrors, passwordCriteriaError: 'Password must be at least 8 characters!'})
        }
       
    }

    const comparePassword = async(password: string) => {
        if (password !== userInfo.password) {
            setFormErrors({...formErrors, passwordMatchError: 'The passwords do not match!'})
            setPasswordMatch(false)
        }
        else {
            setFormErrors({...formErrors, passwordMatchError: ''})
            setPasswordMatch(true)
        }
    }
    const compareEmail = async(email: string) => {
        if (email !== userInfo.email) {
            setFormErrors({...formErrors, emailMatchError: 'The emails do not match!'})
            setEmailMatch(false)

        }
        else {
            setFormErrors({...formErrors, emailMatchError: ''})
            setEmailMatch(true)
        }
    }

    const handleFormSubmit = async (e: React.FormEvent<EventTarget>) => {
        // e.preventDefault()
       
        try {
            const {data} = await signUp({variables: {username: userInfo.username, password: userInfo.password, email: userInfo.email, instagramHandle: userInfo.instagramHandle}})
            Auth.login(data.createUser.token)

        }
        catch(e) {
            console.log(e)
        }
        
    }
    return (
        <form id='signupForm' action="https://meloroids.us12.list-manage.com/subscribe/post" method="POST" onSubmit={handleFormSubmit}>
            <div className={`${formInputWrapperStyle} mb-8`}>
                <label htmlFor="MERGE1" className={`${labelStyle}`}>Username*</label>
                <div className='relative'>
                    <input minLength={3} maxLength={20} name="MERGE1" id="MERGE1" type='text' required
                    className={`${inputStyle} ${formErrors.usernameExistError || formErrors.usernameCriteriaError ? failureInputStyle: 'focus:outline-primary'}
                    ${usernameAvailable && userInfo.username.length >=2 ? successInputStyle : 'focus:outline-primary'}`}
                    onChange={(e) => {
                        setUserInfo({...userInfo, username: e.target.value})
                        checkUsernameCriteria(e.target.value)
                    }}
                    onBlur={() => checkIfUsernameExists()}
                    />
                    {usernameAvailable && userInfo.username.length >= 2 ? 
                        <Icon className={checkMarkStyle} icon="mingcute:check-line" />
                        : (
                            usernameAvailable === null ? '':
                            <Icon className={xMarkStyle} icon="heroicons-outline:x" />
                        )
                    }
                </div>
                
                {formErrors.usernameExistError ? <p className={`${errorMessage}`}>{formErrors.usernameExistError}</p>: ''}
                {formErrors.usernameCriteriaError ? <p className={`${errorMessage}`}>{formErrors.usernameCriteriaError}</p>: ''}
            </div>
            <div className={`${formInputWrapperStyle} mb-4`}>
                <label htmlFor="MERGE0" className={`${labelStyle}`}>Email Address*</label>
                <div className='relative'>
                    <input minLength={6} maxLength={30} name="MERGE0" id="MERGE0" type='email' required
                    className={`${inputStyle}  ${formErrors.emailExistError || formErrors.emailCriteriaError ? failureInputStyle: 'focus:outline-primary'}
                    ${emailAvailable && userInfo.email.length >=8 && !formErrors.emailCriteriaError ? successInputStyle: 'focus:outline-primary'}`}
                    onChange={(e) =>{
                        setUserInfo({...userInfo, email: e.target.value})
                        checkEmailCriteria(e.target.value)
                    }
                        
                    }
                    onBlur={(e) => {
                        checkIfEmailExists()
                    }}
                    />
                    {emailAvailable && userInfo.email.length >= 8 && !formErrors.emailCriteriaError ? 
                        <Icon className={checkMarkStyle} icon="mingcute:check-line" />
                        : (
                            emailAvailable === null ? '':
                            <Icon className={xMarkStyle} icon="heroicons-outline:x" />
                        )
                    }
                </div>
                {formErrors.emailExistError ? <p className={`${errorMessage}`}>{formErrors.emailExistError}</p>: ''}
                {formErrors.emailCriteriaError ? <p className={`${errorMessage}`}>{formErrors.emailCriteriaError}</p>: ''}
            </div>
            <div className={`${formInputWrapperStyle} mb-8`}>
                <label htmlFor='confirmEmail' className={`${labelStyle}`}>Confirm Email Address*</label>
                <div className='relative'>
                    <input minLength={6} maxLength={30} id='confirmEmail' type='email' required
                        className={`${inputStyle} ${formErrors.emailMatchError ? failureInputStyle : ''} 
                        ${emailMatch && !formErrors.emailCriteriaError  ? successInputStyle: ''}`} 
                        onChange={(e) => {
                            compareEmail(e.target.value)
                         }}/>
                    {emailAvailable && userInfo.email.length >= 8 && !formErrors.emailMatchError && emailMatch ? (
                        <Icon className={checkMarkStyle} icon="mingcute:check-line" />

                    ): emailMatch ?  (
                        <Icon className={xMarkStyle} icon="heroicons-outline:x" /> 

                    ): ('')}
                        
                    
                </div>
                {formErrors.emailMatchError ? <p className={`${errorMessage}`}>{formErrors.emailMatchError}</p>: ''}

            </div>
            <div className={`${formInputWrapperStyle} ${!formErrors.passwordCriteriaError ? 'mb-4': ''}`}>
                <label htmlFor='password' className={`${labelStyle}`}>Password*</label>
                <div className='relative'>
                    <input minLength={8} maxLength={20} id='password' type='password' required 
                        className={`${inputStyle} 
                            ${formErrors.passwordCriteriaError && userInfo.password.length >= 1 ? failureInputStyle : 
                                userInfo.password.length >= 8 && !formErrors.usernameCriteriaError ? successInputStyle: ''}`} 
                        onChange={(e) => {
                            setUserInfo({...userInfo, password: e.target.value})
                            checkPasswordCriteria(e.target.value)
                        }}/>
                        {!formErrors.passwordCriteriaError ? (
                            <Icon className={checkMarkStyle} icon="mingcute:check-line" /> 

                        ): userInfo.password.length >=1 ? (
                            <Icon className={xMarkStyle} icon="heroicons-outline:x" /> 

                        ): ''}

                </div>
                {formErrors.passwordCriteriaError ? (
                    <div className=' flex flex-col  items-start mb-1 py-2'>
                        <p className='text-1 text-primary font-medium '>Password must:</p>
                        <ul className='list-disc	text-1 pl-5 mb-2 font-medium'>
                            <li>Be between 8 and 20 characters</li>
                            <li>Include all of the following:</li>
                            <ul className='sublist	pl-4'>
                                <li>1 uppercase letter</li>
                                <li>1 lowercase letter</li>
                                <li>1 number letter</li>
                                <li>1 special character</li>
                            </ul>
                            
                        </ul>
                    </div>
                ): (
                    ''
                )}
               
            </div>
            <div className={`${formInputWrapperStyle} mb-8`}>
                <label htmlFor='confirmPassword' className={`${labelStyle}`}>Confirm Password*</label>
                <div className='relative'>
                    <input minLength={8} maxLength={20} id='confirmPassword' type='password' required
                        className={`${inputStyle} ${formErrors.passwordMatchError ? failureInputStyle : 
                        passwordMatch ? successInputStyle: ''}`}  
                        onChange={(e) => {
                            comparePassword(e.target.value)
                       }}/>
                       {userInfo.password.length >=8 && !formErrors.passwordMatchError && passwordMatch ? (
                        <Icon className={checkMarkStyle} icon="mingcute:check-line" /> 

                    ): passwordMatch ? <Icon className={xMarkStyle} icon="heroicons-outline:x" /> : ''

                       }
                </div>
                {formErrors.passwordMatchError ? <p className={`${errorMessage}`}>{formErrors.passwordMatchError}</p>: ''}
            </div>
            <div className={`${formInputWrapperStyle} mb-8`}>
                <label htmlFor='instagram' className={`${labelStyle}`}>Instagram Handle</label>
                <input minLength={2} maxLength={20} id='instagram' type='text' className={inputStyle} 
                    onChange={(e) => 
                    setUserInfo({...userInfo, instagramHandle: e.target.value})
                    }/>
            </div>
            <button type='submit' className=' mb-6 bg-dark text-white  text-1 font-semibold h-12 w-full md:w-48 rounded  hover:opacity-80 duration-200'>Create Account</button>
        </form>
    )
}

export default SignupForm