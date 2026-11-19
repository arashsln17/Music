# Arash Salehian - Personal Portfolio & Interactive CV

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A modern, highly modular, bilingual personal portfolio and interactive resume for **Arash Salehian** — Computer Engineering student at University of Kurdistan, Academic Honors (GPA 18.74/20), 4x Teaching Assistant (Data Structures, Logic Circuits, Fundamentals of Programming), and Backend Developer (Python, Django, C++, Java).

---

## 🌟 Key Highlights

- **Pure ES Modules & Real Tailwind Build:** Built with Vite and Tailwind CSS v3 (no CDN scripts). Zero framework overhead, blazing-fast HMR, and ultra-compact production bundles.
- **Full Bilingual Architecture (FA / EN):**
  - Seamless instant toggle between Persian (RTL with local **Estedad** font) and English (LTR with local **Manrope** font).
  - Comprehensive internationalization (`data-i18n`, `data-i18n-title`, `data-i18n-placeholder`, `data-i18n-aria`) covering every section, badge, and tooltip.
  - Active CV download link automatically updates to Persian or English PDF based on the current locale.
- **Dark & Light Mode:**
  - Modern glassmorphism aesthetic with RGB CSS variable tokens for smooth opacity modifier transitions (`surface`, `card`, `nav`, `border`, `foreground`, `muted`).
  - Saved theme preference in `localStorage`.
- **Live Interactive Novin Hesab ERP Demo:**
  - Full browser-frame simulation with tabs, breadcrumbs, search, and navigation.
  - Interactive modules: Dashboard, Sales, Inventory (low stock filter, category filter), Customers (live table insertion), Accounts, Invoices, Settings, Documents, and Reports.
  - Interactive SVG financial chart with smooth Bézier curves and monthly toggles.
  - Functional client-side Excel / CSV export with UTF-8 BOM encoding for Persian characters.
- **Dynamic Asynchronous Hero Badges & Typing:**
  - Two independent rotating badge containers highlighting academic honors and backend projects.
  - Typing text animation with reserved container height to prevent layout shifts.
- **Interactive Cursor Glow Follower:**
  - Hardware-accelerated custom cursor aura with hover physics and click compression.
- **Mobile First & Touch Optimized:**
  - Conforms to mobile design standards: minimum 44px touch targets, zero horizontal overflow, full-width responsive drawer menu, and flexible layouts down to 320px viewports.

---

## 🛠️ Tech Stack

