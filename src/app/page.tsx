import { ConnectNearLogo } from "@/components/ConnectNearLogo";
import { LeadForm } from "@/components/LeadForm";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function LandingPage() {
  return (
    <div className="min-h-dvh bg-zinc-950 text-white antialiased overflow-x-hidden">
      <FloatingWhatsApp />
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-zinc-950/60 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ConnectNearLogo size={26} />
            <span className="font-semibold text-sm tracking-tight">ConnectNear</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="#solutions" className="hidden sm:block text-[13px] text-zinc-500 hover:text-white transition-colors">Solutions</a>
            <a href="#process" className="hidden sm:block text-[13px] text-zinc-500 hover:text-white transition-colors">Process</a>
            <a
              href="#contact"
              className="text-xs sm:text-[13px] font-medium px-4 py-2 rounded-full bg-white text-zinc-900 hover:bg-zinc-200 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-emerald-500/[0.07] blur-[100px] animate-glow-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-violet-500/[0.07] blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-cyan-500/[0.05] blur-[80px]" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="animate-slide-up flex flex-col items-center">
            <div className="mb-6 sm:mb-8 animate-float">
              <ConnectNearLogo size={56} className="sm:w-[72px] sm:h-[72px]" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 sm:mb-8 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] sm:text-xs text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              From college project to production-grade IoT
            </div>
          </div>

          <h1 className="animate-slide-up-delay-1 text-[2.25rem] leading-[1.1] sm:text-6xl lg:text-[5.5rem] font-bold tracking-tight sm:leading-[1.05]">
            Intelligent spaces,
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              engineered precisely
            </span>
          </h1>

          <p className="animate-slide-up-delay-2 mt-5 sm:mt-8 text-[15px] sm:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            We design and deploy bespoke IoT infrastructure for businesses that
            demand reliability. Access control, environmental automation, resource
            management — tailored to your operation.
          </p>

          <div className="animate-slide-up-delay-3 mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="group relative text-center px-8 py-4 rounded-2xl bg-white text-zinc-900 text-sm font-medium hover:shadow-[0_0_40px_rgba(52,211,153,0.15)] transition-all duration-300 active:scale-[0.98]"
            >
              Start a conversation
            </a>
            <a
              href="#solutions"
              className="text-center px-8 py-4 rounded-2xl border border-white/[0.08] text-sm font-medium text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
            >
              Explore solutions
            </a>
          </div>
        </div>
      </section>

      {/* Trusted by strip */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-zinc-600 mb-6 sm:mb-8">Built with</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-zinc-600">
            <span className="text-sm sm:text-base font-medium">ESP32</span>
            <span className="text-zinc-800">·</span>
            <span className="text-sm sm:text-base font-medium">Raspberry Pi</span>
            <span className="text-zinc-800">·</span>
            <span className="text-sm sm:text-base font-medium">MQTT</span>
            <span className="text-zinc-800">·</span>
            <span className="text-sm sm:text-base font-medium">NFC</span>
            <span className="text-zinc-800">·</span>
            <span className="text-sm sm:text-base font-medium">Next.js</span>
          </div>
        </div>
      </section>

      {/* Solutions — Bento grid */}
      <section id="solutions" className="py-16 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <p className="text-xs font-medium text-emerald-400/80 tracking-[0.15em] uppercase">What we build</p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              If it can be automated,<br className="hidden sm:block" /> we&apos;ll make it seamless
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {/* Large featured card */}
            <div className="sm:col-span-2 lg:col-span-2 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/[0.06] rounded-full blur-[60px] group-hover:bg-emerald-500/[0.1] transition-all duration-700" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Access Control</h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg">
                  NFC door locks, biometric entry, remote gate control. Full audit trail of who enters, when. Manage permissions from your phone.
                </p>
              </div>
            </div>

            {/* Regular cards */}
            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-4 hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              </div>
              <h3 className="font-semibold">Environmental Automation</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Lighting, HVAC, water systems — automated responses to real-time conditions.</p>
            </div>

            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-4 hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <h3 className="font-semibold">Resource Monitoring</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Water tank levels, energy consumption, equipment health — all in one dashboard.</p>
            </div>

            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-4 hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
              </div>
              <h3 className="font-semibold">Remote Management</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Control everything from your phone or browser. Anywhere, anytime.</p>
            </div>

            {/* Wide bottom card */}
            <div className="sm:col-span-2 lg:col-span-2 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-8 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/[0.06] rounded-full blur-[60px] group-hover:bg-violet-500/[0.1] transition-all duration-700" />
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Security & Reliability</h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    Encrypted communication, failsafe mechanisms, OTA firmware updates, and 24/7 uptime by design. We build systems that don&apos;t go down.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 sm:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <p className="text-xs font-medium text-cyan-400/80 tracking-[0.15em] uppercase">How it works</p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              From consultation to deployment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We visit your site, understand your pain points, and map out what needs to be automated.",
                color: "emerald",
              },
              {
                step: "02",
                title: "Design & Engineering",
                desc: "Custom hardware selection, firmware development, and cloud infrastructure — built for your requirements.",
                color: "cyan",
              },
              {
                step: "03",
                title: "Deployment",
                desc: "On-site installation, testing, and handover. Web dashboard and mobile access from day one.",
                color: "violet",
              },
              {
                step: "04",
                title: "Ongoing Support",
                desc: "Monitoring, OTA firmware updates, and direct support. We don't disappear after installation.",
                color: "amber",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 hover:bg-white/[0.04] transition-all duration-300"
              >
                <span className="text-xs font-mono text-zinc-600 mb-4 block">{item.step}</span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-16 sm:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-8 sm:p-14 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-b from-emerald-500/[0.08] to-transparent blur-[60px] pointer-events-none" />
            <div className="relative space-y-5 sm:space-y-6">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                Ready to automate your space?
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg mx-auto">
                Drop your number and we&apos;ll reach out to understand your needs.
                No spam, just a quick conversation.
              </p>

              <LeadForm />

              <div className="pt-4 flex items-center justify-center gap-2 text-xs text-zinc-600">
                <span>or reach us directly at</span>
                <a href="mailto:hello@dopolabs.com" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-2">hello@dopolabs.com</a>
                <span>·</span>
                <a href="https://wa.me/918590891505" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-2">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <ConnectNearLogo size={18} />
            <span className="text-xs text-zinc-600">ConnectNear</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@dopolabs.com" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">hello@dopolabs.com</a>
            <span className="text-zinc-800">·</span>
            <a href="https://wa.me/918590891505" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">WhatsApp</a>
          </div>
          <p className="text-[11px] text-zinc-700">
            &copy; {new Date().getFullYear()} ConnectNear
          </p>
        </div>
      </footer>
    </div>
  );
}
