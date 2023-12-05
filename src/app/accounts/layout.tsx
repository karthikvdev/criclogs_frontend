"use client"
import { ClientAuthService } from "@/services/client/client.auth.service";
import { BrowserStorage, Encryptor, ROUTES, STATUS } from "@/uitils/constants";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react"

export default function AccountLayout({
    children
}: {
    children: React.ReactNode
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