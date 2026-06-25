const REGISTRY_STORAGE_KEY = "sut-physics-equipment-registry-v3";

const fallbackEquipment = [
  {
    id: "EQ-01", category: "observe", name: "Photon Counting Scanning Confocal Microscopy",
    description: "Example system for photon-counting confocal imaging and spatially resolved optical investigation.",
    method: "Confocal imaging", access: "Details to verify", color: "#74dfce", visual: "microscope"
  },
  {
    id: "EQ-02", category: "observe", name: "Fluorescent Life-Time Measurement",
    description: "Example capability for studying fluorescence decay and time-dependent optical response.",
    method: "Lifetime imaging", access: "Details to verify", color: "#8fc3ff", visual: "spectrum"
  },
  {
    id: "EQ-03", category: "observe", name: "Optical Coherence Tomography Design and Applications",
    description: "Example platform for OCT system design, depth-resolved imaging, and application development.",
    method: "Depth imaging", access: "Details to verify", color: "#ff8b5b", visual: "microscope"
  },
  {
    id: "EQ-04", category: "measure", name: "Fourier Transform Infrared Spectroscopy Lab",
    description: "Example laboratory for Fourier-transform infrared spectral measurement and materials analysis.",
    method: "FTIR spectroscopy", access: "Details to verify", color: "#d7ff3f", visual: "spectrum"
  },
  {
    id: "EQ-05", category: "measure", name: "Mid IR Spectroscopy Lab",
    description: "Example laboratory for mid-infrared spectroscopy, optical characterization, and sensing research.",
    method: "Mid-IR analysis", access: "Details to verify", color: "#b59cff", visual: "spectrum"
  },
  {
    id: "EQ-06", category: "measure", name: "Short Pulse Laser Laboratory and Applications",
    description: "Example laboratory for short-pulse laser research, measurement, and application development.",
    method: "Ultrafast lasers", access: "Details to verify", color: "#ffc95c", visual: "detector"
  },
  {
    id: "EQ-07", category: "fabricate", name: "Electrospinning Material Fabrication and Testing",
    description: "Example capability for electrospun material fabrication, preparation, and performance testing.",
    method: "Electrospinning", access: "Details to verify", color: "#74dfce", visual: "layers"
  },
  {
    id: "EQ-08", category: "fabricate", name: "Advanced 3D Printing Lab",
    description: "Example laboratory for additive manufacturing, prototyping, and advanced structure fabrication.",
    method: "3D fabrication", access: "Details to verify", color: "#8fc3ff", visual: "layers"
  },
  {
    id: "EQ-09", category: "measure", name: "Surface Plasmon Analysis",
    description: "Example capability for surface plasmon measurement, interface analysis, and optical sensing.",
    method: "Surface sensing", access: "Details to verify", color: "#ff8b5b", visual: "spectrum"
  },
  {
    id: "EQ-10", category: "model", name: "Quantum Computing Lab",
    description: "Example laboratory for quantum computing research, system design, simulation, and applications.",
    method: "Quantum systems", access: "Details to verify", color: "#d7ff3f", visual: "compute"
  },
  {
    id: "EQ-11", category: "fabricate", name: "Optical Fiber Sensor Fabrication and Testing",
    description: "Example capability for fabricating optical fiber sensors and evaluating their response.",
    method: "Fiber sensors", access: "Details to verify", color: "#b59cff", visual: "layers"
  },
  {
    id: "EQ-12", category: "fabricate", name: "Design of Photonics on Chip Systems",
    description: "Example environment for integrated photonic device and on-chip optical system design.",
    method: "Integrated photonics", access: "Details to verify", color: "#ffc95c", visual: "compute"
  },
  {
    id: "EQ-13", category: "observe", name: "Optical Vein Finder Design",
    description: "Example platform for designing and evaluating optical vein visualization systems.",
    method: "Biomedical imaging", access: "Details to verify", color: "#74dfce", visual: "microscope"
  },
  {
    id: "EQ-14", category: "measure", name: "Ultra High Speed Optical Data Acquisition Design and Testing",
    description: "Example capability for designing and testing high-speed optical acquisition architectures.",
    method: "High-speed data", access: "Details to verify", color: "#8fc3ff", visual: "detector"
  },
  {
    id: "EQ-15", category: "measure", name: "Optical Reflectance and Transmittance Analysis",
    description: "Example capability for wavelength-dependent reflectance and transmittance characterization.",
    method: "Optical analysis", access: "Details to verify", color: "#ff8b5b", visual: "spectrum"
  },
  {
    id: "EQ-16", category: "measure", name: "High Speed Frequency Swept Laser and Applications",
    description: "Example platform for swept-frequency laser design, high-speed operation, and applications.",
    method: "Swept lasers", access: "Details to verify", color: "#d7ff3f", visual: "detector"
  },
  {
    id: "EQ-17", category: "model", name: "Deep Learning Lab",
    description: "Example laboratory for developing, training, and evaluating deep learning models for research applications.",
    method: "Deep learning", access: "Details to verify", color: "#b59cff", visual: "compute"
  },
  {
    id: "EQ-18", category: "observe", name: "Machine Vision Lab",
    description: "Example laboratory for image acquisition, computer vision, and machine-assisted visual analysis.",
    method: "Machine vision", access: "Details to verify", color: "#74dfce", visual: "microscope"
  },
  {
    id: "EQ-19", category: "model", name: "AI-Assisted Medical Diagnosis System Design and Implementation Lab",
    description: "Example laboratory for designing and implementing research systems that investigate AI-assisted medical diagnosis.",
    method: "Medical AI systems", access: "Details to verify", color: "#ff8b5b", visual: "compute"
  }
];

