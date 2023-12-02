import React from 'react'

type Tprops = {
    label?: string

} & React.InputHTMLAttributes<HTMLInputElement>


const Checkbox: React.FC<Tprops> = ({ label, ...props }) => {
    return (
        <div className="w-1/2 flex gap-1 items-baseline">
            <input
                {...props}
                type="checkbox"
                className="align-middle cursor-pointer -mt-1"
            />
            <label
                className="align-middle dark:text-gray-50 text-gray-700 text-md cursor-pointer"
            >
                {label}
            </label>
        </div>
    )
}

export default Checkbox;