<template>
  <div class="text-center max-w-2xl mx-auto mb-16">
    <h2 v-if="title" class="text-h2 font-bold text-neutral-900 mb-4">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-body text-slate-700">
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
