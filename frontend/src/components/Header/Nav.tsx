import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import Auth from 'utils/auth'
interface NavProps {
    navSelected: string
    setNavSelected: React.Dispatch<React.SetStateAction<string>>
}


const Nav = ({ setNavSelected, navSelected }: NavProps) => {
    const liStyle: string = 'text-0.875 font-semibold hover:text-dark duration-200 '
    const loginStyle: string = 'font-semibold h-8 bg-white text-primary rounded-full w-24 flex items-center justify-center hover:opacity-90 duration-200'

    const selectedNavItem: string = ' font-semibold   duration-200 before:content-["•"]'

    const [authorized, setAuthorized] = useState(false)

    useEffect(() => {
        if(Auth.loggedIn()) {
            setAuthorized(true)
        }
    }, [])

    const logout = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        Auth.logout()
      }
    return (
        <nav>
            <ul className='flex gap-6 items-center text-white'>
                <li className={`${liStyle} ${navSelected === 'home' ? selectedNavItem : ''}`}>
                    <Link
                        onClick={() => setNavSelected('home')}
                        href='/'>Home
                    </Link>
                </li>
                <li className={`${liStyle}  ${navSelected === 'train' ? selectedNavItem : ''}`}>
                    <Link
                        onClick={() => setNavSelected('train')}
                        href='/train-setup'>Train
                    </Link>
                </li>
                <li className={`${liStyle}  ${navSelected === 'quickie' ? selectedNavItem : ''}`}>
                    <Link
                        onClick={() => setNavSelected('quickie')}
                        href='/quickie'>Quickie
                    </Link>
                </li>
                <li className={`${liStyle}    `}>

                {!authorized ? (
                        <Link
                            onClick={() => setNavSelected('login')}
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