<template>
  <div class="pt-24">
    <!-- Hero Section -->
    <section class="section-padding">
      <BaseContainer>
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Häufig gestellte
            <span class="text-gradient">Fragen</span>
          </h1>
          <p class="text-xl text-neutral-600 mb-8">
            Finden Sie schnell Antworten auf Ihre Fragen zu Baunex. Falls Sie nicht fündig werden, 
            kontaktieren Sie uns gerne für eine persönliche Beratung.
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto mb-12">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Fragen durchsuchen..."
                class="w-full px-6 py-4 pl-14 text-lg border border-neutral-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <svg class="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- FAQ Categories -->
    <section class="section-padding bg-neutral-50">
      <BaseContainer>
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="[
              'px-6 py-3 rounded-full font-medium transition-all',
              selectedCategory === category.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-neutral-700 hover:bg-primary/10 border border-neutral-200'
            ]"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- FAQ Content -->
        <div class="max-w-4xl mx-auto">
          <div v-for="category in filteredCategories" :key="category.id" class="mb-16">
            <h2 class="text-3xl font-bold mb-8 text-center">{{ category.name }}</h2>
            <div class="space-y-4">
              <div 
                v-for="(faq, index) in category.faqs" 
                :key="faq.id"
                class="card cursor-pointer"
                @click="toggleFAQ(category.id, index)"
              >
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-neutral-900 pr-8">
                    {{ faq.question }}
                  </h3>
                  <svg 
                    class="w-5 h-5 text-neutral-500 transition-transform duration-200 flex-shrink-0"
                    :class="{ 'rotate-180': openFAQs[category.id]?.includes(index) }"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div 
                  v-show="openFAQs[category.id]?.includes(index)"
                  class="mt-4 pt-4 border-t border-neutral-200"
                >
                  <p class="text-neutral-600 leading-relaxed">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredCategories.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Keine Ergebnisse gefunden</h3>
          <p class="text-neutral-600 mb-8">
            Versuchen Sie andere Suchbegriffe oder kontaktieren Sie uns direkt.
          </p>
          <BaseButton variant="primary" to="/kontakt">
            Kontakt aufnehmen
          </BaseButton>
        </div>
      </BaseContainer>
    </section>

    <!-- CTA Section -->
    <section class="section-padding">
      <BaseContainer>
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Haben Sie weitere Fragen?
          </h2>
          <p class="text-xl text-neutral-600 mb-8">
            Unser Team steht Ihnen gerne für eine persönliche Beratung zur Verfügung. 
            Vereinbaren Sie eine kostenlose Demo oder kontaktieren Sie uns direkt.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton variant="primary" to="/kontakt">
              Demo anfragen
            </BaseButton>
            <BaseButton variant="secondary" href="mailto:info@baunex.ch">
              E-Mail senden
            </BaseButton>
          </div>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import BaseContainer from '../components/BaseContainer.vue'
import BaseButton from '../components/BaseButton.vue'

const searchQuery = ref('')
const selectedCategory = ref('all')
const openFAQs = ref<Record<string, number[]>>({})

const toggleFAQ = (categoryId: string, index: number) => {
  if (!openFAQs.value[categoryId]) {
    openFAQs.value[categoryId] = []
  }
  
  if (openFAQs.value[categoryId].includes(index)) {
    openFAQs.value[categoryId] = openFAQs.value[categoryId].filter(i => i !== index)
  } else {
    openFAQs.value[categoryId].push(index)
  }
}

const categories = [
  {
    id: 'all',
    name: 'Alle Fragen'
  },
  {
    id: 'general',
    name: 'Allgemein'
  },
  {
    id: 'pricing',
    name: 'Preise & Verträge'
  },
  {
    id: 'features',
    name: 'Funktionen & Module'
  },
  {
    id: 'security',
    name: 'Daten & Sicherheit'
  },
  {
    id: 'onboarding',
    name: 'Onboarding & Support'
  },
  {
    id: 'integration',
    name: 'Integrationen & API'
  }
]

