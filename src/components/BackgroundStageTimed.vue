<template>
  <div class="bg-stage" aria-hidden="true">
    <img v-for="(src, i) in images"
         :key="src"
         :src="src"
         :class="['bg-img', { 'is-active': i === active }]"
         decoding="async"
         fetchpriority="low" />
    <div class="bg-overlay"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  images: string[],
  intervalMs?: number,   // z.B. 8000
  fadeMs?: number        // z.B. 900
}>()

const active = ref(0)
let timer: number | null = null
let reduced = matchMedia('(prefers-reduced-motion: reduce)').matches

function start() {
  if (reduced || props.images.length <= 1) return
  const step = () => { active.value = (active.value + 1) % props.images.length }
  timer = window.setInterval(step, props.intervalMs ?? 8000)
}

onMounted(() => {
  // Erstes Bild bekommt hohe Prioritaet
  const first = document.querySelector('.bg-img') as HTMLImageElement | null
  if (first) first.setAttribute('fetchpriority', 'high')

  // Reduced motion respektieren
  matchMedia('(prefers-reduced-motion: reduce)').addEventListener?.('change', e => {
    reduced = e.matches
    if (reduced && timer){ clearInterval(timer); timer = null }
    if (!reduced && !timer){ start() }
  })

  // Bilder „warm" laden (idle)
  if ('requestIdleCallback' in window) {
    ;(window as any).requestIdleCallback(() => props.images.forEach(src => {
      const i = new Image(); i.src = src
    }))
  }

  start()
})

onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<style>
.bg-stage{
  position: fixed; inset: 0; z-index: -1; overflow: hidden;
  background: #0b1020;              /* Fallback, damit NIE weiss */
}
.bg-img{
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; object-position: 50% 50%;
  opacity: 0; transition: opacity .9s ease-in-out;
  filter: saturate(.9) brightness(.95); /* ruhiger */
  will-change: opacity;
  pointer-events: none;
}
.bg-img.is-active{ opacity: 1; }

.bg-overlay{
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(1200px 600px at 50% 10%, rgba(0,0,0,.22), rgba(0,0,0,0) 60%),
    linear-gradient(to bottom, rgba(0,0,0,.10), rgba(0,0,0,0) 35%, rgba(0,0,0,.18) 100%);
}

@media (prefers-reduced-motion: reduce){
  .bg-img{ transition: none !important }
}
</style>
