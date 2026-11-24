# Test Cases and Results - CampusHelp Prototype

**Object under test:** `prototype/student.html` and `prototype/admin.html` (clickable HTML prototype).
**Method:** scripted browser run (Playwright / Chromium) following the steps below, plus manual walkthrough of the screen flow.
**Simulated (not implemented):** login, server, database, e-mail. Data is stored in browser `localStorage`; the seed data contains 3 demo requests (Open 1, Ongoing 1, Completed 1).
**Environment:** Chromium, desktop viewport 1100 x 800.

| ID | Area / requirement | Steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|
| TC-01 | Required fields (FR-02) | 1. Open student form. 2. Leave all fields empty. 3. Click **Submit request**. | Form is not submitted; an error is shown under Student ID, Category, Priority and Description. | Errors shown: "Student ID is required." / "Please select a category." / "Please select a priority." / "Description is required." | **Pass** |
| TC-02 | Category selection (FR-03) | 1. Open the Category drop-down. | Four categories: IT Support, Classroom Maintenance, Library Assistance, Administrative Services. | All four categories listed (plus placeholder "Select category"). | **Pass** |
| TC-03 | Priority selection (FR-04) | 1. Look at the Priority options. | Low, Medium and High can be selected. | Radio buttons Low, Medium, High present and selectable. | **Pass** |
| TC-04 | Confirmation after submission (FR-05) | 1. Enter Student ID 4248729, category IT Support, priority High, description. 2. Click **Submit request**. | Confirmation screen with a unique Request ID `CH-2026-NNNN` and status Open. | Confirmation shown, ID `CH-2026-0004`, status Open. | **Pass** |
| TC-05 | Request status visibility (FR-06) | 1. Click **Track this request** after TC-04. | Tracking page shows the same ID, category, priority, status and assignee. | `CH-2026-0004`, status **Open**, "Not assigned yet". | **Pass** |
| TC-06 | Admin dashboard information (FR-09, FR-10) | 1. Open `admin.html`. | Counts of Open / Ongoing / Completed and a table of all requests. | Counts 2 / 1 / 1; table with 4 rows (ID, category, priority, assignee, status). | **Pass** |
| TC-07 | Unknown request ID (FR-06) | 1. On Track page enter `CH-9999-0000`. 2. Click Search. | Message "No request with this ID." | Message shown. | **Pass** |
| TC-08 | Assignment and status update (FR-07, FR-08) | 1. In admin, assign `CH-2026-0004` to Rustam (IT support) and set status Ongoing. 2. Look up the same ID on the student page. | Dashboard counts change to 1 / 2 / 1 and the student sees Ongoing and the assignee. | Counts 1 / 2 / 1; student page shows **Ongoing**, "Rustam (IT support)". | **Pass** |

## Summary

8 test cases executed, **8 Pass, 0 Fail** (100 %). Success criterion SC3 (>= 6 tests, >= 90 % pass) is met. Defects found: none.

Limitations: the test covers the simulated prototype only; there are no performance, security or multi-user tests because those features are out of scope.

Screenshots of the run are included in the final report.
