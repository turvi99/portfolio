/* ═══════════════════════════════════════════════════════════════
   TURVI DEVINENI — NETFLIX PORTFOLIO SCRIPTS
   Particles · Scroll Reveal · Modal · Nav · Interactions
   ═══════════════════════════════════════════════════════════════ */

// ── Project Data for Modal ──
const projects = [
  // 0 - CXR Multimodal CrossDataset
  {
    title: "CXR Multimodal CrossDataset",
    image: "images/clinfuse_cxr.png",
    year: "Jun 2026",
    lang: "Python",
    desc: "Full implementation of the ClinFuse-CXR research. This multimodal framework fuses chest X-ray images with clinical text using cross-modal attention for multi-label pathology classification. Achieves 0.986 AUC on MIMIC-CXR and 0.738 zero-shot on CheXpert with only 16M trainable parameters.",
    features: [
      "MobileNetV3-Small image encoder for efficient feature extraction",
      "Bio_ClinicalBERT text encoder with selective fine-tuning",
      "Bidirectional cross-modal attention fusion mechanism",
      "Domain Adversarial Training (DANN) with Gradient Reversal Layer",
      "5-fold cross-validation on MIMIC-CXR dataset",
      "Zero-shot cross-dataset evaluation on CheXpert"
    ],
    github: "https://github.com/turvi99/CXR-Multimodal-CrossDataset"
  },
  // 1 - MORLD
  {
    title: "MORLD — Molecular Generation",
    image: "images/morld.png",
    year: "Mar – Apr 2026",
    lang: "Python",
    desc: "Designed and implemented an AI-driven SMILES-based molecular generation system using Python, TensorFlow, RDKit, LSTM, and Reinforcement Learning. The system generates novel drug-like molecules with 97% chemical validity and 100% novelty — a breakthrough in computational drug discovery.",
    features: [
      "LSTM-based language model trained on SMILES molecular notation",
      "Reinforcement Learning fine-tuning for drug-likeness optimization",
      "RDKit integration for chemical validity checking & property filtering",
      "97% chemical validity rate with 100% novel molecule generation",
      "Lipinski's Rule of Five compliance for drug-likeness assessment",
      "Visualisation pipeline for generated molecular structures"
    ],
    github: "https://github.com/turvi99"
  },
  // 2 - CrossDataset CXR AI
  {
    title: "CrossDataset CXR AI",
    image: "images/clinfuse_cxr.png",
    year: "Apr 2026",
    lang: "Python",
    desc: "Cross-dataset generalization experiments for chest X-ray diagnosis. Explores domain adversarial neural network (DANN) training strategies to learn domain-invariant feature representations that generalize across institutional boundaries without target-domain fine-tuning.",
    features: [
      "Domain adversarial training with pseudo-domain labels",
      "Gradient Reversal Layer (GRL) for domain-invariant features",
      "MAML-inspired meta-learning loss computation",
      "Per-label AUC evaluation across 9 pathology classes",
      "Cross-institutional deployment without fine-tuning",
      "Asymmetric loss function for class imbalance handling"
    ],
    github: "https://github.com/turvi99/CrossDataset-CXR-AI"
  },
  // 3 - P-Median GA
  {
    title: "P-Median Facility Location via Genetic Algorithm",
    image: "images/genetic_algorithm.png",
    year: "May – Jul 2025",
    lang: "Python",
    desc: "Summer research internship project under Dr. Edukondalu Chappindi. Developed a Genetic Algorithm solver for the NP-hard P-Median facility location problem, achieving solutions within 0.1% of optimal OR-Library benchmarks (pmed1–pmed40).",
    features: [
      "Floyd–Warshall shortest path preprocessing",
      "Greedy crossover operator for solution recombination",
      "Adaptive mutation rate with simulated annealing schedule",
      "Elitism strategy for preserving best solutions",
      "Benchmarked against OR-Library instances pmed1–pmed40",
      "Solutions within 0.1% of known optimal values"
    ],
    github: "https://github.com/turvi99"
  },
  // 4 - Telco Customer Churn (ML-Sem-Project)
  {
    title: "Telco Customer Churn Prediction",
    image: "images/churn_prediction.png",
    year: "Nov 2024 – Feb 2025",
    lang: "Jupyter Notebook",
    desc: "End-to-end ML pipeline for Telco customer churn prediction on the Kaggle dataset (7,043 customers × 21 features). Compared 5 models — Random Forest, KNN, AdaBoost, XGBoost, and Naive Bayes — and applied SMOTEENN to handle class imbalance, boosting KNN accuracy to 97.38%. Includes a 3-page interactive Streamlit dashboard for real-time predictions.",
    features: [
      "5 models: RandomForest, KNN, AdaBoost, XGBoost, Naive Bayes",
      "SMOTEENN (SMOTE + ENN) for class imbalance — +18-22% accuracy boost",
      "Best model: KNN at 97.38% accuracy after balancing",
      "GridSearchCV hyperparameter tuning with sklearn Pipeline",
      "3-page Streamlit dashboard: Predict, Explorer, Insights",
      "15+ visualizations: count plots, KDE, correlation heatmap, confusion matrix"
    ],
    github: "https://github.com/turvi99/ML-Sem-Project"
  },
  // 5 - (removed, DIP repo deleted)
  null,
  // 6 - Hackathon
  {
    title: "Hackathon Project",
    image: "",
    year: "Nov 2025",
    lang: "HTML",
    desc: "Full-stack web application developed during a competitive hackathon. Built with HTML, CSS, and JavaScript with focus on rapid prototyping, clean user interface design, and interactive data-driven features.",
    features: [
      "Responsive web design with modern CSS",
      "Interactive data visualizations",
      "Real-time user interaction handling",
      "Clean, intuitive UI/UX design",
      "Rapid prototype development under time constraints"
    ],
    github: "https://github.com/turvi99/Hackathon"
  },
  // 7 - Open-Manus
  {
    title: "Open-Manus (Internship)",
    image: "",
    year: "Sep – Oct 2025",
    lang: "Python",
    desc: "Contributions to the Open-Manus open-source project during a virtual internship at North-Chiang Mai University. Enhanced prompt-engineering pipelines and built Python automation modules for document and spreadsheet processing.",
    features: [
      "Prompt engineering pipeline enhancements",
      "Python automation modules for document processing",
      "Spreadsheet automation and data extraction",
      "Open-source feature contributions & code reviews",
      "Collaborative development with international team"
    ],
    github: "https://github.com/turvi99/Open-Manus"
  },
  // 8 - (unused, reserved)
  null,
  // 9 - (unused, reserved)
  null,
  // 10 - MedBot v2.0 (chatbot)
  {
    title: "MedBot v2.0 — Healthcare Chatbot",
    image: "",
    year: "2025",
    lang: "Python",
    desc: "An intelligent NLP-driven medical assistant that classifies symptoms, detects emergencies in real-time, and provides preliminary health guidance. Built with a 3-layer Dense Neural Network (128→64→softmax), covers 9 diseases with 25 intent categories, includes a fully-featured Tkinter desktop GUI with 5 customizable themes.",
    features: [
      "3-layer Dense Neural Network (128→64→softmax) for intent classification",
      "9 diseases covered: Cold, Fever, Diabetes, Depression, Asthma, COVID-19, Hypertension, Malaria, Heart Disease",
      "Real-time emergency keyword detection with popup alerts",
      "41 unit tests across 5 test classes",
      "Tkinter GUI with 5 color themes and 5 font options",
      "Symptom recognition, medicine suggestions, prevention & dietary guidance"
    ],
    github: "https://github.com/turvi99/chatbot"
  },
  // 11 - Research Hybrid Churn
  {
    title: "Research: Hybrid Churn Prediction",
    image: "",
    year: "2025",
    lang: "Jupyter Notebook",
    desc: "Developed hybrid machine learning models combining Random Forest, AdaBoost, and XGBoost for churn prediction across banking, telecom, travel, and e-commerce datasets, achieving enhanced accuracy and actionable insights.",
    features: [
      "Hybrid ensemble combining RF + AdaBoost + XGBoost",
      "Cross-domain evaluation: banking, telecom, travel, e-commerce",
      "Feature importance analysis and selection",
      "Comprehensive accuracy benchmarking",
      "Actionable business insight generation"
    ],
    github: "https://github.com/turvi99/Research-Hybrid-Churn-prediction-"
  },
  // 12 - Machine Learning Lab
  {
    title: "Machine Learning Lab — Experiment Portfolio",
    image: "",
    year: "2025",
    lang: "Jupyter Notebook",
    desc: "A collection of 10 machine learning lab experiments covering NumPy fundamentals, data wrangling, preprocessing, regression, classification, NLP, data visualization, and interactive dashboards. Uses 12+ algorithms across 6 datasets including Titanic, Breast Cancer, Bike Sharing, Churn, Resume, and US Airlines Tweets. Best accuracy: 97.2% (Logistic Regression on Breast Cancer).",
    features: [
      "10 lab experiments spanning the complete ML lifecycle",
      "12+ algorithms: Logistic Regression, Linear Regression, Naive Bayes, SMOTE, PCA, etc.",
      "6 datasets: Titanic, Breast Cancer, Bike Sharing, Churn, Resume, US Airlines Tweets",
      "Best accuracy: 97.2% (Logistic Regression on Breast Cancer)",
      "NLP Resume Classifier with Naive Bayes",
      "Interactive Streamlit dashboard for visualization"
    ],
    github: "https://github.com/turvi99/Machine-Learning-Lab"
  },
  // 13 - Web Case Study
  {
    title: "Web Case Study",
    image: "",
    year: "2025",
    lang: "HTML",
    desc: "Web development case study project exploring modern frontend design patterns, responsive layouts, and interactive user experience design using HTML, CSS, and JavaScript.",
    features: [
      "Responsive web design with CSS Grid/Flexbox",
      "Modern frontend design patterns",
      "Interactive UI components",
      "Cross-browser compatibility",
      "Accessibility best practices"
    ],
    github: "https://github.com/turvi99/WEB-CASE-STUDY"
  },
  // 14 - Python Project (Heart Disease Prediction)
  {
    title: "Heart Disease Prediction — Flask Web App",
    image: "",
    year: "2025",
    lang: "Python",
    desc: "End-to-end heart disease prediction system with a Flask web application. Trained 3 models (Random Forest 96%, XGBoost 94%, Logistic Regression 72%) on a merged heart dataset (2,181 rows × 14 columns). Features a glassmorphism-styled UI for real-time predictions via the deployed Random Forest model.",
    features: [
      "3 models compared: Random Forest (96%), XGBoost (94%), Logistic Regression (72%)",
      "Flask web app with glassmorphism UI and 13 input fields",
      "Merged heart dataset: 2,181 rows × 14 clinical features",
      "Min-Max normalization, median imputation for missing values",
      "EDA: correlation heatmap, pair plots, boxplots, cholesterol analysis",
      "Best model (Random Forest 96%) serialized with pickle for deployment"
    ],
    github: "https://github.com/turvi99/Python-Project"
  },
  // 15 - Gen-AI (Keyword Extraction System)
  {
    title: "Keyword Extraction System — Researcher's Assistant",
    image: "",
    year: "2025",
    lang: "Python",
    desc: "A Streamlit-based NLP application that extracts keywords, generates summaries, and visualizes word clouds from any text document. Uses the TextRank algorithm (Summa library) for extractive keyword extraction and summarization. Supports .txt file upload or manual text input with downloadable results.",
    features: [
      "TextRank algorithm (Summa library) for keyword extraction",
      "Extractive text summarization of key sentences",
      "Word cloud visualization with WordCloud + Matplotlib",
      "Streamlit web interface with file upload and manual input",
      "Downloadable results: keywords, summaries",
      "Graceful handling of short or empty text inputs"
    ],
    github: "https://github.com/turvi99/Gen-ai"
  },
  // 16 - AI Project
  {
    title: "AI Project",
    image: "",
    year: "2026",
    lang: "Python",
    desc: "Academic AI course project exploring fundamental and advanced artificial intelligence concepts including intelligent agent design, search algorithms, knowledge representation, and decision-making under uncertainty.",
    features: [
      "Search algorithms: BFS, DFS, A*, heuristic search",
      "Knowledge representation and reasoning",
      "Constraint satisfaction problems",
      "Game-playing AI with minimax & alpha-beta pruning",
      "Machine learning integration for intelligent agents"
    ],
    github: "https://github.com/turvi99/AI-PROJECT"
  }
];

