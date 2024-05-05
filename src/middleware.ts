import { auth } from "@/auth"
import { NextResponse } from "next/server"

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}


export default auth((req) => {
    console.log('Auth middleware called')
    if (!req.auth) {
        const url = new URL('/api/auth/signin', req.url)
        return Response.redirect(url)
    }
})