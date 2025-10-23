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
                      Baunex AG<br>
                      Musterstrasse 123<br>
                      8001 Zürich<br>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseContainer from '../components/BaseContainer.vue'
import BaseButton from '../components/BaseButton.vue'

const isSubmitting = ref(false)

const form = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  privacy: false
})

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
      privacy: false
    }
  } catch (error) {
    alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
