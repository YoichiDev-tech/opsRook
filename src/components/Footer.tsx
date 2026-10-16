import Link from "next/link";
import { ArrowUpRight, Cpu } from "lucide-react";
import { site, navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="flex items-center gap-2 text-lg font-semibold text-white"><Cpu className="h-5 w-5 text-signal-300" />{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-400">{site.tagline}. One control plane for inference performance, capacity intelligence, and revenue operations.</p>
            
          </div>
          <div><p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Explore</p><ul className="mt-3 space-y-2">{navLinks.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-ink-300 transition hover:text-white">{link.label}</Link></li>)}</ul></div>
          <div><p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Studio collaboration</p><p className="mt-3 text-sm leading-relaxed text-ink-300">Collaboration with PrismWave Studio.</p><a href="https://prismwave-studio.vercel.app" target="_blank" rel="noopener noreferrer" className="interactive-button mt-4 inline-flex items-center gap-2 rounded-lg bg-signal-500 px-3.5 py-2 text-sm font-semibold text-white hover:bg-signal-400">PrismWave Studio <ArrowUpRight className="h-4 w-4" /></a></div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink-800 pt-7 sm:flex-row sm:items-center"><p className="text-xs text-ink-500">© {new Date().getFullYear()} OpsRook-VI</p><p className="text-xs text-ink-500">Collaboration with PrismWave Studio</p></div>
      </div>
    </footer>
  );
}
