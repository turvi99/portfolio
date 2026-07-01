/* ═══════════════════════════════════════════════════════════════
   TURVI DEVINENI — NETFLIX PORTFOLIO SCRIPTS
   Particles · Scroll Reveal · Modal · Nav · Interactions
   ═══════════════════════════════════════════════════════════════ */

// ── Project Data for Modal ──
const projects = [
  {
    title: "MORLD — Molecular Generation",
    image: "images/morld.png",
    year: "Mar – Apr 2026",
    lang: "Python",
    match: "97% Match",
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
  {
    title: "CXR Multimodal CrossDataset",
    image: "images/clinfuse_cxr.png",
    year: "Jun 2026",
    lang: "Python",
    match: "98% Match",
    desc: "Full implementation of the ClinFuse-CXR research paper. This multimodal framework fuses chest X-ray images with clinical text using cross-modal attention for multi-label pathology classification. Achieves 0.986 AUC on MIMIC-CXR and 0.738 zero-shot on CheXpert with only 16M trainable parameters.",
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
  {
    title: "CrossDataset CXR AI",
    image: "images/clinfuse_cxr.png",
    year: "Apr 2026",
    lang: "Python",
    match: "95% Match",
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
  {
    title: "Generative AI Projects",
    image: "",
    year: "Dec 2025",
    lang: "Python",
    match: "92% Match",
    desc: "A comprehensive collection of generative AI experiments and projects exploring the frontier of language models, prompt engineering techniques, and creative AI applications. Includes practical implementations of various GenAI paradigms.",
    features: [
      "Large Language Model interaction & prompt engineering",
      "Text generation and creative writing AI",
      "API integration with state-of-the-art models",
      "Practical GenAI application development",
      "Prompt template design and optimization"
    ],
    github: "https://github.com/turvi99/Gen-ai"
  },
  {
    title: "AI Project",
    image: "",
    year: "Apr 2026",
    lang: "Python",
    match: "90% Match",
    desc: "Academic AI course project exploring fundamental and advanced artificial intelligence concepts including intelligent agent design, search algorithms, knowledge representation, and decision-making under uncertainty.",
    features: [
      "Search algorithms: BFS, DFS, A*, heuristic search",
      "Knowledge representation and reasoning",
      "Constraint satisfaction problems",
      "Game-playing AI with minimax & alpha-beta pruning",
      "Machine learning integration for intelligent agents"
    ],
    github: "https://github.com/turvi99/AI-PROJECT"
  },
  {
    title: "P-Median Facility Location via Genetic Algorithm",
    image: "images/genetic_algorithm.png",
    year: "May – Jul 2025",
    lang: "Python",
    match: "96% Match",
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
  {
    title: "Hybrid ML Models for Customer Churn",
    image: "images/churn_prediction.png",
    year: "Nov 2024 – Feb 2025",
    lang: "Jupyter Notebook",
    match: "94% Match",
    desc: "Research project under Dr. Saleti Sumalatha. Built hybrid ensemble machine learning models combining Random Forest, AdaBoost, and XGBoost for customer churn prediction across multiple industry domains — banking, telecom, travel, and e-commerce.",
    features: [
      "Ensemble: Random Forest + AdaBoost + XGBoost",
      "Multi-domain evaluation: banking, telecom, travel, e-commerce",
      "Feature engineering and selection pipelines",
      "Hyperparameter tuning with GridSearchCV",
      "ROC-AUC, precision-recall, and business impact analysis",
      "Comparative study of individual vs. ensemble performance"
    ],
    github: "https://github.com/turvi99/ML-Sem-Project"
  },
  {
    title: "DIP Research Project",
    image: "",
    year: "Mar 2026",
    lang: "Jupyter Notebook",
    match: "91% Match",
    desc: "Digital Image Processing research project exploring advanced image analysis techniques including spatial and frequency domain filtering, edge detection, morphological operations, segmentation, and feature extraction for real-world image analysis applications.",
    features: [
      "Spatial domain filtering: Gaussian, median, bilateral",
      "Frequency domain analysis: FFT, DCT transforms",
      "Edge detection: Canny, Sobel, Laplacian operators",
      "Image segmentation techniques",
      "Morphological operations for binary image processing",
      "Feature extraction for pattern recognition"
    ],
    github: "https://github.com/turvi99/DIP-RESEARCH-PROJECT"
  },
  {
    title: "Hackathon Project",
    image: "",
    year: "Nov 2025",
    lang: "HTML",
    match: "93% Match",
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
  {
    title: "Open-Manus (Internship)",
    image: "",
    year: "Sep – Oct 2025",
    lang: "Python",
    match: "89% Match",
    desc: "Contributions to the Open-Manus open-source project during a virtual internship at North-Chiang Mai University. Enhanced prompt-engineering pipelines and built Python automation modules for document and spreadsheet processing.",
    features: [
      "Prompt engineering pipeline enhancements",
      "Python automation modules for document processing",
      "Spreadsheet automation and data extraction",
      "Open-source feature contributions & code reviews",
      "Collaborative development with international team"
    ],
    github: "https://github.com/turvi99/Open-Manus"
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
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });
}

// ── Hamburger Menu ──
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (!hamburger || !navLinks) return;
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ── Scroll Reveal ──
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ── Active Nav Link ──
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// ── Modal ──
function openModal(index) {
  const project = projects[index];
  if (!project) return;

  const overlay = document.getElementById('modalOverlay');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalDesc = document.getElementById('modalDesc');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalActions = document.getElementById('modalActions');

  // Image
  if (project.image) {
    modalImage.src = project.image;
    modalImage.style.display = 'block';
  } else {
    modalImage.style.display = 'none';
  }

  // Title
  modalTitle.textContent = project.title;

  // Meta
  modalMeta.innerHTML = `
    <span style="color:var(--accent-green);font-weight:700">${project.match}</span>
    <span>${project.year}</span>
    <span>${project.lang}</span>
  `;

  // Description
  modalDesc.textContent = project.desc;

  // Features
  let featuresHTML = '<h4>Key Features</h4><ul>';
  project.features.forEach(f => {
    featuresHTML += `<li>${f}</li>`;
  });
  featuresHTML += '</ul>';
  modalFeatures.innerHTML = featuresHTML;

  // Actions
  modalActions.innerHTML = `
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

// Close on overlay click
document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ── Smooth Scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Typing Effect for Hero ──
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

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
        const numStr = text.replace('+', '');
        const finalNum = parseFloat(numStr);
        
        if (isNaN(finalNum)) return;
        
        let current = 0;
        const increment = finalNum / 40;
        const timer = setInterval(() => {
          current += increment;
          if (current >= finalNum) {
            current = finalNum;
            clearInterval(timer);
          }
          target.textContent = (isFloat ? current.toFixed(2) : Math.floor(current)) + (hasPlus ? '+' : '');
        }, 30);
        
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// ── Netflix Row Drag Scroll ──
function initDragScroll() {
  const rows = document.querySelectorAll('.netflix-row, .top10-row');
  
  rows.forEach(row => {
    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - row.offsetLeft;
      scrollLeft = row.scrollLeft;
      row.style.cursor = 'grabbing';
    });

    row.addEventListener('mouseleave', () => {
      isDown = false;
      row.style.cursor = 'grab';
    });

    row.addEventListener('mouseup', () => {
      isDown = false;
      row.style.cursor = 'grab';
    });

    row.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - row.offsetLeft;
      const walk = (x - startX) * 2;
      row.scrollLeft = scrollLeft - walk;
    });

    row.style.cursor = 'grab';
  });
}

// ── Initialize Everything ──
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initNavbar();
  initHamburger();
  initReveal();
  initActiveNav();
  animateCounters();
  initDragScroll();
});
