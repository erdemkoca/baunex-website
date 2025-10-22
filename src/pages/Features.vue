<template>
  <section class="max-w-6xl mx-auto px-4 py-20">
    <h1 class="text-4xl font-bold mb-8">Features</h1>
    <p class="text-lg text-gray-600 mb-12">
      Alles was Sie für Ihr Bau- und Handwerksunternehmen brauchen – in einer Plattform.
    </p>

    <div class="grid md:grid-cols-2 gap-8">
      <div class="p-6 border rounded-xl">
        <div class="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
          <span class="text-2xl">⏰</span>
        </div>
        <h2 class="text-xl font-semibold mb-3">Zeiterfassung</h2>
        <ul class="text-gray-600 space-y-2">
          <li>• Einfache Stundenerfassung per App</li>
          <li>• Automatische Pausenerkennung</li>
          <li>• Projektbezogene Zeiterfassung</li>
          <li>• Export für Lohnabrechnung</li>
        </ul>
      </div>

      <div class="p-6 border rounded-xl">
        <div class="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
          <span class="text-2xl">📄</span>
        </div>
        <h2 class="text-xl font-semibold mb-3">Angebot & Rechnung</h2>
        <ul class="text-gray-600 space-y-2">
          <li>• Professionelle Angebotserstellung</li>
          <li>• Automatische Rechnungsgenerierung</li>
          <li>• MwSt-Berechnung und -Ausweis</li>
          <li>• Digitale Signatur und Versand</li>
        </ul>
      </div>

      <div class="p-6 border rounded-xl">
        <div class="w-12 h-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
          <span class="text-2xl">📦</span>
        </div>
        <h2 class="text-xl font-semibold mb-3">Katalog-Management</h2>
        <ul class="text-gray-600 space-y-2">
          <li>• Zentrale Material- und Leistungskataloge</li>
          <li>• Preispflege und Aktualisierung</li>
          <li>• Kategorisierung und Suche</li>
          <li>• Lieferantenverwaltung</li>
        </ul>
      </div>

      <div class="p-6 border rounded-xl">
        <div class="w-12 h-12 bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
          <span class="text-2xl">🤖</span>
        </div>
        <h2 class="text-xl font-semibold mb-3">KI-Forecast & OCR</h2>
        <ul class="text-gray-600 space-y-2">
          <li>• Intelligente Dauer- und Kostenprognosen</li>
          <li>• OCR für automatische Belegenerkennung</li>
          <li>• Anomalie-Erkennung in Projektdaten</li>
          <li>• Lernende Algorithmen für bessere Vorhersagen</li>
        </ul>
      </div>
    </div>

    <div class="mt-16 text-center">
      <h2 class="text-2xl font-bold mb-4">Bereit für die Zukunft?</h2>
      <p class="text-gray-600 mb-6">Starten Sie noch heute mit Baunex und erleben Sie die Vorteile der digitalen Bauwelt.</p>
      <RouterLink to="/kontakt" class="px-6 py-3 bg-black text-white rounded-lg">Demo anfragen</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// Features page component
</script>
