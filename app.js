const records = [
  { id: "DEMO-EMP-001", role: "Site Coordinator", nationality: "Guinean", document: "Passport", number: "DEMO-P-1001", expiry: "2026-07-28", status: "Expiring soon" },
  { id: "DEMO-EMP-002", role: "Planning Engineer", nationality: "Chinese", document: "Work permit", number: "DEMO-WP-2002", expiry: "2026-11-14", status: "Compliant" },
  { id: "DEMO-EMP-003", role: "HSE Officer", nationality: "Senegalese", document: "Residence permit", number: "DEMO-RP-3003", expiry: "2026-07-21", status: "Action required" },
  { id: "DEMO-EMP-004", role: "Interpreter", nationality: "Guinean", document: "Visa", number: "DEMO-V-4004", expiry: "2026-10-08", status: "Compliant" },
  { id: "DEMO-EMP-005", role: "QA/QC Engineer", nationality: "Moroccan", document: "Work permit", number: "DEMO-WP-5005", expiry: "2026-08-10", status: "Expiring soon" },
  { id: "DEMO-EMP-006", role: "Logistics Assistant", nationality: "Guinean", document: "Passport", number: "DEMO-P-6006", expiry: "2027-02-18", status: "Compliant" },
  { id: "DEMO-EMP-007", role: "Survey Engineer", nationality: "Chinese", document: "Visa", number: "DEMO-V-7007", expiry: "2026-12-03", status: "Compliant" },
  { id: "DEMO-EMP-008", role: "Camp Supervisor", nationality: "Guinean", document: "Residence permit", number: "Not provided", expiry: "—", status: "Action required" }
];

const metrics = [
  { icon: "◎", label: "Demo employees", value: records.length, note: "100% fictional" },
  { icon: "✓", label: "Compliant records", value: 5, note: "+2 this month" },
  { icon: "◷", label: "Expiring soon", value: 2, note: "within 30 days" },
  { icon: "!", label: "Action required", value: 2, note: "prioritize today" }
];

const attention = records.filter(record => record.status !== "Compliant").slice(0, 3);

function statusClass(status) {
  return status === "Compliant" ? "" : status === "Expiring soon" ? "warning" : "danger";
}

function renderMetrics() {
  document.querySelector("#metrics-grid").innerHTML = metrics.map(item => `
    <article class="metric-card"><span class="metric-icon">${item.icon}</span><div><small>${item.label}</small><strong>${item.value}</strong><em>${item.note}</em></div></article>
  `).join("");
}

function renderAttention() {
  document.querySelector("#attention-list").innerHTML = attention.map(item => `
    <article class="attention-item ${item.status === "Action required" ? "danger" : ""}">
      <span class="attention-icon">${item.status === "Action required" ? "!" : "◷"}</span>
      <div><strong>${item.id} · ${item.document}</strong><p>${item.status === "Action required" ? "Missing or urgent documentation" : `Expires ${item.expiry}`}</p></div>
      <time>${item.status}</time>
    </article>
  `).join("");
}

function renderChart() {
  const chart = [{m:"Jul",e:3,r:1},{m:"Aug",e:2,r:1},{m:"Sep",e:1,r:1},{m:"Oct",e:2,r:2},{m:"Nov",e:1,r:0},{m:"Dec",e:2,r:1}];
  document.querySelector("#bar-chart").innerHTML = chart.map(x => `<div class="bar-group"><div class="bars"><i class="bar" style="height:${x.e*27}px"></i><i class="bar renewal" style="height:${x.r*27}px"></i></div><span>${x.m}</span></div>`).join("");
}

function renderRecords(list = records) {
  document.querySelector("#records-body").innerHTML = list.length ? list.map(item => `
    <tr><td><strong>${item.id}</strong><small>${item.number}</small></td><td>${item.role}</td><td>${item.nationality}</td><td>${item.document}</td><td>${item.expiry}</td><td><span class="status ${statusClass(item.status)}">${item.status}</span></td></tr>
  `).join("") : `<tr><td colspan="6">No synthetic records match this filter.</td></tr>`;
}

