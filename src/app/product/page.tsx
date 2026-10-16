import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight, BrainCircuit, Boxes, Cpu, Gauge, Network, ShieldCheck, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform",
  description: "Explore the OpsRook-VI AI infrastructure control plane for workload visibility, inference operations, and commercial readiness.",
};

const capabilities = [
  { icon: Network, title: "Inference routing", body: "A conceptual control plane for directing model requests to suitable endpoints based on availability, latency targets, and workload requirements." },
  { icon: Gauge, title: "Capacity intelligence", body: "Bring accelerator utilization, queue depth, service health, and cost-per-workload signals into one operational view." },
  { icon: Boxes, title: "Pilot orchestration", body: "Turn a promising proof of concept into a repeatable deployment path with readiness checks, owners, and explicit acceptance criteria." },
  { icon: Activity, title: "Workload observability", body: "Trace demand spikes and slow requests to the relevant model endpoint, queue, or capacity constraint." },
  { icon: ShieldCheck, title: "Enterprise readiness", body: "Make access boundaries, auditability, and deployment assumptions visible before a workload reaches production." },
  { icon: Workflow, title: "Revenue workflow", body: "Connect technical qualification and pilot milestones to the commercial next step, rather than leaving follow-up in disconnected tools." },
];

export default function ProductPage() {
  return (
    <div className="bg-ink-50">
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-700">Platform overview</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">The control plane between AI demand and production compute.</h1>
          <p className="mt-5 text-base leading-relaxed text-ink-600">OpsRook-VI gives AI teams the operational layer to evaluate, deploy, and operate inference workloads with clearer capacity, reliability, and cost signals.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, body }) => <Link href="/solutions" key={title} className="interactive-card block rounded-2xl border border-ink-200 bg-white p-6"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-50 text-signal-700"><Icon className="h-5 w-5" /></div><h2 className="mt-5 text-lg font-semibold text-ink-950">{title}</h2><p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p><span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-signal-700">Explore use cases <ArrowRight className="h-3.5 w-3.5" /></span></Link>)}
        </div>
        <div className="mt-10 rounded-2xl bg-ink-950 p-7 text-white sm:p-10">
          <div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal-500/15 text-signal-300"><Cpu className="h-5 w-5" /></div><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal-300">Design principle</p><h2 className="mt-2 text-2xl font-semibold">Make the next constraint visible.</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300">Technical signals become operational decisions: every queue has an owner, each pilot has a next step, and every capacity decision has a cost context.</p><Link href="/#results" className="interactive-button mt-6 inline-flex items-center rounded-lg bg-signal-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-signal-400">Explore the impact</Link></div></div>
        </div>
      </section>
    </div>
  );
}
