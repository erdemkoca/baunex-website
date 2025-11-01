<template>
  <section class="section-gap">
    <div class="faq-fullwidth">
      <BaseContainer>
        <SectionHeading
          title="Häufige Fragen"
          subtitle="Schnelle Antworten auf die wichtigsten Fragen"
        />

        <div class="max-w-4xl mx-auto">
          <!-- Quick FAQ Grid -->
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div 
              v-for="(faq, index) in quickFAQs" 
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

          <!-- CTA to full FAQ page -->
          <div class="text-center">
            <p class="text-neutral-600 mb-6">
              Haben Sie weitere Fragen? In unserer umfassenden FAQ-Sammlung finden Sie 
              alle Antworten zu Preisen, Funktionen, Sicherheit und mehr.
            </p>
            <BaseButton 
              variant="primary" 
              to="/faq"
              size="lg"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Alle FAQs ansehen
            </BaseButton>
          </div>
        </div>
      </BaseContainer>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseContainer from './BaseContainer.vue'
import BaseButton from './BaseButton.vue'
import SectionHeading from './SectionHeading.vue'

const openFAQs = ref<number[]>([])

const toggleFAQ = (index: number) => {
  if (openFAQs.value.includes(index)) {
    openFAQs.value = openFAQs.value.filter(i => i !== index)
  } else {
    openFAQs.value.push(index)
  }
}

// Most important FAQs for homepage
const quickFAQs = [
  {
    id: 1,
    question: 'Wie lange dauert die Einführung?',
    answer: 'In der Regel 1–2 Wochen inklusive Datenimport, Rollen & Schulung. Kleine Teams sind oft in wenigen Tagen startklar.'
  },
  {
    id: 2,
    question: 'Wo werden meine Daten gespeichert?',
    answer: 'Hosting in der Schweiz/EU mit verschlüsselter Übertragung und ruhender Verschlüsselung. DSG/DSGVO-konform.'
  },
  {
    id: 3,
    question: 'Gibt es eine Testphase?',
    answer: 'Ja, Sie können Baunex testen. Die Demo wird auf Ihre Use-Cases angepasst.'
  }
]
</script>

<style scoped>
/* Vollbreite Layout - deckt Seiten komplett ab */
.faq-fullwidth {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background: #ffffff;
  padding: 2rem 0;
}

@media (min-width: 640px) {
  .faq-fullwidth {
    padding: 3rem 0;
  }
}

@media (min-width: 1024px) {
  .faq-fullwidth {
    padding: 4rem 0;
  }
}
</style>
