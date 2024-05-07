import { auth } from "@/auth"
import axios from "axios"
import { NextResponse } from "next/server"

export const GET = auth(async function GET(req) {
    if (req.auth) {
        const allowedEmails = ['v101developer@gmail.com', 'gokulkannant99@gmail.com', 'nikolateslat800@gmail.com', 'vismayadinesh2@gmail.com']
        if (allowedEmails.includes(req.auth.user?.email!!)) {
            const { status, statusText } = await axios.get('https://nfc.connectnear.me/L')
            if (status === 200) {
                return NextResponse.json({ message: "Door Closed" }, { status: 200 })
            }
            else if (status === 502) {
                return NextResponse.json({ message: "Door Closing Failed" }, { status: 500 })
            }
            return NextResponse.json({ message: "Access Denied" }, { status: 401 })
        }
    }
    const url = new URL('/api/auth/signin', req.url);
    url.searchParams.append('callbackUrl', req.nextUrl.toString())
    return Response.redirect(url)
})