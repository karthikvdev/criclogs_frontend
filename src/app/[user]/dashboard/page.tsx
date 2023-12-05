"use client";

import { ROUTES } from "@/uitils/constants";
import Link from "next/link";

export default function Page({ params }: { params: { user: string } }) {
    return (<>
        <h1 className="dark:text-gray-50">Hello {params?.user}, Welcome to Dashboard Page!</h1>
        <Link className="dark:text-gray-50" href={ROUTES.SETTINGS(params?.user)}>To settings</Link>
    </>)
}