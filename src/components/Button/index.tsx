import React from 'react'

type TProps = {

} & React.ButtonHTMLAttributes<HTMLButtonElement>


const Button: React.FC<TProps> = ({ ...props }) => {
    return (
        <div className="px-4 mb-6">
            <button {...props} className="border border-green-500 bg-users rounded w-full px-4 py-3 text-white font-semibold">
                {props?.name}
            </button>
        </div>
    )
}

export default Button