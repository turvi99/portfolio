# 🌐 Web Case Study — Frontend Development Portfolio

A frontend web development case study project demonstrating foundational-to-intermediate web engineering skills across **three distinct UI patterns**: structured form design, interactive tabbed components, and single-page application (SPA) architecture.

---

## 📁 Project Structure

```
WEB-CASE-STUDY/
└── WEB PROJECT/
    ├── FORMS.html                           # Structured questionnaire form layout
    ├── js tabs.html                         # Interactive tabbed content component
    ├── portfolio.html                       # SPA portfolio with client-side routing
    ├── Screenshot_1-4-2025_163918_.jpeg     # Browser render — Forms page
    ├── Screenshot_1-4-2025_164051_.jpeg     # Browser render — Tabs component
    └── Screenshot_1-4-2025_164119_.jpeg     # Browser render — Portfolio hero
```

---

## 📄 Page Descriptions

### 1. FORMS.html — Sports Club Questionnaire
A paper-to-digital **"Sports Club / Clay Target Questionnaire"** designed for insurance assessment and range compliance.

**Sections:**
- Applicant information (name, address, carrier, claims history)
- Operations (rifle/pistol ranges, sporting clay stations, trap/skeet houses)
- Range definition rules
- 11 binary Yes/No safety compliance questions (written safety plan, NRA certification, alcohol policies, hearing protection, etc.)
- Outdoor range assessment (fencing, warning signs, NRA range certification)

**Tech:** Pure HTML5 + embedded CSS, `<table>` layout with `border-collapse`, centered container styling

---

### 2. js tabs.html — Interactive Tabbed Content Card
A modern, responsive **tabbed content switcher** with a two-column card layout.

**Features:**
- Left column: scenic landscape image
- Right column: 3-step tab controller with dynamic content panels
- Active tab highlighting with smooth CSS transitions
- Clean event-driven DOM manipulation

**Tech:** HTML5, CSS3 Flexbox, Vanilla JavaScript (`DOMContentLoaded`, `querySelectorAll`, `classList` toggling)

---

### 3. portfolio.html — Single-Page Application Portfolio
A multi-view developer portfolio with **client-side SPA routing** — no page reloads.

**Views:**
- **Home/Hero:** Full-screen landing with "Hello, It's Me CoderGirl" headline and "Hire Me" CTA
- **About:** Developer biography
- **Services:** Web Development, Front-End Design, Back-End Development
- **Contact:** Direct email contact
- **Login & Register:** Styled authentication forms with Bootstrap inputs

**SPA Architecture:**
- All views use `.section` class, hidden by default (`display: none`)
- Navigation links intercept clicks via `event.preventDefault()`
- JavaScript toggles `.active` class to show/hide sections dynamically
- No page reloads — pure client-side view switching

**Tech:** HTML5, CSS3, Bootstrap 5.3.0 (via jsDelivr CDN), Vanilla JavaScript

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic markup, form elements, tables |
| **CSS3** | Flexbox layout, CSS transitions, RGBA overlays, gradients, box shadows |
| **JavaScript (ES6+)** | DOM manipulation, event listeners, SPA routing, class toggling |
| **Bootstrap 5.3.0** | Responsive grid, form controls, buttons, navbar (portfolio page) |

---

## 🎯 Skills Demonstrated

1. **Structured Form Design** — Translating real-world paper questionnaires into accessible HTML forms with tabular layout
2. **Interactive Component Architecture** — Building reusable tabbed UI widgets from scratch with Flexbox + vanilla JS
3. **SPA Web Design** — Multi-view application with client-side routing, Bootstrap 5, and custom themed styling

---

## 📸 Screenshots

Each HTML page is accompanied by a high-resolution browser screenshot verifying the rendered output.

---

## 🚀 How to Run

Simply open any `.html` file directly in a browser — no server or build tools required.

```bash
# Navigate to the project folder
cd "WEB PROJECT"

# Open any page
start FORMS.html
start "js tabs.html"
start portfolio.html
```

---

## 👤 Author

**Turvi Devineni**  
B.Tech CSE (AI & ML) — SRM University AP  
📧 turvi992005@gmail.com
