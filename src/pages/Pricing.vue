<template>
  <section class="max-w-6xl mx-auto px-4 py-20">
    <h1 class="text-4xl font-bold mb-8">Preise</h1>
    <p class="text-lg text-gray-600 mb-12">
      Wählen Sie den passenden Plan für Ihr Unternehmen. Alle Pläne enthalten die Grundfunktionen.
    </p>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Starter Plan -->
      <div class="p-6 border rounded-xl">
        <h2 class="text-xl font-semibold mb-2">Starter</h2>
        <p class="text-gray-600 mb-4">Für kleine Betriebe</p>
        <div class="text-3xl font-bold mb-6">CHF 29<span class="text-lg text-gray-500">/Monat</span></div>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            Bis zu 5 Benutzer
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            Zeiterfassung
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            Angebote & Rechnungen
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            Basis-Katalog
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            E-Mail Support
          </li>
        </ul>
        <RouterLink to="/kontakt" class="w-full block text-center px-4 py-2 border rounded-lg hover:bg-gray-50">
          Starter wählen
        </RouterLink>
      </div>

      <!-- Pro Plan -->
      <div class="p-6 border-2 border-black rounded-xl relative">
        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span class="bg-black text-white px-3 py-1 rounded-full text-sm">Beliebt</span>
        </div>
        <h2 class="text-xl font-semibold mb-2">Pro</h2>
        <p class="text-gray-600 mb-4">Für wachsende Unternehmen</p>
        <div class="text-3xl font-bold mb-6">CHF 79<span class="text-lg text-gray-500">/Monat</span></div>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            Bis zu 25 Benutzer
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            Alle Starter Features
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            Erweiterte Kataloge
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            KI-Forecasts
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            OCR für Belege
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            API-Zugang
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            Telefon Support
          </li>
        </ul>
        <RouterLink to="/kontakt" class="w-full block text-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          Pro wählen
        </RouterLink>
      </div>

      <!-- Enterprise Plan -->
      <div class="p-6 border rounded-xl">
        <h2 class="text-xl font-semibold mb-2">Enterprise</h2>
        <p class="text-gray-600 mb-4">Für große Unternehmen</p>
        <div class="text-3xl font-bold mb-6">CHF 199<span class="text-lg text-gray-500">/Monat</span></div>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            Unbegrenzte Benutzer
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            Alle Pro Features
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            White-Label Option
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            On-Premise Installation
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            Dedicated Support
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            Custom Integration
          </li>
          <li class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            SLA Garantie
          </li>
        </ul>
        <RouterLink to="/kontakt" class="w-full block text-center px-4 py-2 border rounded-lg hover:bg-gray-50">
          Enterprise wählen
        </RouterLink>
      </div>
    </div>

    <div class="mt-16 text-center">
      <h2 class="text-2xl font-bold mb-4">Haben Sie Fragen zu den Preisen?</h2>
      <p class="text-gray-600 mb-6">Kontaktieren Sie uns für eine individuelle Beratung oder ein maßgeschneidertes Angebot.</p>
      <RouterLink to="/kontakt" class="px-6 py-3 bg-black text-white rounded-lg">Kontakt aufnehmen</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// Pricing page component
</script>
