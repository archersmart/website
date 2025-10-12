<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import GithubIcon from "@/icons/GithubIcon.vue";
import XIcon from "@/icons/XIcon.vue";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
    firstName: "张",
    lastName: "博士",
    positions: ["创始人 & CEO", "前阿里巴巴技术专家"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
      },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
    firstName: "李",
    lastName: "博士",
    positions: ["联合创始人 & CTO", "AI算法专家"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Github",
        url: "https://github.com/",
      },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
    firstName: "王",
    lastName: "总监",
    positions: ["产品总监", "企业服务专家"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
      },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
    firstName: "刘",
    lastName: "架构师",
    positions: ["技术架构师", "系统设计专家"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Github",
        url: "https://github.com/",
      },
    ],
  },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return LinkedInIcon;

    case "Github":
      return GithubIcon;

    case "X":
      return XIcon;
  }
};
</script>

<template>
  <section
    id="team"
    class="container lg:w-[75%] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">团队</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        核心团队
      </h2>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <Card
        v-for="{
          imageUrl,
          firstName,
          lastName,
          positions,
          socialNetworks,
        } in teamList"
        :key="imageUrl"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
      >
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              :src="imageUrl"
              alt=""
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
            />
          </div>
          <CardTitle class="py-6 pb-4 px-6"
            >{{ firstName }}
            <span class="text-primary">{{ lastName }}</span>
          </CardTitle>
        </CardHeader>

        <CardContent
          v-for="(position, index) in positions"
          :key="index"
          :class="{
            'pb-0 text-muted-foreground ': true,
            'pb-4': index === positions.length - 1,
          }"
        >
          {{ position }}<span v-if="index < positions.length - 1">,</span>
        </CardContent>

        <CardFooter class="space-x-4 mt-auto">
          <a
            v-for="{ name, url } in socialNetworks"
            key="name"
            :href="url"
            target="_blank"
            class="hover:opacity-80 transition-all"
            :aria-label="`Visit our ${name} page`"
          >
            <component :is="socialIcon(name)" />
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
