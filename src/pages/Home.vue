<template>
  <div>
    <!-- Hero Section -->
    <Hero />
    
    <!-- Features Grid -->
    <FeatureGrid />
    
    <!-- Stats Bar -->
    <StatsBar />
    
    <!-- Use Cases Tabs -->
    <UseCasesTabs />
    
    <!-- FAQ Section -->
    <FAQAccordion />
    
    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue'
import FeatureGrid from '../components/FeatureGrid.vue'
import StatsBar from '../components/StatsBar.vue'
import UseCasesTabs from '../components/UseCasesTabs.vue'
import FAQAccordion from '../components/FAQAccordion.vue'
import CTASection from '../components/CTASection.vue'
</script>
