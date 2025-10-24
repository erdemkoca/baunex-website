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
                <div class="aspect-video bg-neutral-100 rounded-xl overflow-hidden">
                  <img 
                    :src="feature.screenshot" 
                    :alt="feature.title"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup lang="ts">
import BaseContainer from '../components/BaseContainer.vue'
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

const ChartBarIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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

const TruckIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  `
}

const ShieldCheckIcon = {
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

const ReportIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  `
}

const detailedFeatures = [
  // OPERATIVE MODULE
  {
    id: 1,
    title: 'Zeiten & Rapporte',
    description: 'Vollständige Zeiterfassung mit Bautagebuch, Fotos und digitalen Signaturen für präzise Dokumentation.',
    icon: ClockIcon,
    screenshot: '/images/screenshots/features/time-tracking-mobile.png',
    benefits: [
      'GPS-Standortverfolgung',
      'Bautagebuch mit Fotos',
      'Digitale Signaturen',
      'Automatische Rapporterstellung'
    ]
  },
  {
    id: 2,
    title: 'Dokumente & OCR',
    description: 'Zentrale Dokumentenverwaltung mit OCR-Texterkennung, Versionierung und intelligenter Suche.',
    icon: DocumentIcon,
    screenshot: '/images/screenshots/features/ai-ocr-document.png',
    benefits: [
      'OCR-Texterkennung',
      'Automatische Versionierung',
      'Volltextsuche',
      'Intelligente Kategorisierung'
    ]
  },
  {
    id: 3,
    title: 'Beschaffungssystem',
    description: 'Effiziente Verwaltung von Lieferanten, Materialkatalogen und Bestellungen.',
    icon: TruckIcon,
    screenshot: '/images/screenshots/features/procurement-system.png',
    benefits: [
      'Lieferanten-Datenbank',
      'Materialkatalog',
      'Bestellverfolgung',
      'Kostenvergleich'
    ]
  },
  {
    id: 4,
    title: 'Inventarverwaltung',
    description: 'Barcode-Scanning und Lagerbestandsverfolgung für optimale Materialverwaltung.',
    icon: PackageIcon,
    screenshot: '/images/screenshots/features/inventory-management.png',
    benefits: [
      'Barcode-Scanning',
      'Lagerbestandsverfolgung',
      'Niedrigbestand-Alerts',
      'Standort-Management'
    ]
  },
  
  // PROJEKTSTEUERUNG
  {
    id: 5,
    title: 'Projektmanagement',
    description: 'Professionelle Projektsteuerung mit Gantt-Charts, Meilensteinen und Aufgabenverwaltung.',
    icon: PackageIcon,
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
    description: 'Intelligente Terminplanung mit Wetterberücksichtigung und Ressourcenoptimierung.',
    icon: CalendarIcon,
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
    title: 'Kostenkontrolle & Budget',
    description: 'Präzise Kostenkontrolle mit Soll-Ist-Vergleichen, Change Orders und Prognosen.',
    icon: ChartBarIcon,
    screenshot: '/images/screenshots/features/analytics-dashboard.png',
    benefits: [
      'Soll-Ist-Vergleiche',
      'Change Order Management',
      'Kostenprognosen',
      'Budget-Überwachung'
    ]
  },
  {
    id: 8,
    title: 'Subunternehmer & Verträge',
    description: 'Professionelle Ausschreibungen, Angebotsvergleiche und Vergabemanagement.',
    icon: UsersIcon,
    screenshot: '/images/screenshots/features/subcontractor-management.png',
    benefits: [
      'Ausschreibungsmanagement',
      'Angebotsvergleiche',
      'Vergabeprozess',
      'Leistungsnachweise'
    ]
  },
  {
    id: 9,
    title: 'Ressourcen & Einsatzplanung',
    description: 'Optimierte Personal- und Geräteplanung mit Schichtverwaltung und Verfügbarkeitsprüfung.',
    icon: TrendingUpIcon,
    screenshot: '/images/screenshots/features/resource-planning.png',
    benefits: [
      'Personalplanung',
      'Geräteverwaltung',
      'Schichtplanung',
      'Verfügbarkeitsprüfung'
    ]
  },
  {
    id: 10,
    title: 'Qualitätskontrolle',
    description: 'Umfassende Qualitätssicherung mit Inspektionen, Mängelverfolgung und Dokumentation.',
    icon: CheckCircleIcon,
    screenshot: '/images/screenshots/features/quality-control.png',
    benefits: [
      'Inspektions-Checklisten',
      'Foto-Dokumentation',
      'Defekt-Tracking',
      'Qualitäts-Metriken'
    ]
  },
  {
    id: 11,
    title: 'HSE (Sicherheit & Gesundheit)',
    description: 'HSE-Management mit Checklisten, Incident-Reporting und Compliance-Tracking.',
    icon: ShieldCheckIcon,
    screenshot: '/images/screenshots/features/hse-safety.png',
    benefits: [
      'Sicherheits-Checklisten',
      'Incident-Reporting',
      'Compliance-Tracking',
      'Schulungsverwaltung'
    ]
  },
  
  // COMMERCIAL/BACKOFFICE
  {
    id: 12,
    title: 'Angebote & Kalkulation',
    description: 'Professionelle Angebotserstellung mit LV/Positionen, Margenberechnung und Varianten.',
    icon: FileTextIcon,
    screenshot: '/images/screenshots/features/offers-calculation.png',
    benefits: [
      'LV/Positionen-Verwaltung',
      'Margenberechnung',
      'Angebotsvarianten',
      'Umwandlung zu Rechnung'
    ]
  },
  {
    id: 13,
    title: 'Rechnungsgenerierung',
    description: 'Automatische Rechnungsgenerierung mit Vorlagen, MwSt-Berechnung und PDF-Export.',
    icon: FileTextIcon,
    screenshot: '/images/screenshots/features/invoice-generation.png',
    benefits: [
      'Vorlagen-Bibliothek',
      'Automatische MwSt-Berechnung',
      'PDF-Export',
      'Digitale Signatur'
    ]
  },
  {
    id: 14,
    title: 'Finanzen & Banking',
    description: 'Vollständige Finanzverwaltung mit Kreditoren/Debitoren und automatischem Zahlabgleich.',
    icon: BankIcon,
    screenshot: '/images/screenshots/features/banking-payments.png',
    benefits: [
      'Kreditoren/Debitoren-Verwaltung',
      'Automatischer Zahlabgleich',
      'Bankfeeds',
      'E-Rechnung'
    ]
  },
  {
    id: 15,
    title: 'Lohnabrechnung',
    description: 'Schweizer Lohnabrechnung mit Swissdec-Integration und automatischer Zeiterfassung.',
    icon: ClockIcon,
    screenshot: '/images/screenshots/features/payroll.png',
    benefits: [
      'Swissdec-Integration',
      'Automatische Zeiterfassung',
      'Zuschläge und Überstunden',
      'Lohnabrechnung'
    ]
  },
  {
    id: 16,
    title: 'CRM & Kundenmanagement',
    description: 'Effizientes Kundenbeziehungsmanagement mit Lead-Tracking und Verkaufschancen.',
    icon: UsersIcon,
    screenshot: '/images/screenshots/features/crm-customers.png',
    benefits: [
      'Kundendatenbank',
      'Lead-Management',
      'Verkaufschancen-Tracking',
      'Kommunikationshistorie'
    ]
  },
  
  // PLATTFORM
  {
    id: 17,
    title: 'BI & Analytics',
    description: 'Business Intelligence mit Dashboards, KPIs, Forecasts und Self-Service-Reports.',
    icon: TrendingUpIcon,
    screenshot: '/images/screenshots/features/business-intelligence.png',
    benefits: [
      'Interaktive Dashboards',
      'KPIs und Metriken',
      'Forecasts und Prognosen',
      'Self-Service-Reports'
    ]
  },
  {
    id: 18,
    title: 'Integrationen & API',
    description: 'Nahtlose Integration mit Swissdec, DATEV, Bank-APIs und anderen Systemen.',
    icon: SparklesIcon,
    screenshot: '/images/screenshots/features/integrations-api.png',
    benefits: [
      'Swissdec-Integration',
      'DATEV/Abacus/BC-Anbindung',
      'Bank-APIs',
      'Webhooks und Automatisierung'
    ]
  }
]
</script>
