"use client";
import React from 'react'
import Checkbox from '../../../components/Checkbox';
import Link from 'next/link';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import { useForm } from "react-hook-form"
import { ROUTES, STATUS } from '@/uitils/constants';
import { ILogin } from '@/uitils/interface';
import { ClientAuthService } from '@/services/client/client.auth.service';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    const clientAuthService = new ClientAuthService()
    const { handleSubmit, register, formState: { errors } } = useForm<ILogin>();
    const handleOnLogin = async (data: ILogin) => {
        const login = await clientAuthService.login(data);
        console.log("login", login?.data?.username)
        if (login?.status === STATUS.SUCCESS) {
            router.push(ROUTES.DASHBOARD(login?.data?.username))
        }



    }

    const loginValidation = {
        userId: { required: "User name is required" },
        password: { required: "Password is required", minLength: { value: 8, message: "Password should contain atleast 8 characters." } }
    }

    return (
        <div className="container max-w-md m-auto mt-6">
            <form autoComplete='off' onSubmit={handleSubmit((data) => handleOnLogin(data))}>
                <div className="border-t-4 border-users overflow-hidden rounded shadow-lg">
                    <h3 className="text-xl text-center mt-8 mb-8 dark:text-gray-50">Welcome back!</h3>
                    <InputField formBind={{ ...register("userId", loginValidation.userId) }} placeholder='Username or Email or Mobile' errorMessage={errors?.userId?.message} />
                    <InputField formBind={{ ...register("password", loginValidation.password) }} placeholder='Password' errorMessage={errors?.password?.message} type="password" isPassword />
                    <div className="px-4 mb-4 flex">
                        <Checkbox id="remember-me" label='Remember me' />
                        <div className="w-1/2 text-right">
                            <p className="font-semibold no-underline dark:text-gray-50  text-black"
                            >Forgot your password?</p>
                        </div>
                    </div>
                    <Button type="submit" name='Sign in' />
                    <div className="bg-gray-100 text-center text-gray-700 py-5">
                        {"Don't have a account? "}
                        <Link href={ROUTES.REGISTER} className="font-semibold no-underline text-black">Signup</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;