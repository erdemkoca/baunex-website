<template>
  <section class="section-gap">
    <div class="features-fullwidth">
      <div class="container">
        <SectionHeading
          title="Alles was Sie brauchen, in einer Plattform"
          subtitle="Von der Zeiterfassung bis zur Rechnung – alle wichtigen Tools für Ihren Bau- und Handwerksbetrieb"
        />

        <!-- KI-Features Chips -->
        <div class="mt-6 lg:mt-8 flex flex-wrap gap-2">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none">
            <span class="w-2 h-2 rounded-full bg-[#4F46E5]"></span> Beleg-OCR & Auto-Kontierung
          </span>
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none">
            <span class="w-2 h-2 rounded-full bg-[#4F46E5]"></span> Zeit- & Leistungsvorschläge
          </span>
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none">
            <span class="w-2 h-2 rounded-full bg-[#4F46E5]"></span> Anomalien (Kosten/Zeiten)
          </span>
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none">
            <span class="w-2 h-2 rounded-full bg-[#4F46E5]"></span> Intelligente Suche & Chat
          </span>
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none">
            <span class="w-2 h-2 rounded-full bg-[#4F46E5]"></span> Forecasts & Analysen
          </span>
<!--          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none">-->
<!--            <span class="w-2 h-2 rounded-full bg-[#4F46E5]"></span> Qualität & HSE: Bildanalyse-->
<!--          </span>-->
        </div>

        <!-- Horizontal Auto-Scrolling Modules (kompakt, mehr Karten sichtbar) -->
        <div class="bnx-marquee bnx-marquee--compact bnx-marquee-fullbleed relative overflow-hidden rounded-[inherit]" aria-label="Module" ref="marquee">
          <div class="bnx-track" ref="track">
            <FeatureCard 
              v-for="module in allModules" 
              :key="module.id"
              class="bnx-card rounded-2xl shadow-[0_8px_30px_rgba(2,6,23,0.06)] ring-1 ring-slate-200/60 bg-white hover:shadow-[0_8px_25px_rgba(2,6,23,0.12)] hover:-translate-y-0.5 transition focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              <template #icon>
                <div v-html="module.icon" class="w-6 h-6 text-indigo-600"></div>
              </template>
              <template #title>{{ module.title }}</template>
              {{ module.description }}
            </FeatureCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import SectionHeading from './SectionHeading.vue'
import FeatureCard from './FeatureCard.vue'

const marquee = ref<HTMLElement>()
const track = ref<HTMLElement>()

let ro: ResizeObserver | null = null
let rafId: number | null = null
let prefersReducedMotion = false
let isCloned = false
let baseChildrenCount = 0
let halfWidth = 0

// Geschwindigkeiten (px/s) - HIER ANPASSEN!
const SPEED_DESKTOP = 140  // Desktop-Geschwindigkeit (höher = schneller)
const SPEED_MOBILE = 80   // Mobile-Geschwindigkeit (höher = schneller)

function currentSpeed() {
  return window.innerWidth <= 768 ? SPEED_MOBILE : SPEED_DESKTOP
}

function gapPx(el: HTMLElement) {
  const cs = getComputedStyle(el)
  const g = parseFloat(cs.columnGap || cs.gap || '24')
  return isNaN(g) ? 24 : g
}

function cloneOnce(el: HTMLElement) {
  if (isCloned) return
  baseChildrenCount = el.children.length
  const clones: Node[] = []
  for (let i = 0; i < baseChildrenCount; i++) {
    const child = el.children[i]
    if (child) clones.push(child.cloneNode(true))
  }
  clones.forEach(n => el.appendChild(n))
  isCloned = true
  console.log('Cloned', baseChildrenCount, 'elements, total:', el.children.length)
}

function measureHalfWidth(el: HTMLElement) {
  // Summe Breite der ersten Hälfte inkl. Gaps
  const gap = gapPx(el)
  const first = Array.from(el.children).slice(0, baseChildrenCount) as HTMLElement[]
  // Force layout to be safe after fonts
  first.forEach(c => c.getBoundingClientRect())
  halfWidth = first.reduce((sum, c, i) => sum + c.offsetWidth + (i ? gap : 0), 0)
  return halfWidth
}

