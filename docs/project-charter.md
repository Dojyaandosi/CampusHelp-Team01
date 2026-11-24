# Project Charter - CampusHelp

| Component | Information |
|---|---|
| **Project title** | CampusHelp - University Student Service Request Portal |
| **Business problem** | Student requests for IT support, classroom maintenance, library assistance and administrative services arrive by e-mail and paper forms. Requests are hard to track, get lost, and nobody can see their status. |
| **Project objective** | Plan and demonstrate a centralized, web-based request management portal (documentation, mockups and a clickable prototype). |
| **Project sponsor** | University Administration (simulated) |
| **Project manager** | Doston Tolibov (Student A role; the assignment was changed to individual work, so one student covers roles A, B and C) |
| **Stakeholders** | Students, IT support, administrators, maintenance staff, library staff, course lecturer (assessor) |
| **Project duration** | 10 working days (Day 1 = 17 Nov 2026, Day 10 = 30 Nov 2026) |
| **Project budget** | Estimated from team hours: 45 h x 50,000 UZS = **2,250,000 UZS** (see `schedule-and-budget.md`) |
| **In scope** | Request submission, categories and priority levels, tracking by unique request ID, administrator assignment, status updates, dashboard (open / ongoing / completed) - as requirements, mockups and a clickable prototype |
| **Out of scope** | Real authentication, production server, live SMS / e-mail services, database, deployment |
| **Success criteria** | Four milestones completed; prototype verified with test cases (see measurable criteria below) |
| **Constraints** | One student (originally three), limited time (10 working days), no external service charges |

## Measurable success criteria

| # | Criterion | How it is measured |
|---|---|---|
| SC1 | All six proposed system features are represented in the requirements **and** in the interface designs/prototype | Traceability table in `requirements.md` has 6/6 features covered |
| SC2 | All four GitHub milestones (M1-M4) are completed on or close to their due dates | Milestone page shows 4/4 closed; delay recorded in `progress-checkpoints.md` |
| SC3 | At least 6 test cases are executed against the prototype and >= 90 % pass (or failures are documented) | `test-cases.md` |
| SC4 | All 12 mandatory issues are closed with evidence (file or Pull Request link) | `verification-report.md` |
| SC5 | Total actual effort stays within +10 % of the 45 h estimate (<= 49.5 h) | Project board "Actual Hours" field |

## Assumptions

- Student requests are submitted by logged-in students (login is simulated).
- Administrators assign requests manually; no automatic routing.
- Prototype data is stored in the browser only (simulated back end).

## Approval

Sponsor (simulated): University Administration - approved at project start.
