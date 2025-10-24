<template>
  <section class="section-padding">
    <BaseContainer>
      <SectionHeading
        title="Häufig gestellte Fragen"
        subtitle="Alles was Sie über Baunex wissen müssen"
      />

      <div class="max-w-3xl mx-auto">
        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseContainer from './BaseContainer.vue'
import SectionHeading from './SectionHeading.vue'

const openFAQs = ref<number[]>([])

const toggleFAQ = (index: number) => {
  if (openFAQs.value.includes(index)) {
    openFAQs.value = openFAQs.value.filter(i => i !== index)
  } else {
    openFAQs.value.push(index)
  }
}

const faqs = [
  {
    id: 1,
    question: 'Wie sicher sind meine Daten bei Baunex?',
    answer: 'Ihre Daten sind bei uns in höchster Sicherheit. Wir verwenden SSL-Verschlüsselung, regelmässige Backups und sind DSGVO-konform. Alle Daten werden in Rechenzentren gespeichert.'
  },
  {
    id: 2,
    question: 'Kann ich meine Daten exportieren?',
    answer: 'Ja, Sie können jederzeit alle Ihre Daten exportieren. Wir bieten Export-Funktionen für Zeiterfassung, Rechnungen, Kunden- und Projektdaten in verschiedenen Formaten (CSV, PDF, Excel).'
  },
  {
    id: 3,
    question: 'Wie funktioniert das Onboarding?',
    answer: 'Unser Onboarding-Prozess ist einfach und schnell. Nach der Anmeldung erhalten Sie eine persönliche Einführung, wir richten Ihre ersten Projekte ein und zeigen Ihnen alle wichtigen Funktionen. Der gesamte Prozess dauert nur 30 Minuten.'
  },
  {
    id: 4,
    question: 'Gibt es einen Support?',
    answer: 'Ja, wir bieten 24/7 Support per E-Mail und Chat. Zusätzlich haben Sie Zugang zu unserer umfangreichen Wissensdatenbank mit Tutorials und Anleitungen. Premium-Kunden erhalten auch telefonischen Support.'
  },
  {
    id: 5,
    question: 'Kann ich Baunex vor dem Kauf testen?',
    answer: 'Selbstverständlich! Sie können Baunex 14 Tage lang kostenlos und unverbindlich testen. Keine Kreditkarte erforderlich. Alle Funktionen stehen Ihnen zur Verfügung.'
  },
  {
    id: 6,
    question: 'Welche Zahlungsmethoden werden akzeptiert?',
    answer: 'Wir akzeptieren alle gängigen Zahlungsmethoden: SEPA-Lastschrift, Kreditkarte (Visa, Mastercard), PayPal und Rechnung für grössere Unternehmen. Die Abrechnung erfolgt monatlich oder jährlich.'
  },
  {
    id: 7,
    question: 'Funktioniert Baunex auch offline?',
    answer: 'Ja, die mobile App funktioniert auch offline. Zeiterfassung und grundlegende Funktionen sind verfügbar. Sobald Sie wieder online sind, werden alle Daten automatisch synchronisiert.'
  },
  {
    id: 8,
    question: 'Kann ich Baunex mit anderen Tools integrieren?',
    answer: 'Ja, Baunex bietet APIs und Integrationen mit vielen gängigen Tools wie Buchhaltungssoftware, CRM-Systemen und Projektmanagement-Tools. Sprechen Sie uns an für individuelle Integrationen.'
  }
]
</script>