function renderCompliance() {
  const risks = [
    { level:"high", icon:"!", title:"2 urgent actions", copy:"One residence document is nearing expiry and one record is incomplete." },
    { level:"medium", icon:"◷", title:"2 renewals due", copy:"Two fictional documents enter the 30-day renewal window." },
    { level:"low", icon:"✓", title:"5 records healthy", copy:"No immediate action is required for five demo records." }
  ];
  document.querySelector("#risk-grid").innerHTML = risks.map(r => `<article class="risk-card ${r.level}"><span>${r.icon}</span><h3>${r.title}</h3><p>${r.copy}</p></article>`).join("");
  const actions = [
    ["Validate DEMO-EMP-008 record", "Confirm which fictional residence document should be represented."],
    ["Start DEMO-EMP-003 renewal", "Prepare a demo renewal checklist before the displayed expiry date."],
    ["Review upcoming passport expiry", "Check the synthetic passport record for DEMO-EMP-001."],
    ["Share weekly demo summary", "Generate an anonymized status update for management." ]
  ];
  document.querySelector("#action-timeline").innerHTML = actions.map((a,i) => `<div class="timeline-item"><span class="timeline-number">${i+1}</span><div><strong>${a[0]}</strong><p>${a[1]}</p></div><button data-view-link="${i===3 ? "notifications" : "workforce"}">Open</button></div>`).join("");
}

