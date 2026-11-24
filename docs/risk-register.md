# Risk Register - CampusHelp

Scale: Probability and Impact = Low (1), Medium (2), High (3). Score = P x I (1-9).

| ID | Risk | Probability | Impact | Score | Owner | Mitigation | Status |
|---|---|---|---|---|---|---|---|
| R1 | Late start / compressed schedule: work falls behind the 10-day plan, so milestone due dates are missed | High (3) | High (3) | **9** | Project Manager | Track progress at checkpoints, prioritise High-priority tasks, cut non-core polish, re-baseline via change control | **Partly occurred** - Day 5 checkpoint shows T06 one task late (see `progress-checkpoints.md`) |
| R2 | A key person is unavailable (single student carries all roles) | Medium (2) | High (3) | 6 | Project Manager | Keep tasks small (3-4 h), commit work daily so nothing is lost | Open |
| R3 | Requirements change (e.g. e-mail acknowledgment request) | Medium (2) | High (3) | 6 | Business Analyst | Apply formal change control (T10); do not accept changes automatically | Occurred (Day 6) |
| R4 | Design work is delayed, blocking both prototypes | High (3) | Medium (2) | 6 | Business Analyst | Prioritise the three core screens; accept low-fidelity wireframes | Open |
| R5 | Prototype defects found late | Medium (2) | High (3) | 6 | Quality Coordinator | Execute test cases as soon as prototypes exist (T09) before M4 | Open |
| R6 | GitHub access / feature problems (Projects, permissions) | Medium (2) | Medium (2) | 4 | Project Manager | Verify repository and board access on Day 1; keep documents also as local copies | Open |
| R7 | Scope creep through "small additions" | Medium (2) | Medium (2) | 4 | Project Manager | Charter scope list; every addition is a change-request issue | Open |

## Most serious risk

**R1 - schedule slippage** has the highest score (9). Because the team is a single student with a fixed 45-hour effort and 10-day window, there is no spare capacity: every hour lost is lost for good, and the dependencies (T05 -> T07/T08 -> T09 -> T11 -> T12) mean one late task delays everything after it. It is also the risk that partly occurred in this project (a one-task delay at Days 5 and 8), so its response is tracked at each checkpoint.

## Residual actions

- R1: compare actual vs planned progress at each checkpoint (Day 2, 5, 8) and log delays.
- R3: change request evaluated in `change-request.md`.
