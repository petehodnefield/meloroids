import Image from 'next/image'
import React from 'react'
import logoFull from '../../../public/assets/logo/logo-full-white.png'
import Link from 'next/link'
import PrivacyPolicy from './PrivacyPolicy'
import { Icon } from '@iconify/react'
const Footer = () => {
    const columnStyle = 'flex flex-col items-center justify-center lg:items-start lg:justify-start 	'
    const handleFormSubmit = async(e:React.FormEvent<EventTarget>) =>{
        e.preventDefault()       
     }
    return (
        <footer className='flex lg:h-325  py-10 items-center text-white justify-center  bg-primary '>
            <div className='w-full lg:w-60 xl:w-70 h-full flex flex-col lg:flex-row items-center justify-center'>
                {/* Column 1 */}
                <div className={`${columnStyle} flex-1.33`}>
                    <div className='flex flex-col items-center lg:items-start mb-6 lg:mb-20'>
                        <div className='h-20'>
                            <Link className='h-full mb-1.5 my-4 lg:h-20 lg:mb-3' href='/'>
                                <Image
                                    className='h-full w-full  object-contain '
                                    src={logoFull}
                                    alt='Logo for meloroids'
                                />
                            </Link>
                        </div>
                        <h2 className='text-1.25 font-bold'>Melody creation simplified.</h2>
                    </div>
                    {/* Privacy policy + copyright */}
                    <PrivacyPolicy displayClass={'hidden lg:flex'}/>
                </div>
                {/* Column 2 */}
                <div className={` ${columnStyle} hidden lg:block lg:flex-1 `}>
                    <div className='flex flex-col items-start'>
                      <h3 className='text-1.5 font-bold mb-4'>Resources</h3>
                      <ul className='flex flex-col p-0 gap-3'>
                        <li className='mg-0 p-0'>
                            <Link href={'/quickie'} className='font-1.125 font-medium'>Quickie</Link>
                        </li>
                        <li>
                            <Link href={'/train'} className='font-1.125 font-medium'>Train</Link>
                        </li>
                        <li>
                            <Link href={'/login'} className='font-1.125 font-medium'>Sign in</Link>
                        </li>
                        <li>
                            <Link href={'/contact'} className='font-1.125 font-medium'>Contact</Link>
                        </li>
                      </ul>
                    </div>                   
                </div>
                {/* Column 3 */}
                <div className={`mt-6 ${columnStyle} gap-8 flex-1`}>
                    <div className='flex flex-col items-center lg:items-start'>
                      <h3 className='text-1.5 font-bold mb-2'>Join us</h3>
                     <h4 className='text-1 font-medium mb-2'>Enter your email to get free guides</h4>
                     {/* Form to capture emails */}
                        <form onSubmit={handleFormSubmit} action="POST" id='newsletterForm' className='border-solid border-b-2 border-white py-1 gap-2 flex'>
                            <label hidden htmlFor='emailAddress'>Email Address</label>
                            <input id='emailAddress' type='email' placeholder='Your Email' className='bg-transparent text-light text-1 font-400 focus:outline-none placeholder-light'/>
                            <button type='submit' className='font-bold'>SUBMIT</button>
                        </form>
                    </div>     
                    <div className='flex flex-col items-start'>
                      <h3 className='text-1.5 font-bold mb-4'>Follow us</h3>
                      {/* Social Icons */}
                        <div className='flex gap-4 items-center'>
                            <Link href={''}>
                                <Icon className='text-1.5' icon="bi:instagram" />
                            </Link>
                            <Link href={''}>
                                <Icon className='text-1.5' icon="bi:tiktok" />
                            </Link>
                            <Link href={''}>
                                <Icon className='text-1.5' icon="bi:youtube" />
                            </Link>
                        </div>
                    </div>     
                    <PrivacyPolicy displayClass={'flex lg:hidden'}/>

                </div>
            </div>

            
        </footer>

    )
}

export default Footer