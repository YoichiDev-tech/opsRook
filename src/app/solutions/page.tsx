import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Cloud, Code2, Database, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Use cases",
  description: "AI infrastructure workflows for enterprise inference, AI product teams, and model evaluation.",
};

const solutions = [
  { icon: Building2, title: "Enterprise AI teams", body: "Give platform engineering, security, and business owners a shared view of readiness, access, cost, and rollout progress." },
  { icon: Code2, title: "AI product companies", body: "Reduce friction between an internal demo and a customer-facing feature by tracking workload fit, service health, and release gates." },
  { icon: FlaskConical, title: "Model evaluation teams", body: "Compare workload requirements and performance assumptions before committing to a production footprint." },
  { icon: Cloud, title: "Inference providers", body: "Make capacity, queue pressure, and workload routing easier to reason about across environments." },
  { icon: Database, title: "Data-heavy platforms", body: "Coordinate data access, inference dependencies, and operational ownership around a single deployment plan." },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-700">Use cases</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">Built for the messy middle between model demo and production.</h1>
          <p className="mt-5 leading-relaxed text-ink-600">AI infrastructure purchases are technical and commercial at once. OpsRook-VI focuses on the handoffs where teams lose time, capacity, and buying momentum.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map(({ icon: Icon, title, body }) => <Link href="/product" key={title} id={title === "Enterprise AI teams" ? "lead-qualification" : title === "AI product companies" ? "pilot-throughput" : undefined} className="interactive-card flex gap-4 rounded-2xl border border-ink-200 bg-ink-50 p-6 sm:p-7"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-signal-700 shadow-sm"><Icon className="h-5 w-5" /></div><div><h2 className="text-lg font-semibold text-ink-950">{title}</h2><p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-signal-700">Explore platform <ArrowRight className="h-3.5 w-3.5" /></span></div></Link>)
        </div>
        <div className="mt-12 rounded-2xl border border-signal-200 bg-signal-50 p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal-700">Commercial impact</p><h2 className="mt-3 text-2xl font-semibold text-ink-950">Technical performance only matters if the buying path works, too.</h2><p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-700">PrismWave Studio worked with OpsRook-VI to map the journey from first enquiry through technical validation and production deployment, then focus on the two handoffs with the greatest commercial impact.</p><Link href="/#results" className="interactive-button mt-5 inline-flex items-center rounded-lg bg-signal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-signal-700">Review the before & after</Link></div>
      </section>
    </div>
  );
}
