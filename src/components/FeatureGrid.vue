<template>
  <section class="py-16 md:py-20">
    <div class="container">
      <SectionHeading
        title="Alles was Sie brauchen, in einer Plattform"
        subtitle="Von der Zeiterfassung bis zur Rechnung – alle wichtigen Tools für Ihren Bau- und Handwerksbetrieb"
      />

      <!-- Horizontal Auto-Scrolling Modules (oberer Bereich, gleiche Kartenoptik) -->
      <div class="bnx-marquee" aria-label="Module" ref="marquee">
        <div class="bnx-track" ref="track">
          <FeatureCard 
            v-for="module in allModules" 
            :key="module.id"
            class="bnx-card"
          >
            <template #icon>
              <component :is="module.icon" class="w-6 h-6" />
            </template>
            <template #title>{{ module.title }}</template>
            {{ module.description }}
          </FeatureCard>
        </div>
      </div>

      <!-- Detailed Feature Showcases -->
      <div class="space-y-20">
        <div 
          v-for="(feature, index) in detailedFeatures" 
          :key="feature.id"
          class="grid lg:grid-cols-2 items-center gap-12"
          :class="{ 'lg:grid-flow-col-dense': index % 2 === 1 }"
        >
          <!-- Content -->
          <div :class="{ 'lg:col-start-2': index % 2 === 1 }">
            <h3 class="text-h3 font-bold text-neutral-900 mb-4">{{ feature.title }}</h3>
            <p class="text-body text-neutral-700 mb-6">{{ feature.description }}</p>
            
            <div class="grid sm:grid-cols-2 gap-4">
              <div 
                v-for="benefit in feature.benefits" 
                :key="benefit"
                class="flex items-center gap-3"
              >
                <div class="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-sm text-neutral-700">{{ benefit }}</span>
              </div>
            </div>
          </div>

          <!-- Screenshot -->
          <div :class="{ 'lg:col-start-1': index % 2 === 1 }">
            <div class="rounded-3xl shadow-soft ring-1 ring-white/50 overflow-hidden bg-white/80 backdrop-blur-xs">
              <img :src="feature.screenshot" :alt="feature.title" class="w-full h-auto" />
            </div>
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
  return first.reduce((sum, c, i) => sum + c.offsetWidth + (i ? gap : 0), 0)
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

    // Nahtloser Reset: sobald eine Hälfte raus ist, springe +half zurück
    if (x <= -half) x += half

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

  // Resize: nur Speed/half neu bestimmen, Position beibehalten
  ro = new ResizeObserver(() => {
    if (!track.value) return
    speed = currentSpeed()
    const newHalf = measureHalfWidth(el)
    console.log('Resize detected, new speed:', speed, 'new half:', newHalf)
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

// Icon components (you can replace these with actual Lucide icons)
const ClockIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `
}

const FileTextIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  `
}

const SparklesIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  `
}

const ChartBarIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  `
}

// Additional icons for all modules
const ProjectIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  `
}

const ShieldIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  `
}

const CheckCircleIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `
}

const DocumentIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  `
}

const BankIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  `
}

const UsersIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  `
}


const CalendarIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  `
}

const CalculatorIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  `
}

const TrendingUpIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  `
}

const PackageIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  `
}



// All modules for the horizontal scrolling grid
const allModules = [
  {
    id: 1,
    title: 'Zeiterfassung',
    description: 'Einfach Stunden loggen, präzise abrechnen.',
    icon: ClockIcon
  },
  {
    id: 2,
    title: 'Angebot & Rechnung',
    description: 'Katalog, Positionen, MwSt – alles drin.',
    icon: FileTextIcon
  },
  {
    id: 3,
    title: 'KI-Unterstützung',
    description: 'Forecasts, OCR für Belege, Anomalien finden.',
    icon: SparklesIcon
  },
  {
    id: 4,
    title: 'Transparenz',
    description: 'Alle Projektkosten im Blick – live.',
    icon: ChartBarIcon
  },
  {
    id: 5,
    title: 'Projektmanagement',
    description: 'Aufgaben, Meilensteine, Gantt.',
    icon: ProjectIcon
  },
  {
    id: 6,
    title: 'HSE (Sicherheit & Gesundheit)',
    description: 'Checklisten, Vorfälle, Compliance.',
    icon: ShieldIcon
  },
  {
    id: 7,
    title: 'Qualität',
    description: 'Inspektionen, Mängel, Fotodoku.',
    icon: CheckCircleIcon
  },
  {
    id: 8,
    title: 'Dokumente & OCR',
    description: 'Upload, Versionierung, Texterkennung.',
    icon: DocumentIcon
  },
  {
    id: 9,
    title: 'Banking',
    description: 'Zahlungen, Abgleiche, Export.',
    icon: BankIcon
  },
  {
    id: 10,
    title: 'CRM',
    description: 'Kontakte, Leads, Angebote.',
    icon: UsersIcon
  },
  {
    id: 11,
    title: 'Abwesenheiten',
    description: 'Urlaub, Krankheit, Freigaben.',
    icon: CalendarIcon
  },
  {
    id: 12,
    title: 'Buchhaltung',
    description: 'Belege, Konten, Auswertungen.',
    icon: CalculatorIcon
  },
  {
    id: 13,
    title: 'Lohnabrechnung',
    description: 'Zeiten, Zuschläge, Export.',
    icon: CalculatorIcon
  },
  {
    id: 14,
    title: 'Business-Analyse',
    description: 'Dashboards, KPIs, Reports.',
    icon: TrendingUpIcon
  },
  {
    id: 15,
    title: 'Katalog & Positionen',
    description: 'Leistungen, Material, Preise.',
    icon: PackageIcon
  },
  {
    id: 16,
    title: 'Kostenkontrolle',
    description: 'Budgets, Soll-Ist, Prognosen.',
    icon: ChartBarIcon
  },
  {
    id: 17,
    title: 'Lieferanten',
    description: 'Bestellungen, Eingangsrechnungen.',
    icon: UsersIcon
  },
  {
    id: 18,
    title: 'Rapporte',
    description: 'Tages-/Wochenberichte.',
    icon: DocumentIcon
  }
]


