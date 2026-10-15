import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Plans",
  description: "Illustrative OpsRook-VI plan structure for an AI infrastructure startup portfolio scenario.",
};

const plans = [
  { name: "Explore", audience: "For evaluation teams", price: "Usage-based", description: "A low-friction way to validate a workload before making a larger commitment.", features: ["Shared inference endpoints", "Basic workload telemetry", "Evaluation usage limits", "Self-serve documentation"], highlighted: false },
  { name: "Scale", audience: "For production teams", price: "Reserved capacity", description: "More predictable operations for workloads moving beyond a proof of concept.", features: ["Priority workload routing", "Capacity and cost reporting", "Production readiness reviews", "Named technical owner"], highlighted: true },
  { name: "Enterprise", audience: "For regulated or large teams", price: "Custom agreement", description: "A tailored operating model for teams with security, availability, and procurement requirements.", features: ["Private deployment options", "Role and audit controls", "Custom service commitments", "Architecture and rollout planning"], highlighted: false },
];

export default function PricingPage() {
  return (
    <div className="bg-ink-50">
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-700">Illustrative commercial model</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">Start with the workload. Scale with evidence.</h1>
          <p className="mt-5 leading-relaxed text-ink-600">These are concept tiers for the fictional OpsRook-VI business model, not offers for a live infrastructure service. Real pricing would depend on compute type, usage, availability, and support commitments.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        {plans.map((plan) => <article key={plan.name} className={`interactive-card flex flex-col rounded-2xl border p-6 sm:p-7 ${plan.highlighted ? "border-signal-500 bg-ink-950 text-white shadow-xl" : "border-ink-200 bg-white"}`}>
          <p className={`text-xs font-semibold uppercase tracking-wider ${plan.highlighted ? "text-signal-300" : "text-signal-700"}`}>{plan.audience}</p>
          <h2 className="mt-3 text-2xl font-semibold">{plan.name}</h2>
          <p className={`mt-3 text-sm leading-relaxed ${plan.highlighted ? "text-ink-300" : "text-ink-600"}`}>{plan.description}</p>
          <p className="mt-7 text-2xl font-semibold">{plan.price}</p>
          <ul className="mt-6 flex-1 space-y-3">{plan.features.map((feature) => <li key={feature} className={`flex gap-2 text-sm ${plan.highlighted ? "text-ink-200" : "text-ink-700"}`}><Check className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />{feature}</li>)}</ul>
          <Link href="/about" className={`interactive-button mt-8 rounded-lg px-4 py-3 text-center text-sm font-semibold ${plan.highlighted ? "bg-signal-500 text-white hover:bg-signal-400" : "border border-ink-200 bg-ink-50 text-ink-900 hover:bg-ink-100"}`}>View the case study</Link>
        </article>)}
      </section>
      <p className="mx-auto max-w-3xl px-4 pb-14 text-center text-xs leading-relaxed text-ink-500">No payment or provisioning flow is connected. Plan names and commercial assumptions are included to demonstrate product positioning and information architecture.</p>
    </div>
  );
}
