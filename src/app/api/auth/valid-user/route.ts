import { ServerAuthService } from "@/services/server/server.auth.service";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const serverAuthService = new ServerAuthService()
        const response = await serverAuthService.validUser();
        return NextResponse.json({ ...response }, { status: response?.statusCode })
    } catch (error) {
        return NextResponse.json({ status: 500, message: "Internal Server Error" })
    }
}
