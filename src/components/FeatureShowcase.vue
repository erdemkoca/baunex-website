<template>
  <section class="py-16 md:py-20">
    <div class="container">
      <SectionHeading
        :title="title"
        :subtitle="subtitle"
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="feature in features" 
          :key="feature.id"
          class="group rounded-3xl bg-white/70 backdrop-blur-xs ring-1 ring-white/60 shadow-soft p-6 transition hover:-translate-y-0.5 hover:shadow-ring"
        >
          <!-- Screenshot -->
          <div class="mb-4 rounded-2xl overflow-hidden bg-white/50">
            <img :src="feature.screenshot" :alt="feature.title" class="w-full h-48 object-cover" />
          </div>
          
          <!-- Content -->
          <h3 class="text-xl font-semibold text-neutral-900 mb-2">{{ feature.title }}</h3>
          <p class="text-neutral-700 mb-4">{{ feature.description }}</p>
          
          <!-- Benefits -->
          <ul class="space-y-2">
            <li 
              v-for="benefit in feature.benefits.slice(0, 3)" 
              :key="benefit"
              class="flex items-center text-sm text-neutral-600"
            >
              <svg class="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ benefit }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'

interface Feature {
  id: number
  title: string
  description: string
  screenshot: string
  benefits: string[]
}

interface Props {
  title?: string
  subtitle?: string
  features: Feature[]
}

withDefaults(defineProps<Props>(), {
  title: 'Unsere Features',
  subtitle: 'Alle wichtigen Tools für Ihren Bau- und Handwerksbetrieb'
})
</script>