const titles = { dashboard:"Good morning", workforce:"Workforce records", compliance:"Compliance center", assistant:"BridgeHR Assistant", notifications:"Multilingual notices" };
function showView(name) {
  document.querySelectorAll(".view").forEach(el => el.classList.toggle("active", el.id === `${name}-view`));
  document.querySelectorAll(".nav-item").forEach(el => el.classList.toggle("active", el.dataset.view === name));
  document.querySelector("#page-title").textContent = titles[name];
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function assistantAnswer(question) {
  const q = question.toLowerCase();
  if (q.includes("30") || q.includes("expire")) return "Two demo records expire within the next 30 days: DEMO-EMP-001 (passport) and DEMO-EMP-003 (residence permit). DEMO-EMP-005 follows shortly after the 30-day window.";
  if (q.includes("missing") || q.includes("incomplete")) return "DEMO-EMP-008 has an incomplete residence permit record. The document number and expiry date are intentionally marked as not provided in this synthetic dataset.";
  if (q.includes("risk") || q.includes("summary") || q.includes("compliance")) return "The demo portfolio is 94% compliant. Priorities are the urgent residence-permit follow-up for DEMO-EMP-003, completion of DEMO-EMP-008, and two planned renewals. No real employee data was used for this summary.";
  if (q.includes("visa")) return "Both fictional visa records are currently compliant: DEMO-EMP-004 expires on 2026-10-08 and DEMO-EMP-007 expires on 2026-12-03.";
  return "I can help with expiry windows, missing documents, visa status and a compliance risk summary. This MVP intentionally limits answers to the bundled synthetic dataset.";
}

function addMessage(text, type) {
  const messages = document.querySelector("#chat-messages");
  const el = document.createElement("div");
  el.className = `message ${type === "user" ? "user-message" : "assistant-message"}`;
  el.innerHTML = type === "user" ? `<p></p>` : `<span class="message-icon">✦</span><div><p></p><small>BridgeHR AI · just now</small></div>`;
  el.querySelector("p").textContent = text;
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
}

const notices = {
  en: ({ id, type, expiry }) => `Subject: ${type} reminder — ${id}\n\nDear ${id},\n\nThis is a demonstration reminder regarding your ${type.toLowerCase()}. The synthetic record currently shows an expiry date of ${expiry}. Please review the required demo documents and update the fictional record when ready.\n\nThis notice was generated in a synthetic-data environment and is not intended for a real employee.\n\nBest regards,\nBridgeHR Demo Team`,
  fr: ({ id, type, expiry }) => `Objet : Rappel — ${type} — ${id}\n\nBonjour ${id},\n\nCeci est un rappel de démonstration concernant votre dossier « ${type} ». La date d’expiration indiquée dans l’enregistrement fictif est le ${expiry}. Merci de vérifier les pièces de démonstration requises et de mettre à jour le dossier fictif.\n\nCe message a été généré dans un environnement utilisant uniquement des données synthétiques. Il ne concerne aucun salarié réel.\n\nCordialement,\nÉquipe de démonstration BridgeHR`,
  zh: ({ id, type, expiry }) => `主题：${type}提醒——${id}\n\n${id}，您好：\n\n这是一封演示用提醒。系统中的虚构记录显示，相关“${type}”文件到期日为 ${expiry}。请核对演示材料，并在准备完成后更新虚构记录。\n\n本通知由纯合成数据环境生成，不对应任何真实员工。\n\n此致\nBridgeHR 演示团队`
};

function generateNotice() {
  const record = records.find(r => r.id === document.querySelector("#notice-recipient").value) || records[0];
  const type = document.querySelector("#notice-type").value;
  const lang = document.querySelector("#notice-language").value;
  document.querySelector("#notice-output").textContent = notices[lang]({ id: record.id, type, expiry: record.expiry });
}

function toast(message) {
  const el = document.querySelector("#toast"); el.textContent = message; el.classList.add("show"); setTimeout(() => el.classList.remove("show"), 2200);
}

document.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => showView(button.dataset.view)));
document.addEventListener("click", event => {
  const viewLink = event.target.closest("[data-view-link]"); if (viewLink) showView(viewLink.dataset.viewLink);
  if (event.target.closest("[data-open-assistant]")) showView("assistant");
});
document.querySelector("#record-search").addEventListener("input", filterRecords);
document.querySelector("#status-filter").addEventListener("change", filterRecords);
function filterRecords() {
  const query = document.querySelector("#record-search").value.toLowerCase(); const status = document.querySelector("#status-filter").value;
  renderRecords(records.filter(r => (status === "all" || r.status === status) && Object.values(r).some(value => String(value).toLowerCase().includes(query))));
}
document.querySelector("#chat-form").addEventListener("submit", event => { event.preventDefault(); const input = document.querySelector("#chat-input"); const q = input.value.trim(); if (!q) return; addMessage(q,"user"); input.value=""; setTimeout(() => addMessage(assistantAnswer(q),"assistant"), 350); });
document.querySelectorAll(".prompt-chips button").forEach(button => button.addEventListener("click", () => { addMessage(button.textContent,"user"); setTimeout(() => addMessage(assistantAnswer(button.textContent),"assistant"),350); }));
document.querySelector("#notice-recipient").innerHTML = records.map(r => `<option>${r.id}</option>`).join("");
document.querySelector("#generate-notice").addEventListener("click", () => { generateNotice(); toast("Synthetic notice generated"); });
document.querySelector("#copy-notice").addEventListener("click", async () => { await navigator.clipboard.writeText(document.querySelector("#notice-output").textContent); toast("Notice copied"); });
document.querySelector("#export-demo").addEventListener("click", () => {
  const csv = ["demo_employee,role,nationality,document,demo_number,expiry,status", ...records.map(r => [r.id,r.role,r.nationality,r.document,r.number,r.expiry,r.status].map(v => `"${v}"`).join(","))].join("\n");
  const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([csv], {type:"text/csv"})); link.download = "bridgehr-synthetic-demo.csv"; link.click(); URL.revokeObjectURL(link.href); toast("Synthetic CSV exported");
});

renderMetrics(); renderAttention(); renderChart(); renderRecords(); renderCompliance(); generateNotice();