const faqData = [
  {
    id: 'general',
    name: 'Allgemein',
    faqs: [
      {
        id: 1,
        question: 'Was ist Baunex?',
        answer: 'Baunex ist eine modulare Software-Lösung speziell für die Schweizer Baubranche. Sie umfasst Module für Projektmanagement, Zeiterfassung, Rechnungswesen, Materialverwaltung und vieles mehr.'
      },
      {
        id: 2,
        question: 'Für welche Betriebe eignet sich Baunex?',
        answer: 'Baunex eignet sich für alle Betriebe in der Baubranche - von Ein-Mann-Betrieben bis zu Grossunternehmen. Dank des modularen Aufbaus können Sie nur die Funktionen nutzen, die Sie benötigen.'
      },
      {
        id: 3,
        question: 'Kann ich Baunex vor dem Kauf testen?',
        answer: 'Ja, Sie können Baunex 14 Tage lang kostenlos und testen. Keine Kreditkarte erforderlich. Alle Funktionen stehen Ihnen zur Verfügung.'
      },
      {
        id: 4,
        question: 'Wie lange dauert die Einführung von Baunex?',
        answer: 'In der Regel 1–2 Wochen inklusive Datenimport, Rollen & Schulung. Kleine Teams sind oft in wenigen Tagen startklar.'
      }
    ]
  },
  {
    id: 'pricing',
    name: 'Preise & Verträge',
    faqs: [
      {
        id: 5,
        question: 'Gibt es eine Preisliste?',
        answer: 'Unsere Software passt sich flexibel an die spezifischen Anforderungen Ihres Unternehmens an. Daher bieten wir keine standardisierten Preislisten an, sondern massgeschneiderte Beratung für eine optimale Softwarelösung.'
      },
      {
        id: 6,
        question: 'Kann man Baunex pro Monat lizenzieren?',
        answer: 'Baunex bietet nur jährliche Lizenzierungsoptionen an. Dies stellt sicher, dass unsere Kunden von einem kontinuierlichen Service und Support über das ganze Jahr profitieren.'
      },
      {
        id: 7,
        question: 'Gibt es ein Mietmodell?',
        answer: 'Aktuell bieten wir kein Mietmodell an. Unsere Lizenzierung erfolgt ausschliesslich auf Jahresbasis, um eine optimale Nutzung und Unterstützung zu gewährleisten.'
      },
      {
        id: 8,
        question: 'Lohnt sich Baunex auch für kleine Unternehmen?',
        answer: 'Ja, Baunex eignet sich für Unternehmen aller Grössen. Dank des modularen Aufbaus unserer Software können Kleinunternehmen mit nur wenigen Modulen und einem einzigen Arbeitsplatz beginnen und diese Konfiguration flexibel erweitern.'
      },
      {
        id: 9,
        question: 'Gibt es spezielle Konditionen für Neugründer oder Studenten?',
        answer: 'Baunex bietet Studierenden während ihrer Ausbildungszeit eine kostenlose Studentenversion an. Neugründer profitieren zudem von speziellen Konditionen, die den Einstieg ins Geschäftsleben vereinfachen.'
      },
      {
        id: 10,
        question: 'Welche Zahlungsmethoden werden akzeptiert?',
        answer: 'Wir akzeptieren alle gängigen Zahlungsmethoden: SEPA-Lastschrift, Kreditkarte (Visa, Mastercard), PayPal und Rechnung für grössere Unternehmen. Die Abrechnung erfolgt monatlich oder jährlich.'
      }
    ]
  },
  {
    id: 'features',
    name: 'Funktionen & Module',
    faqs: [
      {
        id: 11,
        question: 'Welche Module bietet Baunex?',
        answer: 'Baunex umfasst Module für Projektmanagement, Zeiterfassung, Rechnungswesen, Materialverwaltung, Kundenverwaltung, Dokumentenmanagement, Qualitätskontrolle und vieles mehr. Alle Module sind modular erweiterbar.'
      },
      {
        id: 12,
        question: 'Können zusätzliche Funktionen zu meinem Paket hinzugefügt werden?',
        answer: 'Unsere Software zeichnet sich durch einen modularen Aufbau aus. Dadurch können Sie jederzeit weitere Module oder Arbeitsplätze ergänzen, was Ihnen maximale Flexibilität gewährleistet.'
      },
      {
        id: 13,
        question: 'Funktioniert Baunex auch offline?',
        answer: 'Ja, die mobile App funktioniert auch offline. Zeiterfassung und grundlegende Funktionen sind verfügbar. Sobald Sie wieder online sind, werden alle Daten automatisch synchronisiert.'
      },
      {
        id: 14,
        question: 'Gibt es eine mobile App?',
        answer: 'Ja, Baunex verfügt über eine mobile App für iOS und Android. Sie können damit Zeiterfassung, Projektupdates und grundlegende Verwaltungsaufgaben auch unterwegs erledigen.'
      }
    ]
  },
  {
    id: 'security',
    name: 'Daten & Sicherheit',
    faqs: [
      {
        id: 15,
        question: 'Wie sicher sind meine Daten bei Baunex?',
        answer: 'Ihre Daten sind bei uns in höchster Sicherheit. Wir verwenden SSL-Verschlüsselung, regelmässige Backups und sind DSGVO-konform. Alle Daten werden in Rechenzentren in der Schweiz/EU gespeichert.'
      },
      {
        id: 16,
        question: 'Wo werden meine Daten gespeichert?',
        answer: 'Hosting in der Schweiz/EU mit verschlüsselter Übertragung und ruhender Verschlüsselung. DSG/DSGVO-konform.'
      },
      {
        id: 17,
        question: 'Kann ich meine Daten exportieren?',
        answer: 'Ja, Sie können jederzeit alle Ihre Daten exportieren. Wir bieten Export-Funktionen für Zeiterfassung, Rechnungen, Kunden- und Projektdaten in verschiedenen Formaten (CSV, PDF, Excel).'
      },
      {
        id: 18,
        question: 'Welche Daten verlassen die Schweiz/EU?',
        answer: 'Keine. Alle Daten bleiben in der Schweiz/EU und werden in zertifizierten Rechenzentren gespeichert. Wir garantieren vollständige Datenhoheit.'
      }
    ]
  },
  {
    id: 'onboarding',
    name: 'Onboarding & Support',
    faqs: [
      {
        id: 19,
        question: 'Wie funktioniert das Onboarding?',
        answer: 'Unser Onboarding-Prozess ist einfach und schnell. Nach der Anmeldung erhalten Sie eine persönliche Einführung, wir richten Ihre ersten Projekte ein und zeigen Ihnen alle wichtigen Funktionen. Der gesamte Prozess dauert nur 30 Minuten.'
      },
      {
        id: 20,
        question: 'Gibt es einen Support?',
        answer: 'Ja, wir bieten 24/7 Support per E-Mail und Chat. Zusätzlich haben Sie Zugang zu unserer umfangreichen Wissensdatenbank mit Tutorials und Anleitungen. Premium-Kunden erhalten auch telefonischen Support.'
      },
      {
        id: 21,
        question: 'Bieten Sie Schulungen an?',
        answer: 'Ja, wir bieten umfassende Schulungen für alle Module an. Diese können online oder vor Ort durchgeführt werden. Zusätzlich stellen wir Video-Tutorials und Dokumentation zur Verfügung.'
      },
      {
        id: 22,
        question: 'Wie lange dauert die Einrichtung?',
        answer: 'Die grundlegende Einrichtung dauert meist nur wenige Stunden. Komplexere Konfigurationen können 1-2 Tage in Anspruch nehmen. Wir unterstützen Sie dabei aktiv.'
      }
    ]
  },
  {
    id: 'integration',
    name: 'Integrationen & API',
    faqs: [
      {
        id: 23,
        question: 'Kann ich Baunex mit anderen Tools integrieren?',
        answer: 'Ja, Baunex bietet APIs und Integrationen mit vielen gängigen Tools wie Buchhaltungssoftware, CRM-Systemen und Projektmanagement-Tools. Sprechen Sie uns an für individuelle Integrationen.'
      },
      {
        id: 24,
        question: 'Gibt es eine API?',
        answer: 'Ja, Baunex bietet eine umfassende REST-API für die Integration mit anderen Systemen. Die API-Dokumentation ist für alle Kunden verfügbar.'
      },
      {
        id: 25,
        question: 'Welche Buchhaltungssoftware wird unterstützt?',
        answer: 'Wir unterstützen die gängigsten Schweizer Buchhaltungsprogramme wie Bexio, Abacus, Lexware und viele andere. Die Integration erfolgt über standardisierte Schnittstellen.'
      },
      {
        id: 26,
        question: 'Kann ich Daten aus meinem alten System importieren?',
        answer: 'Ja, wir unterstützen den Import von Daten aus den meisten gängigen Systemen. Unser Support-Team hilft Ihnen gerne beim Datenmigration-Prozess.'
      }
    ]
  }
]

const filteredCategories = computed(() => {
  let filtered = faqData

  // Filter by category
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(cat => cat.id === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.map(category => ({
      ...category,
      faqs: category.faqs.filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      )
    })).filter(category => category.faqs.length > 0)
  }

  return filtered
})

// Add JSON-LD schema for SEO
onMounted(() => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => 
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
})
</script>
