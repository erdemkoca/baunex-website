<template>
  <div class="pt-24">
    <!-- Hero Section -->
    <section class="section-padding">
      <BaseContainer>
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Lassen Sie uns
            <span class="text-gradient">sprechen</span>
          </h1>
          <p class="text-xl text-neutral-600 mb-12">
            Haben Sie Fragen oder möchten Sie eine Demo anfragen? Wir freuen uns auf Ihre Nachricht 
            und helfen Ihnen gerne bei der Digitalisierung Ihres Betriebs.
          </p>
        </div>
      </BaseContainer>
    </section>

    <!-- Contact Form & Info -->
    <section class="section-padding bg-neutral-50">
      <BaseContainer>
        <div class="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <!-- Contact Form -->
          <div class="card">
            <h2 class="text-2xl md:text-3xl font-bold leading-tight mb-6">Demo anfragen</h2>
            <p class="text-neutral-600 mb-8">
              Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
            
            <!-- Business Type Indicator -->
            <div v-if="businessType" class="mb-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span class="text-sm font-medium text-indigo-700">
                  Anfrage für: 
                  <span v-if="businessType === 'kleinbetrieb'">Einzel- & Kleinbetriebe</span>
                  <span v-else-if="businessType === 'mittelstand'">Bauunternehmen & Mittelstand</span>
                  <span v-else-if="businessType === 'generalunternehmer'">General- & Totalunternehmer</span>
                </span>
              </div>
            </div>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-neutral-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Ihr Name"
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-neutral-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="ihre@email.ch"
                  />
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label for="company" class="block text-sm font-medium text-neutral-700 mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    v-model="form.company"
                    class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Ihr Unternehmen"
                  />
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-neutral-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+41 44 123 45 67"
                  />
                </div>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-neutral-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Erzählen Sie uns von Ihrem Betrieb und Ihren Anforderungen..."
                ></textarea>
              </div>
              
              <div class="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  v-model="form.privacy"
                  required
                  class="mt-1 w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary"
                />
                <label for="privacy" class="ml-3 text-sm text-neutral-600">
                  Ich stimme der 
                  <RouterLink to="/datenschutz" class="text-primary hover:underline">
                    Datenschutzerklärung
                  </RouterLink> 
                  zu und erlaube die Verarbeitung meiner Daten für die Bearbeitung meiner Anfrage. *
                </label>
              </div>
              
              <BaseButton 
                type="submit"
                variant="primary"
                size="lg"
                class="w-full"
                :disabled="isSubmitting"
              >
                <svg v-if="isSubmitting" class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {{ isSubmitting ? 'Wird gesendet...' : 'Demo anfragen' }}
              </BaseButton>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="card">
              <h3 class="text-2xl md:text-3xl font-bold leading-tight mb-6">Kontaktinformationen</h3>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-gradient-accent rounded-xl mr-4 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-neutral-900 mb-1">E-Mail</h4>
                    <a href="mailto:info@baunex.ch" class="text-neutral-600 hover:text-primary transition-colors">
                      info@baunex.ch
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-gradient-accent rounded-xl mr-4 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-neutral-900 mb-1">Telefon</h4>
                    <a href="tel:+41441234567" class="text-neutral-600 hover:text-primary transition-colors">
                      +41 44 123 45 67
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-gradient-accent rounded-xl mr-4 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-neutral-900 mb-1">Adresse</h4>
                    <p class="text-neutral-600">
                      Baunex GmbH<br>
                      Hochbergerstrasse 60<br>
                      4057 Basel<br>
                      Schweiz
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card bg-gradient-to-br from-primary/5 to-accent-to/5">
              <h3 class="text-2xl md:text-3xl font-bold leading-tight mb-4">Schnelle Demo</h3>
              <p class="text-neutral-600 mb-6">
                Möchten Sie Baunex sofort in Aktion sehen? Vereinbaren Sie einen Termin für eine 
                persönliche 30-minütige Demo.
              </p>
              <BaseButton 
                variant="primary"
                href="mailto:demo@baunex.ch?subject=Demo-Termin anfragen"
                class="w-full"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Demo-Termin vereinbaren
              </BaseButton>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Quick FAQ Section -->
    <section class="section-padding bg-neutral-50">
      <BaseContainer>
        <div class="text-center max-w-4xl mx-auto mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Vor der Demo gefragt
          </h2>
          <p class="text-xl text-neutral-600">
            Die häufigsten Fragen, die uns vor einer Demo gestellt werden
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <div 
              v-for="(faq, index) in contactFAQs" 
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import BaseContainer from '../components/BaseContainer.vue'
import BaseButton from '../components/BaseButton.vue'

const route = useRoute()
const isSubmitting = ref(false)
const openFAQs = ref<number[]>([])

// Business type from URL parameter
const businessType = ref('')

const form = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  privacy: false,
  businessType: ''
})

// Initialize business type from URL parameter
onMounted(() => {
  const type = route.query.type as string
  if (type) {
    businessType.value = type
    form.value.businessType = type
    
    // Pre-fill message based on business type
    switch (type) {
      case 'kleinbetrieb':
        form.value.message = 'Ich interessiere mich für Baunex für meinen Kleinbetrieb. Bitte kontaktieren Sie mich für eine Demo.'
        break
      case 'mittelstand':
        form.value.message = 'Ich interessiere mich für Baunex für mein Bauunternehmen/Mittelstand. Bitte kontaktieren Sie mich für eine Live-Demo.'
        break
      case 'generalunternehmer':
        form.value.message = 'Ich interessiere mich für Baunex für mein Generalunternehmen. Bitte kontaktieren Sie mich für eine Beratung.'
        break
    }
  }
})

const toggleFAQ = (index: number) => {
  if (openFAQs.value.includes(index)) {
    openFAQs.value = openFAQs.value.filter(i => i !== index)
  } else {
    openFAQs.value.push(index)
  }
}

const contactFAQs = [
  {
    id: 1,
    question: 'Wie lange dauert eine Demo?',
    answer: 'Eine Demo dauert in der Regel 30-45 Minuten. Wir zeigen Ihnen die wichtigsten Funktionen und passen die Präsentation an Ihre spezifischen Anforderungen an.'
  },
  {
    id: 2,
    question: 'Kann ich eine Demo online oder vor Ort haben?',
    answer: 'Beides ist möglich! Wir bieten sowohl Online-Demos über Video-Call als auch persönliche Demos vor Ort an. Wählen Sie, was für Sie am besten passt.'
  },
  {
    id: 3,
    question: 'Was sollte ich für die Demo vorbereiten?',
    answer: 'Bringen Sie gerne Ihre aktuellen Arbeitsabläufe und spezifische Anforderungen mit. So können wir Ihnen zeigen, wie Baunex genau in Ihrem Betrieb funktioniert.'
  },
  {
    id: 4,
    question: 'Gibt es nach der Demo ein Angebot?',
    answer: 'Ja, nach der Demo erstellen wir gerne ein individuelles Angebot basierend auf Ihren Anforderungen. Dieses erhalten Sie innerhalb von 2-3 Werktagen.'
  },
  {
    id: 5,
    question: 'Wie schnell kann ich mit Baunex starten?',
    answer: 'Nach der Bestellung können Sie in der Regel innerhalb von 1-2 Wochen mit Baunex starten. Wir unterstützen Sie bei der Einrichtung und Schulung.'
  }
]

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success message
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.')
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      privacy: false,
      businessType: businessType.value // Keep business type
    }
  } catch (error) {
    alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
