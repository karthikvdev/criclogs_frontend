import { ServerAuthService } from "@/services/server/server.auth.service";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';


export async function POST(req: Request) {
    try {
        const serverAuthService = new ServerAuthService();
        const payload: any = await req.json();
        const response = await serverAuthService.login(payload);
        cookies().set("access_token", response?.data?.access_token, { httpOnly: true })
        return NextResponse.json({ ...response }, { status: response?.statusCode })
    } catch (error) {
        return NextResponse.json({ status: 500, message: "Internal Server Error" })
    }
}
