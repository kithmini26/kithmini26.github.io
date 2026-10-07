/* ==========================================================================
   VIMARSHANA KITHMINI - PORTFOLIO INTERACTIVE APP SCRIPT
   ========================================================================== */

// Data Store extracted from 4 tailored CV versions
const PORTFOLIO_DATA = {
  profile: {
    name: "Vimarshana Kithmini",
    title: "Software Engineering Undergraduate",
    degree: "BSc (Hons) in Software Engineering",
    university: "Sri Lanka Technology Campus (SLTC)",
    gpa: "3.64 / 4.00",
    email: "dissanayakekithmini@gmail.com",
    location: "Bandarawela, Sri Lanka",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      hackerrank: "https://hackerrank.com"
    }
  },

  roles: {
    "data-analyst": {
      title: "Data Analyst & BI",
      subtitle: "EDA • Statistical Analysis • Power BI • Machine Learning",
      summary: "Final year Software Engineering undergraduate with a strong foundation in data analysis, statistics, and machine learning, and hands-on experience turning raw datasets into actionable business insights through data cleaning, exploratory data analysis, and visualization using Python, SQL, and Power BI. Detail-oriented and analytical, seeking a Data Analyst Internship to support data-driven decision-making.",
      skillsFocus: ["Data Cleaning", "Exploratory Data Analysis (EDA)", "Power BI Dashboards", "Statistical Modeling", "Python (Pandas/Seaborn)", "SQL & MongoDB"],
      resumeLabel: "Data Analyst Resume (PDF)"
    },
    "business-analyst": {
      title: "Business Analyst",
      subtitle: "Requirements Gathering • Stakeholder Analysis • SDLC • Process Mapping",
      summary: "Final year Software Engineering undergraduate with strong analytical and problem-solving skills, experienced in requirements analysis, stakeholder communication, and data-driven decision-making. Skilled in translating business needs into technical requirements, conducting data analysis using Python and Excel, and working within Agile teams to deliver practical solutions.",
      skillsFocus: ["Requirements Gathering", "Stakeholder Analysis", "Process Mapping", "Agile/Scrum", "Technical Documentation", "User Stories & Backlog"],
      resumeLabel: "Business Analyst Resume (PDF)"
    },
    "qa-engineer": {
      title: "QA & Test Automation",
      subtitle: "Manual Testing • Playwright • Selenium • API Testing • Postman",
      summary: "Final year Software Engineering undergraduate with a strong interest in Quality Assurance and hands-on experience in manual and automation testing, test case design, and defect tracking. Skilled in UI automation using Selenium and Playwright, API testing using Postman, and test management using Qase.io to support quality software delivery.",
      skillsFocus: ["Test Case Execution", "Automation (Playwright/Selenium)", "API Testing (Postman)", "Defect Tracking (Qase.io)", "UAT Support", "Regression Testing"],
      resumeLabel: "QA Engineer Resume (PDF)"
    },
    "project-manager": {
      title: "Project Management",
      subtitle: "Task Coordination • Agile Planning • Risk Tracking • Cross-Functional Leadership",
      summary: "Final-year Software Engineering undergraduate with a strong interest in Project Management and hands-on leadership experience in project planning, task coordination, progress tracking, and team collaboration. Backed by technical background in development and QA, capable of aligning technical teams with project goals and deadlines.",
      skillsFocus: ["Project Planning & Coordination", "Agile & Sprint Facilitation", "Defect & Issue Tracking", "Risk Management", "Cross-Functional Leadership", "IEEE CS Chapter Chair"],
      resumeLabel: "Project Manager Resume (PDF)"
    }
  },

  projects: [
    {
      id: "loan-xai",
      title: "Loan Approval System with Explainable AI",
      date: "May 2026 - Present",
      category: "ai-ml",
      tags: ["Flutter", "Node.js", "Express", "Python", "Scikit-Learn", "SHAP", "DiCE", "AIF360"],
      image: "assets/loan_xai.png",
      shortDesc: "Decision-support system for consumer microloans in developing-country contexts focusing on transparency and fairness in credit decisions.",
      longDesc: "Developing an end-to-end loan approval decision-support system tailored for consumer microloans in developing economies. The solution combines a Flutter mobile/web frontend and a Node.js/Express REST backend with an advanced Python AI fairness and explainability layer. Built with Scikit-learn for ML model training, SHAP for feature attribution, DiCE for counterfactual explanations, and AIF360 to evaluate and mitigate demographic bias.",
      highlights: [
        "Architected fair machine learning pipelines to prevent algorithmic bias across loan applicant demographics.",
        "Implemented SHAP feature importance & DiCE counterfactual analysis for transparent credit decision reasoning.",
        "Engineered Flutter frontend for intuitive user credit scoring visualization.",
        "Hands-on requirement analysis, feature understanding, model interpretation, and fairness evaluation."
      ],
      links: { demo: "#", code: "https://github.com" }
    },
    {
      id: "smartcare-ai",
      title: "SmartCare: AI-Based Disease Risk Classification System",
      date: "August 2026",
      category: "ai-ml",
      tags: ["Python", "Scikit-Learn", "XGBoost", "SHAP", "Streamlit"],
      image: "assets/smartcare.png",
      shortDesc: "Machine learning pipeline for hospital disease-risk classification with SHAP explainability and live Streamlit deployment.",
      longDesc: "Built an end-to-end machine learning pipeline for hospital disease-risk classification comparing Logistic Regression, Random Forest, and XGBoost models. Applied SHAP for model explainability and conducted rigorous split-then-scale preprocessing to prevent data leakage. Identified a critical fairness gap in risk coverage across age groups and deployed a live interactive prototype using Streamlit.",
      highlights: [
        "Engineered data cleaning & split-then-scale preprocessing pipeline preventing model leakage.",
        "Achieved high diagnostic accuracy using XGBoost and evaluated feature contributions with SHAP.",
        "Uncovered age-group fairness disparities and proposed mitigation strategies in the technical report.",
        "Deployed an interactive Streamlit web dashboard for live patient risk predictions."
      ],
      links: { demo: "https://streamlit.io", code: "https://github.com" }
    },
    {
      id: "gnn-node-classification",
      title: "Node Classification on OGBN-Arxiv using Graph Neural Networks",
      date: "August 2026",
      category: "ai-ml",
      tags: ["Python", "PyTorch", "PyTorch Geometric", "GCN", "GAT", "Google Colab"],
      image: "assets/loan_xai.png",
      shortDesc: "Evaluated Graph Convolutional (GCN) and Graph Attention (GAT) Networks for node classification on citation datasets.",
      longDesc: "Implemented and evaluated Graph Convolutional Network (GCN) and Graph Attention Network (GAT) architectures on the large-scale OGBN-Arxiv citation network dataset. Trained models on GPU in Google Colab, resolved complex framework compatibility challenges, performed systematic hyperparameter tuning, and conducted rigorous benchmark metric comparisons across GNN models.",
      highlights: [
        "Implemented GCN and GAT graph deep learning architectures using PyTorch Geometric.",
        "Trained models on GPU hardware with custom hyperparameter optimization.",
        "Overcame PyTorch dependency compatibility hurdles and optimized evaluation metrics."
      ],
      links: { code: "https://github.com" }
    },
    {
      id: "retail-sales-analysis",
      title: "Retail Sales & Discount Analysis Project",
      date: "July 2026",
      category: "data-analysis",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Power BI", "Data Viz"],
      image: "assets/retail.png",
      shortDesc: "In-depth EDA on 8,400+ Superstore sales records to uncover profitability drivers, pricing erosion, and shipping inefficiencies.",
      longDesc: "Analyzed a public Superstore dataset (8,400 orders) to understand how product category, region, and discounting strategies impact bottom-line profitability. Performed comprehensive data cleaning (imputing missing margins via category medians, removing corrupted records) and feature engineering (order month/year, shipping delays, discount bands). Identified profit erosion caused by excessive discounting and low-margin furniture sales.",
      highlights: [
        "Cleaned and transformed 8,400 sales records with missing margin imputation.",
        "Engineered custom business features including shipping delay and discount tiers.",
        "Identified key profit leakages in furniture category and unoptimized shipping modes.",
        "Formulated actionable pricing, logistics, and regional sales recommendations for executive stakeholders."
      ],
      links: { demo: "#", code: "https://github.com" }
    },
    {
      id: "smart-library",
      title: "Smart Library Management System",
      date: "February 2026",
      category: "web-apps",
      tags: ["Node.js", "Express", "MongoDB", "REST API", "JavaScript", "HTML/CSS", "Postman"],
      image: "assets/smartcare.png",
      shortDesc: "Responsive web application for digital library book search, filtering, and automated borrow/return workflows.",
      longDesc: "Developed a full-stack responsive web platform for managing digital library operations. Built a Node.js/Express REST backend connected to MongoDB to handle book inventories, user accounts, and borrow/return transactions. Created a clean mobile-first UI using HTML, CSS, and vanilla JS, and thoroughly tested REST endpoints with Postman.",
      highlights: [
        "Designed RESTful API endpoints for user authentication and book inventory tracking.",
        "Implemented schema models in MongoDB with validation rules.",
        "Extensively validated request/response payloads and edge cases via Postman."
      ],
      links: { demo: "#", code: "https://github.com" }
    },
    {
      id: "utopia-civic-platform",
      title: "Utopia Civic Engagement Platform",
      date: "July 2025",
      category: "web-apps",
      tags: ["JavaScript", "Leaflet Maps", "Web APIs", "Geolocation", "HTML5", "CSS3"],
      image: "assets/retail.png",
      shortDesc: "Role-based smart city web platform enabling citizen incident reporting, interactive mapping, and bill management.",
      longDesc: "Built a role-based smart city web platform enabling citizens to log emergency reports, lodge civic complaints, and manage tax/utility payments through a central citizen dashboard. Integrated Leaflet.js, browser geolocation, and external APIs to visualize real-time location-based incident pins and weather updates.",
      highlights: [
        "Integrated Leaflet maps & browser Geolocation API for real-time incident mapping.",
        "Designed role-based citizen dashboard interface for emergency reporting.",
        "Implemented bill and tax payment simulation workflows with weather API integration."
      ],
      links: { demo: "#", code: "https://github.com" }
    }
  ],

  skills: [
    { name: "Requirements Gathering & Analysis", category: "business", icon: "fa-clipboard-list", tags: ["Stakeholder Analysis", "SDLC", "Agile", "User Stories"] },
    { name: "Python & Data Science", category: "data", icon: "fa-python", tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"] },
    { name: "Power BI & Excel BI", category: "data", icon: "fa-chart-pie", tags: ["Dashboards", "Data Viz", "EDA", "Statistical Analysis"] },
    { name: "AI & Explainability (XAI)", category: "data", icon: "fa-brain", tags: ["SHAP", "DiCE", "AIF360", "XGBoost", "PyTorch", "GNNs"] },
    { name: "Manual & Automation Testing", category: "qa", icon: "fa-vials", tags: ["Playwright", "Selenium", "Postman API", "Qase.io"] },
    { name: "Web & Full Stack Tech", category: "tech", icon: "fa-code", tags: ["JavaScript", "Node.js", "Express.js", "HTML/CSS", "Flutter"] },
    { name: "Databases & Management", category: "tech", icon: "fa-database", tags: ["SQL", "MongoDB", "Data Cleaning", "Data Modeling"] },
    { name: "Project & Agile Leadership", category: "business", icon: "fa-tasks", tags: ["IEEE CS Chair", "Sprint Planning", "Risk Tracking", "Cross-Functional"] }
  ],

  honors: [
    {
      title: "Outstanding Executive Committee Volunteer Award",
      org: "IEEE Computer Society Student Branch Chapter, SLTC",
      date: "August 2026",
      icon: "fa-award"
    },
    {
      title: "Outstanding Project Award – Codemania v6.0",
      org: "IEEE Computer Society Student Branch Chapter, SLTC",
      date: "August 2026",
      icon: "fa-trophy"
    },
    {
      title: "Organizational Unit Award (Membership Recruitment & Retention)",
      org: "Awarded under my Chairpersonship – IEEE CS SBC, SLTC",
      date: "August 2026",
      icon: "fa-users"
    },
    {
      title: "Chairperson",
      org: "IEEE Computer Society Student Branch Chapter, SLTC",
      date: "2025 - 2026",
      icon: "fa-user-tie"
    },
    {
      title: "IEEE SL SYW Congress 2025 Delegate",
      org: "Sri Lanka Section IEEE",
      date: "September 2025",
      icon: "fa-star"
    },
    {
      title: "Project Co-Chairperson (Codemania v5.0)",
      org: "SLTC IEEE Computer Society",
      date: "February 2025",
      icon: "fa-diagram-project"
    },
    {
      title: "Project Chairperson (GitGenius 2024)",
      org: "SLTC IEEE Computer Society",
      date: "November 2024",
      icon: "fa-git-alt"
    }
  ],

  certifications: [
    {
      title: "Power BI Data Modelling Basics Tutorial Course",
      issuer: "Simplilearn (Powered by Microsoft / SkillUp)",
      code: "10851099",
      date: "October 07, 2026",
      icon: "fa-chart-pie",
      verified: true
    },
    {
      title: "Power BI for Beginners",
      issuer: "Simplilearn",
      code: "Simplilearn Verified",
      date: "2026",
      icon: "fa-chart-bar",
      verified: true
    },
    {
      title: "Software Engineer Intern Certificate",
      issuer: "HackerRank",
      code: "HackerRank Verified",
      date: "2026",
      icon: "fa-laptop-code",
      verified: true
    },
    {
      title: "SQL (Basic) Certificate",
      issuer: "HackerRank",
      code: "HackerRank Verified",
      date: "2026",
      icon: "fa-database",
      verified: true
    },
    {
      title: "Introduction to Software Testing or Software QA",
      issuer: "Udemy",
      code: "Udemy Verified",
      date: "2026",
      icon: "fa-vials",
      verified: true
    },
    {
      title: "Introduction to Software Testing",
      issuer: "Simplilearn",
      code: "Simplilearn Verified",
      date: "2026",
      icon: "fa-check-double",
      verified: true
    },
    {
      title: "Fundamentals of Software Development",
      issuer: "Simplilearn",
      code: "Simplilearn Verified",
      date: "2026",
      icon: "fa-graduation-cap",
      verified: true
    }
  ]
};

