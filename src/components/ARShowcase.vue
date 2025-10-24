<template>
  <section class="py-16 md:py-20">
    <div class="container">
      <SectionHeading
        title="Augmented Reality auf der Baustelle"
        subtitle="Live-Daten direkt vor Ort visualisieren - ERP-Module in Echtzeit"
      />

      <div class="grid lg:grid-cols-2 items-center gap-12">
        <!-- Content -->
        <div class="space-y-6">
          <h3 class="text-h3 font-bold text-neutral-900">
            Die Zukunft des Bauwesens ist hier
          </h3>
          <p class="text-body text-neutral-700">
            Mit unserer AR-Technologie können Manager und Arbeiter live auf der Baustelle auf alle wichtigen Daten zugreifen: Projekte, Terminplanung, Beschaffung, Inventar, Sicherheit und Qualitätskontrolle.
          </p>
          
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-neutral-900 mb-1">Live KPIs</h4>
                <p class="text-sm text-neutral-700">Echtzeit-Daten direkt vor Ort</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-neutral-900 mb-1">Terminplanung</h4>
                <p class="text-sm text-neutral-700">Schedules über AR-Overlay</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-neutral-900 mb-1">Logistik</h4>
                <p class="text-sm text-neutral-700">Inventar und Beschaffung</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-neutral-900 mb-1">Qualität</h4>
                <p class="text-sm text-neutral-700">HSE und Qualitätskontrolle</p>
              </div>
            </div>
          </div>
        </div>

        <!-- AR Visual -->
        <div class="relative">
          <div class="rounded-3xl shadow-soft ring-1 ring-white/50 overflow-hidden bg-white/80 backdrop-blur-xs">
            <img src="/images/hero/ar-construction-overlay.png" alt="AR Construction Management System" class="w-full h-auto" />
          </div>
          
          <!-- Additional AR Elements -->
          <div class="hidden lg:block absolute -top-8 -left-8 w-32 h-32 opacity-20 mix-blend-overlay">
            <img src="/images/hero/ar-construction-overlay2.png" alt="" class="w-full h-full object-cover rounded-2xl" />
          </div>
          <div class="hidden lg:block absolute -bottom-8 -right-8 w-24 h-24 opacity-15 mix-blend-overlay">
            <img src="/images/hero/ar-construction-overlay3.png" alt="" class="w-full h-full object-cover rounded-2xl" />
          </div>
          
          <!-- Floating AR indicator -->
          <div class="hidden md:block absolute -top-4 -right-4 rounded-2xl bg-white/90 backdrop-blur-xs shadow-soft p-3">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span class="text-xs font-medium text-neutral-700">AR Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
</script>
