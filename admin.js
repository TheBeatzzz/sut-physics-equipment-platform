const STORAGE_KEY = "sut-physics-equipment-registry-v3";
const DESCRIPTION_LIMIT = 800;

const sampleRecord = (id, name, category, facilityId, researchGroup, reviewStatus = "Verified", publicReady = true) => ({
  id,
  name,
  assetCode: `SAMPLE-${id.slice(-3)}`,
  manufacturer: "To be verified",
  model: "To be verified",
  category,
  description: `Example registry record for ${name.toLowerCase()}. Scope and capabilities must be confirmed by the responsible faculty member.`,
  facilityId,
  room: "Location to be verified",
  custodian: "Faculty owner to verify",
  email: "",
  researchGroup,
  acquisitionYear: "",
  status: "Operational",
  access: "Shared by arrangement",
  lastMaintenance: "",
  nextMaintenance: "",
  safety: "Training and safety requirements to be verified.",
  publicReady,
  reviewStatus,
  submitterName: reviewStatus === "Verified" ? "Example dataset" : "Example faculty submission",
  submitterEmail: "",
  submitterNotes: "Replace example metadata with verified institutional information.",
  featurePhoto: null,
  gallery: [],
  createdAt: "2026-06-20",
  updatedAt: "2026-06-25",
  sample: true
});

const sampleFacultyProfile = (id, name, title, researchInterests, color, role = "") => ({
  id,
  name,
  title,
  email: "",
  office: "Office to be verified",
  phone: "",
  bio: role
    ? `Dummy faculty profile for ${role}. Replace this with verified biography and research information before publication.`
    : "Dummy faculty profile. Replace this with verified biography and research information before publication.",
  researchInterests,
  highlights: ["Research highlight to update"],
  activities: role ? [role, "Recent activity to update"] : ["Recent activity to update"],
  recognitions: ["Recognition or appointment to update"],
  profileLinks: {
    academic: "",
    scopus: "",
    researchGate: "",
    googleScholar: "",
    orcid: ""
  },
  color,
  publicReady: true,
  ownerEmail: "",
  createdAt: "2026-06-20",
  updatedAt: "2026-06-25",
  sample: true
});

const sampleDatabase = {
  meta: { version: 5, institution: "Suranaree University of Technology", program: "Physics Program", prototype: true },
  faculty: [
    sampleFacultyProfile("FACULTY-001", "Yupeng Yan", "Professor", ["Research interests to update", "Physics program faculty"], "#8fd8c8"),
    sampleFacultyProfile("FACULTY-002", "Santi Maensiri", "Professor", ["Research interests to update", "Materials physics"], "#9bc7ee", "Dean"),
    sampleFacultyProfile("FACULTY-003", "Sirichoke Jungthawan", "Associate Professor", ["Research interests to update", "Physics program faculty"], "#f4c26d", "Head"),
    sampleFacultyProfile("FACULTY-004", "Ayut Limphirat", "Associate Professor", ["Research interests to update", "Physics program faculty"], "#e8a89a", "Vice Dean"),
    sampleFacultyProfile("FACULTY-005", "Prapan Maenyum", "Associate Professor", ["Research interests to update", "Physics program faculty"], "#b8d276"),
    sampleFacultyProfile("FACULTY-006", "Poemwai Chainakul", "Assistant Professor", ["Research interests to update", "Physics program faculty"], "#c1b2df"),
    sampleFacultyProfile("FACULTY-007", "Puangratana Pairo", "Associate Professor", ["Research interests to update", "Physics program faculty"], "#7fc5b2"),
    sampleFacultyProfile("FACULTY-008", "Wittawat Saenrang", "Associate Professor", ["Research interests to update", "Physics program faculty"], "#74dfce"),
    sampleFacultyProfile("FACULTY-009", "Worawat Meevassana", "Associate Professor", ["Research interests to update", "Physics program faculty"], "#8fc3ff", "Vice Dean"),
    sampleFacultyProfile("FACULTY-010", "Prayoon Songsiriritthikul", "Associate Professor", ["Research interests to update", "Physics program faculty"], "#ff8b5b"),
    sampleFacultyProfile("FACULTY-011", "Panomsak Meemon", "Associate Professor", ["Research interests to update", "Biomedical optics"], "#d7ff3f"),
    sampleFacultyProfile("FACULTY-012", "Chinorat Kobdaj", "Assistant Professor", ["Research interests to update", "Physics program faculty"], "#b59cff"),
    sampleFacultyProfile("FACULTY-013", "Khanchai Kosolthongkee", "Assistant Professor", ["Research interests to update", "Physics program faculty"], "#ffc95c", "Vice Dean"),
    sampleFacultyProfile("FACULTY-014", "Christoph Herold", "Assistant Professor", ["Research interests to update", "Physics program faculty"], "#8fd8c8"),
    sampleFacultyProfile("FACULTY-015", "Tirawut Worrakitpoonpol", "Assistant Professor", ["Research interests to update", "Physics program faculty"], "#9bc7ee"),
    sampleFacultyProfile("FACULTY-016", "Michael F. Smith", "Assistant Professor", ["Research interests to update", "Physics program faculty"], "#f4c26d"),
    sampleFacultyProfile("FACULTY-017", "Ittipon Fongkaew", "Assistant Professor", ["Research interests to update", "Physics program faculty"], "#e8a89a"),
    sampleFacultyProfile("FACULTY-018", "Warintorn Srithawong", "Dr.", ["Research interests to update", "Physics program faculty"], "#b8d276"),
    sampleFacultyProfile("FACULTY-019", "Narongrit Ritjoho", "Dr.", ["Research interests to update", "Physics program faculty"], "#c1b2df"),
    sampleFacultyProfile("FACULTY-020", "Wiwat Nuansing", "Dr.", ["Research interests to update", "Physics program faculty"], "#7fc5b2"),
    sampleFacultyProfile("FACULTY-021", "Monchai Jitvisate", "Dr.", ["Research interests to update", "Physics program faculty"], "#74dfce"),
    sampleFacultyProfile("FACULTY-022", "Artitsupa Boontan", "Dr.", ["Research interests to update", "Physics program faculty"], "#8fc3ff"),
    sampleFacultyProfile("FACULTY-023", "Sorawis Sangtawesin", "Dr.", ["Research interests to update", "Physics program faculty"], "#ff8b5b"),
    sampleFacultyProfile("FACULTY-024", "Wanvisa Talataisong", "Dr.", ["Research interests to update", "Physics program faculty"], "#d7ff3f")
  ],
  facilities: [
    { id: "FAC-01", name: "Advanced Microscopy & Biomedical Photonics Facility", building: "To be verified", room: "To be verified", lead: "Faculty lead to verify", description: "Example facility cluster for confocal imaging, fluorescence lifetime, optical coherence tomography, and biomedical optical design.", color: "#8fd8c8" },
    { id: "FAC-02", name: "Infrared & Optical Spectroscopy Facility", building: "To be verified", room: "To be verified", lead: "Faculty lead to verify", description: "Example facility cluster for infrared spectroscopy, surface plasmon analysis, and optical reflectance and transmittance measurements.", color: "#9bc7ee" },
    { id: "FAC-03", name: "Ultrafast Laser & Optical Data Systems Facility", building: "To be verified", room: "To be verified", lead: "Faculty lead to verify", description: "Example facility cluster for short-pulse lasers, swept laser systems, and high-speed optical data acquisition.", color: "#f4c26d" },
    { id: "FAC-04", name: "Advanced Materials Fabrication Facility", building: "To be verified", room: "To be verified", lead: "Faculty lead to verify", description: "Example facility cluster for electrospinning, advanced 3D printing, and materials testing workflows.", color: "#e8a89a" },
    { id: "FAC-05", name: "Optical Fiber & Integrated Photonics Facility", building: "To be verified", room: "To be verified", lead: "Faculty lead to verify", description: "Example facility cluster for optical fiber sensors and photonics-on-chip system design.", color: "#b8d276" },
    { id: "FAC-06", name: "Quantum Computing Laboratory", building: "To be verified", room: "To be verified", lead: "Faculty lead to verify", description: "Example facility for quantum computing research, design, simulation, and experimental activities.", color: "#c1b2df" },
    { id: "FAC-07", name: "AI, Machine Vision & Medical Intelligence Laboratory", building: "To be verified", room: "To be verified", lead: "Faculty lead to verify", description: "Example facility cluster for deep learning, machine vision, and AI-assisted medical diagnosis system design and implementation.", color: "#7fc5b2" }
  ],
  equipment: [
    sampleRecord("EQ-001", "Photon Counting Scanning Confocal Microscopy", "Imaging", "FAC-01", "Biomedical photonics"),
    sampleRecord("EQ-002", "Fluorescent Life-Time Measurement", "Optics & photonics", "FAC-01", "Biomedical photonics"),
    sampleRecord("EQ-003", "Optical Coherence Tomography Design and Applications", "Imaging", "FAC-01", "Biomedical photonics", "Submitted"),
    sampleRecord("EQ-004", "Fourier Transform Infrared Spectroscopy Lab", "Spectroscopy", "FAC-02", "Optical spectroscopy"),
    sampleRecord("EQ-005", "Mid IR Spectroscopy Lab", "Spectroscopy", "FAC-02", "Infrared photonics"),
    sampleRecord("EQ-006", "Short Pulse Laser Laboratory and Applications", "Optics & photonics", "FAC-03", "Ultrafast photonics", "Submitted"),
    sampleRecord("EQ-007", "Electrospinning Material Fabrication and Testing", "Materials preparation", "FAC-04", "Functional materials"),
    sampleRecord("EQ-008", "Advanced 3D Printing Lab", "Materials preparation", "FAC-04", "Advanced fabrication", "Draft", false),
    sampleRecord("EQ-009", "Surface Plasmon Analysis", "Spectroscopy", "FAC-02", "Optical sensing"),
    sampleRecord("EQ-010", "Quantum Computing Lab", "Computing", "FAC-06", "Quantum technologies", "Submitted"),
    sampleRecord("EQ-011", "Optical Fiber Sensor Fabrication and Testing", "Optics & photonics", "FAC-05", "Fiber optics"),
    sampleRecord("EQ-012", "Design of Photonics on Chip Systems", "Optics & photonics", "FAC-05", "Integrated photonics", "Draft", false),
    sampleRecord("EQ-013", "Optical Vein Finder Design", "Optics & photonics", "FAC-01", "Biomedical photonics", "Submitted"),
    sampleRecord("EQ-014", "Ultra High Speed Optical Data Acquisition Design and Testing", "Optics & photonics", "FAC-03", "Optical instrumentation"),
    sampleRecord("EQ-015", "Optical Reflectance and Transmittance Analysis", "Spectroscopy", "FAC-02", "Optical characterization"),
    sampleRecord("EQ-016", "High Speed Frequency Swept Laser and Applications", "Optics & photonics", "FAC-03", "Tunable laser systems", "Submitted"),
    sampleRecord("EQ-017", "Deep Learning Lab", "Computing", "FAC-07", "Artificial intelligence"),
    sampleRecord("EQ-018", "Machine Vision Lab", "Imaging", "FAC-07", "Computer vision", "Submitted"),
    sampleRecord("EQ-019", "AI-Assisted Medical Diagnosis System Design and Implementation Lab", "Computing", "FAC-07", "Medical artificial intelligence", "Submitted")
  ]
};

