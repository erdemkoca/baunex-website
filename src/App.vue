<template>
  <div class="min-h-screen">
    <!-- Background Canvas -->
    <BackgroundCanvas />
    
    <!-- Navigation -->
    <Navbar />
    
    <!-- Main Content -->
    <main class="relative z-10">
      <RouterView />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import BackgroundCanvas from './components/BackgroundCanvas.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
