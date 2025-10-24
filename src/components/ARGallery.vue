<template>
  <section class="py-16 md:py-20 relative overflow-hidden">
    <!-- Background AR Elements -->
    <div class="absolute inset-0 opacity-[0.02]">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 mix-blend-overlay">
        <img src="/images/hero/ar-construction-overlay2.png" alt="" class="w-full h-full object-cover rounded-full" />
      </div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 mix-blend-overlay">
        <img src="/images/hero/ar-construction-overlay3.png" alt="" class="w-full h-full object-cover rounded-full" />
      </div>
    </div>

    <div class="container relative z-10">
      <SectionHeading
        title="AR-Technologie in Aktion"
        subtitle="Drei verschiedene Anwendungsfälle der Augmented Reality auf der Baustelle"
      />

      <div class="grid md:grid-cols-3 gap-8">
        <!-- AR Image 1 -->
        <div class="group relative">
          <div class="rounded-3xl shadow-soft ring-1 ring-white/50 overflow-hidden bg-white/80 backdrop-blur-xs transition group-hover:shadow-ring">
            <img src="/images/hero/ar-construction-overlay.png" alt="AR Projektübersicht" class="w-full h-64 object-cover" />
          </div>
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-neutral-900 mb-2">Projektübersicht</h3>
            <p class="text-sm text-neutral-700">Live-Daten aller aktiven Projekte direkt vor Ort visualisieren</p>
          </div>
          <!-- Floating badge -->
          <div class="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <div class="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>

        <!-- AR Image 2 -->
        <div class="group relative">
          <div class="rounded-3xl shadow-soft ring-1 ring-white/50 overflow-hidden bg-white/80 backdrop-blur-xs transition group-hover:shadow-ring">
            <img src="/images/hero/ar-construction-overlay2.png" alt="AR Terminplanung" class="w-full h-64 object-cover" />
          </div>
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-neutral-900 mb-2">Terminplanung</h3>
            <p class="text-sm text-neutral-700">Schedules und Meilensteine über AR-Overlay anzeigen</p>
          </div>
          <!-- Floating badge -->
          <div class="absolute -top-2 -right-2 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
            <div class="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>

        <!-- AR Image 3 -->
        <div class="group relative">
          <div class="rounded-3xl shadow-soft ring-1 ring-white/50 overflow-hidden bg-white/80 backdrop-blur-xs transition group-hover:shadow-ring">
            <img src="/images/hero/ar-construction-overlay3.png" alt="AR Qualitätskontrolle" class="w-full h-64 object-cover" />
          </div>
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-neutral-900 mb-2">Qualitätskontrolle</h3>
            <p class="text-sm text-neutral-700">Inspektionen und Qualitätsstandards in Echtzeit überprüfen</p>
          </div>
          <!-- Floating badge -->
          <div class="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <div class="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12">
        <p class="text-neutral-700 mb-6">Bereit für die Zukunft des Bauwesens?</p>
        <a href="/kontakt" class="inline-flex items-center rounded-full bg-primary px-6 py-3 text-white shadow-soft hover:shadow-ring transition">
          AR-Demo anfragen
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
</script>