// Global App State
let currentRole = "data-analyst";

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTypingEffect();
  renderRoleSelector();
  renderSkills("all");
  renderProjects("all");
  renderHonors();
  renderCertifications();
  setupEventListeners();
  initThemeToggle();
  initScrollHeader();
});

// Dynamic Typing Effect
function initTypingEffect() {
  const words = [
    "Data Analyst & Insights Creator",
    "Business Analyst & Problem Solver",
    "QA Specialist & Automation Lead",
    "Final-Year Software Engineering Undergraduate"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const target = document.getElementById("typing-text");

  if (!target) return;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// Role Selector Logic
function renderRoleSelector() {
  const container = document.getElementById("role-selector-grid");
  if (!container) return;

  container.innerHTML = Object.keys(PORTFOLIO_DATA.roles).map(roleKey => {
    const role = PORTFOLIO_DATA.roles[roleKey];
    const isActive = roleKey === currentRole ? "active" : "";
    let iconClass = "fa-chart-line";
    if (roleKey === "business-analyst") iconClass = "fa-briefcase";
    if (roleKey === "qa-engineer") iconClass = "fa-shield-halved";
    if (roleKey === "project-manager") iconClass = "fa-list-check";

    return `
      <div class="role-tab ${isActive}" data-role="${roleKey}">
        <div class="role-tab-icon"><i class="fas ${iconClass}"></i></div>
        <div class="role-tab-title">${role.title}</div>
        <div class="role-tab-subtitle">${role.subtitle.split("•")[0]}</div>
      </div>
    `;
  }).join("");

  updateRoleSummary();
}

function switchRole(roleKey) {
  if (!PORTFOLIO_DATA.roles[roleKey]) return;
  currentRole = roleKey;

  // Update tabs visual state
  document.querySelectorAll(".role-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.role === roleKey);
  });

  updateRoleSummary();
  showToast(`Switched view persona to: ${PORTFOLIO_DATA.roles[roleKey].title}`);
}

function updateRoleSummary() {
  const role = PORTFOLIO_DATA.roles[currentRole];
  const summaryTitle = document.getElementById("summary-role-title");
  const summaryText = document.getElementById("summary-role-text");
  const focusPills = document.getElementById("summary-focus-pills");

  if (summaryTitle) summaryTitle.textContent = `Tailored Objective — ${role.title}`;
  if (summaryText) summaryText.textContent = role.summary;

  if (focusPills) {
    focusPills.innerHTML = role.skillsFocus.map(skill => 
      `<span class="tag" style="background: rgba(56, 189, 248, 0.12); color: var(--accent-cyan); font-weight:600;"><i class="fas fa-check-circle" style="margin-right:4px;"></i>${skill}</span>`
    ).join(" ");
  }
}

// Skills Filter & Render
function renderSkills(filterCategory) {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  const filtered = filterCategory === "all" 
    ? PORTFOLIO_DATA.skills 
    : PORTFOLIO_DATA.skills.filter(s => s.category === filterCategory);

  container.innerHTML = filtered.map(skill => `
    <div class="skill-card">
      <div class="skill-header">
        <div class="skill-icon"><i class="fas ${skill.icon}"></i></div>
        <div class="skill-info">
          <h4>${skill.name}</h4>
          <span>${skill.category.toUpperCase()} FOCUS</span>
        </div>
      </div>
      <div class="skill-tags">
        ${skill.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// Projects Filter & Render
function renderProjects(filterCategory) {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = filterCategory === "all" 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(project => `
    <div class="project-card">
      <div class="project-thumb-wrapper">
        <img src="${project.image}" alt="${project.title}" class="project-thumb" />
        <span class="project-badge">${project.tags[0]}</span>
        <div class="project-overlay">
          <button class="btn-primary" onclick="openProjectModal('${project.id}')">
            <i class="fas fa-eye"></i> View Details
          </button>
        </div>
      </div>
      <div class="project-content">
        <div class="project-date"><i class="far fa-calendar-alt"></i> ${project.date}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDesc}</p>
        <div class="project-tech">
          ${project.tags.slice(0, 4).map(t => `<span class="tech-chip">${t}</span>`).join("")}
          ${project.tags.length > 4 ? `<span class="tech-chip">+${project.tags.length - 4} more</span>` : ""}
        </div>
      </div>
    </div>
  `).join("");
}

// Honors & Awards
function renderHonors() {
  const container = document.getElementById("honors-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.honors.map(h => `
    <div class="honor-card">
      <div class="honor-badge"><i class="fas ${h.icon}"></i></div>
      <div class="honor-content">
        <h4>${h.title}</h4>
        <div class="honor-org">${h.org}</div>
        <div class="honor-date"><i class="far fa-calendar"></i> ${h.date}</div>
      </div>
    </div>
  `).join("");
}

// Certifications
function renderCertifications() {
  const container = document.getElementById("cert-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(c => `
    <div class="cert-card">
      <div>
        <div class="cert-header">
          <div class="cert-icon"><i class="fas ${c.icon}"></i></div>
          <span class="cert-status-pill"><i class="fas fa-certificate"></i> Verified</span>
        </div>
        <div class="cert-title">${c.title}</div>
        <div class="cert-issuer"><i class="fas fa-building" style="margin-right:4px;"></i> ${c.issuer}</div>
      </div>
      <div class="cert-meta">
        ${c.code ? `<span><i class="fas fa-barcode"></i> Code: ${c.code}</span>` : ""}
        ${c.date ? `<span><i class="far fa-calendar-alt"></i> ${c.date}</span>` : ""}
      </div>
    </div>
  `).join("");
}

// Modal Handlers
function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById("project-modal");
  const modalBody = document.getElementById("project-modal-body");

  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="project-date" style="font-size:0.85rem;"><i class="far fa-calendar-alt"></i> ${project.date}</span>
      <h2 class="section-title" style="margin-top:0.4rem; font-size:1.8rem; text-align:left;">${project.title}</h2>
      <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.8rem;">
        ${project.tags.map(t => `<span class="tech-chip" style="font-size:0.8rem; padding:0.3rem 0.7rem;">${t}</span>`).join("")}
      </div>
    </div>

    <div style="border-radius: var(--radius-md); overflow:hidden; margin-bottom:1.5rem; max-height:300px;">
      <img src="${project.image}" alt="${project.title}" style="width:100%; height:100%; object-fit:cover;" />
    </div>

    <h4 style="font-size:1.1rem; margin-bottom:0.6rem; color:var(--text-primary);"><i class="fas fa-align-left" style="color:var(--accent-cyan); margin-right:8px;"></i> Overview & Technical Architecture</h4>
    <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:1.5rem;">${project.longDesc}</p>

    <h4 style="font-size:1.1rem; margin-bottom:0.8rem; color:var(--text-primary);"><i class="fas fa-star" style="color:var(--accent-amber); margin-right:8px;"></i> Key Achievements & Contributions</h4>
    <ul style="list-style:none; padding-left:0; margin-bottom:2rem;">
      ${project.highlights.map(h => `
        <li style="position:relative; padding-left:1.5rem; margin-bottom:0.6rem; color:var(--text-secondary); font-size:0.95rem;">
          <i class="fas fa-check" style="position:absolute; left:0; top:4px; color:var(--accent-emerald); font-size:0.85rem;"></i>
          ${h}
        </li>
      `).join("")}
    </ul>

    <div style="display:flex; gap:1rem; flex-wrap:wrap; justify-content:flex-end;">
      <button class="btn-secondary" onclick="closeModal('project-modal')">Close</button>
    </div>
  `;

  modalOverlay.classList.add("active");
}

function openResumeModal() {
  const modalOverlay = document.getElementById("resume-modal");
  const modalBody = document.getElementById("resume-modal-body");
  if (!modalOverlay || !modalBody) return;

  const role = PORTFOLIO_DATA.roles[currentRole];

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="section-tag">TAILORED RESUME PREVIEW</span>
      <h2 class="section-title" style="font-size:1.8rem; text-align:left; margin-top:0.2rem;">${PORTFOLIO_DATA.profile.name}</h2>
      <p style="color:var(--accent-cyan); font-weight:700;">${role.title} Profile</p>
    </div>

    <div style="background:var(--bg-tertiary); padding:1.5rem; border-radius:var(--radius-md); border:1px solid var(--glass-border); margin-bottom:1.5rem;">
      <h4 style="margin-bottom:0.5rem;"><i class="fas fa-user-check" style="color:var(--accent-emerald); margin-right:8px;"></i> Professional Summary</h4>
      <p style="font-size:0.92rem; color:var(--text-secondary); line-height:1.6;">${role.summary}</p>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1.5rem;">
      <div style="background:var(--bg-card); padding:1.2rem; border-radius:var(--radius-md); border:1px solid var(--glass-border);">
        <h5 style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--text-primary);"><i class="fas fa-graduation-cap" style="color:var(--accent-cyan); margin-right:6px;"></i> Education</h5>
        <p style="font-weight:700; font-size:0.88rem;">${PORTFOLIO_DATA.profile.degree}</p>
        <p style="font-size:0.8rem; color:var(--text-secondary);">${PORTFOLIO_DATA.profile.university}</p>
        <p style="font-size:0.8rem; color:var(--accent-emerald); font-weight:700; margin-top:4px;">GPA: ${PORTFOLIO_DATA.profile.gpa}</p>
      </div>

      <div style="background:var(--bg-card); padding:1.2rem; border-radius:var(--radius-md); border:1px solid var(--glass-border);">
        <h5 style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--text-primary);"><i class="fas fa-bolt" style="color:var(--accent-amber); margin-right:6px;"></i> Core Competencies</h5>
        <div style="display:flex; flex-wrap:wrap; gap:0.3rem;">
          ${role.skillsFocus.map(sf => `<span class="tag" style="font-size:0.75rem;">${sf}</span>`).join("")}
        </div>
      </div>
    </div>

    <div style="display:flex; gap:1rem; justify-content:space-between; align-items:center; flex-wrap:wrap;">
      <p style="font-size:0.85rem; color:var(--text-muted);"><i class="fas fa-envelope"></i> ${PORTFOLIO_DATA.profile.email}</p>
      <div style="display:flex; gap:0.8rem;">
        <button class="btn-primary" onclick="triggerResumeDownload('${currentRole}')">
          <i class="fas fa-download"></i> Download ${role.title} CV
        </button>
        <button class="btn-secondary" onclick="closeModal('resume-modal')">Close</button>
      </div>
    </div>
  `;

  modalOverlay.classList.add("active");
}

function closeModal(modalId) {
  const modalOverlay = document.getElementById(modalId);
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
  }
}

function triggerResumeDownload(roleKey) {
  const role = PORTFOLIO_DATA.roles[roleKey] || PORTFOLIO_DATA.roles["data-analyst"];
  showToast(`Initiated download for: Vimarshana_Kithmini_${role.title.replace(/\s+/g, '_')}_CV.pdf`);
}

// Event Listeners setup
function setupEventListeners() {
  // Role selector delegation
  const roleGrid = document.getElementById("role-selector-grid");
  if (roleGrid) {
    roleGrid.addEventListener("click", (e) => {
      const tab = e.target.closest(".role-tab");
      if (tab) {
        switchRole(tab.dataset.role);
      }
    });
  }

  // Skills filter delegation
  const skillsFilter = document.getElementById("skills-filter");
  if (skillsFilter) {
    skillsFilter.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        skillsFilter.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        renderSkills(e.target.dataset.filter);
      }
    });
  }

  // Projects filter delegation
  const projectsFilter = document.getElementById("projects-filter");
  if (projectsFilter) {
    projectsFilter.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        projectsFilter.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        renderProjects(e.target.dataset.filter);
      }
    });
  }

  // Contact form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you! Your message has been sent successfully to Vimarshana.");
      contactForm.reset();
    });
  }

  // Mobile drawer menu toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.className = navLinks.classList.contains("active") ? "fas fa-xmark" : "fas fa-bars";
      }
    });

    navLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = mobileToggle.querySelector("i");
        if (icon) icon.className = "fas fa-bars";
      });
    });
  }

  // Modal overlay click to close
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });
}

// Toast Notifications
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fas fa-check-circle" style="color:var(--accent-emerald);"></i> <span>${message}</span>`;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// Theme Toggle
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem("portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(toggleBtn, currentTheme);

  toggleBtn.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);
    updateThemeIcon(toggleBtn, theme);
  });
}

function updateThemeIcon(btn, theme) {
  btn.innerHTML = theme === "dark" ? `<i class="fas fa-sun"></i>` : `<i class="fas fa-moon"></i>`;
}

// Header Sticky Scroll Effect
function initScrollHeader() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}
