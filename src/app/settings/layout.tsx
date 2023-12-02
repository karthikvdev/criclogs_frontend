import { redirect } from "next/navigation";
import React from "react"

export default function DahboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    const userAuthenticated = true;
    if (userAuthenticated) {
        redirect("/dashboard");
    }
    return (
        <section>
            {children}
        </section>
    )
}