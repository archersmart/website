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
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component
                class="size-8 mb-6 text-primary"
                :is="iconMap[icon]"
              />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
