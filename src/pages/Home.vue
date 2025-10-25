<template>
  <div class="home-page">
    <!-- Background Stage - Timed Slideshow -->
    <BackgroundStageTimed
      :images="[
        '/images/hero/construction-neural-network.png',
        '/images/hero/ar-construction-overlay.png',
        '/images/hero/ar-construction-overlay2.png',
        '/images/hero/ar-construction-overlay3.png'
      ]"
      :intervalMs="8000"
      :fadeMs="900"
    />
    
    <!-- Hero Section -->
    <Hero />
    
    <!-- Trust Bar -->
    <TrustBar />
    
    <!-- Features Grid -->
    <FeatureGrid />
    
    <!-- Workflow Showcase -->
    <WorkflowShowcase />
    
    <!-- Use Cases Tabs -->
    <UseCasesTabs />
    
    <!-- FAQ Teaser Section -->
    <FAQTeaser />
    
    <!-- Spacer to ensure footer is visible -->
    <div class="h-20"></div>
  </div>
</template>

<script setup lang="ts">
import BackgroundStageTimed from '../components/BackgroundStageTimed.vue'
import Hero from '../components/Hero.vue'
import TrustBar from '../components/TrustBar.vue'
import FeatureGrid from '../components/FeatureGrid.vue'
import WorkflowShowcase from '../components/WorkflowShowcase.vue'
import UseCasesTabs from '../components/UseCasesTabs.vue'
import FAQTeaser from '../components/FAQTeaser.vue'
</script>

<style scoped>
.home-page {
  /* Ensure proper stacking context */
  position: relative;
  z-index: 1;
  /* Add top padding to account for fixed header */
  padding-top: 64px; /* 4rem = 64px, matches header height */
}

/* Ensure sections have proper spacing and background visibility */
.home-page > section {
  position: relative;
  z-index: 2;
}
</style>
