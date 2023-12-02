"use client";
export default function Page({ params }: { params: { user: string } }) {
    return (<>
        <h1>Hello {params?.user}, Welcome to Settings Page!</h1>
    </>)
}