<template>
  <article class="group rounded-3xl bg-white/70 backdrop-blur-xs ring-1 ring-white/60 shadow-soft p-6 transition
                 hover:-translate-y-0.5 hover:shadow-ring">
    <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
      <slot name="icon"/>
    </div>
    <h3 class="text-xl font-semibold text-neutral-900 mb-2"><slot name="title"/></h3>
    <p class="text-neutral-700"><slot/></p>
  </article>
</template>

<script setup lang="ts">
// FeatureCard component with glass styling and micro-interactions
</script>
