import React from "react"

export default function AccountLayout({
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