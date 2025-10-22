<template>
  <section class="max-w-6xl mx-auto px-4 py-20">
    <h1 class="text-4xl md:text-5xl font-bold">
      AI für die Bauwelt – Projekte planen, Zeiten erfassen, sauber abrechnen.
    </h1>
    <p class="mt-4 text-lg text-gray-600">
      Die leichte Plattform für Bau- und Handwerksbetriebe – von Angebot bis Rechnung.
    </p>
    <div class="mt-8 flex gap-4">
      <RouterLink to="/kontakt" class="px-5 py-3 rounded-lg bg-black text-white">Demo anfragen</RouterLink>
      <a href="https://app.baunex.ch" class="px-5 py-3 rounded-lg border">Login</a>
    </div>

    <div class="grid md:grid-cols-3 gap-6 mt-16">
      <div class="p-5 border rounded-xl">
        <h3 class="font-semibold">Zeiterfassung</h3>
        <p class="text-sm text-gray-600 mt-2">Einfach Stunden loggen, präzise abrechnen.</p>
      </div>
      <div class="p-5 border rounded-xl">
        <h3 class="font-semibold">Angebot & Rechnung</h3>
        <p class="text-sm text-gray-600 mt-2">Katalog, Positionen, MwSt – alles drin.</p>
      </div>
      <div class="p-5 border rounded-xl">
        <h3 class="font-semibold">KI-Unterstützung</h3>
        <p class="text-sm text-gray-600 mt-2">Forecasts, OCR für Belege, Anomalien finden.</p>
      </div>
    </div>

    <div class="mt-16">
      <h2 class="text-2xl font-bold mb-8">Warum Baunex?</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center">
          <div class="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span class="text-2xl">⏱️</span>
          </div>
          <h3 class="font-semibold mb-2">Zeit sparen</h3>
          <p class="text-sm text-gray-600">Automatisierte Prozesse reduzieren manuelle Arbeit</p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span class="text-2xl">💰</span>
          </div>
          <h3 class="font-semibold mb-2">Kosten im Blick</h3>
          <p class="text-sm text-gray-600">Transparente Übersicht über alle Projektkosten</p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-red-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span class="text-2xl">✅</span>
          </div>
          <h3 class="font-semibold mb-2">Weniger Fehler</h3>
          <p class="text-sm text-gray-600">KI erkennt Anomalien und verhindert Fehler</p>
        </div>
      </div>
    </div>

    <div class="mt-16 p-6 bg-gray-50 rounded-xl">
      <h2 class="text-2xl font-bold mb-4">KI-Powered Features</h2>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="p-4 bg-white rounded-lg">
          <h4 class="font-semibold">Prognosen</h4>
          <p class="text-sm text-gray-600">Dauer- und Kostenprognosen für Projekte</p>
        </div>
        <div class="p-4 bg-white rounded-lg">
          <h4 class="font-semibold">OCR für Belege</h4>
          <p class="text-sm text-gray-600">Automatische Texterkennung von Rechnungen</p>
        </div>
        <div class="p-4 bg-white rounded-lg">
          <h4 class="font-semibold">Anomalie-Erkennung</h4>
          <p class="text-sm text-gray-600">Erkennt ungewöhnliche Muster in Daten</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Home page component
</script>
