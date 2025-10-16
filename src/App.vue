<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="from-sky-blue-500/90 to-transparent">
    <Navbar />

    <RouterView />

    <Footer />
  </div>
</template>

<style scoped>
/* 统一移除区块边框与阴影 */
.no-section-chrome :deep(section),
.no-section-chrome :deep(.card),
.no-section-chrome :deep(.shadow),
.no-section-chrome :deep(.ring) {
  box-shadow: none !important;
  border: none !important;
}
</style>
