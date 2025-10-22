# Baunex Website

Eine schlanke, statische Marketing-Site für baunex.ch (Vue + Vite), die die Kerninfos zeigt und auf app.baunex.ch verlinkt.

## Stack

- **Frontend**: Vue 3 + Vite (TypeScript)
- **Routing**: vue-router
- **Styling**: Tailwind CSS
- **SEO**: Basis-Meta, robots.txt, sitemap.xml
- **Deploy**: DigitalOcean App Platform → www.baunex.ch

## Seiten (Routes)

- `/` – Home (Hero, Nutzen, Features, CTA „Demo anfragen")
- `/features` – Features (Zeiterfassung, Angebot/Rechnung, Katalog, KI-Forecast/OCR)
- `/preise` – Preise (3 Pläne: Starter/Pro/Enterprise, Platzhalterpreise)
- `/kontakt` – Kontakt (Formular → Platzhalter; Mailto oder später API)
- `/impressum` – Impressum/Datenschutz (Basistext, Platzhalter)

## Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build für Production
npm run build

# Preview des Builds
npm run preview
```

## Deploy auf DigitalOcean App Platform

1. Repository auf GitHub pushen
2. DigitalOcean App Platform → Create App → Static Site
3. Build Command: `npm ci && npm run build`
4. Output Directory: `dist`
5. Domain `www.baunex.ch` zuweisen (SSL auto)
6. Hostpoint DNS: `www` als CNAME auf DO-Zielhost; Root `baunex.ch` → Weiterleitung auf `https://www.baunex.ch`

## Definition of Done (DoD)

- ✅ Projekt baut lokal: `npm run build` → Ordner `dist`
- ✅ Alle 5 Seiten mit Content-Platzhaltern erreichbar
- ✅ Header/Footer responsiv, Links funktionieren
- ✅ Basis-SEO vorhanden (title/description, robots.txt, sitemap.xml)
- ✅ Deploy auf DO App Platform, Domain www.baunex.ch vorbereitet (CNAME)
- ✅ Lighthouse grob ok (Performance/Best Practices > 80)
