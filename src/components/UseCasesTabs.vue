<template>
  <section class="section-gap">
    <div class="usecases-fullwidth">
      <BaseContainer>
        <SectionHeading
          title="Für jeden Betriebstyp optimiert"
          subtitle="Baunex passt sich Ihrem Team und Ihren Projekten an – vom Einmannbetrieb bis GU/TU."
        />

        <!-- Sticky Tab Navigation -->
        <div class="sticky top-4 z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-2 mb-8">
          <div class="flex flex-col sm:flex-row justify-center gap-2">
            <button
              v-for="(useCase, index) in useCases"
              :key="useCase.id"
              @click="activeTab = index"
              :class="[
                'px-6 py-3 text-sm font-medium rounded-xl transition-all duration-200',
                activeTab === index
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-indigo-600 hover:bg-indigo-50'
              ]"
            >
              {{ useCase.title }}
            </button>
          </div>
        </div>

        <!-- Trades Auto-Scrolling Marquee -->
        <div class="mt-4 md:mt-6 mb-4">
          <div class="bnx-marquee bnx-marquee--compact relative overflow-hidden rounded-[inherit]" aria-label="Gewerke" ref="gewerkeMarquee">
            <div class="bnx-track" ref="gewerkeTrack">
              <button 
                v-for="trade in tradesDoubled" 
                :key="trade.id"
                class="bnx-chip inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-white shadow-[0_1px_6px_rgba(2,6,23,0.06)] ring-1 ring-slate-200/60 text-slate-900 hover:shadow-[0_6px_20px_rgba(2,6,23,0.12)] hover:-translate-y-0.5 focus:outline-none focus:shadow-[0_6px_20px_rgba(2,6,23,0.12)] focus:-translate-y-0.5 transition-all duration-200 cursor-default"
                tabindex="0"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                {{ trade.label }}
              </button>
            </div>
          </div>
        </div>

        <!-- Tab Content - Two Column Layout -->
        <div class="max-w-6xl mx-auto">
          <div class="animate-fade-in">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <!-- Content Column -->
              <div class="space-y-6">
                <div>
                  <h3 class="text-3xl md:text-4xl font-bold leading-tight mb-4 text-neutral-900">
                    {{ currentUseCase.title }}
                  </h3>
                  <p class="text-lg text-neutral-600 leading-relaxed">
                    {{ currentUseCase.description }}
                  </p>
                </div>
                
                <div class="space-y-4">
                  <div 
                    v-for="benefit in currentUseCase.benefits"
                    :key="benefit"
                    class="flex items-start gap-3"
                  >
                    <div class="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg class="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="text-neutral-700">{{ benefit }}</p>
                  </div>
                </div>

                <div class="pt-4">
                  <BaseButton variant="primary" :to="currentContactUrl" class="w-full sm:w-auto">
                    {{ currentCTAButtonText }}
                  </BaseButton>
                </div>
              </div>

              <!-- Visual Column -->
              <div class="relative">
                <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
                  <div class="aspect-video bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <div class="text-center">
                      <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <component :is="currentUseCase.icon" class="w-8 h-8 text-indigo-600" />
                      </div>
                      <p class="text-neutral-600 font-medium">{{ currentUseCase.visualText }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import BaseContainer from './BaseContainer.vue'
import SectionHeading from './SectionHeading.vue'
import BaseButton from './BaseButton.vue'

// Type definitions
interface UseCase {
  id: number
  title: string
  description: string
  icon: any
  visualText: string
  benefits: string[]
}

const activeTab = ref(0)

// Trades data for marquee
const trades = [
  'Elektriker',
  'Sanitär/Heizung',
  'Maler',
  'Dachdecker',
  'Trockenbau',
  'Fliesenleger',
  'Schreiner/Zimmerei',
  'Fenster & Türen',
  'Garten- & Landschaftsbau',
  'Solarteur/PV',
  'Stahlbau/Metallbau',
  'Bodenleger',
  'Tiefbau/Erdarbeiten'
]

// Double the trades for seamless loop
const tradesDoubled = [...trades, ...trades].map((label, i) => ({ 
  id: `${i}-${label}`, 
  label 
}))

// Marquee refs and variables
const gewerkeMarquee = ref<HTMLElement>()
const gewerkeTrack = ref<HTMLElement>()

let gewerkeRafId: number | null = null
let gewerkePrefersReducedMotion = false
let gewerkeSpeed = 100 // px per second

// Marquee animation function
function startGewerkeTicker() {
  if (!gewerkeTrack.value) return
  const el = gewerkeTrack.value
  let x = 0
  let last = performance.now()

  const step = (t: number) => {
    const dt = (t - last) / 1000
    last = t
    x -= gewerkeSpeed * dt

    // Reset when half width is reached (seamless loop)
    const halfWidth = el.scrollWidth / 2
    if (x <= -halfWidth) x += halfWidth

    el.style.transform = `translate3d(${x}px, 0, 0)`
    gewerkeRafId = requestAnimationFrame(step)
  }

  gewerkeRafId = requestAnimationFrame(step)

  // Hover pause/resume
  gewerkeMarquee.value?.addEventListener('mouseenter', () => { 
    if (gewerkeRafId) { 
      cancelAnimationFrame(gewerkeRafId)
      gewerkeRafId = null 
    } 
  })
  
  gewerkeMarquee.value?.addEventListener('mouseleave', () => { 
    if (!gewerkeRafId) { 
      last = performance.now()
      gewerkeRafId = requestAnimationFrame(step) 
    } 
  })
}

// Current use case based on active tab
const currentUseCase = computed((): UseCase => {
  const index = activeTab.value
  if (index >= 0 && index < useCases.length) {
    const useCase = useCases[index]
    if (useCase) return useCase
  }
  // Fallback to first use case or default
  if (useCases.length > 0) {
    const firstUseCase = useCases[0]
    if (firstUseCase) return firstUseCase
  }
  // Default fallback
  return {
    id: 0,
    title: 'Default',
    description: 'Default description',
    icon: HomeIcon,
    visualText: 'Default visual',
    benefits: []
  }
})

// CTA button text based on active tab
const currentCTAButtonText = computed(() => {
  const useCase = currentUseCase.value
  
  switch (useCase.title) {
    case 'Einzel- & Kleinbetriebe':
      return 'Jetzt testen'
    case 'Bauunternehmen & Mittelstand':
      return 'Live-Demo buchen'
    case 'General- & Totalunternehmer':
      return 'Beratung anfragen'
    default:
      return 'Jetzt testen'
  }
})

// Contact URL with business type parameter
const currentContactUrl = computed(() => {
  const useCase = currentUseCase.value
  
  // Create URL parameter based on business type
  let businessType = ''
  switch (useCase.title) {
    case 'Einzel- & Kleinbetriebe':
      businessType = 'kleinbetrieb'
      break
    case 'Bauunternehmen & Mittelstand':
      businessType = 'mittelstand'
      break
    case 'General- & Totalunternehmer':
      businessType = 'generalunternehmer'
      break
    default:
      businessType = 'kleinbetrieb'
  }
  
  return `/kontakt?type=${businessType}`
})

// Icon components
const HomeIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  `
}

const BuildingIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  `
}

const WrenchIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  `
}

const useCases: UseCase[] = [
  {
    id: 1,
    title: 'Einzel- & Kleinbetriebe',
    description: 'Schnell starten. Zeiten, Angebote und Rechnungen ohne Aufwand – unterwegs und im Büro.',
    icon: HomeIcon,
    visualText: 'Mobile Zeiterfassung & Rechnungen',
    benefits: [
      'Mobile Zeiterfassung & Rapport',
      'Angebots-/Rechnungsstellung in Minuten',
      'Beleg-OCR & Auto-Kontierung',
      'Einfache Kunden- & Projektübersicht'
    ]
  },
  {
    id: 2,
    title: 'Bauunternehmen & Mittelstand',
    description: 'Transparenz von Kosten bis Ressourcen – Projekte termintreu steuern und Abweichungen früh erkennen.',
    icon: BuildingIcon,
    visualText: 'Ressourcen- & Kosten-Dashboard',
    benefits: [
      'Ressourcen- & Einsatzplanung (Personen, Geräte)',
      'Kostenkontrolle (Soll-Ist, Budgets, Prognosen)',
      'Beschaffung & Lieferanten, Eingangsrechnungen',
      'Dashboards, Forecasts & Anomalie-Erkennung'
    ]
  },
  {
    id: 3,
    title: 'General- & Totalunternehmer',
    description: 'Struktur für große Vorhaben: Gewerke, Nachträge, Verträge – alles sauber verzahnt.',
    icon: WrenchIcon,
    visualText: 'Subunternehmer- & Vertragsmanagement',
    benefits: [
      'Subunternehmer- & Vertragsmanagement',
      'Nachträge/Change Orders & Abnahmen',
      'Dokumente & Versionierung (Pläne, Protokolle)',
      'Integrationen (DATEV/Swissdec, Bank-APIs, DMS)'
    ]
  }
]

// Initialize marquee on mount
onMounted(async () => {
  gewerkePrefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (gewerkePrefersReducedMotion) {
    return
  }

  await nextTick()
  if (!gewerkeTrack.value) return

  // Small delay for fonts to load
  setTimeout(() => startGewerkeTicker(), 50)
})

onUnmounted(() => {
  if (gewerkeRafId) cancelAnimationFrame(gewerkeRafId)
})
</script>

<style scoped>
/* Sticky tab navigation styling */
.sticky {
  position: sticky;
  top: 1rem;
  z-index: 10;
}

/* Smooth animations */
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in {
    animation: none;
  }
}

/* Trades marquee styling */
.bnx-marquee {
  position: relative; 
  overflow: hidden; 
  padding: 8px 0; 
}

.bnx-marquee--compact {
  padding: 4px 0;
}

.bnx-track { 
  display: flex; 
  gap: 16px; 
  flex-wrap: nowrap; 
  will-change: transform; 
  padding: 0 8px;
}

@media (min-width: 768px) {
  .bnx-track {
    gap: 20px;
    padding: 0 12px;
  }
}

.bnx-chip { 
  flex: 0 0 auto; 
  white-space: nowrap;
  border-radius: 9999px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .bnx-track {
    animation: none !important;
  }
}

/* Vollbreite Layout - deckt Seiten komplett ab */
.usecases-fullwidth {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background: #ffffff;
  padding: 2rem 0;
}

@media (min-width: 640px) {
  .usecases-fullwidth {
    padding: 3rem 0;
  }
}

@media (min-width: 1024px) {
  .usecases-fullwidth {
    padding: 4rem 0;
  }
}

</style>