const clean = value => String(value ?? "").replace(/[&<>'"]/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
}[character]));

const publicCategory = item => {
  const text = `${item.name} ${item.category}`.toLowerCase();
  if (text.includes("electrosp") || text.includes("3d print") || text.includes("fabricat") || text.includes("photonics on chip") || text.includes("fiber sensor")) return "fabricate";
  if (text.includes("microscop") || text.includes("tomograph") || text.includes("vein finder") || text.includes("machine vision") || item.category === "Imaging") return "observe";
  if (item.category === "Computing" || text.includes("deep learning") || text.includes("quantum computing") || text.includes("medical diagnosis")) return "model";
  return "measure";
};

const publicVisual = item => {
  const text = `${item.name} ${item.category}`.toLowerCase();
  if (text.includes("fabricat") || text.includes("3d print") || text.includes("electrosp") || text.includes("fiber") || text.includes("chip")) return "layers";
  if (text.includes("comput") || text.includes("learning") || text.includes("quantum") || text.includes("diagnosis")) return "compute";
  if (text.includes("microscop") || text.includes("tomograph") || text.includes("vision") || text.includes("vein")) return "microscope";
  if (text.includes("laser") || text.includes("data acquisition")) return "detector";
  return "spectrum";
};

const palette = ["#74dfce", "#8fc3ff", "#ff8b5b", "#d7ff3f", "#b59cff", "#ffc95c"];
let publicFacilities = [];
let registryAvailable = false;

const loadPublicEquipment = () => {
  try {
    const stored = localStorage.getItem(REGISTRY_STORAGE_KEY);
    if (!stored) return fallbackEquipment;
    const registry = JSON.parse(stored);
    if (!Array.isArray(registry.equipment) || !Array.isArray(registry.facilities)) return fallbackEquipment;
    registryAvailable = true;
    const visible = registry.equipment.filter(item => item.reviewStatus === "Verified" && item.publicReady === true);
    publicFacilities = registry.facilities;
    return visible.map((item, index) => {
      const facility = registry.facilities.find(candidate => candidate.id === item.facilityId);
      return {
        ...item,
        id: item.id || `EQ-${index + 1}`,
        category: publicCategory(item),
        method: item.researchGroup || item.category || "Research system",
        access: item.access || "Contact facility",
        color: facility?.color || palette[index % palette.length],
        visual: publicVisual(item),
        facilityName: facility?.name || "Physics Program facility",
        fromRegistry: true
      };
    });
  } catch {
    return fallbackEquipment;
  }
};

let equipment = loadPublicEquipment();

