import React, { useState } from 'react'
import Checkbox from '../Checkbox';

type Tprops = {
    formBind?: any
    isPassword?: boolean
    errorMessage?: string
} & React.InputHTMLAttributes<HTMLInputElement>


const InputField: React.FC<Tprops> = ({ formBind, isPassword, errorMessage, ...props }) => {
    const [inputType, setInputType] = useState<React.HTMLInputTypeAttribute | undefined>(props?.type);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputType(e?.target?.checked ? "text" : "password")
    }

    return (
        <div className="px-4 mb-4 w-full">
            <input
                {...formBind}
                {...props}
                type={inputType}
                className="border border-gray rounded w-full p-3"
            />
            {errorMessage && <p className='text-sm text-red-500'>{errorMessage}</p>}
            {isPassword && <Checkbox label='Show Password' onChange={handleOnChange} />}
        </div>
    )
}

export default InputField