const facilityPalette = ["#8fd8c8", "#9bc7ee", "#f4c26d", "#c1b2df", "#e8a89a", "#b8d276", "#7fc5b2", "#e8a89a"];

const clone = value => JSON.parse(JSON.stringify(value));
const normalizeList = value => Array.isArray(value) ? value.filter(Boolean) : String(value || "").split(/\r?\n|,/).map(item => item.trim()).filter(Boolean);
const facultyNameCorrections = {
  "Worawat Meewassana": "Worawat Meevassana",
  "Prayoon Songsirittikul": "Prayoon Songsiriritthikul",
  "Khanchar Kosalathongkee": "Khanchai Kosolthongkee",
  "Michale F. Smith": "Michael F. Smith",
  "Artitsupa Bootan": "Artitsupa Boontan"
};
const normalizeFacultyNames = profiles => profiles.map(profile => ({
  ...profile,
  name: facultyNameCorrections[profile.name] || profile.name
}));
const isGenericSampleFaculty = profiles =>
  Array.isArray(profiles) &&
  profiles.length > 0 &&
  profiles.every(profile => profile.sample && String(profile.name || "").toLowerCase().includes("to verify"));
const normalizeDatabase = value => ({
  ...clone(sampleDatabase),
  ...value,
  meta: { ...clone(sampleDatabase.meta), ...(value?.meta || {}) },
  faculty: isGenericSampleFaculty(value?.faculty) ? clone(sampleDatabase.faculty) : Array.isArray(value?.faculty) ? normalizeFacultyNames(value.faculty) : [],
  facilities: Array.isArray(value?.facilities) ? value.facilities : [],
  equipment: Array.isArray(value?.equipment) ? value.equipment : []
});
const loadDatabase = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? normalizeDatabase(JSON.parse(saved)) : clone(sampleDatabase);
  } catch { return clone(sampleDatabase); }
};

