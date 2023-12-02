import { ServerAuthService } from "@/services/server/server.auth.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const serverAuthService = new ServerAuthService()
        const payload = await req.json();
        const response = await serverAuthService.register(payload);
        return NextResponse.json({ ...response }, { status: response?.message?.statusCode })
    } catch (error) {
        return NextResponse.json({ status: 401, message: "Heelo" })
    }
}
