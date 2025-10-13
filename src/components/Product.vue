<script setup lang="ts">
import { ref, computed } from "vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProductKey = "aiInfra" | "search" | "agent";

interface ProductInfo {
  key: ProductKey;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const products: ProductInfo[] = [
  {
    key: "aiInfra",
    title: "AI Infra (LLMOS)",
    subtitle: "面向企业的 AI 基础设施",
    description:
      "预留：用于描述 LLMOS 的技术架构、能力边界与典型应用场景。",
    features: [
      "多模型编排与路由",
      "向量与检索基础能力",
      "统一鉴权与审计",
      "可观测与性能优化",
    ],
  },
  {
    key: "search",
    title: "ArcherSmart Search",
    subtitle: "企业级智能搜索引擎",
    description:
      "预留：用于描述智能搜索的语义理解、权限控制与跨源融合能力。",
    features: [
      "语义级检索与重排",
      "企业权限与合规",
      "多数据源接入",
      "可视化知识图谱",
    ],
  },
  {
    key: "agent",
    title: "ArcherSmart Agent (APS)",
    subtitle: "可执行任务的智能体平台",
    description:
      "预留：用于描述 APS 的任务编排、工具调用与业务自动化能力。",
    features: [
      "Agent 工具调用",
      "流程编排与回溯",
      "上下文记忆与协作",
      "企业应用集成",
    ],
  },
];

const activeKey = ref<ProductKey>("aiInfra");

const active = computed(() => products.find((p) => p.key === activeKey.value)!);

function setActive(key: ProductKey) {
  activeKey.value = key;
}

function onLearnMore(key: ProductKey) {
  if (key === 'aiInfra') {
    window.open('https://1block.ai/', '_blank');
  }
}

const onOpenDocument = (key: ProductKey) => {
  if (key === 'aiInfra') {
    window.open('https://llmos.1block.ai/docs/', '_blank');
  }
}

// 产品截图资源导入
// AI Infra (LLMOS)
import ai1 from "@/assets/product/aiInfra/img_1.png";
import ai2 from "@/assets/product/aiInfra/img_2.png";
import ai3 from "@/assets/product/aiInfra/img_3.png";

// ArcherSmart Search
import s1 from "@/assets/product/search/img_1.png";

// ArcherSmart Agent (APS)
import ag5 from "@/assets/product/agent/img_5.png";

const screenshots: Record<ProductKey, string[]> = {
  aiInfra: [ai1, ai2, ai3],
  search: [s1],
  agent: [ag5],
};

const activeScreens = computed(() => screenshots[activeKey.value] ?? []);
</script>

<template>
  <section id="product" class="container py-8 sm:py-4">
    <!-- 标题区域 -->
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary tracking-wider mb-2">产品</h2>
      <h3 class="text-3xl md:text-4xl font-bold">ArcherSmart 产品矩阵</h3>
      <p class="md:w-2/3 mx-auto text-muted-foreground mt-4">
        预留：这里展示产品整体描述，概述平台能力与定位。
      </p>
    </div>

    <!-- 切换选项 -->
    <div class="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
      <Button
        v-for="p in products"
        :key="p.key"
        :variant="activeKey === p.key ? 'brand' : 'brand-outline'"
        class="px-4 py-2"
        @click="setActive(p.key)"
      >
        {{ p.title }}
      </Button>
    </div>

    <!-- 主体内容 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- 左侧：描述与功能列表 -->
      <Card class="bg-background border border-primary/20 hover:bg-brand-gradient/5 hover:border-brand-from/30 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
        <CardHeader>
          <CardTitle>
            <div class="space-y-1">
              <div class="text-primary text-base">{{ active.subtitle }}</div>
              <div class="text-2xl md:text-3xl font-semibold">{{ active.title }}</div>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent class="space-y-6">
          <!-- 描述区域（预留内容填充） -->
          <div>
            <h4 class="text-lg font-medium mb-2">产品描述</h4>
            <p class="text-muted-foreground">
              {{ active.description }}
            </p>
          </div>

          <!-- 功能列表（预留动态内容） -->
          <div>
            <h4 class="text-lg font-medium mb-2">相关功能</h4>
            <ul class="grid sm:grid-cols-2 gap-2">
              <li
                v-for="(f, idx) in active.features"
                :key="idx"
                class="flex items-center gap-2"
              >
                <span class="inline-block size-2 rounded-full bg-primary"></span>
                <span class="text-sm md:text-base">{{ f }}</span>
              </li>
            </ul>
          </div>

          <!-- 交互按钮 -->
          <div class="flex gap-3 pt-2">
            <Button variant="brand" class="px-4" @click="onLearnMore(active.key)">了解更多</Button>
            <Button 
              variant="brand-outline" 
              class="px-4"
              @click="onOpenDocument(active.key)"
            >
              文档
            </Button>
          </div>
        </CardContent>
      </Card>

      <!-- 右侧：视觉展示（预留） -->
      <div class="w-full">
        <Carousel class="w-full">
          <CarouselContent>
            <CarouselItem v-for="(img, idx) in activeScreens" :key="idx">
              <div
                class="w-full h-[18rem] md:h-[22rem] lg:h-[26rem] rounded-xl border border-primary/30 bg-background/70 overflow-hidden flex items-center justify-center"
              >
                <img
                  :src="img"
                  :alt="`${active.title} 截图 ${idx + 1}`"
                  class="w-full h-full object-contain select-none"
                  draggable="false"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious class="left-2" />
          <CarouselNext class="right-2" />
        </Carousel>
      </div>
    </div>

    <!-- 扩展槽位：为后续内容填充预留 -->
    <div class="mt-12">
      <slot name="extra" />
    </div>
  </section>
</template>

<style scoped></style>