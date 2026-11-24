// CampusHelp prototype - SIMULATED back end: data lives in the browser (localStorage).
(function () {
  const KEY = "campushelp.requests";
  const SEED = [
    { id: "CH-2026-0001", studentId: "4248729", category: "IT Support", priority: "High", description: "Cannot log in to the Wi-Fi network in the library.", status: "Open", assignee: "" },
    { id: "CH-2026-0002", studentId: "4248730", category: "Classroom Maintenance", priority: "Medium", description: "Projector in room B-204 does not turn on.", status: "Ongoing", assignee: "Aziz (Maintenance)" },
    { id: "CH-2026-0003", studentId: "4248731", category: "Administrative Services", priority: "Low", description: "Need an enrollment certificate.", status: "Completed", assignee: "Dilnoza (Admin office)" }
  ];
  const CATEGORIES = ["IT Support", "Classroom Maintenance", "Library Assistance", "Administrative Services"];
  const PRIORITIES = ["Low", "Medium", "High"];
  const STATUSES = ["Open", "Ongoing", "Completed"];
  const STAFF = ["", "Aziz (Maintenance)", "Dilnoza (Admin office)", "Rustam (IT support)", "Malika (Library)"];

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return SEED.map(r => Object.assign({}, r));
  }
  function save(list) { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} }
  function nextId(list) {
    const n = list.reduce((m, r) => Math.max(m, parseInt(r.id.split("-")[2], 10) || 0), 0) + 1;
    return "CH-2026-" + String(n).padStart(4, "0");
  }
  window.CampusHelp = {
    CATEGORIES, PRIORITIES, STATUSES, STAFF,
    all: load,
    reset() { save(SEED.map(r => Object.assign({}, r))); },
    add(req) { const list = load(); req.id = nextId(list); req.status = "Open"; req.assignee = ""; list.push(req); save(list); return req; },
    find(id) { return load().find(r => r.id.toLowerCase() === String(id).trim().toLowerCase()); },
    update(id, patch) { const list = load(); const r = list.find(x => x.id === id); if (r) Object.assign(r, patch); save(list); return r; },
    counts() { const c = { Open: 0, Ongoing: 0, Completed: 0 }; load().forEach(r => c[r.status]++); return c; }
  };
})();
