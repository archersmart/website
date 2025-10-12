<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "知识管理",
    description:
      "统一管理企业文档、邮件、会议记录等各类知识资产，构建企业知识库。",
    pro: 0,
  },
  {
    title: "智能搜索",
    description:
      "基于语义理解的智能搜索，快速定位所需信息，提升工作效率。",
    pro: 0,
  },
  {
    title: "AI助手",
    description: "智能问答助手，基于企业知识提供准确回答和建议。",
    pro: 0,
  },
  {
    title: "数据分析",
    description: "深度分析知识使用情况，优化知识结构和流程。",
    pro: 0,
  },
];
</script>

<template>
  <section
    id="services"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      应用场景
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      全场景智能化解决方案
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      从知识管理到智能搜索，从AI助手到数据分析，
      ArcherSmart 为企业提供全方位的智能化服务。
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        v-for="{ title, description, pro } in serviceList"
        :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3"
            >PRO</Badge
          >
        </Card>
      </div>
    </div>
  </section>
</template>
