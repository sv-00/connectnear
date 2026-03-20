import Link from "next/link";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ConnectNearLogo } from "@/components/ConnectNearLogo";

export default async function LoginPage() {
  const session = await getSession();
  if (session) redirect("/dashboard");

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-6 bg-zinc-950 relative overflow-hidden">
      {/* Ambient glow behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/15 to-violet-500/20 blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-sm space-y-10">
        {/* Logo + branding */}
        <div className="flex flex-col items-center space-y-5">
          <ConnectNearLogo size={72} />
          <div className="text-center space-y-1.5">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              ConnectNear
            </h1>
            <p className="text-sm text-zinc-400">
              IoT Web Interface
            </p>
          </div>
        </div>

        {/* Sign-in card */}
        <div className="rounded-2xl bg-zinc-900/80 backdrop-blur-sm ring-1 ring-white/[0.06] p-6 space-y-4">
          <Link
            href="/api/auth/sign-in"
            className="group inline-flex items-center justify-center gap-3 w-full rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-all active:scale-[0.98]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </Link>

          <p className="text-center text-xs text-zinc-500">
            Access restricted to authorized accounts only
          </p>
        </div>
      </div>
    </main>
  );
}
