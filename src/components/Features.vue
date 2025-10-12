<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "tabletSmartphone",
    title: "企业第二大脑",
    description:
      "沉淀组织知识，避免陷入'信息泥潭'，让企业知识真正流动起来。",
  },
  {
    icon: "badgeCheck",
    title: "CoPilot 智能体",
    description:
      "不仅能搜索，还能构建Agent代理，执行实际任务，提升工作效率。",
  },
  {
    icon: "goal",
    title: "跨应用搜索",
    description:
      "打破信息孤岛，MCP接入企业应用和工具，实现统一搜索体验。",
  },
  {
    icon: "pictureInPicture",
    title: "自然语言交互",
    description:
      "像与人对话一样提问，精准理解用户意图，提供智能化回答。",
  },
  {
    icon: "mousePointerClick",
    title: "语义级理解",
    description:
      "基于 Embedding 技术，真正理解员工'指的是什么'，提供精准搜索结果。",
  },
  {
    icon: "newspaper",
    title: "企业级权限保障",
    description:
      "复杂组织架构下，确保数据访问合规、可控、安全，保护企业核心资产。",
  },
];

const iconMap: Record<
  string,
  | typeof TabletSmartphone
  | typeof BadgeCheck
  | typeof Goal
  | typeof PictureInPicture
  | typeof Paintbrush
  | typeof MousePointerClick
  | typeof MessageCircle
  | typeof Newspaper
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      核心功能
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      为什么选择 ArcherSmart
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      一个语义驱动、权限安全的企业知识图谱平台，让企业拥有自己的AI搜索与智能助手
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>