// ── Hero Particles ──
function createParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 8 + 6) + 's';
    particle.style.animationDelay = (Math.random() * 10) + 's';
    particle.style.width = (Math.random() * 3 + 1) + 'px';
    particle.style.height = particle.style.width;
    particle.style.opacity = Math.random() * 0.6 + 0.2;
    container.appendChild(particle);
  }
}

// ── Navbar Scroll ──
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ── Hamburger Menu ──
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
  
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── Scroll Reveal ──
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Active Nav Link ──
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - 100) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  });
}

// ── Modal ──
function openModal(index) {
  const project = projects[index];
  if (!project) return;

  const overlay = document.getElementById('modalOverlay');
  const modalImage = document.getElementById('modalImage');

  if (project.image) {
    modalImage.src = project.image;
    modalImage.style.display = 'block';
  } else {
    modalImage.style.display = 'none';
  }

  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalMeta').innerHTML = `
    <span>${project.year}</span>
    <span>${project.lang}</span>
  `;
  document.getElementById('modalDesc').textContent = project.desc;

  let featuresHTML = '<h4>Key Features</h4><ul>';
  project.features.forEach(f => featuresHTML += `<li>${f}</li>`);
  featuresHTML += '</ul>';
  document.getElementById('modalFeatures').innerHTML = featuresHTML;

  document.getElementById('modalActions').innerHTML = `
    <a href="${project.github}" target="_blank" class="modal-btn modal-btn-primary">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      View on GitHub
    </a>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ── Smooth Scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Counter Animation ──
function animateCounters() {
  const counters = document.querySelectorAll('.stat-value');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const text = target.textContent;
        const isFloat = text.includes('.');
        const hasPlus = text.includes('+');
        const finalNum = parseFloat(text.replace('+', ''));
        if (isNaN(finalNum)) return;
        
        let current = 0;
        const increment = finalNum / 40;
        const timer = setInterval(() => {
          current += increment;
          if (current >= finalNum) { current = finalNum; clearInterval(timer); }
          target.textContent = (isFloat ? current.toFixed(2) : Math.floor(current)) + (hasPlus ? '+' : '');
        }, 30);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ── Netflix Row Drag Scroll ──
function initDragScroll() {
  document.querySelectorAll('.netflix-row, .top10-row').forEach(row => {
    let isDown = false, startX, scrollLeft;

    row.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - row.offsetLeft;
      scrollLeft = row.scrollLeft;
      row.style.cursor = 'grabbing';
    });
    row.addEventListener('mouseleave', () => { isDown = false; row.style.cursor = 'grab'; });
    row.addEventListener('mouseup', () => { isDown = false; row.style.cursor = 'grab'; });
    row.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      row.scrollLeft = scrollLeft - ((e.pageX - row.offsetLeft) - startX) * 2;
    });
    row.style.cursor = 'grab';
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initNavbar();
  initHamburger();
  initReveal();
  initActiveNav();
  animateCounters();
  initDragScroll();
});
