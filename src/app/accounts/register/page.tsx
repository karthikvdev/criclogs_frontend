"use client";
import React from 'react'
import Checkbox from '../../../components/Checkbox';
import Link from 'next/link';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import { useForm } from "react-hook-form"
import { ROUTES, STATUS } from '@/uitils/constants';
import { IRegister } from '@/uitils/interface';
import { ClientAuthService } from '@/services/client/client.auth.service';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';


const Register = () => {
    const router = useRouter();

    const clientAuthService = new ClientAuthService()
    const mutation = useMutation({
        mutationFn: (values: IRegister) => {
            return clientAuthService.register(values);
        }
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IRegister>();
    const registerValidation = {
        firstname: { required: "First name is required" },
        lastname: {},
        email: { required: "Email is required", pattern: { value: RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"), message: "Provide valid email" } },
        username: { required: "Username is required", minLength: { value: 4, message: "Username should contain atleast 4 characters" } },
        mobile: { required: "Mobile is required", minLength: { value: 10, message: "Provide valid mobile" }, maxLength: { value: 10, message: "Please provide valid mobile" } },
        password: { required: "Password is required", minLength: { value: 8, message: "Password should contain 8 characters." } }
    }


    const handleOnRegister = async (value: IRegister) => {
        value.roles = ["ADMIN"];
        mutation.mutateAsync(value).then((res) => {
            if (res.status === STATUS.SUCCESS) {
                router.push(ROUTES.LOGIN)
            }
        });
    }


    return (
        <div className="container max-w-2xl m-auto mt-6">
            <div className="border-t-4 border-users overflow-hidden rounded shadow-lg">
                <h3 className="text-xl text-center mt-8 mb-8 dark:text-gray-50">Welcome back!</h3>
                <form autoComplete='off' onSubmit={handleSubmit((data) => handleOnRegister(data))}>
                    <div className='flex justify-between'>
                        <InputField placeholder='First Name' formBind={{ ...register("firstname", registerValidation.firstname) }} errorMessage={errors?.firstname?.message} />
                        <InputField placeholder='Last Name' formBind={{ ...register("lastname",) }} errorMessage={errors?.lastname?.message} />
                    </div>
                    <div className='flex justify-between'>
                        <InputField formBind={{ ...register("username", registerValidation.username) }} placeholder='Username' errorMessage={errors?.username?.message} />
                        <InputField type="number" formBind={{ ...register("mobile", registerValidation.mobile) }} placeholder='Mobile' errorMessage={errors?.mobile?.message} />
                    </div>
                    <div className='flex justify-between'>
                        <InputField formBind={{ ...register("email", registerValidation.email) }} placeholder='Email Address' errorMessage={errors?.email?.message} />
                        <InputField type="password" formBind={{ ...register("password", registerValidation.password) }} placeholder='Password' isPassword errorMessage={errors?.password?.message} />
                    </div>
                    <div className="px-4 mb-4 flex">
                        <Checkbox id="remember-me" label='Remember me' />
                        <div className="w-1/2 text-right">
                            <p className="font-semibold no-underline dark:text-gray-50  text-black"
                            >Forgot your password?</p>
                        </div>
                    </div>
                    <Button isLoading={mutation?.isPending} name='Sign up' type='submit' />
                </form>
                <div className="bg-gray-100 text-center text-gray-700 py-5">
                    {"Already have a account? "}
                    <Link href={ROUTES.LOGIN} className="font-semibold no-underline text-black">Signin</Link>
                </div>
            </div>
        </div>
    )
}

export default Register