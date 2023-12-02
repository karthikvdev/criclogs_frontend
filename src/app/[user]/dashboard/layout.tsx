import { redirect } from "next/navigation";
import React from "react"

export default function DahboardLayout({
    children
}: {
    children: React.ReactNode
}) {


    return (
        <section>
            {children}
        </section>
    )
}