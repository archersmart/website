<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "ArcherSmart 与传统搜索引擎有什么区别？",
    answer: "ArcherSmart 基于语义理解和知识图谱技术，能够理解用户意图，提供更精准的搜索结果。同时支持企业级权限管控，确保数据安全。",
    value: "item-1",
  },
  {
    question: "如何保证企业数据的安全性？",
    answer:
      "我们采用企业级安全架构，支持细粒度权限控制、数据加密传输和存储，符合国际安全标准，确保企业数据绝对安全。",
    value: "item-2",
  },
  {
    question:
      "部署 ArcherSmart 需要多长时间？",
    answer:
      "根据企业规模和数据量，通常在 1-4 周内完成部署和配置，我们提供专业的技术支持团队协助整个过程。",
    value: "item-3",
  },
  {
    question: "支持哪些数据源的接入？",
    answer: "支持文档、邮件、数据库、API、网页等多种数据源，可以灵活配置和扩展，满足企业多样化的数据需求。",
    value: "item-4",
  },
  {
    question:
      "如何衡量 ArcherSmart 的投资回报率？",
    answer: "通过提升搜索效率、减少重复工作、优化知识利用率等方式，通常能在 6-12 个月内看到明显的效率提升和成本节约。",
    value: "item-5",
  },
];
</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">常见问题</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        常见问题解答
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      还有其他问题？
      <a
        href="#"
        class="text-muted-foreground"
      >
        <a
          href="#"
          class="underline"
          >联系我们</a
        >
      </a>
    </h3>
  </section>
</template>
