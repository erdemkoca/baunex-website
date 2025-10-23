<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass shadow-soft' : 'bg-transparent'
    ]"
  >
    <BaseContainer>
      <nav class="flex items-center justify-between py-4">
        <!-- Logo -->
        <RouterLink 
          to="/" 
          class="flex items-center space-x-2 text-xl font-bold text-neutral-900 hover:text-primary transition-colors"
        >
          <img src="/images/logos/baunex-logo.png" alt="Baunex" class="h-8 w-auto" />
          <span>Baunex</span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink 
            v-for="item in navigationItems" 
            :key="item.name"
            :to="item.href"
            :class="[
              'text-neutral-700 hover:text-primary transition-colors font-medium',
              $route.path === item.href ? 'text-primary' : ''
            ]"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center space-x-4">
          <BaseButton 
            variant="ghost" 
            size="sm"
            href="https://app.baunex.ch"
          >
            Login
          </BaseButton>
          <BaseButton 
            variant="primary" 
            size="sm"
            to="/kontakt"
          >
            Demo anfragen
          </BaseButton>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg 
            class="w-6 h-6" 
            :class="{ 'rotate-90': isMobileMenuOpen }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-neutral-200 pt-4 pb-4"
      >
        <div class="flex flex-col space-y-4">
          <RouterLink 
            v-for="item in navigationItems" 
            :key="item.name"
            :to="item.href"
            :class="[
              'text-neutral-700 hover:text-primary transition-colors font-medium py-2',
              $route.path === item.href ? 'text-primary' : ''
            ]"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </RouterLink>
          
          <div class="flex flex-col space-y-2 pt-4 border-t border-neutral-200">
            <BaseButton 
              variant="ghost" 
              size="sm"
              href="https://app.baunex.ch"
              class="justify-start"
            >
              Login
            </BaseButton>
            <BaseButton 
              variant="primary" 
              size="sm"
              to="/kontakt"
              class="justify-start"
            >
              Demo anfragen
            </BaseButton>
          </div>
        </div>
      </div>
    </BaseContainer>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BaseContainer from './BaseContainer.vue'
import BaseButton from './BaseButton.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Preise', href: '/preise' },
  { name: 'Kontakt', href: '/kontakt' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
