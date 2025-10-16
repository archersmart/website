<script lang="ts" setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "light";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ChevronsDown, Menu, Languages } from "lucide-vue-next";
import GithubIcon from "@/icons/GithubIcon.vue";
// import ToggleTheme from "./ToggleTheme.vue";
import { setLocale } from "@/i18n";

type NavLinkItem = {
  type: 'link'
  href: string
  label: string
  key?: string
}

type NavMenuChild = {
  key: string
  title: string
  description: string
}

type NavMenuItem = {
  type: 'menu'
  label: string
  children: NavMenuChild[],
  key?: string
  href?: string
}

type NavItem = NavLinkItem | NavMenuItem

// 菜单与路由项类型见 NavItem/Link/MenuChild

const { t, locale } = useI18n();
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

const routeList = computed<NavItem[]>(() => [
  {
    type: 'link',
    label: t('nav.home'),
    href: '/',
    key: 'home',
  },
  {
    type: 'menu',
    label: t('nav.products'),
    children: [
      { key: 'aiInfra', title: 'AI Infra(LLMOS)', description: '基于1Block.ai的AI基础设施, 提供一站式AI解决方案.' },
      { key: 'search', title: 'ArcherSmart Search', description: '企业级智能搜索引擎' },
      { key: 'agent', title: 'ArcherSmart Agent(APS)', description: 'AI驱动核心资源决策, 优化生产线调度和库存' },
    ],
  },
  {
    type: 'link',
    label: t('nav.case'),
    href: '/case',
    key: 'case',
  },
]);

// 产品菜单项集成到 routeList 配置中

const isOpen = ref<boolean>(false);

const toggleLang = () => {
  setLocale(locale.value === "zh" ? "en" : "zh");
};
const langCode = computed(() => (locale.value === "zh" ? "ZH" : "EN"));

const onClickProduct = (key: string) => {
  if (key === 'aiInfra') {
    window.open('https://1block.ai/', '_blank');
  }
};

const onClickNav = (key: string) => {
  if (key === 'case') {
    router.push({ path: '/case' });
  } else if (key === 'home') {
    router.push({ path: '/' });
  }
};
</script>

<template>
  <header
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'top-0 sticky border z-40  p-2 bg-card shadow-md': true,
    }"
  >
    <div class="w-[100%] container flex justify-between items-center mx-auto">
      <a
        href="/"
        class="font-bold text-lg flex items-center"
      >
        <ChevronsDown
          class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white animate-float animate-glow"
        />
        ArcherSmart.AI
      </a>
      <!-- Mobile -->
      <div class="lg:hidden">
        <div class="flex items-center">
          <Sheet v-model:open="isOpen">
            <SheetTrigger as-child>
              <Menu
                @click="isOpen = true"
                class="cursor-pointer"
              />
            </SheetTrigger>

            <SheetContent
              side="left"
              class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
            >
              <div>
                <SheetHeader class="mb-4 ml-4">
                  <SheetTitle class="flex items-center">
                    <a
                      href="/"
                      class="flex items-center"
                    >
                      <ChevronsDown
                        class="bg-gradient-to-tr from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border text-white"
                      />
                      ArcherSmart.AI
                    </a>
                  </SheetTitle>
                </SheetHeader>

                <div class="flex flex-col gap-2">
                  <Button
                    v-for="item in routeList"
                    :key="item.key"
                    as-child
                    :variant="null"
                    class="justify-start text-base"
                    @click="onClickNav(item.key || ''); isOpen = false"
                  >
                    <a
                      v-if="item.key"
                      :href="item.href"
                    >
                      {{ item.label }}
                    </a>
                    <span v-else>
                      {{ item.label }}
                    </span>
                  </Button>
                </div>
              </div>

              <SheetFooter class="flex-col sm:flex-col justify-start items-start">
                <Separator class="mb-2" />

                <!-- <ToggleTheme /> -->

                <Button
                  size="sm"
                  variant="ghost"
                  class="w-full justify-start mt-1"
                  aria-label="Toggle Language"
                  @click="toggleLang"
                >
                  <Languages class="size-5" />
                  <span class="ml-2">{{ langCode }}</span>
                  <span class="sr-only">Toggle language</span>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <!-- Desktop -->
      <NavigationMenu class="hidden lg:block">
        <NavigationMenuList>
          <div 
            v-for="item in routeList" 
            :key="item.label"
          >
            <NavigationMenuItem 
              v-if="item.type === 'menu'"
            >
              <NavigationMenuTrigger class="bg-card text-base">
                {{ item.label }}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div class="grid w-[400px] grid-cols-1 gap-5 p-4">
                  <ul class="flex flex-col gap-2">
                    <li
                      v-for="{ title, description, key } in item.children"
                      :key="key"
                      class="rounded-md p-3 text-sm hover:bg-muted cursor-pointer"
                      @click="onClickProduct(key)"
                    >
                      <p class="mb-1 font-semibold leading-none text-foreground">
                        {{ title }}
                      </p>
                      <p class="line-clamp-2 text-muted-foreground">
                        {{ description }}
                      </p>
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem v-else>
              <NavigationMenuLink asChild>
                <Button
                  as-child
                  :variant="route.path === item.href ? 'default' : null"
                  class="justify-start text-base cursor-pointer"
                  @click="onClickNav(item.key || '')"
                >
                  <a 
                    :href="item.href"
                    v-if="item.href"
                  >
                    {{ item.label }}
                  </a>
                  <span v-else>
                    {{ item.label }}
                  </span>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>

      <div class="hidden lg:flex">
        <!-- <ToggleTheme /> -->

        <Button
          size="sm"
          variant="ghost"
          aria-label="Toggle Language"
          @click="toggleLang"
          class="ml-1"
        >
          <Languages class="size-5" />
          <span class="ml-2">{{ langCode }}</span>
          <span class="sr-only">Toggle language</span>
        </Button>

        <Button
          as-child
          size="sm"
          variant="ghost"
          aria-label="View on GitHub"
        >
          <a
            aria-label="View on GitHub"
            href="https://github.com/archersmart"
            target="_blank"
          >
            <GithubIcon class="size-5" />
          </a>
        </Button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
