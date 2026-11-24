# Stakeholder Analysis and Requirements - CampusHelp

## 1. Stakeholder register

| Stakeholder | Interest / need | Influence | Engagement approach |
|---|---|---|---|
| Students | Submit requests easily, know the status, get a unique ID | Medium | Primary users - test with the prototype |
| IT support staff | Receive well-categorised requests with priority | Medium | Consulted on categories |
| Maintenance staff | Receive classroom maintenance requests with location | Medium | Consulted on categories |
| Library staff | Receive library assistance requests | Low | Informed |
| Administrators | Assign requests, update status, see workload dashboard | High | Key users - dashboard design |
| University Administration (sponsor) | Reduced lost requests, visibility, low cost | High | Approves charter and change requests |
| Lecturer (assessor) | Evidence of project management practice | High | Receives final report |

## 2. Functional requirements

| ID | Requirement | Feature | Priority |
|---|---|---|---|
| FR-01 | A student can submit a request containing Student ID, category, description and priority | Request submission | High |
| FR-02 | Student ID, category, description and priority are mandatory; the form shows validation messages | Request submission | High |
| FR-03 | Categories: IT Support, Classroom Maintenance, Library Assistance, Administrative Services | Categories / priority | High |
| FR-04 | Priority levels: Low, Medium, High | Categories / priority | High |
| FR-05 | After submission the system shows a confirmation with a unique Request ID (format `CH-YYYY-NNNN`) | Tracking by ID | High |
| FR-06 | A student can look up a request by Request ID and see its status | Tracking by ID | High |
| FR-07 | An administrator can assign a request to a staff member | Admin assignment | High |
| FR-08 | An administrator can change status: Open, In Progress (ongoing), Completed | Status updates | High |
| FR-09 | The dashboard shows counts of open, ongoing and completed requests | Dashboard | High |
| FR-10 | The dashboard lists requests with ID, category, priority, assignee and status | Dashboard | Medium |

## 3. Non-functional requirements

| ID | Requirement |
|---|---|
| NFR-01 | The submission form can be completed in under 2 minutes |
| NFR-02 | Interface works on a desktop browser and is readable on a phone screen |
| NFR-03 | Status wording is identical on the student page and the administrator dashboard |
| NFR-04 | Prototype uses no external services and stores data only in the browser |

## 4. Feature traceability (success criterion SC1)

| Proposed system feature | Requirements | Wireframe / prototype |
|---|---|---|
| 1. Student request submission | FR-01, FR-02 | Wireframe 1, `prototype/student.html` |
| 2. Request categories and priority levels | FR-03, FR-04 | Wireframe 1, `prototype/student.html` |
| 3. Request tracking using unique request ID | FR-05, FR-06 | Wireframe 2, `prototype/student.html` |
| 4. Administrator request assignment | FR-07 | Wireframe 3, `prototype/admin.html` |
| 5. Request status updates | FR-08 | Wireframe 3, `prototype/admin.html` |
| 6. Dashboard (open / ongoing / completed) | FR-09, FR-10 | Wireframe 3, `prototype/admin.html` |

All 6 of 6 features are covered.
