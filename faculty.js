const REGISTRY_STORAGE_KEY = "sut-physics-equipment-registry-v3";

const fallbackFaculty = [
  { id: "FACULTY-001", name: "Yupeng Yan", title: "Professor", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#8fd8c8", publicReady: true, sample: true },
  { id: "FACULTY-002", name: "Santi Maensiri", title: "Professor", email: "", bio: "Dummy faculty profile for Dean. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Materials physics"], highlights: ["Research highlight to update"], activities: ["Dean", "Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#9bc7ee", publicReady: true, sample: true },
  { id: "FACULTY-003", name: "Sirichoke Jungthawan", title: "Associate Professor", email: "", bio: "Dummy faculty profile for Head. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Head", "Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#f4c26d", publicReady: true, sample: true },
  { id: "FACULTY-004", name: "Ayut Limphirat", title: "Associate Professor", email: "", bio: "Dummy faculty profile for Vice Dean. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Vice Dean", "Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#e8a89a", publicReady: true, sample: true },
  { id: "FACULTY-005", name: "Prapan Maenyum", title: "Associate Professor", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#b8d276", publicReady: true, sample: true },
  { id: "FACULTY-006", name: "Poemwai Chainakul", title: "Assistant Professor", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#c1b2df", publicReady: true, sample: true },
  { id: "FACULTY-007", name: "Puangratana Pairo", title: "Associate Professor", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#7fc5b2", publicReady: true, sample: true },
  { id: "FACULTY-008", name: "Wittawat Saenrang", title: "Associate Professor", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#74dfce", publicReady: true, sample: true },
  { id: "FACULTY-009", name: "Worawat Meevassana", title: "Associate Professor", email: "", bio: "Dummy faculty profile for Vice Dean. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Vice Dean", "Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#8fc3ff", publicReady: true, sample: true },
  { id: "FACULTY-010", name: "Prayoon Songsiriritthikul", title: "Associate Professor", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#ff8b5b", publicReady: true, sample: true },
  { id: "FACULTY-011", name: "Panomsak Meemon", title: "Associate Professor", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Biomedical optics"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#d7ff3f", publicReady: true, sample: true },
  { id: "FACULTY-012", name: "Chinorat Kobdaj", title: "Assistant Professor", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#b59cff", publicReady: true, sample: true },
  { id: "FACULTY-013", name: "Khanchai Kosolthongkee", title: "Assistant Professor", email: "", bio: "Dummy faculty profile for Vice Dean. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Vice Dean", "Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#ffc95c", publicReady: true, sample: true },
  { id: "FACULTY-014", name: "Christoph Herold", title: "Assistant Professor", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#8fd8c8", publicReady: true, sample: true },
  { id: "FACULTY-015", name: "Tirawut Worrakitpoonpol", title: "Assistant Professor", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#9bc7ee", publicReady: true, sample: true },
  { id: "FACULTY-016", name: "Michael F. Smith", title: "Assistant Professor", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#f4c26d", publicReady: true, sample: true },
  { id: "FACULTY-017", name: "Ittipon Fongkaew", title: "Assistant Professor", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#e8a89a", publicReady: true, sample: true },
  { id: "FACULTY-018", name: "Warintorn Srithawong", title: "Dr.", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#b8d276", publicReady: true, sample: true },
  { id: "FACULTY-019", name: "Narongrit Ritjoho", title: "Dr.", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#c1b2df", publicReady: true, sample: true },
  { id: "FACULTY-020", name: "Wiwat Nuansing", title: "Dr.", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#7fc5b2", publicReady: true, sample: true },
  { id: "FACULTY-021", name: "Monchai Jitvisate", title: "Dr.", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#74dfce", publicReady: true, sample: true },
  { id: "FACULTY-022", name: "Artitsupa Boontan", title: "Dr.", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#8fc3ff", publicReady: true, sample: true },
  { id: "FACULTY-023", name: "Sorawis Sangtawesin", title: "Dr.", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#ff8b5b", publicReady: true, sample: true },
  { id: "FACULTY-024", name: "Wanvisa Talataisong", title: "Dr.", email: "", bio: "Dummy faculty profile. Replace with verified biography and research information.", researchInterests: ["Research interests to update", "Physics program faculty"], highlights: ["Research highlight to update"], activities: ["Recent activity to update"], recognitions: ["Recognition or appointment to update"], profileLinks: {}, color: "#d7ff3f", publicReady: true, sample: true }
];

const fallbackFacilities = [
  { id: "FAC-01", name: "Advanced Microscopy & Biomedical Photonics Facility", color: "#8fd8c8" },
  { id: "FAC-02", name: "Infrared & Optical Spectroscopy Facility", color: "#9bc7ee" },
  { id: "FAC-03", name: "Ultrafast Laser & Optical Data Systems Facility", color: "#f4c26d" },
  { id: "FAC-04", name: "Advanced Materials Fabrication Facility", color: "#e8a89a" },
  { id: "FAC-05", name: "Optical Fiber & Integrated Photonics Facility", color: "#b8d276" },
  { id: "FAC-06", name: "Quantum Computing Laboratory", color: "#c1b2df" },
  { id: "FAC-07", name: "AI, Machine Vision & Medical Intelligence Laboratory", color: "#7fc5b2" }
];

const fallbackEquipment = [
  { id: "EQ-01", name: "Photon Counting Scanning Confocal Microscopy", category: "Imaging", facilityId: "FAC-01", researchGroup: "Biomedical photonics" },
  { id: "EQ-04", name: "Fourier Transform Infrared Spectroscopy Lab", category: "Spectroscopy", facilityId: "FAC-02", researchGroup: "Optical spectroscopy" },
  { id: "EQ-07", name: "Electrospinning Material Fabrication and Testing", category: "Materials preparation", facilityId: "FAC-04", researchGroup: "Functional materials" },
  { id: "EQ-10", name: "Quantum Computing Lab", category: "Computing", facilityId: "FAC-06", researchGroup: "Quantum technologies" },
  { id: "EQ-17", name: "Deep Learning Lab", category: "Computing", facilityId: "FAC-07", researchGroup: "Artificial intelligence" }
];

const palette = ["#74dfce", "#8fc3ff", "#ff8b5b", "#d7ff3f", "#b59cff", "#ffc95c"];
const clean = value => String(value ?? "").replace(/[&<>'"]/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
}[character]));
const list = value => Array.isArray(value) ? value.filter(Boolean) : String(value || "").split(/\r?\n|,/).map(item => item.trim()).filter(Boolean);
const safeColor = (value, fallback = palette[0]) => /^#[0-9a-f]{3,8}$/i.test(String(value || "")) ? value : fallback;
const validEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
const facultyNameCorrections = {
  "Worawat Meewassana": "Worawat Meevassana",
  "Prayoon Songsirittikul": "Prayoon Songsiriritthikul",
  "Khanchar Kosalathongkee": "Khanchai Kosolthongkee",
  "Michale F. Smith": "Michael F. Smith",
  "Artitsupa Bootan": "Artitsupa Boontan"
};
const isPlaceholder = value => {
  const text = String(value || "").trim().toLowerCase();
  return !text || text.includes("to verify") || text.includes("not assigned") || text.includes("faculty owner");
};
const slug = value => String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

let registryAvailable = false;
let fallbackMode = false;
let registry = { faculty: [], facilities: [], equipment: [] };

const publicCategory = item => {
  const text = `${item.name} ${item.category}`.toLowerCase();
  if (text.includes("electrosp") || text.includes("3d print") || text.includes("fabricat") || text.includes("photonics on chip") || text.includes("fiber sensor")) return "fabricate";
  if (text.includes("microscop") || text.includes("tomograph") || text.includes("vein finder") || text.includes("machine vision") || item.category === "Imaging") return "observe";
  if (item.category === "Computing" || text.includes("deep learning") || text.includes("quantum computing") || text.includes("medical diagnosis")) return "model";
  return "measure";
};

const normalizeFaculty = profile => ({
  ...profile,
  id: profile.id || `faculty-${slug(profile.name)}`,
  name: facultyNameCorrections[profile.name] || profile.name || "Faculty profile to verify",
  title: profile.title || "Title to verify",
  email: profile.email || "",
  bio: profile.bio || "",
  researchInterests: list(profile.researchInterests),
  highlights: list(profile.highlights),
  activities: list(profile.activities),
  recognitions: list(profile.recognitions),
  profileLinks: profile.profileLinks && typeof profile.profileLinks === "object" ? profile.profileLinks : {},
  color: profile.color || ""
});

const normalizeEquipment = item => ({
  ...item,
  id: item.id || "",
  category: publicCategory(item),
  researchGroup: item.researchGroup || item.category || "Research area to verify",
  custodian: item.custodian || "",
  email: item.email || "",
  facilityId: item.facilityId || ""
});

const prepareFallbackRegistry = () => {
  fallbackMode = true;
  return {
    faculty: fallbackFaculty.map(normalizeFaculty),
    facilities: fallbackFacilities.map(item => ({ ...item })),
    equipment: fallbackEquipment.map(normalizeEquipment)
  };
};

const shouldUseDummyFaculty = profiles =>
  !profiles.length || profiles.every(profile => profile.sample && isPlaceholder(profile.name));

const loadLocalRegistry = () => {
  try {
    const stored = localStorage.getItem(REGISTRY_STORAGE_KEY);
    if (!stored) return prepareFallbackRegistry();
    const parsed = JSON.parse(stored);
    const publicFaculty = (parsed.faculty || []).filter(profile => profile.publicReady !== false).map(normalizeFaculty);
    const publicEquipment = (parsed.equipment || [])
      .filter(item => item.reviewStatus === "Verified" && item.publicReady === true)
      .map(normalizeEquipment);
    const facilities = Array.isArray(parsed.facilities) ? parsed.facilities : [];
    if (!publicFaculty.length && !publicEquipment.length && !facilities.length) return prepareFallbackRegistry();
    fallbackMode = shouldUseDummyFaculty(publicFaculty);
    return { faculty: fallbackMode ? fallbackFaculty.map(normalizeFaculty) : publicFaculty, facilities, equipment: publicEquipment };
  } catch {
    return prepareFallbackRegistry();
  }
};

const loadFacultyRegistry = async () => {
  registryAvailable = false;
  fallbackMode = false;
  if (window.SUTSupabase?.isConfigured?.()) {
    try {
      const loaded = await window.SUTSupabase.loadRegistry({ publicOnly: true });
      const faculty = (loaded.faculty || []).map(normalizeFaculty);
      const equipment = (loaded.equipment || []).map(normalizeEquipment);
      const facilities = Array.isArray(loaded.facilities) ? loaded.facilities : [];
      if (faculty.length || equipment.length || facilities.length) {
        registryAvailable = true;
        fallbackMode = shouldUseDummyFaculty(faculty);
        return { faculty: fallbackMode ? fallbackFaculty.map(normalizeFaculty) : faculty, facilities, equipment };
      }
    } catch (error) {
      console.warn("Supabase faculty registry unavailable; using local/prototype data.", error);
    }
  }
  return loadLocalRegistry();
};

const initialsFor = name => {
  if (isPlaceholder(name)) return "FP";
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase();
};

const linkedEquipment = profile => registry.equipment.filter(item => {
  const emailMatch = profile.email && item.email && item.email.toLowerCase() === profile.email.toLowerCase();
  const nameMatch = !isPlaceholder(profile.name) && item.custodian && item.custodian.toLowerCase().includes(profile.name.toLowerCase());
  const interestMatch = profile.researchInterests.some(interest => `${item.name} ${item.researchGroup} ${item.category}`.toLowerCase().includes(interest.toLowerCase()));
  return emailMatch || nameMatch || interestMatch;
});

const facilityById = id => registry.facilities.find(facility => facility.id === id);

const categoriesFor = profile => {
  const linked = linkedEquipment(profile).map(item => item.category);
  const interestText = profile.researchInterests.join(" ").toLowerCase();
  const categories = new Set(linked);
  if (/fabricat|material|fiber|chip|print|electrosp/.test(interestText)) categories.add("fabricate");
  if (/microscop|imaging|vision|tomograph|observe/.test(interestText)) categories.add("observe");
  if (/comput|ai|learning|quantum|model/.test(interestText)) categories.add("model");
  if (!categories.size) categories.add("measure");
  return categories;
};

const linkLabels = {
  academic: "Academic profile",
  scopus: "Scopus",
  researchGate: "ResearchGate",
  googleScholar: "Google Scholar",
  orcid: "ORCID"
};

const externalLinks = profile => Object.entries(profile.profileLinks || {})
  .filter(([, url]) => /^https?:\/\//.test(String(url || "")))
  .map(([key, url]) => ({ label: linkLabels[key] || key, url }));

const renderProfileCard = (profile, index) => {
  const linked = linkedEquipment(profile);
  const interests = profile.researchInterests.slice(0, 4);
  const color = safeColor(profile.color, palette[index % palette.length]);
  return `
    <article class="faculty-card" data-categories="${clean([...categoriesFor(profile)].join(" "))}" style="--faculty-color:${color}">
      <div class="faculty-card-head">
        <span class="faculty-avatar" aria-hidden="true">${clean(initialsFor(profile.name))}</span>
        <span class="faculty-state">${profile.sample ? "Needs verification" : "Faculty profile"}</span>
      </div>
      <h3>${clean(profile.name)}</h3>
      <p>${clean(profile.title || "Title to verify")}</p>
      <div class="faculty-tags">
        ${interests.length ? interests.map(item => `<span>${clean(item)}</span>`).join("") : `<span>Research interests to add</span>`}
      </div>
      <dl class="faculty-meta">
        <div><dt>Highlights</dt><dd>${profile.highlights.length}</dd></div>
        <div><dt>Linked systems</dt><dd>${linked.length}</dd></div>
      </dl>
      <a class="faculty-email" href="faculty.html?id=${encodeURIComponent(profile.id)}">Open profile <span aria-hidden="true">→</span></a>
    </article>
  `;
};

const renderFaculty = (filter = "all") => {
  const filtered = filter === "all"
    ? registry.faculty
    : registry.faculty.filter(profile => categoriesFor(profile).has(filter));
  document.querySelector("#faculty-grid").innerHTML = filtered.length
    ? filtered.map(renderProfileCard).join("")
    : `<div class="public-empty"><h3>No faculty profiles in this area yet</h3><p>Add research interests to faculty profiles in the registry to populate this expertise filter.</p></div>`;
};

const renderExpertise = () => {
  const areas = new Map();
  registry.faculty.forEach(profile => {
    const interests = profile.researchInterests.length ? profile.researchInterests : ["Research interests to add"];
    interests.forEach(interest => {
      const key = interest.toLowerCase();
      if (!areas.has(key)) areas.set(key, { title: interest, people: [], systems: new Set() });
      const area = areas.get(key);
      area.people.push(profile);
      linkedEquipment(profile).forEach(item => area.systems.add(item.name));
    });
  });

  const cards = [...areas.values()].slice(0, 12).map((area, index) => `
    <article class="expertise-card" style="--facility-bg:${palette[index % palette.length]}">
      <span class="expertise-index">${String(index + 1).padStart(2, "0")}</span>
      <h3>${clean(area.title)}</h3>
      <p>${clean(area.people.slice(0, 3).map(profile => profile.name).join(", ") || "Faculty profiles to verify")}</p>
      <div class="expertise-foot">
        <span><strong>${area.people.length}</strong> faculty</span>
        <span><strong>${area.systems.size}</strong> linked system${area.systems.size === 1 ? "" : "s"}</span>
      </div>
    </article>
  `);

  document.querySelector("#expertise-grid").innerHTML = cards.length
    ? cards.join("")
    : `<div class="public-empty"><h3>No expertise map yet</h3><p>Add faculty research interests to populate this section.</p></div>`;
};

const updateSummary = () => {
  const facultyCount = registry.faculty.length;
  const linkedSystems = new Set(registry.faculty.flatMap(profile => linkedEquipment(profile).map(item => item.id))).size;
  const areaCount = new Set(registry.faculty.flatMap(profile => profile.researchInterests)).size;
  const counts = ["observe", "fabricate", "measure", "model"].reduce((result, category) => {
    result[category] = registry.faculty.filter(profile => categoriesFor(profile).has(category)).length;
    return result;
  }, { all: facultyCount });

  document.querySelector("#faculty-contact-count").textContent = String(facultyCount).padStart(2, "0");
  document.querySelector("#faculty-facility-count").textContent = String(registry.facilities.length).padStart(2, "0");
  document.querySelector("#faculty-system-count").textContent = String(linkedSystems).padStart(2, "0");
  document.querySelector("#snapshot-faculty-count").textContent = String(facultyCount).padStart(2, "0");
  document.querySelector("#snapshot-area-count").textContent = String(areaCount).padStart(2, "0");
  document.querySelector("#snapshot-linked-count").textContent = String(linkedSystems).padStart(2, "0");

  Object.entries(counts).forEach(([category, count]) => {
    const target = document.querySelector(`[data-faculty-filter-count="${category}"]`);
    if (target) target.textContent = String(count).padStart(2, "0");
  });

  document.querySelector("#faculty-data-status").textContent = registryAvailable ? "Live registry" : "Prototype data";
  document.querySelector("#faculty-data-message").textContent = fallbackMode
    ? "Showing placeholder faculty profiles until verified faculty records are added."
    : "Showing public faculty profiles from the shared registry.";
  document.querySelector("#faculty-status-summary").textContent = `${facultyCount} faculty profile${facultyCount === 1 ? "" : "s"} with ${areaCount} research interest area${areaCount === 1 ? "" : "s"} and ${linkedSystems} linked public system${linkedSystems === 1 ? "" : "s"}.`;
};

const listMarkup = (title, items) => `
  <section class="profile-panel">
    <p class="section-index">${clean(title)}</p>
    <ul>${items.length ? items.map(item => `<li>${clean(item)}</li>`).join("") : `<li>Content to add</li>`}</ul>
  </section>
`;

const renderProfilePage = profile => {
  const linked = linkedEquipment(profile);
  const facilities = [...new Set(linked.map(item => facilityById(item.facilityId)?.name).filter(Boolean))];
  const links = externalLinks(profile);
  document.title = `${profile.name} · Faculty Profile`;
  document.querySelector("#main").innerHTML = `
    <section id="top" class="faculty-profile-hero" style="--faculty-color:${safeColor(profile.color, palette[0])}">
      <div>
        <p class="eyebrow"><span>Faculty profile</span><span>${clean(profile.sample ? "Needs verification" : "Research infographic")}</span></p>
        <h1>${clean(profile.name)}</h1>
        <p class="hero-intro">${clean(profile.title || "Title to verify")}</p>
        <p class="profile-bio">${clean(profile.bio || "Biography and research profile content can be added in the faculty registry.")}</p>
        <div class="profile-actions">
          ${validEmail(profile.email) ? `<a class="button button-primary" href="mailto:${clean(profile.email)}">Email faculty <span aria-hidden="true">↗</span></a>` : ""}
          <a class="text-link" href="faculty.html#directory">Back to faculty directory <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="profile-orbit" aria-hidden="true">
        <span>${clean(initialsFor(profile.name))}</span>
        <i></i><i></i><i></i>
      </div>
    </section>
    <section class="signal-strip" aria-label="Faculty profile summary">
      <p class="section-index">Profile snapshot</p>
      <div class="signal-grid">
        <div><strong>${String(profile.researchInterests.length).padStart(2, "0")}</strong><span>research interests</span></div>
        <div><strong>${String(profile.highlights.length).padStart(2, "0")}</strong><span>highlights</span></div>
        <div><strong>${String(linked.length).padStart(2, "0")}</strong><span>linked systems</span></div>
        <p>${clean(facilities.join(" · ") || "Facility relationships can be linked through equipment ownership or matching research interests.")}</p>
      </div>
    </section>
    <section class="profile-sections section-shell">
      ${listMarkup("Research interests", profile.researchInterests)}
      ${listMarkup("Highlights", profile.highlights)}
      ${listMarkup("Activities", profile.activities)}
      ${listMarkup("Recognitions", profile.recognitions)}
    </section>
    <section class="faculty-expertise section-shell">
      <div class="section-heading">
        <p class="section-index">Academic links</p>
        <div>
          <h2>Profiles and<br />research systems.</h2>
          <p>External academic profiles are managed by each faculty member in the registry.</p>
        </div>
      </div>
      <div class="profile-link-grid">
        ${links.length ? links.map(link => `<a href="${clean(link.url)}" target="_blank" rel="noopener">${clean(link.label)} <span aria-hidden="true">↗</span></a>`).join("") : `<span>No academic profile links have been added yet.</span>`}
      </div>
      <div class="profile-equipment-grid">
        ${linked.length ? linked.map(item => `<article><span>${clean(item.category)}</span><h3>${clean(item.name)}</h3><p>${clean(item.researchGroup || item.category)}</p></article>`).join("") : `<article><span>Equipment</span><h3>No linked equipment yet</h3><p>This faculty profile still appears in the directory without equipment ownership.</p></article>`}
      </div>
    </section>
  `;
};

const bindInteractions = () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-nav");
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    navigation.classList.toggle("is-open", !open);
  });
  navigation.addEventListener("click", event => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });

  document.querySelectorAll("#faculty-filters .filter").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("#faculty-filters .filter").forEach(item => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
      renderFaculty(button.dataset.filter);
    });
  });
};

const bootFacultyPage = async () => {
  registry = await loadFacultyRegistry();
  const profileId = new URLSearchParams(window.location.search).get("id");
  bindInteractions();
  if (profileId) {
    const profile = registry.faculty.find(item => item.id === profileId);
    if (profile) {
      renderProfilePage(profile);
      return;
    }
  }
  updateSummary();
  renderFaculty();
  renderExpertise();
};

bootFacultyPage();
