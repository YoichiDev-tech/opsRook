import Link from "next/link";
import {
  Activity, ArrowDownRight, ArrowRight, ArrowUpRight, Boxes, BrainCircuit,
  CheckCircle2, CircleDollarSign, Clock3, Cpu, Gauge, Layers3, Network,
  ShieldCheck, TimerReset, Workflow,
} from "lucide-react";

const outcomes = [
  { label: "Median lead response", before: "23 hours", after: "11 min", delta: "99% faster", icon: Clock3 },
  { label: "Pilot deployment", before: "21 days", after: "6 days", delta: "71% faster", icon: Boxes },
  { label: "Pilot-to-paid conversion", before: "32%", after: "47%", delta: "+15 pts", icon: CircleDollarSign },
];

const metrics = [
  { label: "Monthly recurring revenue", before: "$42k", after: "$65k", change: "+55%", detail: "More qualified pilots reaching paid production" },
  { label: "Qualified inbound leads", before: "18%", after: "29%", change: "+11 pts", detail: "Faster routing and clearer technical fit" },
  { label: "Accelerator utilization", before: "41%", after: "76%", change: "+35 pts", detail: "Capacity matched to workload demand" },
];

const workflow = [
  { icon: Activity, title: "Diagnose", body: "Map conversion, response time, pilot cycle time, and capacity utilization.", href: "/about" },
  { icon: Layers3, title: "Prioritise", body: "Focus on the two constraints with the strongest commercial impact.", href: "/solutions" },
  { icon: Gauge, title: "Instrument", body: "Make workload health, ownership, and next steps visible.", href: "/product" },
  { icon: ArrowDownRight, title: "Improve", body: "Use operational signals to keep pilots moving toward production.", href: "/product" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-ink-50">
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-20 -top-32 h-[34rem] w-[34rem] rounded-full border border-signal-400/20" />
          <div className="absolute -right-4 -top-16 h-[26rem] w-[26rem] rounded-full border border-signal-400/20" />
          <div className="absolute right-16 top-0 h-[18rem] w-[18rem] rounded-full border border-signal-400/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(51,153,255,0.18),transparent_45%)]" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-signal-300"><span className="h-2 w-2 rounded-full bg-signal-400" /> AI infrastructure · OpsRook-VI</p>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Turn AI capacity into production performance.</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">OpsRook-VI connects inference operations, workload readiness, and revenue workflows so promising AI demand can move from first conversation to production faster.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#results" className="interactive-button inline-flex items-center gap-2 rounded-lg bg-signal-500 px-5 py-3 text-sm font-semibold text-white hover:bg-signal-400">Explore business impact <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/product" className="interactive-button inline-flex items-center gap-2 rounded-lg border border-ink-700 px-5 py-3 text-sm font-semibold text-white hover:border-ink-500 hover:bg-ink-900">Explore the platform <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-ink-400">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-signal-300" /> Production-minded architecture</span>
              <span className="flex items-center gap-2"><Workflow className="h-4 w-4 text-signal-300" /> Revenue workflow redesign</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-signal-500/10 blur-2xl" />
            <div className="relative rounded-2xl border border-ink-700 bg-[#0b1220]/95 p-4 shadow-2xl sm:p-5">
              <div className="flex items-center justify-between border-b border-ink-800 pb-4">
                <div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-500/15 text-signal-300"><Cpu className="h-5 w-5" /></div><div><p className="text-sm font-semibold text-white">OpsRook Control Plane</p><p className="mt-0.5 text-xs text-ink-400">Inference operations</p></div></div>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Healthy</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link href="/product" className="interactive-card rounded-xl border border-ink-800 bg-ink-900/80 p-4"><p className="text-xs text-ink-400">Accelerator utilization</p><p className="mt-2 text-3xl font-semibold text-white">76<span className="text-lg text-ink-400">%</span></p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-700"><div className="h-full w-[76%] rounded-full bg-signal-400" /></div><p className="mt-2 text-[11px] text-emerald-300">↑ 35 percentage points</p></Link>
                <Link href="/solutions#lead-qualification" className="interactive-card rounded-xl border border-ink-800 bg-ink-900/80 p-4"><p className="text-xs text-ink-400">Median lead response</p><p className="mt-2 text-3xl font-semibold text-white">11<span className="ml-1 text-lg text-ink-400">min</span></p><p className="mt-3 flex items-center gap-1 text-[11px] text-emerald-300"><TimerReset className="h-3.5 w-3.5" /> Previously 23 hours</p></Link>
              </div>
              <Link href="/product" className="interactive-card mt-3 block rounded-xl border border-ink-800 bg-ink-900/70 p-4">
                <div className="flex items-center justify-between gap-3"><p className="text-xs font-medium text-ink-300">Workload distribution</p><span className="text-[10px] text-ink-500">LAST 24 HOURS</span></div>
                <div className="mt-5 flex h-24 items-end gap-2">{[36,52,45,67,55,72,63,83,70,94,76,88,72,100,81,91,76,86,68,94,78,88,73,97].map((height,i)=><div key={i} className="flex-1 rounded-t-sm bg-signal-400/80" style={{height:height+"%"}} />)}</div>
                <div className="mt-3 flex justify-between text-[10px] text-ink-500"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>Now</span></div>
              </Link>
              <div className="mt-3 grid grid-cols-3 gap-2">{[["Queue health","Stable"],["Active pilots","14"],["Capacity alerts","02"]].map(([label,value])=><Link href="/product" key={label} className="interactive-card rounded-lg border border-ink-800 bg-ink-900/60 px-3 py-2.5"><p className="text-[10px] text-ink-500">{label}</p><p className="mt-1 text-sm font-semibold text-ink-100">{value}</p></Link>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: BrainCircuit, title: "AI-native operations", body: "Accelerated inference and workload orchestration", href: "/product" },
            { icon: Network, title: "Connected buying journey", body: "Technical evaluation, pilots, and enterprise procurement", href: "/solutions" },
            { icon: CircleDollarSign, title: "Commercial performance", body: "Fewer stalled opportunities and a clearer path to paid use", href: "/#results" },
          ].map(({icon:Icon,title,body,href})=><Link href={href} key={title} className="interactive-card flex gap-3 rounded-xl border border-transparent p-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal-50 text-signal-700"><Icon className="h-5 w-5" /></div><div><h2 className="text-sm font-semibold text-ink-950">{title}</h2><p className="mt-1 text-sm leading-relaxed text-ink-600">{body}</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-signal-700">Explore <ArrowRight className="h-3.5 w-3.5" /></span></div></Link>)}
        </div>
      </section>

      <section id="results" className="scroll-mt-24 bg-ink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-700">Operational impact</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">Two bottlenecks. One stronger revenue engine.</h2><p className="mt-4 leading-relaxed text-ink-600">PrismWave Studio worked with OpsRook-VI to identify two costly handoffs, then redesigned the commercial and technical workflows that were slowing growth.</p></div><p className="max-w-xs text-xs leading-relaxed text-ink-500">A focused 90-day improvement plan centred on response speed, pilot throughput, and capacity economics.</p></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Link href="/solutions#lead-qualification" className="interactive-card block rounded-2xl border border-ink-200 bg-white p-6 sm:p-8"><div className="flex items-center justify-between gap-3"><span className="rounded-md bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700">Bottleneck 01</span><Clock3 className="h-5 w-5 text-ink-400" /></div><h3 className="mt-5 text-xl font-semibold text-ink-950">High-intent leads went cold</h3><p className="mt-3 text-sm leading-relaxed text-ink-600">Demo requests landed in a shared inbox, qualification lived in spreadsheets, and technical fit was discovered too late. Sales spent time chasing low-fit enquiries while enterprise buyers waited.</p><div className="mt-6 rounded-xl bg-ink-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-ink-500">What changed</p><ul className="mt-3 space-y-2.5 text-sm text-ink-700">{["Intent-based lead routing and qualification","A clear owner and next action for every opportunity","Fast response templates tied to technical fit"].map(item=><li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{item}</li>)}</ul></div><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-signal-700">Explore the fix <ArrowRight className="h-4 w-4" /></span></Link>
            <Link href="/solutions#pilot-throughput" className="interactive-card block rounded-2xl border border-ink-200 bg-white p-6 sm:p-8"><div className="flex items-center justify-between gap-3"><span className="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">Bottleneck 02</span><Boxes className="h-5 w-5 text-ink-400" /></div><h3 className="mt-5 text-xl font-semibold text-ink-950">Promising pilots stalled before production</h3><p className="mt-3 text-sm leading-relaxed text-ink-600">Capacity visibility, workload requirements, and deployment readiness were split across tools. Pilots took weeks to configure, leaving buyers waiting and expensive accelerator capacity underused.</p><div className="mt-6 rounded-xl bg-ink-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-ink-500">What changed</p><ul className="mt-3 space-y-2.5 text-sm text-ink-700">{["A shared capacity and workload-readiness view","Repeatable pilot-to-production checklists","Utilization and cost signals surfaced earlier"].map(item=><li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{item}</li>)}</ul></div><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-signal-700">Explore the fix <ArrowRight className="h-4 w-4" /></span></Link>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-ink-200 bg-white">
            <div className="flex flex-col gap-3 border-b border-ink-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7"><div><h3 className="font-semibold text-ink-950">Before & after</h3><p className="mt-1 text-xs text-ink-500">Performance after the two bottlenecks were addressed</p></div><div className="flex gap-4 text-xs"><span className="flex items-center gap-2 text-ink-500"><span className="h-2 w-2 rounded-full bg-ink-300" /> Before</span><span className="flex items-center gap-2 text-signal-700"><span className="h-2 w-2 rounded-full bg-signal-500" /> After</span></div></div>
            <div className="divide-y divide-ink-100">{outcomes.map(({label,before,after,delta,icon:Icon})=><Link href="/product" key={label} className="interactive-card grid gap-3 px-5 py-4 sm:grid-cols-[1.1fr_1fr_1fr_auto] sm:items-center sm:px-7"><p className="flex items-center gap-2 text-sm font-medium text-ink-800"><Icon className="h-4 w-4 text-signal-700" />{label}</p><div><p className="text-[10px] uppercase tracking-wider text-ink-400">Before</p><p className="mt-1 text-lg font-semibold text-ink-500">{before}</p></div><div><p className="text-[10px] uppercase tracking-wider text-ink-400">After</p><p className="mt-1 text-lg font-semibold text-signal-700">{after}</p></div><span className="inline-flex w-fit items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700"><ArrowUpRight className="h-3.5 w-3.5" />{delta}</span></Link>)}</div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">{metrics.map(metric=><Link href="/product" key={metric.label} className="interactive-card block rounded-2xl border border-ink-200 bg-white p-5 sm:p-6"><p className="text-sm text-ink-500">{metric.label}</p><div className="mt-4 flex items-end justify-between gap-3"><div><p className="text-xs text-ink-400">Before <span className="ml-1 font-medium text-ink-500">{metric.before}</span></p><p className="mt-1 text-xs text-ink-400">After <span className="ml-1 font-semibold text-ink-950">{metric.after}</span></p></div><span className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-sm font-semibold text-emerald-700">{metric.change}</span></div><p className="mt-3 text-xs leading-relaxed text-ink-500">{metric.detail}</p></Link>)}</div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-700">The PrismWave approach</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">Fix the system around the product.</h2><p className="mt-4 leading-relaxed text-ink-600">OpsRook-VI connects the customer journey to operational reality, then makes the next action visible.</p><Link href="/about" className="interactive-button mt-6 inline-flex items-center gap-2 rounded-lg border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-800 hover:bg-ink-50">How the collaboration works <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-3 sm:grid-cols-2">{workflow.map(({icon:Icon,title,body,href})=><Link href={href} key={title} className="interactive-card block rounded-xl border border-ink-200 bg-white p-5"><Icon className="h-5 w-5 text-signal-700" /><h3 className="mt-3 font-semibold text-ink-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-signal-700">Explore <ArrowRight className="h-3.5 w-3.5" /></span></Link>)}</div></div></div></section>

      <section className="bg-ink-950 py-14 text-white sm:py-16"><div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-300">Collaboration with PrismWave Studio</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Your next bottleneck might be hiding in the handoff.</h2><p className="mt-3 text-sm leading-relaxed text-ink-300">PrismWave Studio builds thoughtful web products, internal tools, and conversion-focused experiences for ambitious teams.</p></div><Link href="/contact" className="interactive-button inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-signal-500 px-5 py-3 text-sm font-semibold text-white hover:bg-signal-400">Discuss a project <ArrowRight className="h-4 w-4" /></Link></div></section>
    </div>
  );
}
