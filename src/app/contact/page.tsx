import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Work with PrismWave",
  description: "Contact PrismWave Studio about product websites, internal tools, and conversion-focused web experiences.",
};

const projectTypes = [
  { icon: Code2, title: "Product websites", body: "Clear positioning and polished user journeys for SaaS and software companies." },
  { icon: BriefcaseBusiness, title: "Internal tools", body: "Dashboards and workflow interfaces that help teams see what needs attention." },
  { icon: ShieldCheck, title: "Bottleneck-focused improvements", body: "Identify friction in a customer journey and build a practical, measurable response." },
];

export default function ContactPage() {
  return (
    <div className="bg-ink-50">
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-700">Work with PrismWave Studio</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">Build the system your next stage needs.</h1>
          <p className="mt-5 leading-relaxed text-ink-600">OpsRook-VI is a portfolio simulation, not a live AI compute service. If you want a similar product website, workflow tool, or focused business improvement for your own company, contact PrismWave Studio directly.</p>
          <a href="https://prismwave-studio.vercel.app" target="_blank" rel="noopener noreferrer" className="interactive-button mt-7 inline-flex items-center gap-2 rounded-lg bg-signal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-signal-700">Visit PrismWave Studio <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">{projectTypes.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-2xl border border-ink-200 bg-white p-6"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-50 text-signal-700"><Icon className="h-5 w-5" /></div><h2 className="mt-4 font-semibold text-ink-950">{title}</h2><p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p></article>)}</div>
        <div className="mt-8 rounded-2xl border border-ink-200 bg-white p-6 sm:p-8"><div className="flex items-start gap-4"><Mail className="mt-1 h-5 w-5 shrink-0 text-signal-700" /><div><h2 className="font-semibold text-ink-950">No simulated enquiry form</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600">Because OpsRook-VI is fictional, this page does not collect demo requests or imply that a product team is waiting to respond. The call to action takes visitors to PrismWave Studio instead.</p><Link href="/about" className="mt-4 inline-flex text-sm font-semibold text-signal-700 hover:text-signal-800">Read the case-study methodology <span className="ml-1">→</span></Link></div></div></div>
      </section>
    </div>
  );
}
