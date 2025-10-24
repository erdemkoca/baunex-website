<template>
  <section class="section-padding">
    <BaseContainer>
      <SectionHeading
        title="Für jeden Betriebstyp optimiert"
        subtitle="Ob Kleinbetrieb oder Generalunternehmer – Baunex passt sich Ihren Bedürfnissen an"
      />

      <!-- Tab Navigation -->
      <div class="flex flex-col sm:flex-row justify-center mb-12">
        <button
          v-for="(useCase, index) in useCases"
          :key="useCase.id"
          @click="activeTab = index"
          :class="[
            'px-6 py-3 text-sm font-medium rounded-2xl transition-all duration-200 mb-2 sm:mb-0 sm:mr-2',
            activeTab === index
              ? 'bg-primary text-white shadow-soft'
              : 'text-neutral-600 hover:text-primary hover:bg-primary/10'
          ]"
        >
          {{ useCase.title }}
        </button>
      </div>

      <!-- Tab Content -->
      <div class="max-w-4xl mx-auto">
        <div 
          v-for="(useCase, index) in useCases"
          :key="useCase.id"
          v-show="activeTab === index"
          class="animate-fade-in"
        >
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Content -->
            <div>
              <h3 class="text-3xl md:text-4xl font-bold leading-tight mb-6">{{ useCase.title }}</h3>
              <p class="text-lg text-neutral-600 mb-8">{{ useCase.description }}</p>
              
              <div class="space-y-4 mb-8">
                <div 
                  v-for="benefit in useCase.benefits"
                  :key="benefit"
                  class="flex items-start"
                >
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-neutral-700">{{ benefit }}</p>
                </div>
              </div>

              <BaseButton variant="primary" to="/kontakt">
                Jetzt testen
              </BaseButton>
            </div>

            <!-- Visual -->
            <div class="relative">
              <div class="card bg-gradient-to-br from-primary/5 to-accent-to/5">
                <div class="aspect-video bg-neutral-100 rounded-xl flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <component :is="useCase.icon" class="w-8 h-8 text-primary" />
                    </div>
                    <p class="text-neutral-500">{{ useCase.visualText }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseContainer from './BaseContainer.vue'
import SectionHeading from './SectionHeading.vue'
import BaseButton from './BaseButton.vue'

const activeTab = ref(0)

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

const useCases = [
  {
    id: 1,
    title: 'Kleinbetrieb',
    description: 'Perfekt für Handwerker und kleine Betriebe mit bis zu 10 Mitarbeitern. Einfache Bedienung, alle wichtigen Funktionen.',
    icon: HomeIcon,
    visualText: 'Kleinbetrieb Dashboard',
    benefits: [
      'Einfache Zeiterfassung für kleine Teams',
      'Schnelle Angebotserstellung',
      'Automatische Rechnungsstellung',
      'Mobile App für unterwegs',
      'Günstige Preise für Einzelunternehmer'
    ]
  },
  {
    id: 2,
    title: 'Generalunternehmer',
    description: 'Ideal für grössere Bauunternehmen mit mehreren Projekten gleichzeitig. Erweiterte Planung und Koordination.',
    icon: BuildingIcon,
    visualText: 'Projektübersicht',
    benefits: [
      'Multi-Projekt-Management',
      'Ressourcenplanung und -zuweisung',
      'Detaillierte Kostenkontrolle',
      'Team-Koordination und Kommunikation',
      'Erweiterte Reporting-Funktionen'
    ]
  },
  {
    id: 3,
    title: 'Handwerker',
    description: 'Speziell für Handwerksbetriebe entwickelt. Fokus auf Serviceleistungen und Kundenservice.',
    icon: WrenchIcon,
    visualText: 'Service-Termine',
    benefits: [
      'Terminplanung und -verwaltung',
      'Kundendatenbank und Historie',
      'Service-Aufträge verwalten',
      'Material- und Ersatzteilverwaltung',
      'Kundenzufriedenheit verfolgen'
    ]
  }
]
</script>
