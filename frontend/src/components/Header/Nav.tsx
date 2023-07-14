import Link from 'next/link'
import React, {useState, useEffect, useContext} from 'react'
import { LoginContext, NavigationContext } from '@/pages/_app'
import Auth from 'utils/auth'



const Nav = () => {
    const liStyle: string = 'text-0.875 font-semibold hover:text-dark duration-200 '
    const loginStyle: string = 'font-semibold h-8 bg-white text-primary rounded-full w-24 flex items-center justify-center hover:opacity-90 duration-200'

    const selectedNavItem: string = ' font-semibold   duration-200 before:content-["•"]'

    const [loggedIn, setLoggedIn] = useContext(LoginContext);

    const [navigationSelected, setNavigationSelected] = useContext(NavigationContext)

    const logout = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        Auth.logout()
      }
    return (
        <nav>
            <ul className='flex gap-6 items-center text-white'>
                <li className={`${liStyle} ${navigationSelected === 'home' ? selectedNavItem : ''}`}>
                    <Link
                        onClick={() => setNavigationSelected(loggedIn ? 'dashboard': 'home')}
                        href='/'>{loggedIn ? 'Dashboard': 'Home'}
                    </Link>
                </li>
                <li className={`${liStyle}  ${navigationSelected === 'train' ? selectedNavItem : ''}`}>
                    <Link
                        onClick={() => setNavigationSelected('train')}
                        href='/train-setup'>Train
                    </Link>
                </li>
                <li className={`${liStyle}  ${navigationSelected === 'quickie' ? selectedNavItem : ''}`}>
                    <Link
                        onClick={() => setNavigationSelected('quickie')}
                        href={`${loggedIn ? '/quickie': '/login' }`}>Quickie
                    </Link>
                </li>
                <li className={`${liStyle}    `}>

                {!loggedIn ? (
                        <Link
                            onClick={() => setNavigationSelected('login')}
                            className={`${loginStyle}`}
                            href='/login'>Login
                        </Link>
                ): (
                        <Link
                            onClick={logout}
                            className={`${loginStyle}`}
                            
                            href=''>Logout
                        </Link>
                )}
                                   </li>


               
            </ul>
        </nav>
    )
}

export default Nav