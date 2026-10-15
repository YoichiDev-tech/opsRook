"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-800 bg-ink-950/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white sm:text-xl" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-signal-400/30 bg-signal-400/10 text-xs font-bold text-signal-300">VI</span>
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors ${active ? "text-signal-300" : "text-ink-300 hover:text-white"}`} aria-current={active ? "page" : undefined}>{link.label}</Link>;
          })}
          <Link href="/contact" className="interactive-button rounded-lg bg-signal-500 px-3.5 py-2 text-sm font-semibold text-white hover:bg-signal-400">Work with PrismWave</Link>
        </nav>
        <button type="button" ref={menuButtonRef} className="interactive-button inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-ink-800 md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && <div id="mobile-navigation" className="border-t border-ink-800 bg-ink-950 px-4 py-4 md:hidden"><nav aria-label="Mobile navigation" className="flex flex-col gap-1">
        {navLinks.map((link) => { const active = pathname === link.href; return <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`rounded-lg px-3 py-2.5 text-base font-medium ${active ? "bg-ink-800 text-white" : "text-ink-300 hover:bg-ink-900"}`} aria-current={active ? "page" : undefined}>{link.label}</Link>; })}
        <Link href="/contact" onClick={() => setOpen(false)} className="interactive-button mt-2 rounded-lg bg-signal-500 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-signal-400">Work with PrismWave</Link>
      </nav></div>}
    </header>
  );
}
