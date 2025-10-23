<template>
  <div class="text-center max-w-3xl mx-auto mb-16">
    <h2 v-if="title" class="text-3xl md:text-4xl font-bold leading-tight mb-4">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-body text-neutral-500 text-lg">
      {{ subtitle }}
    </p>
    <div v-if="$slots.default" class="mt-6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
}

defineProps<Props>()
</script>
