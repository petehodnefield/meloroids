import LoginForm from '@/components/Login/LoginForm'
import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div
            className='bg-cover h-screen py-10 flex justify-center md:py-16 '
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1633933703119-5d25460ad829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80)` }}>
            <div className='md:justify-center w-full max-w-58  flex lg:justify-end'>
                <div
                    className='w-full h-fit bg-white mx-6 rounded px-4 py-8 pb-12 md:pb-16
                    md:max-w-112 md:mx-0 md:px-16 md:py-10'>
                    <h2 className='text-2 font-semibold mb-8'>Login</h2>
                    <LoginForm />
                    <p className='text-0.75 font-semibold text-center md:text-left'>Don&apos;t have an account? <Link href='/signup' className='text-primary hover:opacity-80'>Create one </Link></p>
                </div>
            </div>

        </div>
    )
}

export default Login