<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

// Import sponsor images
import AntaGroupImg from "@/assets/sponsors/ANTA_GROUP.png";
import BamaTeaImg from "@/assets/sponsors/BAMA_TEA.png";
import BMWImg from "@/assets/sponsors/BMW.png";
import BeneunderImg from "@/assets/sponsors/Beneunder.png";
import IgarashiImg from "@/assets/sponsors/IGARASHI.png";
import JomooImg from "@/assets/sponsors/JOMOO.png";
import NEPImg from "@/assets/sponsors/NEP.png";
import StarbucksImg from "@/assets/sponsors/STARBUCKS.png";
import STIHLImg from "@/assets/sponsors/STIHL.png";
import SchneiderImg from "@/assets/sponsors/Schneider.png";
import SinexcelImg from "@/assets/sponsors/Sinexcel.png";
import WalmartImg from "@/assets/sponsors/Walmart.png";

interface sponsorsProps {
  image: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    image: BamaTeaImg,
    name: "八马茶业",
  },
  {
    image: IgarashiImg,
    name: "IGARASHI",
  },
  {
    image: JomooImg,
    name: "九牧",
  },
  {
    image: NEPImg,
    name: "大洋",
  },
  {
    image: STIHLImg,
    name: "斯蒂尔",
  },
  {
    image: AntaGroupImg,
    name: "安踏集团",
  },
  {
    image: BeneunderImg,
    name: "蕉下",
  },
  {
    image: SinexcelImg,
    name: "盛弘股份",
  },
  {
    image: StarbucksImg,
    name: "星巴克",
  },
  {
    image: WalmartImg,
    name: "沃尔玛",
  },
  {
    image: BMWImg,
    name: "宝马",
  },
  {
    image: SchneiderImg,
    name: "施耐德电气",
  },
];
</script>

<template>
  <section
    id="sponsors"
    class="max-w-[75%] mx-auto pb-24 sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-16">
      客户
    </h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[4rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[4rem]"
      >
        <div
          v-for="{ image, name } in sponsors"
          :key="name"
          class="w-40"
        >
          <div class="flex items-center justify-center">
            <img
              :src="image"
              :alt="name"
              class="h-16 md:h-24 lg:h-36 object-contain transition-all duration-300"
            />
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>
