# OpsRook-VI — AI infrastructure startup case study

OpsRook-VI is a **fictional AI infrastructure startup concept** created by PrismWave Studio as public proof of work. The product positioning draws on the accelerated-computing and AI infrastructure ecosystem; it is not affiliated with NVIDIA or any other real company.

This project is not a live compute platform or a real client engagement. The before-and-after metrics on the website are clearly labeled illustrative scenario outputs, not measured company performance.

## The business scenario

The fictional startup has strong technical interest but loses commercial momentum at two handoffs:

1. **Slow lead qualification:** inbound enterprise enquiries wait in a shared inbox, technical fit is identified late, and high-intent prospects lose momentum.
2. **Slow pilot-to-production delivery:** workload requirements, capacity visibility, and readiness checks live in separate places, extending pilots and leaving accelerator capacity underused.

The proposed improvements combine clearer lead routing and ownership with a shared capacity/readiness view and repeatable pilot workflow.

## Illustrative before-and-after model

| Measure | Before | Modeled after |
| --- | ---: | ---: |
| Median lead response | 23 hours | 11 minutes |
| Pilot deployment | 21 days | 6 days |
| Pilot-to-paid conversion | 32% | 47% |
| Qualified inbound leads | 18% | 29% |
| Accelerator utilization | 41% | 76% |
| Illustrative monthly recurring revenue (MRR) | $42k | $65k |

These figures are scenario assumptions designed to explain the business logic and interface. They are not independently verified, audited, or guaranteed results. Actual results would depend on the company, its sales process, demand, pricing, and delivery constraints.

## What the website demonstrates

- Product positioning for a technically complex AI infrastructure offer
- Product dashboard concept and responsive visual system
- A clear narrative from business bottlenecks to proposed interventions and outcomes
- Multi-page product, use-case, commercial, company, and portfolio contact flows
- Explicit fictional-project disclosure and a direct CTA to PrismWave Studio
- Responsive layouts, keyboard focus states, and reduced-motion support

## Stack

- Next.js 15 App Router
- React 19 and TypeScript
- Tailwind CSS
- lucide-react
- Vercel-compatible deployment

The former demo-request integration is not used by the public UI. This fictional project does not accept enquiries on behalf of a nonexistent company.

## Local development

Requires Node.js compatible with the installed Next.js version.

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm run dev
```

## Deployment

1. Import the repository into Vercel or use the existing connected Vercel project.
2. Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS URL once the production domain is known.
3. No Supabase credentials are required for the current public experience.
4. Run the CI checks (dependency audit, lint, typecheck, and production build) before merging.
5. Review the live preview at the deployment URL generated for the pull request.

## Portfolio positioning

Suggested description for PrismWave Studio:

> A fictional AI infrastructure startup case study. PrismWave Studio redesigned the product story around two modeled revenue bottlenecks—slow lead qualification and a prolonged pilot-to-production cycle—and built a responsive, production-minded product experience to communicate the proposed solution. Metrics are illustrative, not client results.

**Built by PrismWave Studio** — product websites, internal tools, and conversion-focused web experiences.
