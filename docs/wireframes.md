# Initial Wireframes - CampusHelp

Low-fidelity wireframes for the three core screens. Requirement IDs refer to `requirements.md`.

## Wireframe 1 - Student request form (FR-01 to FR-05)

```
+--------------------------------------------------------------+
| CampusHelp          [Submit request]  [Track request]        |
+--------------------------------------------------------------+
|  Submit a service request                                    |
|                                                              |
|  Student ID *      [____________________]                    |
|  Category *        [ Select category   v ]                   |
|                      IT Support | Classroom Maintenance |    |
|                      Library Assistance | Administrative     |
|  Priority *        ( ) Low  (o) Medium  ( ) High             |
|  Description *     [____________________________________]    |
|                    [____________________________________]    |
|  * required        error text under each empty field        |
|                                         [ Submit request ]   |
+--------------------------------------------------------------+
|  CONFIRMATION STATE (after submit):                          |
|  [OK] Request received. Your Request ID: CH-2026-0001        |
|       Status: Open       [Track this request]                |
+--------------------------------------------------------------+
```

## Wireframe 2 - Request tracking (FR-06)

```
+--------------------------------------------------------------+
| CampusHelp          [Submit request]  [Track request]        |
+--------------------------------------------------------------+
|  Track a request                                             |
|  Request ID  [ CH-2026-0001 ]   [ Search ]                   |
|                                                              |
|  CH-2026-0001                                                |
|  Category: IT Support     Priority: High                     |
|  Status: [Open] -> In Progress -> Completed                  |
|  Assigned to: Not assigned yet                               |
|  Not found message: "No request with this ID."               |
+--------------------------------------------------------------+
```

## Wireframe 3 - Administrator dashboard (FR-07 to FR-10)

```
+--------------------------------------------------------------+
| CampusHelp Admin                                             |
+--------------------------------------------------------------+
|  [ Open: 3 ]   [ Ongoing: 2 ]   [ Completed: 1 ]            |
|                                                              |
|  Filter: [All status v]                                      |
|  ID            Category      Priority  Assignee     Status   |
|  CH-2026-0001  IT Support    High      [Select v]   [Open v] |
|  CH-2026-0002  Maintenance   Medium    [Aisha  v]   [Ongoing]|
|  ...                                                         |
+--------------------------------------------------------------+
```

## User flow

Student: open form -> fill required fields -> submit -> see Request ID -> track by ID.
Administrator: open dashboard -> see counts -> assign staff -> update status -> student sees new status.

## Traceability

| Screen | Requirements |
|---|---|
| Wireframe 1 | FR-01, FR-02, FR-03, FR-04, FR-05 |
| Wireframe 2 | FR-06, NFR-03 |
| Wireframe 3 | FR-07, FR-08, FR-09, FR-10 |
