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
    console.log('Userpage')
    return (
        <section>
            {children}
        </section>
    )
}