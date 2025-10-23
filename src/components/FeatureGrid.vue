<template>
  <section class="section-padding">
    <BaseContainer>
      <SectionHeading
        title="Alles was Sie brauchen, in einer Plattform"
        subtitle="Von der Zeiterfassung bis zur Rechnung – alle wichtigen Tools für Ihren Bau- und Handwerksbetrieb"
      />

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.id"
          class="card group hover:scale-105 transition-all duration-300"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <component :is="feature.icon" class="w-6 h-6 text-white" />
          </div>
          
          <h3 class="text-display-3 mb-4">{{ feature.title }}</h3>
          <p class="text-neutral-600 mb-6">{{ feature.description }}</p>
          
          <ul class="space-y-2">
            <li 
              v-for="benefit in feature.benefits" 
              :key="benefit"
              class="flex items-center text-sm text-neutral-600"
            >
              <svg class="w-4 h-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ benefit }}
            </li>
          </ul>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from './BaseContainer.vue'
import SectionHeading from './SectionHeading.vue'

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

const features = [
  {
    id: 1,
    title: 'Zeiterfassung',
    description: 'Einfach Stunden loggen, präzise abrechnen.',
    icon: ClockIcon,
    benefits: [
      'Mobile Zeiterfassung',
      'Automatische Pausenerkennung',
      'GPS-Standortverfolgung',
      'Offline-Funktionalität'
    ]
  },
  {
    id: 2,
    title: 'Angebot & Rechnung',
    description: 'Katalog, Positionen, MwSt – alles drin.',
    icon: FileTextIcon,
    benefits: [
      'Vorlagen-Bibliothek',
      'Automatische MwSt-Berechnung',
      'PDF-Export',
      'Digitale Signatur'
    ]
  },
  {
    id: 3,
    title: 'KI-Unterstützung',
    description: 'Forecasts, OCR für Belege, Anomalien finden.',
    icon: SparklesIcon,
    benefits: [
      'OCR für Belege',
      'Prognose-Tools',
      'Anomalie-Erkennung',
      'Intelligente Kategorisierung'
    ]
  },
  {
    id: 4,
    title: 'Transparenz',
    description: 'Alle Projektkosten im Blick – live.',
    icon: ChartBarIcon,
    benefits: [
      'Echtzeit-Dashboard',
      'Kostenübersicht',
      'Rentabilitäts-Analyse',
      'Automatische Reports'
    ]
  }
]
</script>