let db = loadDatabase();
const backend = window.SUTSupabase;
const backendConfigured = Boolean(backend?.isConfigured?.());
let backendReady = false;
let currentSession = null;
let lastRegistryError = null;
let activeView = "overview";
let recordMode = "manager";
let toastTimer;
let pendingFeaturePhoto = null;
let pendingGallery = [];
let lastFacilityError = null;
let editingFacilityId = null;
let lastFacultyError = null;
let editingFacultyId = null;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const today = () => new Date().toISOString().slice(0, 10);
const clean = value => String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
const slug = value => String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const facilityFor = id => db.facilities.find(item => item.id === id);
const formatDate = value => value ? new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${value}T00:00:00`)) : "Not recorded";
const photoSrc = photo => backend?.photoSrc?.(photo) || photo?.url || photo?.data || "";
const save = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    return true;
  } catch {
    showToast("Browser storage is full. Remove some photos or export the registry.");
    return false;
  }
};

function setBusy(button, busy, label = "Saving…") {
  if (!button) return;
  if (busy) {
    button.dataset.originalText = button.textContent;
    button.textContent = label;
    button.disabled = true;
  } else {
    button.textContent = button.dataset.originalText || button.textContent;
    button.disabled = false;
  }
}

function setRegistryMode(message = "") {
  const state = $("#storage-state");
  if (!state) return;
  const title = state.querySelector("strong");
  const detail = state.querySelector("small");
  if (backendConfigured) {
    title.textContent = backendReady ? "Supabase registry" : "Supabase login";
    detail.textContent = message || (backendReady ? "Shared database active" : "Sign in required");
    $("#registry-mode-title").textContent = backendReady ? "Live shared registry" : "Faculty login required";
    $("#registry-mode-note").textContent = backendReady ? "Records are loaded from Supabase and shared across approved faculty accounts." : "Sign in with a pre-approved SUT faculty account to manage equipment and faculty profile data.";
    $("#media-storage-note").innerHTML = "<strong>Supabase storage:</strong> photos upload to the shared equipment-photos bucket. The public page can display photos for approved equipment.";
    $("#sign-out").hidden = !backendReady;
    $("#change-password").hidden = !backendReady;
    $("#reset-data").disabled = backendReady;
  } else {
    title.textContent = "Prototype storage";
    detail.textContent = "Saved in this browser only";
    $("#registry-mode-title").textContent = "Prototype dataset";
    $("#registry-mode-note").textContent = "Sample records are marked and must be replaced with verified program data.";
    $("#media-storage-note").innerHTML = "<strong>Prototype note:</strong> photos are saved only in this browser. Configure Supabase to upload them to shared equipment storage.";
    $("#sign-out").hidden = true;
    $("#change-password").hidden = true;
    $("#reset-data").disabled = false;
  }
}

function setUserChip() {
  const email = currentSession?.user?.email || "";
  const initials = email ? email.slice(0, 2).toUpperCase() : "PM";
  $("#user-chip").querySelector("span").textContent = initials;
  $("#user-chip").querySelector("strong").textContent = email || "Program manager";
  $("#user-chip").querySelector("small").textContent = backendReady ? "Supabase editor" : "Registry editor";
}

function hideAccessIssuePanel() {
  const panel = $("#access-issue-panel");
  if (panel) panel.hidden = true;
}

function showAuthGate(message = "", options = {}) {
  const clearSession = options.clearSession !== false;
  $("#auth-gate").hidden = false;
  document.body.classList.add("auth-required");
  $("#auth-message").textContent = message || "Sign in with a pre-approved SUT faculty account to manage the shared registry.";
  hideAccessIssuePanel();
  db = { ...clone(sampleDatabase), faculty: [], equipment: [], facilities: [] };
  backendReady = false;
  if (clearSession) currentSession = null;
  setRegistryMode();
  setUserChip();
  renderAll();
}

function hideAuthGate() {
  $("#auth-gate").hidden = true;
  document.body.classList.remove("auth-required");
}

function showAccessIssue(message, email, emailConfirmed = false) {
  showAuthGate(emailConfirmed
    ? "Your email link was confirmed, but this account is not approved for registry administration yet."
    : message || "This account is signed in but is not approved for registry administration yet.",
    { clearSession: false });
  const panel = $("#access-issue-panel");
  if (panel) {
    $("#access-issue-email").textContent = email || "this account";
    panel.hidden = false;
  }
  $("#auth-message").textContent = `${message || "Supabase blocked access to the internal registry."} Ask an existing admin to add ${email || "this email"} to public.registry_admins and set active = true.`;
}

async function loadSharedRegistry(options = {}) {
  if (!backendConfigured) return false;
  try {
    db = normalizeDatabase(await backend.loadRegistry({ publicOnly: false }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    lastRegistryError = null;
    backendReady = true;
    setRegistryMode();
    setUserChip();
    hideAuthGate();
    renderAll();
    return true;
  } catch (error) {
    lastRegistryError = error;
    if (options.showGate !== false) {
      showAuthGate(`${error.message || "Could not load the shared registry."} If you are signed in, confirm that your @sut.ac.th or @g.sut.ac.th email is active in the registry_admins allowlist.`);
    }
    return false;
  }
}

async function persistEquipment(record, previousEquipment) {
  if (!backendReady) {
    if (save()) return true;
    db.equipment = previousEquipment;
    renderAll();
    return false;
  }
  try {
    const savedRecord = await backend.saveEquipment(record);
    const index = db.equipment.findIndex(item => item.id === savedRecord.id);
    if (index >= 0) db.equipment[index] = savedRecord; else db.equipment.unshift(savedRecord);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    return true;
  } catch (error) {
    db.equipment = previousEquipment;
    renderAll();
    showToast(error.message || "Could not save to Supabase");
    return false;
  }
}

async function persistFacility(facility) {
  lastFacilityError = null;
  if (!backendReady) {
    const index = db.facilities.findIndex(item => item.id === facility.id);
    if (index >= 0) db.facilities[index] = facility; else db.facilities.push(facility);
    save();
    return true;
  }
  try {
    const savedFacility = await backend.saveFacility(facility);
    const index = db.facilities.findIndex(item => item.id === savedFacility.id);
    if (index >= 0) db.facilities[index] = savedFacility; else db.facilities.push(savedFacility);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    return true;
  } catch (error) {
    lastFacilityError = error;
    showToast(error.message || "Could not save facility to Supabase");
    return false;
  }
}

async function persistFaculty(profile) {
  lastFacultyError = null;
  if (!backendReady) {
    const index = db.faculty.findIndex(item => item.id === profile.id);
    if (index >= 0) db.faculty[index] = profile; else db.faculty.push(profile);
    save();
    return true;
  }
  try {
    const savedProfile = await backend.saveFaculty(profile);
    const index = db.faculty.findIndex(item => item.id === savedProfile.id);
    if (index >= 0) db.faculty[index] = savedProfile; else db.faculty.push(savedProfile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    return true;
  } catch (error) {
    lastFacultyError = error;
    showToast(error.message || "Could not save faculty profile to Supabase");
    return false;
  }
}

function showToast(message) {
  clearTimeout(toastTimer);
  $("#toast p").textContent = message;
  $("#toast").classList.add("is-visible");
  toastTimer = setTimeout(() => $("#toast").classList.remove("is-visible"), 2800);
}

function showView(view, options = {}) {
  activeView = view;
  $$(".nav-item").forEach(item => item.classList.toggle("is-active", item.dataset.view === view));
  $$(".view").forEach(panel => panel.classList.toggle("is-visible", panel.dataset.viewPanel === view));
  const labels = { overview: "Registry overview", equipment: "Equipment registry", submissions: "Faculty submissions", faculty: "Faculty profiles", facilities: "Facilities directory", data: "Data & export" };
  $("#page-context").textContent = labels[view];
  $("#sidebar").classList.remove("is-open");
  $(".mobile-menu").setAttribute("aria-expanded", "false");
  if (!options.preserveScroll) window.scrollTo({ top: 0, behavior: "smooth" });
  if (view === "equipment" && options.query) {
    $("#equipment-search").value = options.query;
    renderEquipmentTable();
  }
}

function renderAll() {
  renderNavigationCounts();
  populateFacilityOptions();
  renderOverview();
  renderFacultyProfiles();
  renderEquipmentTable();
  renderSubmissions();
  renderFacilities();
}

function renderNavigationCounts() {
  $("#equipment-nav-count").textContent = db.equipment.length;
  $("#submission-nav-count").textContent = db.equipment.filter(item => item.reviewStatus === "Submitted").length || "";
  const facultyCount = $("#faculty-nav-count");
  if (facultyCount) facultyCount.textContent = db.faculty.length;
}

function renderOverview() {
  const verified = db.equipment.filter(item => item.reviewStatus === "Verified").length;
  const pending = db.equipment.filter(item => item.reviewStatus === "Submitted").length;
  const operational = db.equipment.filter(item => item.status === "Operational").length;
  const publicReady = db.equipment.filter(item => item.publicReady && item.reviewStatus === "Verified").length;
  const metrics = [
    ["Equipment records", db.equipment.length, "total", "+ Registry"],
    ["Faculty profiles", db.faculty.length, "total", "People"],
    ["Verified records", verified, `${percentage(verified, db.equipment.length)}%`, "Quality"],
    ["Public-ready", publicReady, "systems", "Website"]
  ];
  $("#metric-grid").innerHTML = metrics.map(([label, value, note, tag]) => `<article class="metric-card"><div class="metric-label"><span>${label}</span><span>${tag}</span></div><div class="metric-value"><strong>${value}</strong><small>${note}</small></div></article>`).join("");

  const maintenance = db.equipment.filter(item => item.status === "Maintenance");
  const incomplete = db.equipment.filter(item => !item.email || !item.nextMaintenance);
  const attention = [
    ["!", `${pending} submission${pending === 1 ? "" : "s"} awaiting review`, "Confirm ownership, access, and safety information.", "", "submissions"],
    ["↻", `${maintenance.length} instrument${maintenance.length === 1 ? "" : "s"} in maintenance`, maintenance[0]?.name || "No instruments currently marked for maintenance.", "warning", "equipment"],
    ["i", `${incomplete.length} incomplete record${incomplete.length === 1 ? "" : "s"}`, "Missing contact or maintenance information.", "info", "equipment"]
  ];
  $("#attention-list").innerHTML = attention.map(([icon, title, detail, kind, view]) => `<div class="attention-row"><span class="attention-symbol ${kind}">${icon}</span><div><strong>${clean(title)}</strong><p>${clean(detail)}</p></div><button type="button" data-attention-view="${view}" aria-label="Open ${clean(title)}">→</button></div>`).join("");

  const coverage = [
    ["Verified", percentage(verified, db.equipment.length)],
    ["Custodian email", percentage(db.equipment.filter(item => item.email).length, db.equipment.length)],
    ["Maintenance date", percentage(db.equipment.filter(item => item.nextMaintenance).length, db.equipment.length)],
    ["Public profile", percentage(db.equipment.filter(item => item.publicReady).length, db.equipment.length)]
  ];
  $("#coverage-chart").innerHTML = coverage.map(([label, value]) => `<div class="coverage-row"><span>${label}</span><div class="coverage-track"><div class="coverage-fill" style="width:${value}%"></div></div><span>${value}%</span></div>`).join("");
  $("#data-date").textContent = `Updated ${formatDate(today())}`;

  const recent = [...db.equipment].sort((a,b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 5);
  $("#recent-table").innerHTML = recent.map(item => `<tr><td>${nameCell(item)}</td><td>${clean(facilityFor(item.facilityId)?.name || "Unassigned")}</td><td>${clean(item.custodian || "Not assigned")}</td><td>${statusPill(item.status)}</td><td>${formatDate(item.updatedAt)}</td></tr>`).join("");
}

function percentage(value, total) { return total ? Math.round((value / total) * 100) : 0; }
function researchIcon(item) {
  const text = `${item.name} ${item.category}`.toLowerCase();
  const svg = path => `<svg aria-hidden="true" viewBox="0 0 24 24">${path}</svg>`;
  if (text.includes("confocal") || text.includes("microscop")) return svg(`<circle cx="9" cy="9" r="4"/><path d="m12 12 6 6M15 18h5M5 20h10M13 4l4 4"/>`);
  if (text.includes("lifetime")) return svg(`<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2M4 12h2M18 12h2"/>`);
  if (text.includes("coherence") || text.includes("tomography")) return svg(`<path d="M3 12c3-6 6-6 9 0s6 6 9 0M3 17c3-4 6-4 9 0s6 4 9 0"/>`);
  if (text.includes("infrared") || text.includes("spectro") || text.includes("reflectance")) return svg(`<path d="M3 16c3 0 3-8 6-8s3 8 6 8 3-8 6-8M4 20h16"/>`);
  if (text.includes("laser")) return svg(`<path d="M3 12h13M16 7v10M19 9l2-2M19 15l2 2M19 12h3"/>`);
  if (text.includes("electrosp")) return svg(`<path d="M4 6h5l2 6 3-6h6M4 18c4-4 12-4 16 0"/>`);
  if (text.includes("3d print")) return svg(`<path d="m12 3 8 4-8 4-8-4 8-4Zm-8 4v9l8 5 8-5V7M12 11v10"/>`);
  if (text.includes("plasmon")) return svg(`<circle cx="7" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M10 12h4M3 6c6 3 12 3 18 0M3 18c6-3 12-3 18 0"/>`);
  if (text.includes("quantum")) return svg(`<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>`);
  if (text.includes("fiber")) return svg(`<path d="M3 6c6 0 6 12 12 12h6M3 12h6c6 0 6-6 12-6"/>`);
  if (text.includes("chip")) return svg(`<rect x="6" y="6" width="12" height="12"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M18 9h4M2 15h4M18 15h4"/>`);
  if (text.includes("vein") || text.includes("medical")) return svg(`<path d="M12 20s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.2-8 11-8 11Z"/><path d="M8 12h2l1-3 2 6 1-3h2"/>`);
  if (text.includes("data acquisition")) return svg(`<path d="M3 17h4l2-10 4 12 2-7 2 5h4"/>`);
  if (text.includes("deep learning")) return svg(`<circle cx="5" cy="7" r="2"/><circle cx="5" cy="17" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="19" cy="9" r="2"/><circle cx="19" cy="15" r="2"/><path d="m7 7 3-2M7 8l3 4M7 16l3-4M7 17l3 2M14 5l3 4M14 12l3-3M14 12l3 3M14 19l3-4"/>`);
  if (text.includes("vision") || text.includes("imaging")) return svg(`<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>`);
  return svg(`<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4v16"/>`);
}
function nameCell(item) {
  const media = photoSrc(item.featurePhoto)
    ? `<img src="${photoSrc(item.featurePhoto)}" alt="" />`
    : researchIcon(item);
  return `<div class="equipment-name-cell"><span class="record-icon">${media}</span><div><strong>${clean(item.name)}</strong><small>${clean(item.assetCode || item.id)}${item.sample ? " · SAMPLE" : ""}${photoSrc(item.featurePhoto) ? " · PHOTO" : ""}</small></div></div>`;
}
function statusPill(status) { return `<span class="status-pill status-${slug(status)}">${clean(status)}</span>`; }
function reviewPill(status) { return `<span class="review-pill ${slug(status)}">${clean(status)}</span>`; }

