<script setup lang="ts">
import { ref, computed } from "vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 行业分类定义
type CategoryKey =
  | "all"
  | "plastics"
  | "metals"
  | "electronics"
  | "beverages"
  | "medical"
  | "others";

interface Category {
  key: CategoryKey;
  label: string;
}

// 案例数据结构（可留空，供后续填充）
interface CaseItem {
  id?: string | number;
  title?: string;
  description?: string;
  image?: string; // 例如："/path/to.jpg" 或 public 目录中的资源名
}

// Tab 列表（默认选中“全部”）
const categories: Category[] = [
  { key: "all", label: "全部" },
  { key: "plastics", label: "塑料制品" },
  { key: "metals", label: "金属制品" },
  { key: "electronics", label: "电器及附件" },
  { key: "beverages", label: "食品饮料" },
  { key: "medical", label: "医药与医疗器械" },
  { key: "others", label: "其他" },
];

const activeTab = ref<CategoryKey>("all");

// 行业案例数据映射（后续在各分类数组中填充实际案例数据）
const casesMap: Record<Exclude<CategoryKey, "all">, CaseItem[]> = {
  plastics: [
    {
      id: 1,
      title: "塑料制品案例1",
      description: "这是一个塑料制品案例的描述。",
      image: "/demo-img.jpg",
    },
  ],
  metals: [
    {
      id: 2,
      title: "金属制品案例1",
      description: "这是一个金属制品案例的描述。",
      image: "/metals.jpg",
    },
  ],
  electronics: [],
  beverages: [],
  medical: [],
  others: [],
};

// 当前显示的案例集合（当选择“全部”时合并各分类内容）
const displayedCases = computed<CaseItem[]>(() => {
  if (activeTab.value === "all") {
    return [
      ...casesMap.plastics,
      ...casesMap.metals,
      ...casesMap.electronics,
      ...casesMap.beverages,
      ...casesMap.medical,
      ...casesMap.others,
    ];
  }
  const key = activeTab.value as Exclude<CategoryKey, "all">;
  return casesMap[key] ?? [];
});

function setTab(key: CategoryKey) {
  activeTab.value = key;
}

// 图片地址解析（无图时使用占位图）
function getImageUrl(item: CaseItem) {
  if (item.image) return item.image.startsWith("/") ? item.image : `/${item.image}`;
  return "/demo-img.jpg"; // public 目录占位图
}
</script>

<template>
  <section id="industry-case" class="container py-24 sm:py-32 min-h-[calc(100vh-64px)]">
    <!-- 顶部标题与描述 -->
    <div class="text-center mb-6">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground">
        在各行各业，让AI驱动制造
      </h2>
      <p class="mt-2 text-sm md:text-base text-muted-foreground">
        已有4000+高成长制造企业普选 ArcherSmart.AI
      </p>
    </div>

    <!-- 行业 Tab -->
    <div class="flex flex-wrap justify-center gap-4 border-b pb-2 mb-6">
      <button
        v-for="c in categories"
        :key="c.key"
        class="px-2 pb-2 text-sm md:text-base"
        :class="activeTab === c.key ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'"
        @click="setTab(c.key)"
      >
        {{ c.label }}
      </button>
    </div>

    <!-- 案例卡片列表 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card v-for="(item, idx) in displayedCases" :key="item.id ?? idx" class="bg-card">
        <div class="w-full h-44 md:h-52 rounded-t-md overflow-hidden bg-muted">
          <img :src="getImageUrl(item)" alt="案例展示图片" class="w-full h-full object-cover" />
        </div>
        <CardHeader class="pt-4">
          <CardTitle class="text-base md:text-lg text-foreground">
            {{ item.title || '案例标题待填充' }}
          </CardTitle>
        </CardHeader>
        <CardContent class="text-muted-foreground text-sm">
          {{ item.description || '案例描述待填充' }}
        </CardContent>
      </Card>

      <!-- 空态：当前分类暂无数据 -->
      <div v-if="displayedCases.length === 0" class="col-span-full">
        <div class="rounded-lg border bg-card p-6 text-center text-muted-foreground">
          该分类暂未添加案例内容，后续可在 casesMap 中补充。
        </div>
      </div>
    </div>

    <!-- 底部占位提示 -->
    <div class="text-center mt-8 text-muted-foreground">
      更多案例正在完善上传中……
    </div>
  </section>
</template>

<style scoped>
/* 轻微的滚动进入过渡可拓展使用，此处预留样式钩子 */
#industry-case {
  scroll-margin-top: 80px;
}
</style>