const visualFor = (type, color) => {
  const common = `viewBox="0 0 640 260" role="img" aria-label="Abstract ${type} instrument illustration"`;
  const visuals = {
    microscope: `<svg ${common}><rect width="640" height="260" fill="${color}"/><g fill="none" stroke="#15261f" stroke-width="3"><circle cx="210" cy="130" r="72"/><circle cx="210" cy="130" r="43"/><path d="M275 183h130V72h-78M405 120h95v63H365M126 203h345"/><path d="m310 48 52 52-22 22-52-52z"/></g><circle cx="210" cy="130" r="12" fill="#15261f"/><g fill="#15261f"><circle cx="512" cy="70" r="6"/><circle cx="540" cy="100" r="3"/><circle cx="520" cy="132" r="9"/></g></svg>`,
    spectrum: `<svg ${common}><rect width="640" height="260" fill="${color}"/><g fill="none" stroke="#15261f"><path d="M0 200 C80 200 80 60 160 60s80 140 160 140S400 60 480 60s80 140 160 140" stroke-width="3"/><path d="M0 220 C70 220 100 105 160 105s95 115 160 115S390 105 480 105s95 115 160 115" stroke-width="1"/></g><g stroke="#15261f"><path d="M110 22v216M210 22v216M310 22v216M410 22v216M510 22v216" opacity=".22"/><path d="M78 130h484"/></g><circle cx="410" cy="130" r="13" fill="#15261f"/></svg>`,
    layers: `<svg ${common}><rect width="640" height="260" fill="${color}"/><g stroke="#15261f" stroke-width="2"><path d="m80 172 220-90 260 82-220 82z" fill="#f3f0e8"/><path d="m80 133 220-90 260 82-220 82z" fill="${color}"/><path d="m160 96 140-53 160 49-140 56z" fill="#15261f"/></g><g fill="#f3f0e8"><circle cx="280" cy="80" r="5"/><circle cx="321" cy="96" r="5"/><circle cx="360" cy="78" r="5"/></g></svg>`,
    cryogenic: `<svg ${common}><rect width="640" height="260" fill="${color}"/><g fill="none" stroke="#15261f" stroke-width="3"><path d="M220 22v68c0 25-25 38-25 72a65 65 0 0 0 130 0c0-34-25-47-25-72V22z"/><circle cx="260" cy="162" r="38" fill="#15261f"/><path d="M365 55h140M365 90h95M365 125h120M365 160h70M365 195h110"/></g><path d="M260 122v-78" stroke="#f3f0e8" stroke-width="6"/></svg>`,
    compute: `<svg ${common}><rect width="640" height="260" fill="${color}"/><g fill="none" stroke="#15261f"><path d="M75 50h490v160H75z" stroke-width="3"/><path d="M75 90h490M200 50v160M380 90v120"/><g stroke-width="3"><path d="m230 165 35-45 35 28 45-38"/><circle cx="265" cy="120" r="5" fill="#15261f"/><circle cx="345" cy="110" r="5" fill="#15261f"/></g></g><g fill="#15261f"><circle cx="100" cy="70" r="4"/><circle cx="115" cy="70" r="4"/><circle cx="130" cy="70" r="4"/></g></svg>`,
    detector: `<svg ${common}><rect width="640" height="260" fill="${color}"/><g fill="none" stroke="#15261f"><circle cx="210" cy="130" r="83" stroke-width="3"/><circle cx="210" cy="130" r="54"/><circle cx="210" cy="130" r="17" fill="#15261f"/><path d="M293 130h110l28-58 30 116 30-58h90" stroke-width="3"/></g><g fill="#15261f"><circle cx="110" cy="40" r="5"/><circle cx="342" cy="58" r="9"/><circle cx="350" cy="208" r="4"/></g></svg>`
  };
  return visuals[type];
};

const iconFor = name => {
  const text = name.toLowerCase();
  const svg = path => `<svg aria-hidden="true" viewBox="0 0 24 24">${path}</svg>`;
  if (text.includes("confocal")) return svg(`<circle cx="9" cy="9" r="4"/><path d="m12 12 6 6M15 18h5M5 20h10M13 4l4 4"/>`);
  if (text.includes("life-time")) return svg(`<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2M4 12h2M18 12h2"/>`);
  if (text.includes("coherence")) return svg(`<path d="M3 12c3-6 6-6 9 0s6 6 9 0M3 17c3-4 6-4 9 0s6 4 9 0"/>`);
  if (text.includes("infrared") || text.includes("mid ir")) return svg(`<path d="M3 16c3 0 3-8 6-8s3 8 6 8 3-8 6-8M4 20h16"/>`);
  if (text.includes("laser")) return svg(`<path d="M3 12h13M16 7v10M19 9l2-2M19 15l2 2M19 12h3"/>`);
  if (text.includes("electrosp")) return svg(`<path d="M4 6h5l2 6 3-6h6M4 18c4-4 12-4 16 0"/>`);
  if (text.includes("3d print")) return svg(`<path d="m12 3 8 4-8 4-8-4 8-4Zm-8 4v9l8 5 8-5V7M12 11v10"/>`);
  if (text.includes("plasmon")) return svg(`<circle cx="7" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M10 12h4M3 6c6 3 12 3 18 0M3 18c6-3 12-3 18 0"/>`);
  if (text.includes("quantum")) return svg(`<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>`);
  if (text.includes("fiber")) return svg(`<path d="M3 6c6 0 6 12 12 12h6M3 12h6c6 0 6-6 12-6"/>`);
  if (text.includes("chip")) return svg(`<rect x="6" y="6" width="12" height="12"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M18 9h4M2 15h4M18 15h4"/>`);
  if (text.includes("vein") || text.includes("medical")) return svg(`<path d="M12 20s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.2-8 11-8 11Z"/><path d="M8 12h2l1-3 2 6 1-3h2"/>`);
  if (text.includes("data acquisition")) return svg(`<path d="M3 17h4l2-10 4 12 2-7 2 5h4"/>`);
  if (text.includes("reflectance")) return svg(`<path d="M4 18 10 6l4 12 6-12M2 20h20"/>`);
  if (text.includes("deep learning")) return svg(`<circle cx="5" cy="7" r="2"/><circle cx="5" cy="17" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="19" cy="9" r="2"/><circle cx="19" cy="15" r="2"/><path d="m7 7 3-2M7 8l3 4M7 16l3-4M7 17l3 2M14 5l3 4M14 12l3-3M14 12l3 3M14 19l3-4"/>`);
  if (text.includes("machine vision")) return svg(`<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>`);
  return svg(`<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4v16"/>`);
};