- **Bundler & Dev Server:** [Vite](https://vitejs.dev/) 5.x
- **CSS Architecture:** [Tailwind CSS](https://tailwindcss.com/) 3.4.x, PostCSS, Autoprefixer
- **HTML Templating:** [vite-plugin-handlebars](https://github.com/alexlafroscia/vite-plugin-handlebars) for clean partial composition
- **Icons:** [@fortawesome/fontawesome-free](https://fontawesome.com/) 6.5.x (bundled webfonts)
- **Code Formatter:** [Prettier](https://prettier.io/)

---

## 📂 Project Structure

```text
portfolio/
├── index.html                   # Thin HTML shell loading partials and /src/main.js
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite & Handlebars partials configuration
├── tailwind.config.js           # Tailwind v3 theme configuration & safelist
├── postcss.config.js            # PostCSS plugins (Tailwind & Autoprefixer)
├── .editorconfig                # Coding style settings across editors
├── .prettierrc                  # Prettier formatting configuration
├── .prettierignore              # Files ignored by Prettier
├── .gitignore                   # Git ignore patterns
├── LICENSE                      # MIT License
├── README.md                    # Project documentation
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
├── public/
│   └── resume/
│       ├── arash-resume.pdf     # Persian Resume (PDF)
│       └── arash-resume-en.pdf  # English Resume (PDF)
└── src/
    ├── main.js                  # Entry point: imports styles & bootstraps modules
    ├── assets/
    │   ├── fonts/
    │   │   ├── Estedad/         # Estedad Persian webfonts (.woff2)
    │   │   └── Manrope/         # Manrope English webfonts (.otf)
    │   └── images/
    │       ├── arash-profile.jpg# Profile photo
    │       └── hesabdari/       # Novin Hesab ERP reference screenshots
    ├── partials/
    │   ├── head-extras.html     # Open Graph meta tags & favicon
    │   ├── background.html      # Glow orbs and cyber grid overlay
    │   ├── navbar.html          # Sticky pill navbar & mobile drawer
    │   ├── hero.html            # Hero section with dynamic badges & CTA
    │   ├── about.html           # About me section & bio metrics
    │   ├── experience.html      # Academic TA & education timeline
    │   ├── skills.html          # Technical competencies & animated progress bars
    │   ├── projects.html        # Projects showcase & Novin Hesab features
    │   ├── contact.html         # Contact form & communication cards
    │   ├── footer.html          # Multi-column footer & back-to-top button
    │   └── demo/
    │       ├── demo-shell.html  # Simulated browser window & header
    │       ├── view-dashboard.html
    │       ├── view-sales.html
    │       ├── view-inventory.html
    │       ├── view-customers.html
    │       ├── view-accounts.html
    │       ├── view-reports.html
    │       ├── view-invoices.html
    │       ├── view-settings.html
    │       ├── view-documents.html
    │       └── modals.html
    ├── js/
    │   ├── core/
    │   │   ├── theme.js         # Dark / Light theme toggle & persistence
    │   │   ├── toast.js         # Site-wide toast notification & clipboard copy
    │   │   ├── navigation.js    # Mobile drawer & scrollspy
    │   │   ├── contactForm.js   # Contact form handler & mailto fallback
    │   │   ├── scrollReveal.js  # IntersectionObserver entrance animations
    │   │   └── cursor.js        # Custom cursor follower
    │   ├── hero/
    │   │   ├── typing.js        # Typed text role cycling
    │   │   └── badges.js        # Asynchronous rotating hero badges
    │   ├── demo/
    │   │   ├── index.js         # Router & demo controller
    │   │   ├── toast.js         # In-demo notification toasts
    │   │   ├── modals.js        # Customer & product modals
    │   │   ├── customers.js     # Live customer record insertion
    │   │   ├── inventory.js     # Product creation & stock filters
    │   │   ├── reports.js       # Monthly SVG chart switcher
    │   │   ├── search.js        # Global search (Ctrl+K) & table filter
    │   │   └── export.js        # Excel / CSV data export
    │   ├── i18n/
    │   │   ├── fa.js            # Persian translation dictionary
    │   │   ├── en.js            # English translation dictionary
    │   │   └── index.js         # Locale switcher & DOM translation engine
    │   └── utils/
    │       └── dom.js           # DOM query helper utilities
    └── styles/
        ├── main.css             # Entry stylesheet importing Tailwind & CSS layers
        ├── fonts.css            # @font-face rules for Estedad & Manrope
        ├── variables.css        # CSS custom properties for dark & light themes
        ├── base.css             # Document reset, typography & body styles
        ├── layout.css           # Grid overlay, glow orbs & containers
        ├── components.css       # Buttons, cards, badges & inputs
        ├── hero.css             # Hero photo frame & badge transitions
        ├── skills.css           # Skill progress bars & tags
        ├── experience.css       # Timeline styling & indicators
        ├── projects.css         # Project cards & feature chips
        ├── demo.css             # Accounting ERP mockup styling & tables
        ├── animations.css       # Keyframes & transition classes
        └── utilities.css        # Custom scrollbar & utility classes
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ or latest LTS)
- npm (comes with Node.js)

### Installation

1. Clone or download the repository:

   ```bash
   git clone https://github.com/arashsln17/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

| Command           | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `npm run dev`     | Starts Vite dev server at `http://localhost:5173/` with LAN host access |
| `npm run build`   | Compiles and optimizes assets into the `dist/` directory                |
| `npm run preview` | Starts a local server to preview the production build in `dist/`        |
| `npm run format`  | Runs Prettier to format all HTML, CSS, and JS files                     |

---

## 🌐 Deploy to GitHub Pages

The repository includes a GitHub Actions CI/CD workflow located at `.github/workflows/deploy.yml`. When pushed to GitHub, the workflow automatically builds the project and deploys the `dist/` folder to GitHub Pages.

To enable GitHub Pages in your repository:

1. Go to **Settings** > **Pages** in your repository.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push to `main` (or `master`) branch — your site will be deployed automatically!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
Created with passion by **Arash Salehian** (2026).