function populateFacilityOptions() {
  const options = db.facilities.map(f => `<option value="${f.id}">${clean(f.name)}</option>`).join("");
  const filter = $("#facility-filter");
  const previous = filter.value;
  filter.innerHTML = `<option value="all">All facilities</option>${options}`;
  if ([...filter.options].some(option => option.value === previous)) filter.value = previous;
  $("#record-facility").innerHTML = `<option value="">Select facility</option>${options}`;
}

function filteredEquipment() {
  const query = $("#equipment-search").value.trim().toLowerCase();
  const facility = $("#facility-filter").value;
  const status = $("#status-filter").value;
  const review = $("#review-filter").value;
  return db.equipment.filter(item => {
    const haystack = [item.name, item.assetCode, item.category, item.custodian, facilityFor(item.facilityId)?.name].join(" ").toLowerCase();
    return (!query || haystack.includes(query)) && (facility === "all" || item.facilityId === facility) && (status === "all" || item.status === status) && (review === "all" || item.reviewStatus === review);
  });
}

function renderEquipmentTable() {
  const records = filteredEquipment();
  $("#registry-result-count").textContent = records.length;
  $("#registry-empty").hidden = records.length > 0;
  $("#equipment-table").innerHTML = records.map(item => {
    const facility = facilityFor(item.facilityId);
    return `<tr data-record-id="${item.id}"><td>${nameCell(item)}</td><td><div class="cell-stack"><strong>${clean(facility?.name || "Unassigned")}</strong><small>${clean(item.room || facility?.room || "No room recorded")}</small></div></td><td><div class="cell-stack"><strong>${clean(item.custodian || "Not assigned")}</strong><small>${clean(item.email || "No email")}</small></div></td><td>${statusPill(item.status)}</td><td>${reviewPill(item.reviewStatus)}</td><td><div class="row-actions"><button type="button" data-edit="${item.id}" aria-label="Edit ${clean(item.name)}">✎</button><button type="button" data-delete="${item.id}" aria-label="Delete ${clean(item.name)}">×</button></div></td></tr>`;
  }).join("");
}

