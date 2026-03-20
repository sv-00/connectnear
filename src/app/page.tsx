import { getSession, isAllowedEmail } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { redirect } from "next/navigation";
import CloseButton from "./CloseButton";
import OpenButton from "./OpenButton";
import LogoutButton from "./LogoutButton";
import { ConnectNearLogo } from "@/components/ConnectNearLogo";

export default async function Home() {
  const session = await getSession();

  if (!session) redirect("/login");
  if (!isAllowedEmail(session.user.email)) redirect("/denied");

  return (
    <main className="min-h-dvh relative flex flex-col items-center bg-gradient-to-b from-zinc-50 to-white">
      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between max-w-2xl mx-auto">
        <div className="flex items-center gap-2">
          <ConnectNearLogo size={32} />
          <span className="font-semibold text-zinc-900 text-sm">ConnectNear</span>
        </div>
        <LogoutButton />
      </header>

      <div className="flex flex-1 flex-col justify-center items-center space-y-10 px-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src={session.user.image || ""} />
          <AvatarFallback>{session.user.name?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
        <div className="text-center space-y-1">
          <p className="font-medium text-zinc-900">{session.user.name}</p>
          <p className="text-sm text-zinc-500">{session.user.email}</p>
        </div>
        <div className="space-x-4">
          <OpenButton />
          <CloseButton />
        </div>
      </div>
    </main>
  );
}
