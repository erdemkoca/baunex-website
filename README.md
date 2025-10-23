# Baunex Website

Eine moderne, responsive Marketing-Website für Baunex - die leichte Plattform für Bau- und Handwerksbetriebe.

## 🚀 Features

- **Moderne UI/UX**: Glass-Morphism Design mit sanften Animationen
- **Responsive Design**: Optimiert für alle Geräte (320px - 1920px+)
- **Performance**: Lighthouse Score ≥ 90 in allen Kategorien
- **SEO-optimiert**: Meta-Tags, Open Graph, Structured Data
- **Accessibility**: WCAG 2.1 AA konform
- **TypeScript**: Vollständig typisiert für bessere Entwicklererfahrung

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons (SVG)
- **Fonts**: Inter (Google Fonts)
- **Deployment**: DigitalOcean App Platform

## 📁 Projektstruktur

```
src/
├── components/          # Wiederverwendbare Komponenten
│   ├── BaseButton.vue
│   ├── BaseContainer.vue
│   ├── BackgroundCanvas.vue
│   ├── CTASection.vue
│   ├── FAQAccordion.vue
│   ├── FeatureGrid.vue
│   ├── Footer.vue
│   ├── Hero.vue
│   ├── Navbar.vue
│   ├── SectionHeading.vue
│   ├── StatsBar.vue
│   └── UseCasesTabs.vue
├── pages/              # Seiten-Komponenten
│   ├── Contact.vue
│   ├── Features.vue
│   ├── Home.vue
│   ├── Legal.vue
│   └── Pricing.vue
├── App.vue             # Haupt-App-Komponente
├── main.ts             # App-Einstiegspunkt
└── style.css           # Globale Styles
```

## 🎨 Design System

### Farben
- **Primary**: #4F46E5 (Indigo 600)
- **Primary 700**: #4338CA
- **Neutral 900**: #0F172A
- **Neutral 700**: #334155
- **Neutral 500**: #64748B
- **Neutral 100**: #F1F5F9

### Typografie
- **Font Family**: Inter
- **H1**: 44px/52px, 700
- **H2**: 32px/40px, 700
- **H3**: 24px/32px, 700
- **Body**: 16px/26px, 400

### Komponenten
- **Cards**: rounded-2xl, shadow-soft, 24-32px padding
- **Buttons**: Gradient-Akzente, Hover-Effekte
- **Glass-Effekt**: backdrop-blur mit Transparenz

## 🚀 Entwicklung

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Installation
```bash
# Repository klonen
git clone https://github.com/erdemkoca/baunex-website.git
cd baunex-website

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

### Build
```bash
# Produktions-Build erstellen
npm run build

# Build preview
npm run preview
```

## 📱 Seiten

### Home
- Hero-Sektion mit Claim und CTAs
- Features-Grid (4 Hauptfunktionen)
- Statistiken-Leiste
- Use-Cases Tabs
- FAQ Accordion
- CTA-Sektion

### Features
- Detaillierte Feature-Beschreibungen
- Screenshots/Mockups
- Benefits-Listen
- CTA-Sektion

### Pricing
- 3 Tarifpläne (Starter/Pro/Enterprise)
- Monatlich/Jährlich Toggle
- Feature-Vergleich
- FAQ-Sektion

### Contact
- Kontaktformular
- Kontaktinformationen
- Demo-Termin Buchung

### Legal
- Impressum
- Datenschutzerklärung
- Haftungsausschluss

## 🎯 SEO & Performance

### SEO
- Meta-Tags optimiert
- Open Graph Tags
- Twitter Cards
- Structured Data (JSON-LD)
- Sitemap.xml
- robots.txt

### Performance
- Lazy Loading für Bilder
- Font-Preloading
- CSS/JS Minification
- Gzip Compression
- CDN-ready Assets

## 🚀 Deployment

### DigitalOcean App Platform
```bash
# Build Command
npm ci && npm run build

# Output Directory
dist

# Node.js Version
18.x
```

### Environment Variables
Keine erforderlich für die statische Website.

## 📊 Lighthouse Scores

Ziel: ≥ 90 in allen Kategorien
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🔧 Anpassungen

### Inhalte ändern
- Texte: Direkt in den Vue-Komponenten
- Bilder: `/public/` Verzeichnis
- Farben: `tailwind.config.js`
- Icons: Lucide Icons in Komponenten

### Neue Seiten hinzufügen
1. Komponente in `/src/pages/` erstellen
2. Route in `main.ts` hinzufügen
3. Navigation in `Navbar.vue` aktualisieren

## 📄 Lizenz

© 2024 Baunex AG. Alle Rechte vorbehalten.

## 🤝 Support

Bei Fragen oder Problemen:
- E-Mail: info@baunex.ch
- Telefon: +41 44 123 45 67
- Website: https://www.baunex.ch