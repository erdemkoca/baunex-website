<template>
  <div class="pt-24">
    <!-- Hero Section -->
    <section class="section-padding">
      <BaseContainer>
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transparente Preise für
            <span class="text-gradient">jeden Betrieb</span>
          </h1>
          <p class="text-xl text-neutral-600 mb-12">
            Wählen Sie den passenden Plan für Ihr Unternehmen. Alle Pläne enthalten die Grundfunktionen 
            und Sie können jederzeit upgraden oder downgraden.
          </p>
          
          <!-- Billing Toggle -->
          <div class="flex items-center justify-center mb-12">
            <span class="text-neutral-600 mr-3">Monatlich</span>
            <button 
              @click="isYearly = !isYearly"
              :class="[
                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                isYearly ? 'bg-primary' : 'bg-neutral-300'
              ]"
            >
              <span 
                :class="[
                  'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                ]"
              />
            </button>
            <span class="text-neutral-600 ml-3">Jährlich</span>
            <span class="ml-2 px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">-20%</span>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Pricing Cards -->
    <section class="section-padding bg-neutral-50">
      <BaseContainer>
        <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Starter Plan -->
          <div class="card group hover:scale-105 transition-all duration-300">
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-bold leading-tight mb-2">Starter</h3>
              <p class="text-neutral-600 mb-6">Für kleine Betriebe</p>
              <div class="mb-6">
                <span class="text-4xl font-bold text-neutral-900">
                  CHF {{ isYearly ? '23' : '29' }}
                </span>
                <span class="text-neutral-500">/Monat</span>
              </div>
              <BaseButton 
                variant="secondary" 
                to="/kontakt"
                class="w-full"
              >
                Starter wählen
              </BaseButton>
            </div>
            
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">Bis zu 5 Benutzer</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">Zeiterfassung</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">Angebote & Rechnungen</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">Basis-Katalog</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">E-Mail Support</span>
              </li>
            </ul>
          </div>

          <!-- Pro Plan -->
          <div class="card group hover:scale-105 transition-all duration-300 relative border-2 border-primary">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                Beliebt
              </span>
            </div>
            
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-bold leading-tight mb-2">Pro</h3>
              <p class="text-neutral-600 mb-6">Für wachsende Unternehmen</p>
              <div class="mb-6">
                <span class="text-4xl font-bold text-neutral-900">
                  CHF {{ isYearly ? '63' : '79' }}
                </span>
                <span class="text-neutral-500">/Monat</span>
              </div>
              <BaseButton 
                variant="primary" 
                to="/kontakt"
                class="w-full"
              >
                Pro wählen
              </BaseButton>
            </div>
            
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">Bis zu 25 Benutzer</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">Alle Starter Features</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">Erweiterte Kataloge</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">KI-Forecasts</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">OCR für Belege</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">API-Zugang</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">Telefon Support</span>
              </li>
            </ul>
          </div>

          <!-- Enterprise Plan -->
          <div class="card group hover:scale-105 transition-all duration-300">
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-bold leading-tight mb-2">Enterprise</h3>
              <p class="text-neutral-600 mb-6">Für große Unternehmen</p>
              <div class="mb-6">
                <span class="text-4xl font-bold text-neutral-900">
                  CHF {{ isYearly ? '159' : '199' }}
                </span>
                <span class="text-neutral-500">/Monat</span>
              </div>
              <BaseButton 
                variant="secondary" 
                to="/kontakt"
                class="w-full"
              >
                Enterprise wählen
              </BaseButton>
            </div>
            
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">Unbegrenzte Benutzer</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">Alle Pro Features</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">White-Label Option</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">On-Premise Installation</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">Dedicated Support</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">Custom Integration</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">SLA Garantie</span>
              </li>
            </ul>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding">
      <BaseContainer>
        <SectionHeading
          title="Häufige Fragen zu den Preisen"
          subtitle="Alles was Sie über unsere Preismodelle wissen müssen"
        />
        
        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <div 
              v-for="(faq, index) in pricingFAQs" 
              :key="faq.id"
              class="card cursor-pointer"
              @click="toggleFAQ(index)"
            >
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-neutral-900 pr-8">
                  {{ faq.question }}
                </h3>
                <svg 
                  class="w-5 h-5 text-neutral-500 transition-transform duration-200 flex-shrink-0"
                  :class="{ 'rotate-180': openFAQs.includes(index) }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div 
                v-show="openFAQs.includes(index)"
                class="mt-4 pt-4 border-t border-neutral-200"
              >
                <p class="text-neutral-600 leading-relaxed">
                  {{ faq.answer }}
                </p>
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
import { ref } from 'vue'
import BaseContainer from '../components/BaseContainer.vue'
import BaseButton from '../components/BaseButton.vue'
import SectionHeading from '../components/SectionHeading.vue'
import CTASection from '../components/CTASection.vue'

const isYearly = ref(false)
const openFAQs = ref<number[]>([])

const toggleFAQ = (index: number) => {
  if (openFAQs.value.includes(index)) {
    openFAQs.value = openFAQs.value.filter(i => i !== index)
  } else {
    openFAQs.value.push(index)
  }
}

const pricingFAQs = [
  {
    id: 1,
    question: 'Kann ich jederzeit zwischen den Plänen wechseln?',
    answer: 'Ja, Sie können jederzeit upgraden oder downgraden. Bei einem Upgrade wird der Differenzbetrag anteilig berechnet. Bei einem Downgrade erhalten Sie eine Gutschrift für den Rest des Abrechnungszeitraums.'
  },
  {
    id: 2,
    question: 'Gibt es eine kostenlose Testversion?',
    answer: 'Ja, alle Pläne können 14 Tage lang kostenlos getestet werden. Keine Kreditkarte erforderlich. Sie haben vollen Zugang zu allen Funktionen Ihres gewählten Plans.'
  },
  {
    id: 3,
    question: 'Was passiert mit meinen Daten bei einer Kündigung?',
    answer: 'Ihre Daten bleiben 30 Tage nach der Kündigung verfügbar. Sie können alle Daten exportieren. Nach 30 Tagen werden die Daten sicher gelöscht, es sei denn, Sie verlängern Ihren Vertrag.'
  },
  {
    id: 4,
    question: 'Gibt es Rabatte für jährliche Zahlungen?',
    answer: 'Ja, bei jährlicher Zahlung erhalten Sie 20% Rabatt auf alle Pläne. Das entspricht 2 Monaten kostenlos pro Jahr.'
  },
  {
    id: 5,
    question: 'Kann ich individuelle Preise aushandeln?',
    answer: 'Für Enterprise-Kunden mit besonderen Anforderungen bieten wir maßgeschneiderte Lösungen und individuelle Preise. Kontaktieren Sie uns für ein persönliches Angebot.'
  }
]
</script>
