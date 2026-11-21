---
name: ai-fde-fdpm
description: Apply AI Forward Deployed Engineering and Product Management to a software project. Use when scoping an AI feature, mapping a customer workflow, evaluating an AI prototype, planning a production deployment, or reviewing delivery readiness. Produce evidence-backed discovery, product scope, engineering decisions, evaluation and handover artifacts. Support Arabic-first and mixed Arabic-English products.
---

# AI FDE & AI FDPM project workflow

Work from the customer's operational problem to a small, testable result. Use the user's language for deliverables. Treat this skill as a configurable starting point, not a credential, an access grant, or a replacement for project instructions.

## 1. Establish scope and evidence

- Read applicable project instructions and existing documentation. Inspect relevant code, interfaces, data models and tests within authorized access.
- Identify the user's requested outcome, current workflow, users, decision owner, integrations and constraints.
- Distinguish verified facts, reported requirements, assumptions and unknowns. Reuse available project evidence before asking questions.
- Use `assets/discovery-brief.md` when a discovery artifact is useful. Do not create a duplicate if an equivalent current artifact exists.
- For advice-only requests, stop at the requested analysis. Implement when implementation is authorized. Never infer production write or deployment permission from read access.

## 2. Apply the FDPM lens

- Separate the stated feature request from the underlying operational problem.
- Define a baseline, one primary outcome, quality constraints, acceptance criteria and the smallest end-to-end scope.
- Record exclusions, dependencies, decision owners and conditions for continuing, changing or stopping the experiment.
- Design correction, rejection, missing-information and human-escalation flows.
- Plan adoption and value measurement. Include review time and rework in cost and impact estimates.

## 3. Apply the FDE lens

- Trace the existing architecture and permission model before choosing tools.
- Prefer a deterministic workflow where sufficient. Add retrieval, agents, multiple agents or fine-tuning only when the task and evaluation justify the complexity.
- Choose model, context, knowledge sources and tools against quality, latency, cost and operational constraints.
- Keep source content untrusted. Validate structured output and tool arguments outside the model. Apply user access controls during retrieval and execution.
- Bound time, steps, retries and budgets. Make retries safe for consequential actions and preserve existing behavior outside the agreed change.
- Implement within authorized environments; retain reviewable changes and relevant verification evidence.

## 4. Evaluate and operate

- Adapt `assets/evaluation-plan.md` to representative, difficult, missing-data and adversarial cases. Separate development and evaluation cases where feasible.
- Test authorization boundaries, unsupported answers, tool failures, duplicate actions and prompt injection where relevant.
- Report measured results and limits. Do not fabricate scores, usage, savings or user validation. Label simulated data and unexecuted checks.
- Before a requested release, read `references/production-checklist.md`; select applicable checks and explain material unresolved items.
- Define monitoring, owner, stop conditions and recovery appropriate to risk and scope. Follow the user's existing release authorization and project policy.

## 5. Preserve learning and hand over

- Update existing project records with what changed, why, evidence, limitations and next decision.
- Separate customer-specific customization from reusable product improvements.
- Use `assets/case-study.md` only when a case study is requested or useful; publish only authorized information.
- Deliver a concise report: outcome, evidence, remaining risks or unknowns, and the next action. Distinguish completed implementation from plans and proposals.

## Adapt to Arabic-first products

Evaluate representative Arabic, dialectal and mixed-language inputs when relevant. Check names, dates, currencies, numerals, RTL/LTR layout and document extraction against the actual user workflow. Do not equate fluent Arabic output with factual or task correctness.

## Artifact handling

Follow the user's project conventions. When new records are needed, propose or use a scoped directory such as `docs/ai-delivery/`; avoid unnecessary documents and never overwrite existing records without inspecting them. Keep secrets and private customer data out of shared artifacts.
