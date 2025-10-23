<template>
  <div class="fixed inset-0 -z-10 overflow-hidden">
    <!-- Radial Gradient Background -->
    <div class="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
    
    <!-- Grid Pattern -->
    <svg 
      class="absolute inset-0 w-full h-full opacity-30" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern 
          id="grid" 
          width="40" 
          height="40" 
          patternUnits="userSpaceOnUse"
        >
          <path 
            d="M 40 0 L 0 0 0 40" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="1"
            class="text-primary/10"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    
    <!-- Floating Orbs -->
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent-to/20 rounded-full opacity-5 blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    <div class="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-accent-to/20 to-primary/20 rounded-full opacity-10 blur-2xl animate-pulse" style="animation-delay: 4s;"></div>
    
    <!-- Noise Texture -->
    <div class="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjQiLz4KPC9zdmc+')]"></div>
  </div>
</template>

<script setup lang="ts">
// Background canvas with radial gradient, grid pattern, floating orbs and noise texture
</script>
