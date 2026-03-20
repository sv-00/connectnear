import { getSession } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutButton from "../LogoutButton";
import { ConnectNearLogo } from "@/components/ConnectNearLogo";

export default async function Denied() {
  const session = await getSession();

  return (
    <main className="flex flex-col justify-center items-center space-y-12 min-h-dvh px-6 bg-gradient-to-b from-zinc-50 to-white">
      <ConnectNearLogo size={48} />
      <div className="text-center space-y-4">
        <p className="text-sm font-semibold text-emerald-700">Rogue Variant</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
          Access Denied
        </h1>
        <p className="text-base text-zinc-600">
          You&apos;re not supposed to be here
        </p>
        <div className="pt-4">
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}