function renderSubmissions() {
  const submitted = db.equipment.filter(item => item.reviewStatus === "Submitted");
  const drafts = db.equipment.filter(item => item.reviewStatus === "Draft");
  const verifiedThisMonth = db.equipment.filter(item => item.reviewStatus === "Verified" && item.updatedAt.slice(0,7) === today().slice(0,7));
  $("#queue-metrics").innerHTML = [[submitted.length,"Awaiting review"],[drafts.length,"Faculty drafts"],[verifiedThisMonth.length,"Verified this month"]].map(([value,label]) => `<div class="queue-stat"><strong>${value}</strong><span>${label}</span></div>`).join("");
  const list = [...submitted, ...drafts];
  $("#submission-list").innerHTML = list.length ? list.map(item => {
    const facility = facilityFor(item.facilityId);
    return `<article class="submission-card"><div class="submission-card-head"><div><span class="submission-label">${clean(item.reviewStatus)} · ${clean(item.id)}</span><h2>${clean(item.name)}</h2><p>Submitted by ${clean(item.submitterName || "Unidentified contributor")} · ${formatDate(item.updatedAt)}</p></div>${reviewPill(item.reviewStatus)}</div><div class="submission-details"><div><span>Category</span><strong>${clean(item.category || "Not set")}</strong></div><div><span>Facility</span><strong>${clean(facility?.name || "Unassigned")}</strong></div><div><span>Custodian</span><strong>${clean(item.custodian || "Not set")}</strong></div><div><span>Status</span><strong>${clean(item.status)}</strong></div></div><div class="submission-card-foot"><p>${clean(item.submitterNotes || "No reviewer note supplied.")}</p><div class="submission-actions"><button class="button button-secondary" type="button" data-edit="${item.id}">Review & edit</button>${item.reviewStatus === "Submitted" ? `<button class="button button-primary" type="button" data-approve="${item.id}">Approve record</button>` : ""}</div></div></article>`;
  }).join("") : `<div class="empty-state panel"><span>✓</span><h2>The queue is clear</h2><p>No faculty submissions currently need review.</p></div>`;
}

function profileLinks(profile) {
  return profile.profileLinks && typeof profile.profileLinks === "object" ? profile.profileLinks : {};
}

function renderFacultyProfiles() {
  const grid = $("#faculty-profile-grid");
  if (!grid) return;
  grid.innerHTML = db.faculty.length ? db.faculty.map((profile, index) => {
    const links = profileLinks(profile);
    const linkCount = Object.values(links).filter(Boolean).length;
    const equipmentCount = db.equipment.filter(item => {
      const emailMatch = profile.email && item.email && item.email.toLowerCase() === profile.email.toLowerCase();
      const nameMatch = profile.name && item.custodian && item.custodian.toLowerCase().includes(profile.name.toLowerCase());
      return emailMatch || nameMatch;
    }).length;
    const interests = normalizeList(profile.researchInterests).slice(0, 4);
    return `<article class="faculty-admin-card" data-faculty-id="${clean(profile.id)}" style="--faculty-color:${profile.color || facilityPalette[index % facilityPalette.length]}">
      <div class="faculty-admin-head"><span>${clean(initials(profile.name))}</span><small>${profile.publicReady === false ? "Hidden" : "Public"}</small></div>
      <h2>${clean(profile.name)}</h2>
      <p>${clean(profile.title || "Title to verify")}</p>
      <div class="faculty-admin-tags">${interests.map(item => `<span>${clean(item)}</span>`).join("") || `<span>Interests to add</span>`}</div>
      <div class="faculty-admin-foot">
        <span><strong>${equipmentCount}</strong> linked equipment</span>
        <span><strong>${linkCount}</strong> profile links</span>
        <button class="text-button" type="button" data-edit-faculty="${clean(profile.id)}" aria-label="Edit ${clean(profile.name)}">Edit <span>→</span></button>
      </div>
    </article>`;
  }).join("") : `<div class="empty-state panel"><span>+</span><h2>No faculty profiles yet</h2><p>Add every faculty member here, including those without equipment records.</p></div>`;
}

function initials(name) {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "FP";
  return parts.slice(0, 2).map(part => part[0]).join("").toUpperCase();
}

function renderFacilities() {
  $("#facility-grid").innerHTML = db.facilities.map((facility, index) => {
    const count = db.equipment.filter(item => item.facilityId === facility.id).length;
    return `<article class="facility-card" data-facility-id="${clean(facility.id)}"><div class="facility-visual" style="--facility-color:${facility.color || facilityPalette[index % facilityPalette.length]}"></div><div class="facility-card-meta"><span>${clean(facility.id)}</span><span>${clean(facility.building || "Building not set")} · ${clean(facility.room || "Room not set")}</span></div><h2>${clean(facility.name)}</h2><p>${clean(facility.description || "No facility description has been added.")}</p><div class="facility-card-foot"><span><strong>${count}</strong> equipment record${count === 1 ? "" : "s"}</span><span>Lead<br /><b>${clean(facility.lead || "Not assigned")}</b></span><button class="text-button" type="button" data-edit-facility="${clean(facility.id)}" aria-label="Edit ${clean(facility.name)}">Edit <span>→</span></button></div></article>`;
  }).join("");
}

function setFacultyMessage(message = "", type = "") {
  const target = $("#faculty-message");
  if (!target) return;
  target.textContent = message;
  target.className = type ? `is-${type}` : "";
}

function openFacultyDialog(id = null) {
  const form = $("#faculty-form");
  const profile = id ? db.faculty.find(item => item.id === id) : null;
  editingFacultyId = profile?.id || null;
  form.reset();
  setFacultyMessage();
  $("#faculty-form-title").textContent = profile ? "Edit faculty profile" : "Add faculty profile";
  $("#faculty-primary-action").textContent = profile ? "Save profile" : "Add profile";
  if (profile) {
    ["name", "title", "email", "office", "phone", "bio", "color", "ownerEmail"].forEach(key => {
      const field = form.elements.namedItem(key);
      if (field) field.value = profile[key] || (key === "color" ? "#8fd8c8" : "");
    });
    ["researchInterests", "highlights", "activities", "recognitions"].forEach(key => {
      const field = form.elements.namedItem(key);
      if (field) field.value = normalizeList(profile[key]).join("\n");
    });
    const links = profileLinks(profile);
    ["academic", "scopus", "researchGate", "googleScholar", "orcid"].forEach(key => {
      const field = form.elements.namedItem(key);
      if (field) field.value = links[key] || "";
    });
    form.elements.publicReady.checked = profile.publicReady !== false;
  } else {
    form.elements.publicReady.checked = true;
    form.elements.color.value = facilityPalette[db.faculty.length % facilityPalette.length];
  }
  $("#faculty-dialog").showModal();
  setTimeout(() => form.elements.namedItem("name")?.focus(), 50);
}

function facultyFromForm(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  Object.keys(data).forEach(key => { data[key] = String(data[key] || "").trim(); });
  const existing = editingFacultyId ? db.faculty.find(item => item.id === editingFacultyId) : null;
  const numericIds = db.faculty.map(item => Number(String(item.id).replace(/\D/g,""))).filter(Number.isFinite);
  const id = existing?.id || `FACULTY-${String(Math.max(0, ...numericIds) + 1).padStart(3, "0")}`;
  return {
    ...existing,
    id,
    name: data.name,
    title: data.title,
    email: data.email,
    office: data.office,
    phone: data.phone,
    bio: data.bio,
    researchInterests: normalizeList(data.researchInterests),
    highlights: normalizeList(data.highlights),
    activities: normalizeList(data.activities),
    recognitions: normalizeList(data.recognitions),
    profileLinks: {
      academic: data.academic,
      scopus: data.scopus,
      researchGate: data.researchGate,
      googleScholar: data.googleScholar,
      orcid: data.orcid
    },
    color: data.color || existing?.color || facilityPalette[db.faculty.length % facilityPalette.length],
    publicReady: form.elements.publicReady.checked,
    ownerEmail: data.ownerEmail || data.email,
    createdAt: existing?.createdAt || today(),
    updatedAt: today(),
    sample: existing?.sample || false
  };
}

