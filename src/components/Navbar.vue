<template>
  <header class="site-header fixed top-0 left-0 right-0 z-50">
    <div class="header-content">
      <div class="container flex h-16 items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/images/logos/baunex-logo.png" alt="Baunex" class="h-7 w-auto" />
          <span class="text-neutral-900 font-semibold">Baunex</span>
        </div>
        <nav class="hidden md:flex items-center gap-6 text-neutral-700">
          <RouterLink 
            v-for="item in navigationItems" 
            :key="item.name"
            :to="item.href"
            :class="[
              'hover:text-neutral-900 transition',
              $route.path === item.href ? 'text-primary' : ''
            ]"
          >
            {{ item.name }}
          </RouterLink>
        </nav>
        <a href="https://app.baunex.ch"
           class="inline-flex items-center rounded-full bg-primary px-4 py-2 text-white shadow-soft hover:shadow-ring transition">
          Login
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Preise', href: '/preise' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Kontakt', href: '/kontakt' }
]
</script>

<style scoped>
.site-header {
  /* Fester weißer Hintergrund */
  background: #ffffff;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.1);
}

.header-content {
  background: #ffffff;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .site-header {
    background: #ffffff; /* Bleibt weiß auch im Dark Mode */
    border-bottom: 1px solid rgba(15, 23, 42, 0.1);
  }
  
  .header-content {
    background: #ffffff;
  }
}
</style>
