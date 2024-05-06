import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button"

export default async function Home() {
  const session = await auth()
  const image = session?.user?.image
  const email = session?.user?.email
  let access = false
  const allowedEmails = ['v101developer@gmail.com', 'gokulkannant99@gmail.com', 'nikolateslat800@gmail.com']
  if (allowedEmails.includes(email!!)) {
    access = true
  }
  if (!access) redirect('/denied')
  return (
    <main className="min-h-dvh flex flex-col space-y-10 justify-center items-center">
      <Avatar className="h-24 w-24">
        <AvatarImage src={image!!} />
        <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="space-x-8">
        <Button>Open</Button>
        <Button>Close</Button>
      </div>
    </main>
  );
}
