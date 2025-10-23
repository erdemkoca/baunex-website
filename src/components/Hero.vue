<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <BaseContainer class="relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
          </svg>
          Neu: KI-gestützte Zeiterfassung
        </div>

        <!-- Main Headline -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up" style="animation-delay: 0.1s;">
          Die leichte Plattform für
          <span class="text-gradient block">Bau- & Handwerksbetriebe</span>
        </h1>

        <!-- Subline -->
        <p class="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up" style="animation-delay: 0.2s;">
          Von Angebot bis Rechnung – Projekte planen, Zeiten erfassen, sauber abrechnen. 
          Mit KI-Unterstützung für OCR, Forecasts & Anomalien.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up" style="animation-delay: 0.3s;">
          <BaseButton 
            variant="primary" 
            size="lg"
            to="/kontakt"
            class="w-full sm:w-auto"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Demo anfragen
          </BaseButton>
          
          <BaseButton 
            variant="secondary" 
            size="lg"
            to="/features"
            class="w-full sm:w-auto"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Funktionsumfang
          </BaseButton>
        </div>

        <!-- Social Proof -->
        <div class="animate-fade-up" style="animation-delay: 0.4s;">
          <p class="text-sm text-neutral-500 mb-6">Vertraut von über 500+ Betrieben</p>
          <div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div class="h-8 w-24 bg-neutral-200 rounded flex items-center justify-center">
              <span class="text-xs text-neutral-500">Logo 1</span>
            </div>
            <div class="h-8 w-24 bg-neutral-200 rounded flex items-center justify-center">
              <span class="text-xs text-neutral-500">Logo 2</span>
            </div>
            <div class="h-8 w-24 bg-neutral-200 rounded flex items-center justify-center">
              <span class="text-xs text-neutral-500">Logo 3</span>
            </div>
            <div class="h-8 w-24 bg-neutral-200 rounded flex items-center justify-center">
              <span class="text-xs text-neutral-500">Logo 4</span>
            </div>
            <div class="h-8 w-24 bg-neutral-200 rounded flex items-center justify-center">
              <span class="text-xs text-neutral-500">Logo 5</span>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>

    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-gradient-accent rounded-full opacity-20 blur-xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-primary/30 to-accent-to/30 rounded-full opacity-15 blur-2xl animate-pulse" style="animation-delay: 1s;"></div>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from './BaseContainer.vue'
import BaseButton from './BaseButton.vue'
</script>
