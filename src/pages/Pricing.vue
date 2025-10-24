<template>
  <div class="pt-24">
    <!-- Hero Section -->
    <section class="section-padding">
      <BaseContainer>
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Faire Preise für
            <span class="text-gradient">alle Firmengrössen</span>
          </h1>
          <p class="text-xl text-neutral-600 mb-8">
            Baunex ist modular – Sie zahlen nur, was Sie nutzen. Individuelle Lösungen 
            für jeden Betrieb, von der Ein-Mann-Firma bis zum Grossunternehmen.
          </p>
          
          <!-- Key Benefits -->
          <div class="grid md:grid-cols-3 gap-6 mb-12">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">Modular & Flexibel</h3>
              <p class="text-neutral-600">Nur die Module, die Sie benötigen</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">Transparente Kosten</h3>
              <p class="text-neutral-600">Einmalige Lizenz + jährliche Wartung</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">Sofort einsatzbereit</h3>
              <p class="text-neutral-600">Persönliche Beratung & Demo</p>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Individual Quote Section -->
    <section class="section-padding bg-neutral-50">
      <BaseContainer>
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Individuelles Angebot anfordern
          </h2>
          <p class="text-xl text-neutral-600 mb-8">
            Da unsere Software massgeschneidert zusammengestellt wird, bieten wir keine standardisierten 
            Preislisten an. Kontaktieren Sie uns für eine persönliche Beratung und ein auf Ihr Unternehmen 
            zugeschnittenes Angebot.
          </p>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="card text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-4">Persönliche Beratung</h3>
              <p class="text-neutral-600 mb-6">
                Lassen Sie sich persönlich beraten zu Ihrer idealen Software-Lösung. 
                Wir erfassen Ihren Bedarf und erstellen ein massgeschneidertes Angebot.
              </p>
              <BaseButton 
                variant="primary" 
                to="/kontakt"
                class="w-full"
              >
                Beratung anfragen
              </BaseButton>
            </div>
            
            <div class="card text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-4">Demo vereinbaren</h3>
              <p class="text-neutral-600 mb-6">
                Sehen Sie Baunex in Aktion! Vereinbaren Sie eine kostenlose Demo 
                online oder vor Ort und erleben Sie die Möglichkeiten.
              </p>
              <BaseButton 
                variant="secondary" 
                to="/kontakt"
                class="w-full"
              >
                Demo vereinbaren
              </BaseButton>
            </div>
          </div>
          
          <!-- Pricing Factors -->
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <h3 class="text-2xl font-semibold mb-6">Was beeinflusst den Preis?</h3>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 class="font-semibold mb-2">Module</h4>
                <p class="text-sm text-neutral-600">Nur die Module, die Sie benötigen</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h4 class="font-semibold mb-2">Arbeitsplätze</h4>
                <p class="text-sm text-neutral-600">Anzahl der Benutzer</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 class="font-semibold mb-2">Support-Level</h4>
                <p class="text-sm text-neutral-600">E-Mail, Telefon oder Dedicated</p>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Maintenance Costs Section -->
    <section class="section-padding">
      <BaseContainer>
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Was ist in den Wartungskosten enthalten?
          </h2>
          <p class="text-xl text-neutral-600">
            Mit unseren Wartungsplänen erhalten Sie stets die neueste Version von Baunex und Zugang zu 
            fortschrittlichen Funktionen, um technologisch führend zu bleiben.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Regelmässige Updates</h3>
            <p class="text-neutral-600">
              Sie erhalten bei Release die neueste Baunex-Version. Jedes Jahr kommen zahlreiche 
              Funktionen dazu, so sind Sie stets mit den modernsten digitalen Tools ausgerüstet.
            </p>
          </div>
          
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Kundenportal</h3>
            <p class="text-neutral-600">
              Zugriff auf Kundenportal zum Administrieren Ihres eigenen Unternehmens sowie 
              Downloads der neuesten Baunex Updates und Dokumentation.
            </p>
          </div>
          
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Technischer Support</h3>
            <p class="text-neutral-600">
              Bei Fragen zur Bedienung von Baunex steht Ihnen der Support gerne zur Seite, 
              um Ihnen schnell und unkompliziert zu helfen. Per Mail, Telefon oder Ticket.
            </p>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Cloud vs On-Premise Section -->
    <section class="section-padding bg-neutral-50">
      <BaseContainer>
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Cloud vs. On-Premise Installation
          </h2>
          <p class="text-xl text-neutral-600">
            Beim Kauf von Baunex haben Sie die Wahl: Installieren Sie Ihre Software lokal oder 
            setzen Sie auf die moderne Cloud-Infrastruktur von Baunex?
          </p>
            </div>
            
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-neutral-50">
                  <tr>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-neutral-900">Feature</th>
                    <th class="px-6 py-4 text-center text-sm font-semibold text-neutral-900">Lokal</th>
                    <th class="px-6 py-4 text-center text-sm font-semibold text-primary">Cloud</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-200">
                  <tr>
                    <td class="px-6 py-4 text-sm text-neutral-700">In der Schweiz gehostet</td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-neutral-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-neutral-700">Automatische Updates</td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-neutral-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-neutral-700">Bis zu 48 Backups pro Tag</td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-neutral-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-neutral-700">Tier IV Rechenzentrum</td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-neutral-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-neutral-700">Physischer Zugriff auf Server</td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                    </td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-neutral-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-neutral-700">Moderne Firewall</td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-neutral-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-neutral-700">Von überall zugreifen</td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-neutral-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </td>
                    <td class="px-6 py-4 text-center">
                      <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="text-center mt-8">
            <BaseButton 
              variant="primary" 
              to="/kontakt"
            >
              Mehr Informationen anfordern
            </BaseButton>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Social Proof Section -->
    <section class="section-padding">
      <BaseContainer>
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Unsere Kunden – die beste Referenz
          </h2>
          <p class="text-xl text-neutral-600">
            Entdecken Sie, wie unsere modulare Software speziell für die Schweizer Baubranche 
            Ihr Geschäft effizienter gestaltet und signifikant Kosten reduziert.
          </p>
        </div>
        
        <!-- Customer Testimonials -->
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <blockquote class="text-neutral-700 mb-6 italic">
              "Die Baunex-Software hat mir geholfen, meinen Betrieb weiter zu entwickeln, 
              die Prozesse zu vereinfachen und dadurch viel Zeit zu sparen."
            </blockquote>
            <div class="text-sm">
              <p class="font-semibold text-neutral-900"></p>
              <p class="text-neutral-600">Geschäftsführer, Elektro Frey GmbH</p>
            </div>
          </div>
          
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <blockquote class="text-neutral-700 mb-6 italic">
              "Unsere Hauptnutzen sind die Zeitersparnis, die einfache Anwendung und 
              Fehlerminimierungen."
            </blockquote>
            <div class="text-sm">
              <p class="font-semibold text-neutral-900"></p>
              <p class="text-neutral-600">Inhaberin, Muscar GmbH</p>
            </div>
          </div>
          
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <blockquote class="text-neutral-700 mb-6 italic">
              "Dank Baunex sparen wir 50% der Zeit bei Bestellungen und haben eine 
              viel bessere Übersicht über unsere Projekte."
            </blockquote>
            <div class="text-sm">
              <p class="font-semibold text-neutral-900"></p>
              <p class="text-neutral-600">Projektleiter, Omtech AG</p>
            </div>
          </div>
        </div>
        
        <!-- Certifications -->
        <div class="text-center">
          <h3 class="text-2xl font-semibold mb-8">Zertifizierungen & Bewertungen</h3>
          <div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div class="bg-white rounded-lg p-4 shadow-sm">
              <div class="text-sm font-semibold text-neutral-700">Google Bewertungen</div>
              <div class="flex items-center mt-2">
                <div class="flex text-yellow-400">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                </div>
                <span class="ml-2 text-sm text-neutral-600">4.8/5</span>
              </div>
            </div>
            
            <div class="bg-white rounded-lg p-4 shadow-sm">
              <div class="text-sm font-semibold text-neutral-700">Capterra</div>
              <div class="flex items-center mt-2">
                <div class="flex text-yellow-400">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                </div>
                <span class="ml-2 text-sm text-neutral-600">4.9/5</span>
              </div>
            </div>
            
            <div class="bg-white rounded-lg p-4 shadow-sm">
              <div class="text-sm font-semibold text-neutral-700">ISO 27001</div>
              <div class="text-xs text-neutral-600 mt-1">Zertifiziert</div>
            </div>
            
            <div class="bg-white rounded-lg p-4 shadow-sm">
              <div class="text-sm font-semibold text-neutral-700">DSGVO</div>
              <div class="text-xs text-neutral-600 mt-1">Konform</div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-neutral-50">
      <BaseContainer>
        <SectionHeading
          title="Häufige Fragen zu den Preisen"
          subtitle="Finden Sie Antworten auf Ihre Fragen zu unserer Preisstruktur"
        />
        
        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <div 
              v-for="(faq, index) in pricingFAQs" 
              :key="faq.id"
              class="card cursor-pointer"
              @click="toggleFAQ(index)"
            >
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-neutral-900 pr-8">
                  {{ faq.question }}
                </h3>
                <svg 
                  class="w-5 h-5 text-neutral-500 transition-transform duration-200 flex-shrink-0"
                  :class="{ 'rotate-180': openFAQs.includes(index) }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div 
                v-show="openFAQs.includes(index)"
                class="mt-4 pt-4 border-t border-neutral-200"
              >
                <p class="text-neutral-600 leading-relaxed">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseContainer from '../components/BaseContainer.vue'
