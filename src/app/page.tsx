import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { redirect } from "next/navigation";
import CloseButton from "./CloseButton";
import OpenButton from "./OpenButton";
import { Settings } from "lucide-react";

export default async function Home() {
  const session = await auth()
  const image = session?.user?.image
  const email = session?.user?.email
  let access = false
  const allowedEmails = ['v101developer@gmail.com', 'gokulkannant99@gmail.com', 'nikolateslat800@gmail.com', 'vismayadinesh2@gmail.com']
  if (allowedEmails.includes(email!!)) {
    access = true
  }
  if (!access) redirect('/denied')
  return (
    <main className="min-h-dvh relative flex flex-col items-center">
      {/* <header className="container absolute w-full h-20 @sm:h-24 px-6 @sm:px-8 @md:px-10 flex items-center justify-end">
        <Settings />
      </header> */}
      <div className="flex flex-1 flex-col justify-center items-center space-y-10">
        <Avatar className="h-24 w-24">
          <AvatarImage src={image!!} />
          <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-x-8">
          <OpenButton />
          <CloseButton />
        </div>
      </div>
    </main>
  );
}
