<template>
  <section class="max-w-4xl mx-auto px-4 py-20">
    <h1 class="text-4xl font-bold mb-8">Kontakt</h1>
    <p class="text-lg text-gray-600 mb-12">
      Haben Sie Fragen oder möchten Sie eine Demo anfragen? Wir freuen uns auf Ihre Nachricht.
    </p>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div>
        <h2 class="text-2xl font-semibold mb-6">Nachricht senden</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Ihr Name"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="ihre@email.ch"
            />
          </div>
          
          <div>
            <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Unternehmen</label>
            <input
              type="text"
              id="company"
              v-model="form.company"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Ihr Unternehmen"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Nachricht *</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Ihre Nachricht..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            class="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Nachricht senden
          </button>
        </form>
      </div>

      <!-- Contact Information -->
      <div>
        <h2 class="text-2xl font-semibold mb-6">Kontaktinformationen</h2>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="w-8 h-8 bg-gray-100 rounded-lg mr-4 flex items-center justify-center">
              <span class="text-lg">📧</span>
            </div>
            <div>
              <h3 class="font-semibold">E-Mail</h3>
              <a href="mailto:info@baunex.ch" class="text-gray-600 hover:text-black">info@baunex.ch</a>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-8 h-8 bg-gray-100 rounded-lg mr-4 flex items-center justify-center">
              <span class="text-lg">📞</span>
            </div>
            <div>
              <h3 class="font-semibold">Telefon</h3>
              <a href="tel:+41441234567" class="text-gray-600 hover:text-black">+41 44 123 45 67</a>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-8 h-8 bg-gray-100 rounded-lg mr-4 flex items-center justify-center">
              <span class="text-lg">📍</span>
            </div>
            <div>
              <h3 class="font-semibold">Adresse</h3>
              <p class="text-gray-600">
                Baunex AG<br>
                Musterstrasse 123<br>
                8001 Zürich<br>
                Schweiz
              </p>
            </div>
          </div>
        </div>

        <div class="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 class="font-semibold mb-2">Demo anfragen</h3>
          <p class="text-sm text-gray-600 mb-3">
            Möchten Sie Baunex in Aktion sehen? Vereinbaren Sie einen Termin für eine persönliche Demo.
          </p>
          <a href="mailto:demo@baunex.ch" class="text-black font-medium hover:underline">
            Demo-Termin vereinbaren →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  company: '',
  message: ''
})

const submitForm = () => {
  // For now, just show an alert. In production, this would send to an API
  alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.')
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    company: '',
    message: ''
  }
}
</script>
