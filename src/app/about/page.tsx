import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Cpu, LineChart, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Company",
  description: "The fictional OpsRook-VI company story and the PrismWave Studio case-study approach.",
};

const steps = [
  { icon: Compass, title: "Find the constraint", body: "Trace the path from qualified interest to technical validation and identify where momentum disappears." },
  { icon: Workflow, title: "Redesign the handoff", body: "Give every lead, pilot, and capacity issue a clear owner, status, and next action." },
  { icon: Cpu, title: "Make operations visible", body: "Bring workload readiness and utilization signals into the same decision-making workflow." },
  { icon: LineChart, title: "Measure the outcome", body: "Compare baseline assumptions with the target state and make the limits of the model explicit." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-700">Company & engagement</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">An AI infrastructure company, designed around the business reality.</h1>
          <p className="mt-5 text-base leading-relaxed text-ink-600">OpsRook-VI is a fictional startup concept inspired by the scale, technical depth, and systems thinking of the accelerated-computing ecosystem. It is not affiliated with NVIDIA or any other real company.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div><h2 className="text-2xl font-semibold text-ink-950">The PrismWave Studio scenario</h2><div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-600"><p>For this portfolio project, PrismWave Studio takes the role of a product and systems partner. The brief: a technically capable AI infrastructure startup is attracting interest, but too many opportunities stall between first contact and production workloads.</p><p>Rather than solving the problem with a new marketing page alone, the proposed engagement examines the entire conversion path: how leads are qualified, how pilots are prepared, and how the team sees available capacity and next steps.</p><p>The resulting concept combines a product-led website, a control-plane dashboard visual, an explicit before-and-after story, and a practical operating model for two revenue bottlenecks.</p></div><div className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900"><strong>Transparency note:</strong> This is a simulated case study built to demonstrate PrismWave Studio’s approach. No real client engagement or revenue lift is being claimed; all performance figures are illustrative model outputs.</div></div>
        <aside className="h-fit rounded-2xl bg-ink-950 p-6 text-white sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal-300">What this project demonstrates</p><ul className="mt-5 space-y-4">{["Product positioning for a technically complex offer", "A consistent multi-page SaaS experience", "Business bottleneck analysis and outcome framing", "Responsive dashboard-style visual design", "Production-minded Next.js and TypeScript implementation"].map(item => <li key={item} className="flex gap-3 text-sm text-ink-200"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-400" />{item}</li>)}</ul><Link href="/#results" className="interactive-button mt-7 inline-flex items-center gap-2 rounded-lg bg-signal-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-signal-400">See the modeled results <ArrowRight className="h-4 w-4" /></Link></aside>
      </section>
      <section className="border-t border-ink-200 bg-ink-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-semibold text-ink-950">How the engagement is structured</h2><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{steps.map(({ icon: Icon, title, body }, index) => <article key={title} className="rounded-xl border border-ink-200 bg-white p-5"><span className="text-xs font-semibold text-signal-700">0{index + 1}</span><Icon className="mt-4 h-5 w-5 text-signal-700" /><h3 className="mt-3 font-semibold text-ink-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p></article>)}</div></div>
      </section>
    </div>
  );
}
