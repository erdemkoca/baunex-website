<template>
  <div class="pointer-events-none fixed inset-0 -z-10">
    <!-- Soft radial gradient -->
    <div class="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(79,70,229,0.25),transparent),linear-gradient(180deg,#FFFFFF,rgba(241,245,249,0.8))]"></div>

    <!-- Faint grid (SVG) -->
    <svg class="absolute inset-0 opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F172A" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)"/>
    </svg>

    <!-- Noise overlay -->
    <div class="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
         style="background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>');">
    </div>

    <!-- Subtle AR Elements -->
    <div class="absolute top-1/4 right-1/4 w-96 h-96 opacity-[0.03] mix-blend-overlay">
      <img src="/images/hero/ar-construction-overlay2.png" alt="" class="w-full h-full object-cover rounded-full" />
    </div>
    <div class="absolute bottom-1/3 left-1/3 w-80 h-80 opacity-[0.02] mix-blend-overlay">
      <img src="/images/hero/ar-construction-overlay3.png" alt="" class="w-full h-full object-cover rounded-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Background canvas with radial gradient, grid pattern, floating orbs and noise texture
</script>
