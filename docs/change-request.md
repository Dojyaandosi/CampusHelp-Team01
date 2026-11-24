# Change Request CR-01 - Automatic E-mail Acknowledgment

| Field | Value |
|---|---|
| Change ID | CR-01 |
| Raised | Day 6 - 24 Nov 2026 |
| Requested by | University Administration (simulated client) |
| Linked task | T10 |
| GitHub issue | change-request issue linked to T10 (label `change-request`) |

## 1. Requested change

> The university administration now wants students to receive an automatic email acknowledgment whenever a service request is submitted.

## 2. Is it inside the original scope?

**No.** The charter lists *"live SMS/email services"* as **out of scope**, and the constraints say *"no external service charges"*. An automatic e-mail needs a mail service (SMTP / provider), a student e-mail address field, and a server-side trigger - none of which exist in the baseline.

## 3. Effort and cost

| Item | Hours |
|---|---|
| Add requirement FR-11 and update wireframe (e-mail field + acknowledgment text) | 0.5 |
| Design e-mail template and trigger rules (when, content, Request ID) | 0.5 |
| Prototype: e-mail field, validation and simulated "e-mail sent" notice | 1.0 |
| Extra test cases and re-test | 0.5 |
| Update schedule, issues and documents | 0.5 |
| **Total (design + simulated prototype)** | **3.0** |

Provisional estimate of 3 h is **justified** for a *simulated* acknowledgment. Cost = 3 h x 50,000 = **150,000 UZS**. A real implementation (mail provider account, server code, delivery testing) is **not** estimated here; it would be well above 3 h and would also violate the "no external service charges" constraint.

## 4. Affected tasks and milestones

| Item | Impact |
|---|---|
| T05 Wireframes | Add e-mail field (rework) |
| T07 Student interface | New field, validation, simulated notice |
| T09 Test cases | Add 1-2 cases |
| T11 / T12 | Verification and report must include CR-01 |
| M3 (25 Nov) | At risk - T07/T09 are already in progress or done |
| M4 (30 Nov) | Absorbable only if effort stays <= 3 h |

## 5. Impact on schedule, budget and risks

- **Schedule:** +3 h on the critical path (T07 -> T09 -> T11 -> T12). M3 would slip by about 1 day.
- **Budget:** 45 h -> 48 h (2,250,000 -> 2,400,000 UZS), +6.7 %. Still inside the +10 % tolerance (SC5) but it would use most of it.
- **Risks:** increases R1 (schedule slippage) and R7 (scope creep); adds a new risk "real e-mail integration is expected after the demo".

## 6. Options considered

| Option | Result |
|---|---|
| Approve now | Breaks M3, uses most of the tolerance, conflicts with the out-of-scope list |
| Reject | Ignores a sponsor request completely |
| **Defer** | Keep the baseline, record FR-11 as a Phase 2 requirement and give the sponsor a clear plan |

## 7. Recommendation and decision

**Decision: DEFER (not approved for this project).**

Justification: the feature is outside the approved scope and constraints, the milestone M3 deadline is only one day away, and the benefit does not justify moving the baseline. Instead:

1. FR-11 "Automatic e-mail acknowledgment" is added to the **Phase 2 backlog** with the 3 h design-only estimate.
2. The existing confirmation screen already acknowledges the submission on screen with the Request ID, so students still get immediate feedback.
3. The sponsor can approve CR-01 for a follow-up project that includes a mail service and budget.

Decision date: 24 Nov 2026. Decision owner: Project Manager. Sponsor notification: via the change-request issue.

## 8. Baseline revision

Because the change is **deferred**, the baseline is **unchanged**: 45 h, 2,250,000 UZS, milestones M1-M4 as set. Issues T05, T07, T09 were not modified; T10 records this decision.