const grid = document.querySelector("#equipment-grid");

const validImage = image => image?.data?.startsWith("data:image/") ? image : null;

const visualMarkup = item => {
  const feature = validImage(item.featurePhoto);
  if (!feature) return `<span class="equipment-icon">${iconFor(item.name)}</span>${visualFor(item.visual, item.color)}`;
  return `<img class="equipment-feature-photo" src="${feature.data}" alt="${clean(feature.alt || `${item.name} equipment`)}" /><span class="equipment-icon">${iconFor(item.name)}</span>`;
};

const galleryMarkup = item => {
  const gallery = Array.isArray(item.gallery) ? item.gallery.filter(validImage).slice(0, 4) : [];
  if (!gallery.length) return "";
  return `<div class="public-gallery" aria-label="Example use-case gallery">${gallery.map((photo, index) => `<img src="${photo.data}" alt="${clean(photo.alt || `${item.name} gallery image ${index + 1}`)}" />`).join("")}</div>`;
};

const updatePublicSummary = () => {
  const registryMode = registryAvailable;
  const facilityCount = registryMode ? new Set(equipment.map(item => item.facilityId).filter(Boolean)).size : 7;
  const counts = ["observe", "fabricate", "measure", "model"].reduce((result, category) => {
    result[category] = equipment.filter(item => item.category === category).length;
    return result;
  }, { all: equipment.length });

  document.querySelector("#hero-equipment-count").textContent = String(equipment.length).padStart(2, "0");
  document.querySelector("#hero-equipment-label").innerHTML = registryMode ? "verified<br />systems" : "example<br />systems";
  document.querySelector("#snapshot-equipment-count").textContent = String(equipment.length).padStart(2, "0");
  document.querySelector("#snapshot-equipment-label").textContent = registryMode ? "public records" : "example records";
  document.querySelector("#snapshot-facility-count").textContent = String(facilityCount).padStart(2, "0");
  document.querySelector("#snapshot-capability-count").textContent = String(Object.values(counts).slice(1).filter(Boolean).length).padStart(2, "0");
  Object.entries(counts).forEach(([category, count]) => {
    const target = document.querySelector(`[data-filter-count="${category}"]`);
    if (target) target.textContent = String(count).padStart(2, "0");
  });

  document.querySelector("#public-data-status").textContent = registryMode ? "Live registry" : "Prototype data";
  document.querySelector("#public-data-message").textContent = registryMode
    ? "Showing verified equipment approved for the public research profile."
    : "Equipment names and figures below are illustrative. Replace them with verified institutional data.";
};

const renderEquipment = (filter = "all") => {
  const filtered = filter === "all" ? equipment : equipment.filter(item => item.category === filter);
  grid.innerHTML = filtered.length ? filtered.map(item => `
    <article class="equipment-card" data-category="${item.category}">
      <div class="card-top"><span>${clean(item.id)} · ${item.fromRegistry ? "Verified" : "Sample"}</span><span>${clean(item.category)}</span></div>
      <div class="equipment-visual" style="--visual-bg:${item.color}">${visualMarkup(item)}</div>
      ${galleryMarkup(item)}
      <h3>${clean(item.name)}</h3>
      <p>${clean(item.description || "Contact the facility for equipment capabilities and use cases.")}</p>
      <div class="equipment-meta"><span>${clean(item.method)}</span><span>${clean(item.access)}</span></div>
    </article>
  `).join("") : `<div class="public-empty"><h3>No public records in this category</h3><p>Verify a registry record and mark it as a candidate for the public facility profile.</p></div>`;
};

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    renderEquipment(button.dataset.filter);
  });
});

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

window.addEventListener("storage", event => {
  if (event.key !== REGISTRY_STORAGE_KEY) return;
  equipment = loadPublicEquipment();
  updatePublicSummary();
  const activeFilter = document.querySelector(".filter.is-active")?.dataset.filter || "all";
  renderEquipment(activeFilter);
});

updatePublicSummary();
renderEquipment();
