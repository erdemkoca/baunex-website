<template>
  <section class="section-padding bg-gradient-accent relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent-to/90"></div>
    <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>
    
    <BaseContainer class="relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Bereit für den nächsten Schritt?
        </h2>
        <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Starten Sie noch heute mit Baunex und erleben Sie, wie einfach Projektmanagement und Zeiterfassung sein können.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <BaseButton 
            variant="secondary" 
            size="lg"
            to="/kontakt"
            class="bg-white text-primary hover:bg-neutral-50 w-full sm:w-auto"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Demo anfragen
          </BaseButton>
          
          <BaseButton 
            variant="ghost" 
            size="lg"
            href="https://app.baunex.ch"
            class="text-white border-white hover:bg-white/10 w-full sm:w-auto"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Kostenlos testen
          </BaseButton>
        </div>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 text-sm">
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            14 Tage kostenlos testen
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Keine Kreditkarte erforderlich
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Jederzeit kündbar
          </div>
        </div>
      </div>
    </BaseContainer>
    
    <!-- Floating Elements -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style="animation-delay: 2s;"></div>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from './BaseContainer.vue'
import BaseButton from './BaseButton.vue'
</script>