function openFacilityDialog(id = null) {
  const form = $("#facility-form");
  const facility = id ? db.facilities.find(item => item.id === id) : null;
  editingFacilityId = facility?.id || null;
  form.reset();
  setFacilityMessage();
  $("#facility-form-title").textContent = facility ? "Edit facility" : "Add facility";
  $("#facility-primary-action").textContent = facility ? "Save changes" : "Add facility";
  if (facility) {
    ["name", "building", "room", "color", "lead", "description"].forEach(key => {
      const field = form.elements.namedItem(key);
      if (field) field.value = facility[key] || (key === "color" ? "#8fd8c8" : "");
    });
  }
  $("#facility-dialog").showModal();
  setTimeout(() => form.elements.namedItem("name")?.focus(), 50);
}

function openRecordDialog(mode = "manager", id = null) {
  recordMode = mode;
  const form = $("#record-form");
  form.reset();
  $("#record-id").value = "";
  const item = id ? db.equipment.find(record => record.id === id) : null;
  pendingFeaturePhoto = item?.featurePhoto ? clone(item.featurePhoto) : null;
  pendingGallery = Array.isArray(item?.gallery) ? clone(item.gallery).slice(0, 5) : [];
  $("#record-form-kicker").textContent = mode === "faculty" ? "Faculty contribution" : item ? "Edit equipment record" : "New registry record";
  $("#record-form-title").textContent = mode === "faculty" ? "Submit equipment information" : item ? "Edit equipment" : "Add equipment";
  $("#record-primary-action").textContent = mode === "faculty" ? "Submit for review" : "Save record";
  $("#submitter-section").hidden = mode !== "faculty" && !item?.submitterName;
  if (item) {
    Object.entries(item).forEach(([key, value]) => {
      const field = form.elements.namedItem(key);
      if (!field) return;
      if (field.type === "checkbox") field.checked = Boolean(value); else field.value = value ?? "";
    });
    $("#record-id").value = item.id;
  }
  const descriptionField = $("#equipment-description");
  descriptionField.value = descriptionField.value.slice(0, DESCRIPTION_LIMIT);
  updateDescriptionCounter();
  renderMediaPreviews();
  $("#record-dialog").showModal();
  setTimeout(() => form.elements.name.focus(), 50);
}

function recordFromForm(form, saveMode) {
  const data = Object.fromEntries(new FormData(form).entries());
  data.description = String(data.description || "").slice(0, DESCRIPTION_LIMIT);
  const existing = db.equipment.find(item => item.id === data.id);
  const numericIds = db.equipment.map(item => Number(item.id.replace(/\D/g,""))).filter(Number.isFinite);
  const id = existing?.id || `EQ-${String(Math.max(0, ...numericIds) + 1).padStart(3,"0")}`;
  const reviewStatus = saveMode === "draft" ? "Draft" : recordMode === "faculty" ? "Submitted" : existing?.reviewStatus === "Verified" ? "Verified" : "Verified";
  if (pendingFeaturePhoto) pendingFeaturePhoto.alt = $("#feature-photo-alt").value.trim();
  return { ...existing, ...data, id, publicReady: form.elements.publicReady.checked, featurePhoto: pendingFeaturePhoto, gallery: pendingGallery, reviewStatus, createdAt: existing?.createdAt || today(), updatedAt: today(), sample: existing?.sample || false };
}

function updateDescriptionCounter() {
  const field = $("#equipment-description");
  const counter = $("#description-counter");
  const length = field.value.length;
  counter.textContent = `${length} / ${DESCRIPTION_LIMIT}`;
  counter.classList.toggle("is-near-limit", length >= 700 && length < DESCRIPTION_LIMIT);
  counter.classList.toggle("is-at-limit", length >= DESCRIPTION_LIMIT);
}

function resizeImage(file, maxDimension = 1200, quality = 0.76) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read image"));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("Could not decode image"));
      image.onload = () => {
        const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve({ data: canvas.toDataURL("image/jpeg", quality), alt: "", name: file.name });
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function renderMediaPreviews() {
  const featurePreview = $("#feature-photo-preview");
  const altLabel = $("#feature-alt-label");
  if (photoSrc(pendingFeaturePhoto)) {
    featurePreview.classList.remove("empty");
    featurePreview.innerHTML = `<img src="${photoSrc(pendingFeaturePhoto)}" alt="" /><button class="media-remove" type="button" data-remove-feature aria-label="Remove feature photo">×</button>`;
    altLabel.hidden = false;
    $("#feature-photo-alt").value = pendingFeaturePhoto.alt || "";
  } else {
    featurePreview.classList.add("empty");
    featurePreview.innerHTML = `<span>No feature photo selected</span>`;
    altLabel.hidden = true;
    $("#feature-photo-alt").value = "";
  }
  const galleryPreview = $("#gallery-photo-preview");
  galleryPreview.innerHTML = pendingGallery.length
    ? pendingGallery.map((photo, index) => `<div class="gallery-item"><img src="${photoSrc(photo)}" alt="" /><button class="media-remove" type="button" data-remove-gallery="${index}" aria-label="Remove gallery photo ${index + 1}">×</button><input type="text" value="${clean(photo.alt || "")}" data-gallery-alt="${index}" aria-label="Description for gallery photo ${index + 1}" placeholder="Describe this photo" /></div>`).join("")
    : `<p>No gallery photos selected</p>`;
}

async function deleteRecord(id) {
  const item = db.equipment.find(record => record.id === id);
  if (!item) return;
  const confirmed = await askConfirm("Delete equipment record?", `“${item.name}” will be removed from ${backendReady ? "the shared Supabase registry" : "this browser database"}. This cannot be undone.`);
  if (!confirmed) return;
  const previousEquipment = clone(db.equipment);
  db.equipment = db.equipment.filter(record => record.id !== id);
  if (backendReady) {
    try {
      await backend.deleteEquipment(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch (error) {
      db.equipment = previousEquipment;
      renderAll();
      showToast(error.message || "Could not delete from Supabase");
      return;
    }
  } else {
    save();
  }
  renderAll(); showToast("Equipment record deleted");
}

function askConfirm(title, message) {
  return new Promise(resolve => {
    const dialog = $("#confirm-dialog");
    $("#confirm-title").textContent = title;
    $("#confirm-message").textContent = message;
    const handleClose = () => { dialog.removeEventListener("close", handleClose); resolve(dialog.returnValue === "confirm"); };
    dialog.addEventListener("close", handleClose);
    dialog.showModal();
  });
}

function downloadFile(filename, type, content) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = filename; document.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportCsv() {
  const fields = ["id","name","assetCode","manufacturer","model","category","facilityId","room","custodian","email","researchGroup","status","access","lastMaintenance","nextMaintenance","safety","publicReady","reviewStatus","updatedAt"];
  const quote = value => `"${String(value ?? "").replace(/"/g,'""')}"`;
  const csv = [fields.join(","), ...db.equipment.map(item => fields.map(field => quote(item[field])).join(","))].join("\n");
  downloadFile(`sut-physics-equipment-${today()}.csv`, "text/csv;charset=utf-8", csv);
  showToast("CSV export created");
}

$$('.nav-item').forEach(button => button.addEventListener("click", () => showView(button.dataset.view)));
$$('[data-view-jump]').forEach(button => button.addEventListener("click", () => showView(button.dataset.viewJump)));
$$('[data-action="new-record"]').forEach(button => button.addEventListener("click", () => openRecordDialog("manager")));
$$('[data-action="faculty-submit"]').forEach(button => button.addEventListener("click", () => openRecordDialog("faculty")));
$$('[data-action="new-faculty"]').forEach(button => button.addEventListener("click", () => openFacultyDialog()));
function setFacilityMessage(message = "", type = "") {
  const target = $("#facility-message");
  if (!target) return;
  target.textContent = message;
  target.className = type ? `is-${type}` : "";
}

$$('[data-action="new-facility"]').forEach(button => button.addEventListener("click", () => {
  openFacilityDialog();
}));
$$('[data-close]').forEach(button => button.addEventListener("click", () => $(`#${button.dataset.close}`).close()));

$("#equipment-description").addEventListener("input", event => {
  if (event.currentTarget.value.length > DESCRIPTION_LIMIT) {
    event.currentTarget.value = event.currentTarget.value.slice(0, DESCRIPTION_LIMIT);
  }
  updateDescriptionCounter();
});

$("#feature-photo-input").addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    pendingFeaturePhoto = await resizeImage(file, 1400, 0.8);
    pendingFeaturePhoto.alt = `${$("#record-form").elements.name.value || "Research equipment"} feature photo`;
    renderMediaPreviews();
  } catch {
    showToast("The feature photo could not be processed");
  }
  event.target.value = "";
});

