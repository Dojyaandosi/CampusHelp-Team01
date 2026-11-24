# Quality Plan - CampusHelp

## Quality objectives

1. Every deliverable meets the acceptance criteria written in its GitHub issue.
2. All six proposed features are represented in requirements and in the prototype.
3. At least 6 test cases are executed; each has ID, steps, expected result, actual result and Pass/Fail.

## Quality activities

| Activity | When | Owner |
|---|---|---|
| Acceptance-criteria review of each Pull Request (self-review checklist) | Before merge | Quality Coordinator |
| Requirements-to-design traceability check | After T05 | Business Analyst |
| Prototype test execution (6+ cases) | T09 | Quality Coordinator |
| Final verification: evidence for every closed issue | T11 | Quality Coordinator |

## Definition of Done

An issue is **Done** only when:

- the deliverable file exists in `main` (merged Pull Request),
- each acceptance criterion is ticked or an exception is documented,
- the issue contains a link to the evidence (file or Pull Request),
- hours are recorded on the project board,
- the issue is closed - never closed only to raise the milestone percentage.

## Test approach

- Test level: functional testing of a clickable HTML prototype (`prototype/student.html`, `prototype/admin.html`).
- Method: scripted browser test run plus manual walkthrough of the screen flow.
- Simulated (not implemented): login, database, e-mail, server. Data is stored in browser `localStorage`.
- Defects are logged as GitHub issues with the `testing` label.