function startTicker() {
  if (!track.value) return
  const el = track.value
  let x = 0
  let last = performance.now()
  let speed = currentSpeed()
  const half = measureHalfWidth(el)

  console.log('Starting ticker with half width:', half, 'speed:', speed)

  // Startposition
  el.style.transform = `translate3d(0,0,0)`

  const step = (t: number) => {
    const dt = (t - last) / 1000
    last = t
    x -= speed * dt

    // Nahtloser Reset: sobald eine Hälfte raus ist, springe +halfWidth zurück
    if (x <= -halfWidth) x += halfWidth

    el.style.transform = `translate3d(${x}px, 0, 0)`
    rafId = requestAnimationFrame(step)
  }
  rafId = requestAnimationFrame(step)

  // Hover: pausieren/fortsetzen
  marquee.value?.addEventListener('mouseenter', () => { 
    if (rafId) { 
      cancelAnimationFrame(rafId)
      rafId = null 
      console.log('Animation paused on hover')
    } 
  })
  marquee.value?.addEventListener('mouseleave', () => { 
    if (!rafId) { 
      last = performance.now()
      rafId = requestAnimationFrame(step) 
      console.log('Animation resumed on mouse leave')
    } 
  })

  // Resize: Speed und halfWidth neu bestimmen, Position beibehalten
  ro = new ResizeObserver(() => {
    if (!track.value) return
    speed = currentSpeed()
    measureHalfWidth(el) // Aktualisiert halfWidth Variable
    console.log('Resize detected, new speed:', speed, 'new halfWidth:', halfWidth)
  })
  ro.observe(el)
}

onMounted(async () => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    console.log('Reduced motion detected, animation disabled')
    return
  }

  await nextTick()
  if (!track.value) return

  cloneOnce(track.value)        // genau einmal duplizieren
  // kleines Delay für Webfonts
  setTimeout(() => startTicker(), 50)
})

onUnmounted(() => {
  ro?.disconnect()
  if (rafId) cancelAnimationFrame(rafId)
})

// Icon components als SVG-Strings
const ClockIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`


const SparklesIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
</svg>`

const ChartBarIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
</svg>`

// Additional icons for all modules
const ProjectIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
</svg>`

const ShieldIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
</svg>`

const CheckCircleIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`

const DocumentIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>`

// Spezifische Icons für bessere Zuordnung
const InvoiceIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>`

const PayrollIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
</svg>`

const SupplierIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
</svg>`


const BankIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
</svg>`

const UsersIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
</svg>`


const CalendarIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>`


const TrendingUpIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
</svg>`

const PackageIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
</svg>`

const FileTextIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>`



// All modules for the horizontal scrolling grid - restructured for clarity
const allModules = [
  // OPERATIVE MODULE
  {
    id: 1,
    title: 'Zeiten & Rapporte',
    description: 'Arbeitszeiten, Bautagebuch, Fotos, Signaturen.',
    icon: ClockIcon
  },
  {
    id: 2,
    title: 'Dokumente & OCR',
    description: 'Ablage, Versionierung, OCR, Volltextsuche.',
    icon: DocumentIcon
  },
  {
    id: 3,
    title: 'Beschaffungssystem',
    description: 'Lieferanten, Materialkatalog, Bestellungen.',
    icon: SupplierIcon
  },
  {
    id: 4,
    title: 'Inventarverwaltung',
    description: 'Barcode-Scanning, Lagerbestand, Alerts.',
    icon: PackageIcon
  },
  
  // PROJEKTSTEUERUNG
  {
    id: 5,
    title: 'Projektmanagement',
    description: 'Gantt-Charts, Meilensteine, Aufgaben.',
    icon: ProjectIcon
  },
  {
    id: 6,
    title: 'Terminplanung',
    description: 'Wetter-Integration, Ressourcenplanung.',
    icon: CalendarIcon
  },
  {
    id: 7,
    title: 'Kostenkontrolle & Budget',
    description: 'Soll-Ist, Change Orders, Prognosen.',
    icon: ChartBarIcon
  },
  {
    id: 8,
    title: 'Subunternehmer & Verträge',
    description: 'Ausschreibungen, Vergabe, Leistungsnachweise.',
    icon: UsersIcon
  },
  {
    id: 9,
    title: 'Ressourcen & Einsatzplanung',
    description: 'Personal- und Geräteplanung, Schichten.',
    icon: TrendingUpIcon
  },
  {
    id: 10,
    title: 'Qualitätskontrolle',
    description: 'Inspektionen, Mängel, Fotodoku.',
    icon: CheckCircleIcon
  },
  {
    id: 11,
    title: 'HSE (Sicherheit & Gesundheit)',
    description: 'Checklisten, Vorfälle, Compliance.',
    icon: ShieldIcon
  },
  
  // COMMERCIAL/BACKOFFICE
  {
    id: 12,
    title: 'Angebote & Kalkulation',
    description: 'LV/Positionen, Margen, Varianten.',
    icon: InvoiceIcon
  },
  {
    id: 13,
    title: 'Rechnungsgenerierung',
    description: 'Vorlagen, MwSt, PDF-Export.',
    icon: FileTextIcon
  },
  {
    id: 14,
    title: 'Finanzen & Banking',
    description: 'Kreditoren/Debitoren, Zahlabgleich.',
    icon: BankIcon
  },
  {
    id: 15,
    title: 'Lohnabrechnung',
    description: 'Zeiten, Zuschläge, Swissdec-Export.',
    icon: PayrollIcon
  },
  {
    id: 16,
    title: 'CRM & Kundenmanagement',
    description: 'Kundenbeziehungen, Leads, Verkaufschancen.',
    icon: UsersIcon
  },
  
  // PLATTFORM
  {
    id: 17,
    title: 'BI & Analytics',
    description: 'Dashboards, KPIs, Forecasts, Reports.',
    icon: TrendingUpIcon
  },
  {
    id: 18,
    title: 'Integrationen & API',
    description: 'Swissdec, DATEV, Bank-APIs, Webhooks.',
    icon: SparklesIcon
  }
]