$("#gallery-photo-input").addEventListener("change", async event => {
  const available = Math.max(0, 5 - pendingGallery.length);
  const files = [...event.target.files].slice(0, available);
  if (!available) {
    showToast("The gallery already contains the maximum of 5 photos");
    event.target.value = "";
    return;
  }
  try {
    const images = await Promise.all(files.map(file => resizeImage(file, 640, 0.66)));
    const equipmentName = $("#record-form").elements.name.value || "Research equipment";
    images.forEach((photo, index) => { photo.alt = `${equipmentName} use-case photo ${pendingGallery.length + index + 1}`; });
    pendingGallery.push(...images);
    renderMediaPreviews();
    if (event.target.files.length > available) showToast("Only the first available gallery photos were added");
  } catch {
    showToast("One or more gallery photos could not be processed");
  }
  event.target.value = "";
});

$("#feature-photo-preview").addEventListener("click", event => {
  if (!event.target.closest("[data-remove-feature]")) return;
  pendingFeaturePhoto = null;
  renderMediaPreviews();
});

$("#gallery-photo-preview").addEventListener("click", event => {
  const button = event.target.closest("[data-remove-gallery]");
  if (!button) return;
  pendingGallery.splice(Number(button.dataset.removeGallery), 1);
  renderMediaPreviews();
});

$("#gallery-photo-preview").addEventListener("input", event => {
  const input = event.target.closest("[data-gallery-alt]");
  if (!input) return;
  const photo = pendingGallery[Number(input.dataset.galleryAlt)];
  if (photo) photo.alt = input.value;
});

$(".mobile-menu").addEventListener("click", event => {
  const open = $("#sidebar").classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

$("#record-form").addEventListener("submit", async event => {
  event.preventDefault();
  const saveMode = event.submitter?.value || "submit";
  if (!event.currentTarget.reportValidity()) return;
  setBusy(event.submitter, true, backendReady ? "Uploading…" : "Saving…");
  const record = recordFromForm(event.currentTarget, saveMode);
  const index = db.equipment.findIndex(item => item.id === record.id);
  const previousEquipment = clone(db.equipment);
  if (index >= 0) db.equipment[index] = record; else db.equipment.unshift(record);
  if (!(await persistEquipment(record, previousEquipment))) {
    setBusy(event.submitter, false);
    return;
  }
  setBusy(event.submitter, false);
  renderAll(); $("#record-dialog").close();
  showToast(record.reviewStatus === "Submitted" ? "Submitted for registry review" : record.reviewStatus === "Draft" ? "Draft saved" : record.publicReady ? "Equipment saved and available to the public page" : "Equipment record saved");
});

$("#facility-form").addEventListener("submit", async event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  setBusy(event.submitter, true);
  setFacilityMessage("Saving facility…");
  const form = event.currentTarget;
  try {
    const data = Object.fromEntries(new FormData(form).entries());
    Object.keys(data).forEach(key => { data[key] = String(data[key] || "").trim(); });
    const duplicate = db.facilities.find(item => item.id !== editingFacilityId && item.name.trim().toLowerCase() === data.name.toLowerCase());
    if (duplicate) {
      setFacilityMessage(`A facility named “${duplicate.name}” already exists.`, "error");
      showToast(`A facility named “${duplicate.name}” already exists`);
      form.elements.namedItem("name")?.focus();
      return;
    }
    const existing = editingFacilityId ? db.facilities.find(item => item.id === editingFacilityId) : null;
    const numericIds = db.facilities.map(item => Number(item.id.replace(/\D/g,""))).filter(Number.isFinite);
    const id = existing?.id || `FAC-${String(Math.max(0, ...numericIds) + 1).padStart(2,"0")}`;
    const facility = { ...existing, ...data, id, color: data.color || existing?.color || facilityPalette[db.facilities.length % facilityPalette.length] };
    if (await persistFacility(facility)) {
      $("#facility-dialog").close();
      form.reset();
      editingFacilityId = null;
      renderAll();
      showToast(`${facility.name} ${existing ? "updated" : "added to the facilities directory"}`);
    } else {
      setFacilityMessage(lastFacilityError?.message || "Could not save this facility. Confirm your admin account is active in Supabase.", "error");
    }
  } catch (error) {
    setFacilityMessage(error.message || "Could not add this facility.", "error");
    showToast(error.message || "Could not add facility");
  } finally {
    setBusy(event.submitter, false);
  }
});

$("#facility-grid").addEventListener("click", event => {
  const editButton = event.target.closest("[data-edit-facility]");
  const card = event.target.closest("[data-facility-id]");
  const id = editButton?.dataset.editFacility || card?.dataset.facilityId;
  if (id) openFacilityDialog(id);
});

$("#faculty-profile-grid").addEventListener("click", event => {
  const editButton = event.target.closest("[data-edit-faculty]");
  const card = event.target.closest("[data-faculty-id]");
  const id = editButton?.dataset.editFaculty || card?.dataset.facultyId;
  if (id) openFacultyDialog(id);
});

$("#faculty-form").addEventListener("submit", async event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  setBusy(event.submitter, true);
  setFacultyMessage("Saving faculty profile…");
  try {
    const profile = facultyFromForm(event.currentTarget);
    const duplicate = db.faculty.find(item => item.id !== profile.id && item.name.trim().toLowerCase() === profile.name.trim().toLowerCase());
    if (duplicate) {
      setFacultyMessage(`A faculty profile named “${duplicate.name}” already exists.`, "error");
      showToast(`A faculty profile named “${duplicate.name}” already exists`);
      return;
    }
    if (await persistFaculty(profile)) {
      $("#faculty-dialog").close();
      event.currentTarget.reset();
      editingFacultyId = null;
      renderAll();
      showToast(`${profile.name} ${db.faculty.some(item => item.id === profile.id) ? "profile saved" : "added to faculty profiles"}`);
    } else {
      setFacultyMessage(lastFacultyError?.message || "Could not save this faculty profile. Confirm your admin account is active in Supabase.", "error");
    }
  } catch (error) {
    setFacultyMessage(error.message || "Could not save this faculty profile.", "error");
    showToast(error.message || "Could not save faculty profile");
  } finally {
    setBusy(event.submitter, false);
  }
});

$("#equipment-table").addEventListener("click", event => {
  const deleteButton = event.target.closest("[data-delete]");
  const editButton = event.target.closest("[data-edit]");
  if (deleteButton) { event.stopPropagation(); deleteRecord(deleteButton.dataset.delete); return; }
  if (editButton) { event.stopPropagation(); openRecordDialog("manager", editButton.dataset.edit); return; }
  const row = event.target.closest("[data-record-id]"); if (row) openRecordDialog("manager", row.dataset.recordId);
});

