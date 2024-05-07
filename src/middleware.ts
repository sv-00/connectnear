import { auth } from "@/auth"

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

export default auth((req) => {
    if (!req.auth) {
        const url = new URL('/api/auth/signin', req.url)
        return Response.redirect(url)
    }
    if (req.nextUrl.pathname.startsWith('/denied')) {
        const allowedEmails = ['v101developer@gmail.com', 'gokulkannant99@gmail.com', 'nikolateslat800@gmail.com', 'vismayadinesh2@gmail.com']
        if (allowedEmails.includes(req?.auth?.user?.email!!)) {
            const url = req.url.replace(req.nextUrl.pathname, "/")
            return Response.redirect(url)
        }
    }
})