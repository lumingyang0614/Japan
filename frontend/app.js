const API_BASE = `${window.location.origin}/api`;

const citySelect = document.getElementById("city");
const areaSelect = document.getElementById("area");
const eraSelect = document.getElementById("era");
const results = document.getElementById("results");
const submit = document.getElementById("submit");
const sample = document.getElementById("sample");
const heroEra = document.getElementById("hero-era");
const mapFocus = document.getElementById("map-focus");
const mapCity = document.getElementById("map-city");
const mapGrid = document.getElementById("map-grid");
const timeline = document.getElementById("timeline");
const areaGrid = document.getElementById("area-grid");

async function loadSelect(endpoint, select, key, params = "") {
  const response = await fetch(`${API_BASE}/${endpoint}${params}`);
  if (!response.ok) {
    return;
  }
  const data = await response.json();
  const options = data[key] || [];
  options.forEach((item) => {
    const value = typeof item === "string" ? item : item.name;
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

async function loadCities() {
  if (!citySelect) {
    return;
  }
  const response = await fetch(`${API_BASE}/cities`);
  if (!response.ok) {
    return;
  }
  const data = await response.json();
  const cities = data.cities || [];
  citySelect.innerHTML = "";
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
  citySelect.value = "Tokyo";
}

async function loadCityDetail(city) {
  const response = await fetch(`${API_BASE}/cities/${city}`);
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data.city || null;
}

function setMapPoints(areas) {
  if (!mapGrid) {
    return;
  }
  mapGrid.innerHTML = "";
  const entries = Object.entries(areas || {});
  if (!entries.length) {
    return;
  }
  const lats = entries.map(([, area]) => area.coords.lat);
  const lngs = entries.map(([, area]) => area.coords.lng);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);
  entries.forEach(([name, area]) => {
    const latRange = maxLat - minLat || 1;
    const lngRange = maxLng - minLng || 1;
    const x = ((area.coords.lng - minLng) / lngRange) * 80 + 10;
    const y = (1 - (area.coords.lat - minLat) / latRange) * 80 + 10;
    const point = document.createElement("div");
    point.className = "map-point";
    point.style.setProperty("--x", `${x.toFixed(1)}%`);
    point.style.setProperty("--y", `${y.toFixed(1)}%`);
    point.textContent = name;
    point.addEventListener("click", () => {
      areaSelect.value = name;
      if (mapFocus) {
        mapFocus.textContent = `Focus: ${name}`;
      }
    });
    mapGrid.appendChild(point);
  });
}

async function renderTimeline() {
  if (!timeline) {
    return;
  }
  const city = citySelect?.value || "Tokyo";
  const response = await fetch(`${API_BASE}/eras?city=${encodeURIComponent(city)}`);
  if (!response.ok) {
    return;
  }
  const data = await response.json();
  timeline.innerHTML = "";
  (data.eras || []).forEach((era) => {
    const card = document.createElement("button");
    card.className = "timeline-card";
    card.type = "button";
    card.innerHTML = `<span>${era.range}</span><strong>${era.name}</strong><p>${era.tagline}</p>`;
    card.addEventListener("click", () => {
      eraSelect.value = era.name;
      if (heroEra) {
        heroEra.textContent = era.name;
      }
    });
    timeline.appendChild(card);
  });
}

async function renderAreas() {
  if (!areaGrid) {
    return;
  }
  const city = citySelect?.value || "Tokyo";
  const cityDetail = await loadCityDetail(city);
  if (!cityDetail) {
    return;
  }
  areaGrid.innerHTML = "";
  Object.entries(cityDetail.areas || {}).forEach(([name, area]) => {
    const card = document.createElement("div");
    card.className = "area-card";
    const tags = (area.themes || [])
      .map((tag) => `<span class="area-tag">${tag}</span>`)
      .join("");
    card.innerHTML = `
      <h3>${name}</h3>
      <p>${area.description}</p>
      <div class="area-tags">${tags}</div>
      <p class="area-meta">Highlights: ${(area.highlights || []).join(", ")}</p>
      <p class="area-meta">Culture: ${(area.culture || []).join(", ")}</p>
    `;
    card.addEventListener("click", () => {
      areaSelect.value = name;
      if (mapFocus) {
        mapFocus.textContent = `Focus: ${name}`;
      }
    });
    areaGrid.appendChild(card);
  });
  setMapPoints(cityDetail.areas);
  if (mapCity) {
    mapCity.textContent = `Map mode: ${cityDetail.city}`;
  }
}

function renderResults(payload) {
  results.innerHTML = "";
  if (!payload || !payload.results) {
    results.textContent = "No results yet.";
    return;
  }
  payload.results.forEach((entry) => {
    const card = document.createElement("div");
    card.className = "result-card";
    const title = document.createElement("h3");
    title.textContent = entry.agent;
    const pre = document.createElement("pre");
    pre.textContent = JSON.stringify(entry.payload, null, 2);
    card.appendChild(title);
    card.appendChild(pre);
    results.appendChild(card);
  });
}

async function runQuery() {
  const payload = {
    question: document.getElementById("question").value || null,
    city: citySelect?.value || "Tokyo",
    area: areaSelect.value || null,
    era: eraSelect.value || null,
    interest: document.getElementById("interest").value || null,
    intent: document.getElementById("intent").value || null,
  };
  if (heroEra) {
    heroEra.textContent = payload.era || "Edo";
  }
  const response = await fetch(`${API_BASE}/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    results.textContent = `Request failed (${response.status}).`;
    return;
  }
  const data = await response.json();
  renderResults(data);
}

submit.addEventListener("click", runQuery);
if (sample) {
  sample.addEventListener("click", () => {
    document.getElementById("question").value =
      "What did Asakusa look like during the Edo era?";
    citySelect.value = "Tokyo";
    areaSelect.value = "Asakusa";
    eraSelect.value = "Edo";
    document.getElementById("interest").value = "history";
    document.getElementById("intent").value = "";
    runQuery();
  });
}

async function refreshCity() {
  const city = citySelect?.value || "Tokyo";
  areaSelect.innerHTML = '<option value="">--</option>';
  eraSelect.innerHTML = '<option value="">--</option>';
  await loadSelect("areas", areaSelect, "areas", `?city=${encodeURIComponent(city)}`);
  await loadSelect("eras", eraSelect, "eras", `?city=${encodeURIComponent(city)}`);
  await renderTimeline();
  await renderAreas();
}

loadCities().then(refreshCity);
if (citySelect) {
  citySelect.addEventListener("change", refreshCity);
}
