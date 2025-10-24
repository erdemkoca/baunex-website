<template>
  <section class="pt-16 pb-14">
    <div class="container grid lg:grid-cols-2 items-center gap-10">
      <div class="space-y-6">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900">
          Die leichte Plattform fuer Bau & Handwerk
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Planen, Zeiten erfassen, sauber abrechnen.
          </span>
        </h1>
        <p class="text-lg text-neutral-700 max-w-xl">
          Moderne Workflows mit KI-Unterstuetzung: OCR, Forecasts, Anomalien. Schnell eingefuehrt, einfach im Alltag.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="/kontakt" class="inline-flex items-center rounded-full bg-primary px-5 py-3 text-white shadow-soft hover:shadow-ring transition">
            Demo anfragen
          </a>
          <a href="/features" class="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-5 py-3 text-neutral-900 hover:bg-white transition">
            Funktionsumfang
          </a>
        </div>
        <!-- Trust row -->
        <div class="flex items-center gap-6 pt-3 opacity-80">
          <img src="/images/logos/client-logos/partner-1.png" class="h-6 w-auto" alt="Partner 1"/>
          <img src="/images/logos/client-logos/partner-2.png" class="h-6 w-auto" alt="Partner 2"/>
          <img src="/images/logos/client-logos/partner-3.png" class="h-6 w-auto" alt="Partner 3"/>
          <img src="/images/logos/client-logos/partner-4.png" class="h-6 w-auto" alt="Partner 4"/>
        </div>
      </div>

      <!-- Visual: either hero photo or mockup -->
      <div class="relative">
        <div class="rounded-3xl shadow-soft ring-1 ring-white/50 overflow-hidden bg-white/80 backdrop-blur-xs">
          <img src="/images/people/construction-team-tablet.jpg" alt="Team auf Baustelle mit Tablet-Koordination" class="w-full h-auto" />
        </div>
        <!-- floating card -->
        <div class="hidden md:block absolute -bottom-6 -left-6 rounded-2xl bg-white/80 backdrop-blur-xs shadow-soft p-4">
          <div class="text-sm text-neutral-700">Forecasts & OCR aktiv</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero component with modern gradient headline and glass styling
</script>
