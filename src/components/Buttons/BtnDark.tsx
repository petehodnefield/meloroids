import React from 'react'
interface ButtonProps {
    buttonText: string
}

const BtnDark = ({ buttonText }: ButtonProps) => {
    return (
        <button className="bg-dark text-white  text-0.875 text-semibold h-12 w-48 rounded  hover:opacity-80 duration-200">{buttonText}</button>
    )

}

export default BtnDark