</script>

<style scoped>
/* CSS-Variablen für Dichte-Modi */
.bnx-marquee {
  /* Defaults (aktueller Look) */
  --card-w: 360px;
  --gap: 24px;
  --pad: 22px;
  --title: 18px;
  
  position: relative; 
  overflow: hidden; 
  padding: 20px 0; 
}

/* Kompakt: mehr Boxen sichtbar - mit horizontalem Icon-Layout */
.bnx-marquee--compact {
  --card-w: 320px;
  --gap: 16px;
  --pad: 18px;
  --title: 17px;
}

/* Super-kompakt für sehr breite Screens */
@media (min-width: 1440px) {
  .bnx-marquee--compact {
    --card-w: 300px;
    --gap: 16px;
  }
}

/* Full-bleed: marquee rand-zu-rand für noch mehr Platz */
.bnx-marquee-fullbleed {
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding-inline: max(24px, calc((100vw - 1240px)/2));
}

/* Track und Karten mit CSS-Variablen */
.bnx-track { 
  display: flex; 
  gap: var(--gap); 
  flex-wrap: nowrap; 
  will-change: transform; 
}

.bnx-card { 
  flex: 0 0 auto; 
  min-width: var(--card-w); 
  max-width: var(--card-w); 
  padding: var(--pad);
}

.bnx-card h3 { 
  font-size: var(--title); 
}

/* Spezielle Styles für horizontales Icon-Layout */
.bnx-card .flex {
  align-items: flex-start; /* Icons oben ausrichten */
}

.bnx-card h3 {
  line-height: 1.3; /* Kompaktere Zeilenhöhe */
  margin: 0; /* Margin entfernt, da in flex container */
}

/* Mobile bleibt klein wie gehabt */
@media (max-width: 768px) {
  .bnx-marquee, .bnx-marquee--compact {
    --card-w: 280px;
    --gap: 16px;
    --pad: 16px;
    --title: 16px;
  }
}

/* Edge-Fades entfernt - keine schwarzen Balken mehr */

/* Ensure focus states remain visible within clipped container */
.bnx-card:focus-visible {
  outline: 2px solid #4f46e5;
  outline-offset: 2px;
}

/* Vollbreite Layout - deckt Seiten komplett ab */
.features-fullwidth {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background: #ffffff;
  padding: 2rem 0;
}

@media (min-width: 640px) {
  .features-fullwidth {
    padding: 3rem 0;
  }
}

@media (min-width: 1024px) {
  .features-fullwidth {
    padding: 4rem 0;
  }
}
</style>

<!-- Keyframes entfernt - verwenden jetzt requestAnimationFrame -->
