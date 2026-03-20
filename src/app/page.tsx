import { ConnectNearLogo } from "@/components/ConnectNearLogo";

export default function LandingPage() {
  return (
    <div className="min-h-dvh bg-zinc-950 text-white antialiased">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-zinc-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ConnectNearLogo size={28} />
            <span className="font-semibold text-sm tracking-tight">ConnectNear</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="#solutions" className="hidden sm:block text-sm text-zinc-400 hover:text-white transition-colors">Solutions</a>
            <a href="#process" className="hidden sm:block text-sm text-zinc-400 hover:text-white transition-colors">Process</a>
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-white text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-br from-emerald-500/10 via-cyan-500/8 to-violet-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            From college project to production-grade IoT
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Intelligent spaces,{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              engineered precisely
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We design and deploy bespoke IoT infrastructure for businesses that
            demand reliability. Access control, environmental automation, resource
            management — tailored to your operation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition-all active:scale-[0.98]"
            >
              Get in touch
            </a>
            <a
              href="#solutions"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl border border-white/10 text-sm font-medium text-zinc-300 hover:bg-white/[0.04] transition-all"
            >
              What we do
            </a>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 sm:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12 sm:mb-20">
            <p className="text-sm font-medium text-emerald-400 tracking-wide uppercase">What we build</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              If it can be automated, we&apos;ll make it seamless
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Every deployment is custom-engineered. No off-the-shelf kits, no compromises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                ),
                title: "Access Control",
                desc: "NFC door locks, biometric entry, remote gate control — know who enters, when.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                ),
                title: "Environmental Automation",
                desc: "Lighting, HVAC, water systems — automated responses to real-time conditions.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                ),
                title: "Resource Monitoring",
                desc: "Water tank levels, energy consumption, equipment health — all in one dashboard.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                  </svg>
                ),
                title: "Remote Management",
                desc: "Control everything from your phone or browser. Anywhere, anytime.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                ),
                title: "Custom Sensors",
                desc: "Temperature, humidity, motion, proximity — we pick the right sensors for your use case.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                title: "Security & Reliability",
                desc: "Encrypted communication, failsafe mechanisms, and 24/7 uptime by design.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-4 hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center text-emerald-400">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 sm:py-32 px-6 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 sm:mb-20">
            <p className="text-sm font-medium text-cyan-400 tracking-wide uppercase">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              From consultation to deployment
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We visit your site, understand your pain points, and map out what needs to be automated.",
              },
              {
                step: "02",
                title: "Design & Engineering",
                desc: "Custom hardware selection, firmware development, and cloud infrastructure — all built for your specific requirements.",
              },
              {
                step: "03",
                title: "Deployment",
                desc: "On-site installation, testing, and handover. You get a web dashboard and mobile access from day one.",
              },
              {
                step: "04",
                title: "Support",
                desc: "Ongoing monitoring, OTA firmware updates, and direct support. We don't disappear after installation.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <span className="text-2xl font-bold text-white/10 shrink-0 w-12">{item.step}</span>
                <div className="space-y-2 pb-12 border-b border-white/[0.06] last:border-0 w-full">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-32 px-6 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-sm font-medium text-violet-400 tracking-wide uppercase">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to automate your space?
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            We work with businesses that value quality and reliability.
            Tell us what you need — we&apos;ll tell you exactly how we&apos;d build it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="mailto:hello@dopolabs.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition-all active:scale-[0.98]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              hello@dopolabs.com
            </a>
            <a
              href="https://wa.me/918590891505"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-sm font-medium text-zinc-300 hover:bg-white/[0.04] transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ConnectNearLogo size={20} />
            <span className="text-sm text-zinc-500">ConnectNear</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@dopolabs.com" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">hello@dopolabs.com</a>
            <span className="text-zinc-700">·</span>
            <a href="https://wa.me/918590891505" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">WhatsApp</a>
          </div>
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} ConnectNear. Built with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
