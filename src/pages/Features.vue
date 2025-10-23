<template>
  <div class="pt-24">
    <!-- Hero Section -->
    <section class="section-padding">
      <BaseContainer>
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Alle Features für Ihren
            <span class="text-gradient">Bau- und Handwerksbetrieb</span>
          </h1>
          <p class="text-xl text-neutral-600 mb-12">
            Von der Zeiterfassung bis zur Rechnung – alle wichtigen Tools in einer Plattform. 
            Entdecken Sie, wie Baunex Ihren Arbeitsalltag vereinfacht.
          </p>
        </div>
      </BaseContainer>
    </section>

    <!-- Detailed Features -->
    <section class="section-padding bg-neutral-50">
      <BaseContainer>
        <div class="grid lg:grid-cols-2 gap-16">
          <div 
            v-for="(feature, index) in detailedFeatures" 
            :key="feature.id"
            class="flex flex-col lg:flex-row gap-8 items-center"
            :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
          >
            <!-- Content -->
            <div class="flex-1">
              <div class="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6">
                <component :is="feature.icon" class="w-8 h-8 text-white" />
              </div>
              
              <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-4">{{ feature.title }}</h2>
              <p class="text-lg text-neutral-600 mb-6">{{ feature.description }}</p>
              
              <ul class="space-y-3">
                <li 
                  v-for="benefit in feature.benefits" 
                  :key="benefit"
                  class="flex items-center"
                >
                  <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-neutral-700">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <!-- Visual -->
            <div class="flex-1">
              <div class="card bg-gradient-to-br from-primary/5 to-accent-to/5">
                <div class="aspect-video bg-neutral-100 rounded-xl flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <component :is="feature.icon" class="w-10 h-10 text-primary" />
                    </div>
                    <p class="text-neutral-500">{{ feature.visualText }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Feature Grid -->
    <FeatureGrid />

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup lang="ts">
import BaseContainer from '../components/BaseContainer.vue'
import FeatureGrid from '../components/FeatureGrid.vue'
import CTASection from '../components/CTASection.vue'

// Icon components
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

const PackageIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
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

const detailedFeatures = [
  {
    id: 1,
    title: 'Intelligente Zeiterfassung',
    description: 'Erfassen Sie Arbeitszeiten präzise und automatisch. Mit GPS-Tracking, Pausenerkennung und Offline-Funktionalität.',
    icon: ClockIcon,
    visualText: 'Zeiterfassung Dashboard',
    benefits: [
      'Mobile App für unterwegs',
      'Automatische Pausenerkennung',
      'GPS-Standortverfolgung',
      'Offline-Funktionalität',
      'Export für Lohnabrechnung'
    ]
  },
  {
    id: 2,
    title: 'Angebot & Rechnung',
    description: 'Erstellen Sie professionelle Angebote und Rechnungen. Mit Vorlagen, automatischer MwSt-Berechnung und digitaler Signatur.',
    icon: FileTextIcon,
    visualText: 'Rechnungsübersicht',
    benefits: [
      'Professionelle Vorlagen',
      'Automatische MwSt-Berechnung',
      'PDF-Export und Versand',
      'Digitale Signatur',
      'Zahlungserinnerungen'
    ]
  },
  {
    id: 3,
    title: 'Katalog-Management',
    description: 'Verwalten Sie Materialien und Leistungen zentral. Mit Preispflege, Kategorisierung und Lieferantenverwaltung.',
    icon: PackageIcon,
    visualText: 'Material-Katalog',
    benefits: [
      'Zentrale Material- und Leistungskataloge',
      'Preispflege und Aktualisierung',
      'Kategorisierung und Suche',
      'Lieferantenverwaltung',
      'Bestandsverwaltung'
    ]
  },
  {
    id: 4,
    title: 'KI-Forecast & OCR',
    description: 'Nutzen Sie künstliche Intelligenz für bessere Prognosen und automatische Belegenerkennung.',
    icon: SparklesIcon,
    visualText: 'KI-Analytics',
    benefits: [
      'Intelligente Dauer- und Kostenprognosen',
      'OCR für automatische Belegenerkennung',
      'Anomalie-Erkennung in Projektdaten',
      'Lernende Algorithmen',
      'Risiko-Früherkennung'
    ]
  }
]
</script>
