<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Sparkle,
  Tag,
  Paintbrush,
  Blocks,
  LineChart,
  Wallet,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "blocks",
    title: "搜索效率提升4倍",
    description:
      "日均查询 14 次，文档查找时间显著缩短。",
  },
  {
    icon: "lineChart",
    title: "活跃度显著领先",
    description:
      "月活率达 40%，远超行业平均水平（2-3倍）。",
  },
  {
    icon: "wallet",
    title: "业务价值可量化",
    description:
      "提升知识利用率，直接转化为人效提升与收入增长。",
  },
  {
    icon: "sparkle",
    title: "准确率高达 98%",
    description:
      "结合知识图谱与语义搜索，极大提升查询准确率。",
  },
];

const iconMap: Record<
  string,
  | typeof Sparkle
  | typeof Tag
  | typeof Paintbrush
  | typeof Blocks
  | typeof LineChart
  | typeof Wallet
> = {
  sparkle: Sparkle,
  tag: Tag,
  paintbrush: Paintbrush,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
};
</script>

<template>
  <section
    id="benefits"
    class="container py-24 sm:py-32"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">客户价值</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          客户价值与反馈
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          通过实际部署验证，ArcherSmart 为企业带来显著的效率提升和业务价值，
          获得客户一致好评和持续使用。
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="relative overflow-hidden rounded-2xl bg-background/60 dark:bg-card/60 backdrop-blur-md border border-border/40 hover:bg-brand-gradient/10 hover:border-brand-from/40 hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-0.5 group group/number"
        >
          <CardHeader class="p-6 pb-4">
            <div class="flex justify-between items-start">
              <div class="bg-brand-gradient p-2 rounded-xl ring-8 ring-brand-from/15 mb-4 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:animate-glow">
                <component
                  :is="iconMap[icon]"
                  class="size-6 text-white"
                />
              </div>

              <span
                class="text-5xl text-muted-foreground/15 font-semibold transition-all duration-300 group-hover/number:text-muted-foreground/30"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle class="text-xl md:text-2xl tracking-tight">{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground leading-relaxed text-sm md:text-base px-6 pt-0 pb-6">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
