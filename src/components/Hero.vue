<template>
  <section class="hero-section relative py-20 lg:py-28">
    <!-- Subtle background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30"></div>
    
    <div class="container relative">
      <div class="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
        <!-- Left: Content -->
        <div class="space-y-8">
          <div class="space-y-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              Die leichte Plattform für Bau & Handwerk
            </h1>
            <p class="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Planen, Zeiten erfassen, sauber abrechnen – mit KI-Unterstützung. Schnell eingeführt, einfach im Alltag.
            </p>
          </div>
          
          <div class="flex flex-wrap gap-4">
            <a href="/kontakt" class="inline-flex items-center rounded-2xl bg-indigo-600 px-6 py-4 text-white font-semibold shadow-[0_8px_30px_rgba(2,6,23,0.06)] hover:bg-indigo-700 hover:shadow-[0_12px_40px_rgba(2,6,23,0.10)] transition-all">
              Demo anfragen
            </a>
            <a href="/features" class="inline-flex items-center rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 text-slate-900 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all">
              Funktionsumfang
            </a>
          </div>
        </div>

        <!-- Right: Product Screenshot in Device Mockup -->
        <div class="relative overflow-visible">
          <!-- Desktop Mockup -->
          <figure class="hero-desktop relative z-[1] rounded-3xl shadow-xl mx-auto max-w-2xl overflow-visible">
            <div class="rounded-2xl shadow-[0_8px_30px_rgba(2,6,23,0.06)] ring-1 ring-slate-200/60 bg-white overflow-hidden">
              <div class="bg-slate-50 px-4 py-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <img src="/images/screenshots/dashboard-laptop.png" alt="Baunex Dashboard - Projektübersicht" class="w-full h-auto" />
            </div>
            
            <!-- Phone Overlay -->
            <div class="hero-phone absolute -right-2 -bottom-2 md:-right-3 md:-bottom-3 lg:-right-4 lg:-bottom-4 z-[2] pointer-events-none">
              <!-- iPhone-Rahmen (SVG) als Container -->
              <div class="relative">
                <img src="/images/frames/iphone-14-frame.svg" alt="" class="phone-frame block w-[100px] md:w-[110px] lg:w-[120px] xl:w-[130px] h-auto select-none drop-shadow-lg" />
                <!-- Screen-Inhalt passgenau in den Frame (per absoluter Position) -->
                <img src="/images/screenshots/mobile-reporting.png" alt="Zeiterfassung – App"
                     class="phone-screen absolute inset-[12px_8px_16px_8px] md:inset-[13px_9px_17px_9px] rounded-[12px] w-[calc(100%-16px)] h-[calc(100%-28px)] object-cover" />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero component with modern gradient headline and glass styling
</script>

<style scoped>
.hero-section {
  padding-top: 80px;
  padding-bottom: 80px;
}
</style>
