# Progress Monitoring - Checkpoints

> **Note:** the checkpoint values below are **simulated for the academic exercise**, as permitted by the lecturer (any values may be used to demonstrate the monitoring method).

## Formulas

- Actual progress % = completed (closed) issues / 12 x 100
- Planned progress % = issues planned to be finished by that date / 12 x 100
- Schedule variance (SV) = Actual % - Planned %   (negative = behind schedule)
- Effort variance = Actual hours - Planned hours for the work done

## Checkpoint 1 - Day 2 (Wed 18 Nov 2026)

| Measure | Value |
|---|---|
| Planned to be finished by now | T01, T02, T03 (3 issues, M1 due today) |
| Completed issues | 3 (T01, T02, T03) |
| Planned progress | 3 / 12 = 25.0 % |
| Actual progress | 3 / 12 = 25.0 % |
| Schedule variance | 0 % - **on schedule** |
| In progress | T04, T05, T06 about to start |
| Blocked | none |
| Actual hours | T01 4.5 + T02 4.0 + T03 3.5 = **12.0 h** (planned 12 h) |
| Upcoming milestone | M2 - Project Planning, due 20 Nov |
| Board | Done 3, In Progress 0, Todo 9 |

Summary: M1 deliverables (charter, requirements, WBS) complete; no delays.

## Checkpoint 2 - Day 5 (Mon 23 Nov 2026)

| Measure | Value |
|---|---|
| Planned to be finished by now | T01-T06 (6 issues; M2 was due 20 Nov) |
| Completed issues | 5 (T01-T05) |
| Planned progress | 6 / 12 = 50.0 % |
| Actual progress | 5 / 12 = 41.7 % |
| Schedule variance | -8.3 % - **delay of about 1 task** |
| In progress | T06 (risk register and quality plan), T07, T08 starting |
| Blocked | none (T06 delayed because wireframes T05 took 5 h instead of 4 h) |
| Actual hours | 4.5 + 4.0 + 3.5 + 4.0 + 5.0 = **21.0 h** done work + 2.0 h on T06 |
| Upcoming milestone | M3 - Project Execution, due 25 Nov |
| Action | Finish T06 on Day 6; start both prototypes in parallel to recover time |

Summary: five of six planned tasks are done; one task is late. Completing 5 when 6 were scheduled shows a delay even though 41.7 % of the whole project is done.

## Checkpoint 3 - Day 8 (Thu 26 Nov 2026)

| Measure | Value |
|---|---|
| Planned to be finished by now | T01-T10 (10 issues) |
| Completed issues | 9 (T01-T09); T10 change-request decision being merged |
| Planned progress | 10 / 12 = 83.3 % |
| Actual progress | 9 / 12 = 75.0 % |
| Schedule variance | -8.3 % - still **1 task behind**, no further slippage |
| In progress | T10 (change request - decision: Defer), T11 starting |
| Blocked | none |
| Actual hours | 4.5 + 4.0 + 3.5 + 4.0 + 5.0 + 4.5 + 4.5 + 4.0 + 4.0 = **38.0 h** done work + 2.0 h on T10 |
| Upcoming milestone | M4 - Monitoring and Closure, due 30 Nov |
| Action | Close T10 and T11 by Day 9; consolidate report on Day 10 |

Summary: execution milestone M3 completed late by about 1 day; closure milestone M4 still achievable.

## Trend

| Checkpoint | Planned % | Actual % | SV |
|---|---|---|---|
| Day 2 | 25.0 | 25.0 | 0.0 |
| Day 5 | 50.0 | 41.7 | -8.3 |
| Day 8 | 83.3 | 75.0 | -8.3 |
