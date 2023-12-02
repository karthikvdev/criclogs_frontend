"use client";
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()
    console.log("router", router)
    return <>
        <h1>Hello, Settings Page!</h1>
    </>
}