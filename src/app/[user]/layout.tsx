"use client"
import React from "react"

export default function UserPageLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: {
        user: string
    }
}) {

    return (
        <section>
            {children}
        </section>
    )
}