// Detailed features with screenshots
const detailedFeatures = [
  {
    id: 1,
    title: 'Mobile Zeiterfassung',
    description: 'Erfassen Sie Arbeitszeiten direkt auf der Baustelle mit GPS-Standortverfolgung und automatischer Pausenerkennung.',
    screenshot: '/images/screenshots/features/time-tracking-mobile.png',
    benefits: [
      'GPS-Standortverfolgung',
      'Automatische Pausenerkennung',
      'Offline-Funktionalität',
      'Echtzeit-Synchronisation'
    ]
  },
  {
    id: 2,
    title: 'Rechnungsgenerierung',
    description: 'Erstellen Sie professionelle Rechnungen mit automatischer MwSt-Berechnung und PDF-Export.',
    screenshot: '/images/screenshots/features/invoice-generation.png',
    benefits: [
      'Vorlagen-Bibliothek',
      'Automatische MwSt-Berechnung',
      'PDF-Export',
      'Digitale Signatur'
    ]
  },
  {
    id: 3,
    title: 'KI-OCR Dokumentenverarbeitung',
    description: 'Automatische Texterkennung für Belege und Rechnungen mit hoher Genauigkeit.',
    screenshot: '/images/screenshots/features/ai-ocr-document.png',
    benefits: [
      'OCR für Belege',
      'Automatische Datenextraktion',
      'Intelligente Kategorisierung',
      'Vertrauensscore-Anzeige'
    ]
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Echtzeit-Übersicht über alle wichtigen KPIs und Projektmetriken.',
    screenshot: '/images/screenshots/features/analytics-dashboard.png',
    benefits: [
      'Echtzeit-Dashboard',
      'Kostenübersicht',
      'Rentabilitäts-Analyse',
      'Automatische Reports'
    ]
  },
  {
    id: 5,
    title: 'Projektmanagement',
    description: 'Verwalten Sie alle Ihre Bauprojekte mit Gantt-Charts und Meilenstein-Tracking.',
    screenshot: '/images/screenshots/features/project-management.png',
    benefits: [
      'Gantt-Chart Visualisierung',
      'Meilenstein-Tracking',
      'Team-Zuweisungen',
      'Fortschritts-Monitoring'
    ]
  },
  {
    id: 6,
    title: 'Terminplanung',
    description: 'Optimierte Terminplanung mit Wetterberücksichtigung und Ressourcenallokation.',
    screenshot: '/images/screenshots/features/scheduling-timeline.png',
    benefits: [
      'Wetter-Integration',
      'Ressourcenplanung',
      'Konflikt-Erkennung',
      'Automatische Optimierung'
    ]
  },
  {
    id: 7,
    title: 'Beschaffungssystem',
    description: 'Verwalten Sie Lieferanten, Materialkataloge und Bestellungen zentral.',
    screenshot: '/images/screenshots/features/procurement-system.png',
    benefits: [
      'Lieferanten-Datenbank',
      'Materialkatalog',
      'Bestellverfolgung',
      'Kostenvergleich'
    ]
  },
  {
    id: 8,
    title: 'Inventarverwaltung',
    description: 'Barcode-Scanning und Lagerbestandsverfolgung für alle Materialien.',
    screenshot: '/images/screenshots/features/inventory-management.png',
    benefits: [
      'Barcode-Scanning',
      'Lagerbestandsverfolgung',
      'Niedrigbestand-Alerts',
      'Standort-Management'
    ]
  },
  {
    id: 9,
    title: 'Sicherheit & Gesundheit',
    description: 'HSE-Management mit Checklisten, Incident-Reporting und Compliance-Tracking.',
    screenshot: '/images/screenshots/features/hse-safety.png',
    benefits: [
      'Sicherheits-Checklisten',
      'Incident-Reporting',
      'Compliance-Tracking',
      'Schulungsverwaltung'
    ]
  },
  {
    id: 10,
    title: 'Qualitätskontrolle',
    description: 'Dokumentation von Inspektionen, Defekten und Qualitätsmetriken.',
    screenshot: '/images/screenshots/features/quality-control.png',
    benefits: [
      'Inspektions-Checklisten',
      'Foto-Dokumentation',
      'Defekt-Tracking',
      'Qualitäts-Metriken'
    ]
  }
]
</script>

<style scoped>
/* wichtig: kein Wrap */
.bnx-track { 
  display: flex; 
  gap: 24px; 
  flex-wrap: nowrap; 
  will-change: transform; 
}

/* Kartenbreite fix, wie gehabt */
.bnx-card { 
  flex: 0 0 auto; 
  min-width: 360px; 
  max-width: 360px; 
}

@media (max-width: 768px) {
  .bnx-card { 
    min-width: 280px; 
    max-width: 280px; 
  }
  .bnx-track { 
    gap: 16px; 
  }
}

/* Container ohne Edge-Fades */
.bnx-marquee { 
  position: relative; 
  overflow: hidden; 
  padding: 20px 0; 
}
</style>

<!-- Keyframes entfernt - verwenden jetzt requestAnimationFrame -->
