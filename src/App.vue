<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b">
      <nav class="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        <RouterLink to="/" class="font-bold text-xl">Baunex</RouterLink>
        <div class="flex items-center gap-6">
          <RouterLink to="/" class="hover:text-gray-600">Home</RouterLink>
          <RouterLink to="/features" class="hover:text-gray-600">Features</RouterLink>
          <RouterLink to="/preise" class="hover:text-gray-600">Preise</RouterLink>
          <RouterLink to="/kontakt" class="hover:text-gray-600">Kontakt</RouterLink>
          <a class="px-4 py-2 rounded-lg border hover:bg-gray-50" href="https://app.baunex.ch">Login</a>
        </div>
      </nav>
    </header>
    <main class="flex-1">
      <RouterView />
    </main>
    <footer class="border-t">
      <div class="max-w-6xl mx-auto py-6 px-4 text-sm flex justify-between">
        <span>© {{ new Date().getFullYear() }} Baunex</span>
        <RouterLink to="/impressum" class="hover:text-gray-600">Impressum & Datenschutz</RouterLink>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Main app component with navigation
</script>
