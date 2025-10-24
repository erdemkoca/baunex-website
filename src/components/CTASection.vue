<template>
  <section class="py-16 md:py-20 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
    <div class="container relative z-10">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-h1 font-bold text-white mb-6">
          Bereit für den nächsten Schritt?
        </h2>
        <p class="text-body text-white/90 mb-12">
          Starten Sie noch heute mit Baunex und erleben Sie, wie einfach Projektmanagement und Zeiterfassung sein können.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <BaseButton 
            variant="secondary" 
            size="lg"
            to="/kontakt"
            class="bg-white text-primary hover:bg-neutral-50 w-full sm:w-auto"
          >
            Demo anfragen
          </BaseButton>
          
          <BaseButton 
            variant="ghost" 
            size="lg"
            href="https://app.baunex.ch"
            class="text-white border-white hover:bg-white/10 w-full sm:w-auto"
          >
            Kostenlos testen
          </BaseButton>
        </div>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            14 Tage kostenlos testen
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Keine Kreditkarte erforderlich
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Jederzeit kündbar
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'
</script>
