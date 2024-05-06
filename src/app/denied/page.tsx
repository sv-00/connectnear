import { buttonVariants } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import { auth } from '@/auth'

export default async function Denied() {
    const session = await auth()
    const image = session?.user?.image
    return (
        <main className='flex flex-col justify-center items-center space-y-20 min-h-dvh px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900'>
            <Avatar className="h-24 w-24 flex items-center justify-center">
                    <AvatarImage src={image!!} />
                    <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className='text-center'>
                <p className="text-base font-semibold text-emerald-700 dark:text-emerald-500">
                    Rogue Variant
                </p>
                <h1 className="mt-4 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                    Access Denied
                </h1>
                <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    You&apos;re not supposed to be here
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href='/api/auth/signout' className={buttonVariants({ variant: 'default' })}>
                        Switch Account
                    </Link>
                </div>
            </div>
        </main>
    )
}
