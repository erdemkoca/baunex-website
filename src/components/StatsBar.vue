<template>
  <section class="py-16 bg-gradient-soft">
    <BaseContainer>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.id"
          class="animate-fade-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="text-4xl md:text-5xl font-bold text-primary mb-2">
            {{ stat.value }}
          </div>
          <div class="text-neutral-600 font-medium">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import BaseContainer from './BaseContainer.vue'

const stats = [
  {
    id: 1,
    value: '500+',
    label: 'Aktive Betriebe'
  },
  {
    id: 2,
    value: '50k+',
    label: 'Stunden erfasst'
  },
  {
    id: 3,
    value: '99.9%',
    label: 'Verfügbarkeit'
  },
  {
    id: 4,
    value: '24/7',
    label: 'Support'
  }
]
</script>