$("#submission-list").addEventListener("click", async event => {
  const edit = event.target.closest("[data-edit]"); if (edit) openRecordDialog("manager", edit.dataset.edit);
  const approve = event.target.closest("[data-approve]");
  if (approve) {
    const item = db.equipment.find(record => record.id === approve.dataset.approve);
    if (item) {
      const previousEquipment = clone(db.equipment);
      item.reviewStatus = "Verified";
      item.updatedAt = today();
      setBusy(approve, true, "Approving…");
      if (await persistEquipment(item, previousEquipment)) {
        renderAll();
        showToast(item.publicReady ? "Submission approved and published to the public page" : "Submission approved and verified");
      }
      setBusy(approve, false);
    }
  }
});

$("#attention-list").addEventListener("click", event => { const button = event.target.closest("[data-attention-view]"); if (button) showView(button.dataset.attentionView); });

[$("#equipment-search"), $("#facility-filter"), $("#status-filter"), $("#review-filter")].forEach(control => control.addEventListener(control.tagName === "INPUT" ? "input" : "change", renderEquipmentTable));
$("#clear-filters").addEventListener("click", () => { $("#equipment-search").value = ""; $("#facility-filter").value = "all"; $("#status-filter").value = "all"; $("#review-filter").value = "all"; renderEquipmentTable(); });

$("#global-search").addEventListener("input", event => { if (event.target.value.trim()) showView("equipment", { query: event.target.value, preserveScroll: true }); });
document.addEventListener("keydown", event => { if (event.key === "/" && !["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)) { event.preventDefault(); $("#global-search").focus(); } });

$("#export-json").addEventListener("click", () => { downloadFile(`sut-physics-registry-${today()}.json`, "application/json", JSON.stringify(db, null, 2)); showToast("JSON backup created"); });
$("#export-csv").addEventListener("click", exportCsv);
$("#import-json").addEventListener("change", async event => {
  const file = event.target.files[0]; if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported.equipment) || !Array.isArray(imported.facilities)) throw new Error("Invalid schema");
    imported.faculty = Array.isArray(imported.faculty) ? imported.faculty : [];
    imported.equipment = imported.equipment.map(item => ({
      ...item,
      description: String(item.description || "").slice(0, DESCRIPTION_LIMIT)
    }));
    const confirmed = await askConfirm(backendReady ? "Import into the shared registry?" : "Replace the browser database?", `Import ${imported.faculty.length} faculty profiles, ${imported.equipment.length} equipment records, and ${imported.facilities.length} facilities from “${file.name}”?`);
    if (confirmed) {
      if (backendReady) {
        for (const profile of imported.faculty) await backend.saveFaculty(profile);
        for (const facility of imported.facilities) await backend.saveFacility(facility);
        for (const record of imported.equipment) await backend.saveEquipment(record);
        await loadSharedRegistry();
      } else {
        db = normalizeDatabase(imported); save(); renderAll();
      }
      showView("overview"); showToast("Registry backup imported");
    }
  } catch { showToast("Could not import: file is not a valid registry backup"); }
  event.target.value = "";
});

$("#seed-sample-data").addEventListener("click", async event => {
  const confirmed = await askConfirm("Seed example records?", `Add or update ${sampleDatabase.faculty.length} example faculty profiles, ${sampleDatabase.equipment.length} example equipment records, and ${sampleDatabase.facilities.length} facilities in ${backendReady ? "Supabase" : "this browser"}?`);
  if (!confirmed) return;
  setBusy(event.currentTarget, true, "Seeding…");
  try {
    if (backendReady) {
      for (const profile of sampleDatabase.faculty) await backend.saveFaculty(profile);
      for (const facility of sampleDatabase.facilities) await backend.saveFacility(facility);
      for (const record of sampleDatabase.equipment) await backend.saveEquipment(record);
      await loadSharedRegistry();
    } else {
      db = clone(sampleDatabase);
      save();
      renderAll();
    }
    showView("overview");
    showToast("Example registry records seeded");
  } catch (error) {
    showToast(error.message || "Could not seed example records");
  } finally {
    setBusy(event.currentTarget, false);
  }
});

$("#reset-data").addEventListener("click", async () => {
  if (backendReady) {
    showToast("Sample reset is disabled while Supabase is active");
    return;
  }
  const confirmed = await askConfirm("Reset the prototype database?", "All browser edits will be removed and the original sample records restored.");
  if (confirmed) { db = clone(sampleDatabase); save(); renderAll(); showView("overview"); showToast("Sample database restored"); }
});

$("#auth-form").addEventListener("submit", async event => {
  event.preventDefault();
  if (!backendConfigured) return;
  if (!event.currentTarget.reportValidity()) return;
  hideAccessIssuePanel();
  const email = $("#auth-email").value.trim();
  const password = $("#auth-password").value;
  setBusy($("#auth-submit"), true, "Signing in…");
  try {
    const session = await backend.signIn(email, password);
    currentSession = session || await backend.getSession();
    const loaded = await loadSharedRegistry({ showGate: false });
    if (!loaded) {
      showAccessIssue(
        `${lastRegistryError?.message || "Password accepted, but Supabase blocked access to the internal registry."} Confirm this email is active in public.registry_admins and set active = true.`,
        currentSession?.user?.email || email
      );
      return;
    }
    showToast("Signed in to shared registry");
  } catch (error) {
    $("#auth-message").textContent = error.message || "Could not sign in. Check your account and Supabase settings.";
  } finally {
    setBusy($("#auth-submit"), false);
  }
});

$("#sign-out").addEventListener("click", async () => {
  try {
    await backend.signOut();
    showAuthGate("Signed out. Sign in again to manage the shared registry.");
  } catch (error) {
    showToast(error.message || "Could not sign out");
  }
});

$("#access-sign-out").addEventListener("click", async () => {
  try {
    await backend.signOut();
    showAuthGate("Signed out. You can sign in again with another approved email and password.");
  } catch (error) {
    showToast(error.message || "Could not sign out");
  }
});

$("#change-password").addEventListener("click", () => {
  $("#password-form").reset();
  $("#password-message").textContent = "";
  $("#password-message").className = "";
  $("#password-dialog").showModal();
  setTimeout(() => $("#new-password").focus(), 50);
});

$("#password-form").addEventListener("submit", async event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const password = $("#new-password").value;
  const confirmPassword = $("#confirm-password").value;
  const message = $("#password-message");
  message.className = "";
  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.classList.add("is-error");
    $("#confirm-password").focus();
    return;
  }
  setBusy($("#password-submit"), true, "Updating…");
  try {
    await backend.updatePassword(password);
    message.textContent = "Password updated successfully.";
    message.classList.add("is-success");
    showToast("Password updated");
    setTimeout(() => $("#password-dialog").close(), 900);
  } catch (error) {
    message.textContent = error.message || "Could not update password.";
    message.classList.add("is-error");
  } finally {
    setBusy($("#password-submit"), false);
  }
});

async function boot() {
  setRegistryMode();
  setUserChip();
  if (!backendConfigured) {
    renderAll();
    return;
  }
  try {
    const callbackSession = await backend.completeAuthFromUrl();
    if (callbackSession) {
      currentSession = callbackSession;
      $("#auth-message").textContent = "Email link confirmed. Loading the shared registry…";
    }
    currentSession = await backend.getSession();
    if (!currentSession) {
      showAuthGate();
      return;
    }
    const loaded = await loadSharedRegistry({ showGate: false });
    if (!loaded) {
      showAccessIssue(callbackSession
        ? "Supabase confirmed your email, but blocked access to the internal registry."
        : "This account is signed in, but Supabase blocked access to the internal registry.",
      currentSession.user?.email, Boolean(callbackSession));
    }
  } catch (error) {
    showAuthGate(`Supabase sign-in could not be completed: ${error.message || "Could not connect to Supabase."}`);
  }
}

boot();
