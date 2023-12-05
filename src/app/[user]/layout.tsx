"use client"
import React, { useEffect } from "react"
import { ClientAuthService } from "@/services/client/client.auth.service"
import { useRouter } from 'next/navigation';
import { BrowserStorage, Encryptor, ROUTES, STATUS } from "@/uitils/constants";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function UserPageLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: {
        user: string
    }
}) {
    const router = useRouter();
    const browserStorage = new BrowserStorage();
    const authService = new ClientAuthService();
    const encryptor = new Encryptor();
    const encodedUserInfo = browserStorage?.getLocalStorage("client")

    const mutation = useMutation({
        mutationFn: () => handleOnUserValidation()
    })

    useEffect(() => {
        handleOnInit();
    }, [])

    const handleOnInit = () => {
        if (encodedUserInfo) {
            const decodedInfo = encryptor.decoder(encodedUserInfo);
            if (decodedInfo?.username) {
                router.push(decodedInfo ? ROUTES.DASHBOARD(decodedInfo?.username) : ROUTES.LOGIN)
            }
        }
        else {
            mutation.mutateAsync();
        }
    }


    const handleOnUserValidation = async () => {
        try {
            const validUser = await authService.validUser();
            const isValidUser = validUser?.status === STATUS.SUCCESS;
            browserStorage.setLocalStorage("client", encryptor?.encoder(validUser?.data))
            router.push(isValidUser ? ROUTES.DASHBOARD(validUser?.data?.username) : ROUTES.LOGIN)
            return validUser;
        } catch (error) {

        }
    }

    return (
        <section>
            {children}
        </section>
    )
}