import BaseButton from '../components/BaseButton.vue'
import SectionHeading from '../components/SectionHeading.vue'
import CTASection from '../components/CTASection.vue'

const isYearly = ref(false)
const openFAQs = ref<number[]>([])

const toggleFAQ = (index: number) => {
  if (openFAQs.value.includes(index)) {
    openFAQs.value = openFAQs.value.filter(i => i !== index)
  } else {
    openFAQs.value.push(index)
  }
}

const pricingFAQs = [
  {
    id: 1,
    question: 'Gibt es eine Demoversion zum Testen?',
    answer: 'Da unsere Software massgeschneidert zusammengestellt wird, bieten wir keine allgemeine Demoversion an. Stattdessen präsentieren wir Ihnen Baunex gerne in einer persönlichen, unverbindlichen und kostenlosen Online- oder Vor-Ort-Demonstration.'
  },
  {
    id: 2,
    question: 'Kann man Baunex pro Monat lizenzieren?',
    answer: 'Baunex bietet nur jährliche Lizenzierungsoptionen an. Dies stellt sicher, dass unsere Kunden von einem kontinuierlichen Service und Support über das ganze Jahr profitieren.'
  },
  {
    id: 3,
    question: 'Gibt es ein Mietmodell?',
    answer: 'Aktuell bieten wir kein Mietmodell an. Unsere Lizenzierung erfolgt ausschliesslich auf Jahresbasis, um eine optimale Nutzung und Unterstützung zu gewährleisten.'
  },
  {
    id: 4,
    question: 'Lohnt sich Baunex auch für kleine Unternehmen?',
    answer: 'Ja, Baunex eignet sich für Unternehmen aller Grössen. Dank des modularen Aufbaus unserer Software können Kleinunternehmen mit nur wenigen Modulen und einem einzigen Arbeitsplatz beginnen und diese Konfiguration flexibel erweitern, sobald sich ihre Anforderungen entwickeln.'
  },
  {
    id: 5,
    question: 'Gibt es eine Preisliste?',
    answer: 'Unsere Software passt sich flexibel an die spezifischen Anforderungen Ihres Unternehmens an. Daher bieten wir keine standardisierten Preislisten an, sondern massgeschneiderte Beratung für eine optimale Softwarelösung.'
  },
  {
    id: 6,
    question: 'Gibt es spezielle Konditionen für Neugründer oder Studenten?',
    answer: 'Baunex bietet Studierenden während ihrer Ausbildungszeit eine kostenlose Studentenversion an. Neugründer profitieren zudem von speziellen Konditionen, die den Einstieg ins Geschäftsleben vereinfachen.'
  },
  {
    id: 7,
    question: 'Können zusätzliche Funktionen zu meinem Paket hinzugefügt werden?',
    answer: 'Unsere Software zeichnet sich durch einen modularen Aufbau aus. Dadurch können Sie jederzeit weitere Module oder Arbeitsplätze ergänzen, was Ihnen maximale Flexibilität gewährleistet.'
  }
]
</script>
