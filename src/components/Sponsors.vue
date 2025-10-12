<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

import {
  Crown,
  Vegan,
  Ghost,
  Puzzle,
  Squirrel,
  Cookie,
  Drama,
} from "lucide-vue-next";

interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "crown",
    name: "八马茶业",
  },
  {
    icon: "vegan",
    name: "IGARASHI",
  },
  {
    icon: "ghost",
    name: "九牧",
  },
  {
    icon: "puzzle",
    name: "大洋",
  },
  {
    icon: "squirrel",
    name: "斯蒂尔",
  },
  {
    icon: "cookie",
    name: "安踏",
  },
  {
    icon: "drama",
    name: "蕉下",
  },
  {
    icon: "drama",
    name: "盛弘股份",
  },
  {
    icon: "drama",
    name: "星巴克",
  },
  {
    icon: "drama",
    name: "沃尔玛",
  },
  {
    icon: "drama",
    name: "宝马",
  },
  {
    icon: "drama",
    name: "施耐德电气",
  },
];

const iconMap: Record<
  string,
  | typeof Crown
  | typeof Vegan
  | typeof Ghost
  | typeof Puzzle
  | typeof Squirrel
  | typeof Cookie
  | typeof Drama
> = {
  crown: Crown,
  vegan: Vegan,
  ghost: Ghost,
  puzzle: Puzzle,
  squirrel: Squirrel,
  cookie: Cookie,
  drama: Drama,
};
</script>

<template>
  <section
    id="sponsors"
    class="max-w-[75%] mx-auto pb-24 sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-6">
      合作客户
    </h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[3rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[3rem]"
      >
        <div
          v-for="{ icon, name } in sponsors"
          :key="name"
        >
          <div class="flex items-center text-xl md:text-2xl font-medium">
            <component
              :is="iconMap[icon]"
              class="mr-2"
              stroke-width="3"
            />
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>
