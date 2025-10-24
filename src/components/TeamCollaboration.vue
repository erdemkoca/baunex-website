<template>
  <section class="py-16 md:py-20">
    <div class="container">
      <div class="grid lg:grid-cols-2 items-center gap-12">
        <!-- Content -->
        <div class="space-y-6">
          <h2 class="text-h2 font-bold text-neutral-900">
            Zusammenarbeit auf der Baustelle
          </h2>
          <p class="text-body text-neutral-700">
            Ihr Team arbeitet effizient zusammen – von der Planung bis zur Ausführung. 
            Alle haben Zugriff auf die gleichen aktuellen Daten und können direkt vor Ort 
            Entscheidungen treffen.
          </p>
          
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-900 mb-1">Echtzeit-Koordination</h3>
                <p class="text-sm text-neutral-700">Alle Teammitglieder sehen die gleichen aktuellen Daten und können sofort reagieren.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-900 mb-1">Mobile Zugriff</h3>
                <p class="text-sm text-neutral-700">Tablets und Smartphones ermöglichen den Zugriff auf alle wichtigen Informationen vor Ort.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-900 mb-1">Qualitätskontrolle</h3>
                <p class="text-sm text-neutral-700">Direkte Dokumentation und Kontrolle der Bauqualität mit Foto- und Notizfunktionen.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Team Image -->
        <div class="relative">
          <div class="rounded-3xl shadow-soft ring-1 ring-white/50 overflow-hidden bg-white/80 backdrop-blur-xs">
            <img src="/images/people/construction-team-planning.jpg" alt="Team auf Baustelle mit Planungs-Koordination" class="w-full h-auto" />
          </div>
          <!-- Floating indicator -->
          <div class="hidden md:block absolute -bottom-6 -right-6 rounded-2xl bg-white/90 backdrop-blur-xs shadow-soft p-4">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span class="text-sm font-medium text-neutral-700">Live Koordination</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Team collaboration section showcasing on-site coordination
</script>
