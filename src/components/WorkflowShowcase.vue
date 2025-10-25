<template>
  <section class="py-16 md:py-20 section-gap">
    <div class="container">
      <div class="card-light">
                <SectionHeading
                  title="Von der Planung zur Ausführung"
                  subtitle="Effizient zusammenarbeiten – vor Ort und im Büro"
                />

        <!-- Phase 1: Planung -->
        <div class="py-12 lg:py-16">
          <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
            <!-- Text links -->
            <div>
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Phase 1: Planung
              </span>
                      <h3 class="mt-4 text-3xl font-bold text-slate-900 title">
                        Echtzeit-Koordination
                      </h3>
                      <p class="mt-3 text-slate-600 copy max-w-[60ch]">
                        Alle Teammitglieder sehen dieselben Daten in Echtzeit. Mobile Erfassung ermöglicht schnelle Entscheidungen direkt vor Ort.
                      </p>
                      <ul class="mt-6 space-y-3">
                        <li class="flex items-start gap-3">
                          <span class="mt-1 inline-block w-4 h-4 rounded-full bg-indigo-600"></span>
                          <span class="text-sm text-slate-700">Alle sehen dieselben Daten in Echtzeit</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="mt-1 inline-block w-4 h-4 rounded-full bg-indigo-600"></span>
                          <span class="text-sm text-slate-700">Mobile Erfassung: Zeiten, Fotos, Notizen</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="mt-1 inline-block w-4 h-4 rounded-full bg-indigo-600"></span>
                          <span class="text-sm text-slate-700">Weniger Abstimmung, schnellere Entscheidungen</span>
                        </li>
                      </ul>
            </div>

            <!-- Bild rechts -->
            <div class="mt-8 lg:mt-0">
              <figure class="rounded-2xl shadow-xl ring-1 ring-slate-200/60 bg-white overflow-hidden">
                <img src="/images/people/construction-team-planning.jpg" alt="Team plant gemeinsam auf der Baustelle" class="w-full aspect-[16/9] object-cover" />
              </figure>
            </div>
          </div>
        </div>

        <!-- Trenner -->
        <div class="border-t border-slate-100"></div>

        <!-- Phase 2: Ausführung -->
        <div class="py-12 lg:py-16">
          <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
            <!-- Bild LINKS (per order) -->
            <div class="order-2 lg:order-1 mt-8 lg:mt-0">
              <figure class="rounded-2xl shadow-xl ring-1 ring-slate-200/60 bg-white overflow-hidden">
                <img src="/images/people/construction-team-tablet.jpg" alt="Team kontrolliert Qualität mit Tablet" class="w-full aspect-[16/9] object-cover" />
              </figure>
            </div>

            <!-- Text RECHTS -->
            <div class="order-1 lg:order-2">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Phase 2: Ausführung
              </span>
                      <h3 class="mt-4 text-3xl font-bold text-slate-900 title">
                        Live-Qualitätskontrolle
                      </h3>
                      <p class="mt-3 text-slate-600 copy max-w-[60ch]">
                        Live-Qualitätschecks mit Foto- und Checklisten-Funktionen. Automatische Fortschrittsberichte ohne Doppelerfassung.
                      </p>
                      <ul class="mt-6 space-y-3">
                        <li class="flex items-start gap-3">
                          <span class="mt-1 inline-block w-4 h-4 rounded-full bg-indigo-600"></span>
                          <span class="text-sm text-slate-700">Live-Qualitätschecks (Foto/Checklisten)</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="mt-1 inline-block w-4 h-4 rounded-full bg-indigo-600"></span>
                          <span class="text-sm text-slate-700">Automatische Fortschrittsberichte</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="mt-1 inline-block w-4 h-4 rounded-full bg-indigo-600"></span>
                          <span class="text-sm text-slate-700">Alles synchron – keine Doppelerfassung</span>
                        </li>
                      </ul>
            </div>
          </div>
        </div>
        
        <!-- CTA -->
        <div class="text-center pt-12">
          <a href="/kontakt" class="inline-flex items-center rounded-2xl bg-indigo-600 px-6 py-4 text-white font-semibold shadow-[0_8px_30px_rgba(2,6,23,0.06)] hover:bg-indigo-700 hover:shadow-[0_12px_40px_rgba(2,6,23,0.10)] transition-all">
            Ablauf als Demo sehen
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
</script>
