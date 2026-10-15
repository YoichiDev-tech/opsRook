import type { Metadata } from "next";
import Link from "next/link";
import { Activity, BrainCircuit, Boxes, Cpu, Gauge, Network, ShieldCheck, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform",
  description: "Explore the fictional OpsRook-VI AI infrastructure control plane, designed around workload visibility, inference operations, and commercial readiness.",
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-700">Platform concept</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">The control plane between AI demand and production compute.</h1>
          <p className="mt-5 text-base leading-relaxed text-ink-600">OpsRook-VI is imagined as an AI infrastructure startup serving teams that need to evaluate, deploy, and operate inference workloads reliably. This product surface is a portfolio concept, not a live compute service.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, body }) => <article key={title} className="interactive-card rounded-2xl border border-ink-200 bg-white p-6"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-50 text-signal-700"><Icon className="h-5 w-5" /></div><h2 className="mt-5 text-lg font-semibold text-ink-950">{title}</h2><p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p></article>)}
        </div>
        <div className="mt-10 rounded-2xl bg-ink-950 p-7 text-white sm:p-10">
          <div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal-500/15 text-signal-300"><Cpu className="h-5 w-5" /></div><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal-300">Design principle</p><h2 className="mt-2 text-2xl font-semibold">Make the next constraint visible.</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300">The platform concept pairs technical signals with operational ownership: a queue has an owner, a pilot has a next step, and capacity has a cost context. The interface demonstrates how the product story can be made understandable without pretending the backend is already live.</p><Link href="/#results" className="interactive-button mt-6 inline-flex items-center rounded-lg bg-signal-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-signal-400">See the modeled outcomes</Link></div></div>
        </div>
      </section>
    </div>
  );
}
