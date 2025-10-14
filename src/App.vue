<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Benefits from "./components/Benefits.vue";
import Features from "./components/Features.vue";
import Services from "./components/Services.vue";
import HowItWorks from "./components/HowItWorks.vue";
import Sponsors from "./components/Sponsors.vue";
import Testimonials from "./components/Testimonials.vue";
import Team from "./components/Team.vue";
import Pricing from "./components/Pricing.vue";
import Community from "./components/Community.vue";
import Contact from "./components/Contact.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";
import Product from "./components/Product.vue";
import { ref, onMounted, onUnmounted, computed } from "vue";

// 滚动聚焦：Sponsors/Benefits/Features/Services 被聚焦时放大与暖色调，其他略缩小与冷色调
type SectionId = "product" | "sponsors" | "benefits" | "features" | "services";
const productEl = ref<HTMLElement | null>(null);
const sponsorsEl = ref<HTMLElement | null>(null);
const benefitsEl = ref<HTMLElement | null>(null);
const featuresEl = ref<HTMLElement | null>(null);
const servicesEl = ref<HTMLElement | null>(null);
const prefersReducedMotion = ref(false);
const focusedSection = ref<SectionId | "none">("none");

const growScale = 1.03; // 聚焦区块放大幅度
const shrinkScale = 0.98; // 非聚焦区块缩小幅度

const getScale = (id: SectionId) => {
  if (prefersReducedMotion.value) return 1;
  if (focusedSection.value === "none") return 1;
  return focusedSection.value === id ? growScale : shrinkScale;
};

const getClasses = (id: SectionId) => {
  if (prefersReducedMotion.value)
    return [
      "transition-all duration-500 ease-out transform-gpu will-change-transform no-section-chrome",
    ];

  const isFocused = focusedSection.value === id;
  const isDimmed = focusedSection.value !== "none" && !isFocused;
  return [
    "transition-all duration-500 ease-out transform-gpu will-change-transform will-change-[filter] no-section-chrome",
    // 色温变化（暖色调与轻微对比/饱和度提升）
    "filter",
    isFocused
      ? "contrast-105 saturate-110 [hue-rotate:-6deg]"
      : isDimmed
      ? "contrast-95 saturate-90 [hue-rotate:4deg]"
      : "contrast-100",
  ];
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  prefersReducedMotion.value = window
    .matchMedia("(prefers-reduced-motion: reduce)")
    .matches;
  if (prefersReducedMotion.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      // 选择可见比例最大的区块作为当前聚焦
      const list: { id: SectionId; el: HTMLElement | null }[] = [
        { id: "product", el: productEl.value },
        { id: "sponsors", el: sponsorsEl.value },
        { id: "benefits", el: benefitsEl.value },
        { id: "features", el: featuresEl.value },
        { id: "services", el: servicesEl.value },
      ];

      let best: { id: SectionId; ratio: number } | null = null;
      for (const item of list) {
        if (!item.el) continue;
        const entry = entries.find((e) => e.target === item.el);
        if (!entry) continue;
        const ratio = entry.intersectionRatio;
        if (!best || ratio > best.ratio) best = { id: item.id, ratio };
      }

      const thresholdOn = 0.4;
      focusedSection.value = best && best.ratio > thresholdOn ? best.id : "none";
    },
    { threshold: [0, 0.25, 0.4, 0.6, 0.8, 1] }
  );

  // 观察五个区块
  if (productEl.value) observer.observe(productEl.value);
  if (sponsorsEl.value) observer.observe(sponsorsEl.value);
  if (benefitsEl.value) observer.observe(benefitsEl.value);
  if (featuresEl.value) observer.observe(featuresEl.value);
  if (servicesEl.value) observer.observe(servicesEl.value);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>

<template>
  <div class="from-sky-blue-500/90 to-transparent">
    <Navbar />
    <div
      class="bg-gradient-to-b from-sky-blue-500/90 to-transparent text-blue-900 -mt-20 pt-40 pb-40"
    >
      <Hero />
    </div>
    <!-- 滚动强调区块：Product -->

    <!-- 滚动强调区块：Sponsors -->
    <div
      ref="sponsorsEl"
      class="bg-white dark:bg-background"
      :class="getClasses('sponsors')"
      :style="{ transform: `scale(${getScale('sponsors')})` }"
    >
      <Sponsors />
    </div>

    <div
      ref="productEl"
      class="bg-[url('background.svg')] text-white bg-repeat-round"
      :class="getClasses('product')"
      :style="{ transform: `scale(${getScale('product')})` }"
    >
      <Product />
    </div>

    <div
      ref="benefitsEl"
      class="bg-white dark:bg-background"
      :class="getClasses('benefits')"
      :style="{ transform: `scale(${getScale('benefits')})` }"
    >
      <Benefits />
    </div>

    <div
      ref="servicesEl"
      class="bg-[url('background.svg')] text-white bg-repeat-round"
      :class="getClasses('services')"
      :style="{ transform: `scale(${getScale('services')})` }"
    >
      <Services />
    </div>

    <div
      ref="featuresEl"
      class="bg-white dark:bg-background"
      :class="getClasses('features')"
      :style="{ transform: `scale(${getScale('features')})` }"
    >
      <Features />
    </div>

    <!-- 滚动强调区块：Services -->

    <!-- <HowItWorks /> -->
    <!-- <Testimonials /> -->
    <!-- <Team /> -->
    <!-- <Community /> -->
    <!-- <Pricing /> -->
    <!-- <Contact /> -->
    <!-- <FAQ /> -->
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
