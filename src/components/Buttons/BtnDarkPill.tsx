import React from 'react'
interface ButtonProps {
    buttonText: string
}
const BtnDarkPill = ({ buttonText }: ButtonProps) => {
    return (
        <button className="bg-dark text-white  text-1 text-semibold h-12 w-48 rounded-full  hover:opacity-80 duration-200">{buttonText}</button>
    )
}

export default BtnDarkPill