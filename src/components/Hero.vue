<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";

// 打字机动画配置与状态
const fullText =
  "释放数据的生产力，一个语义驱动、权限安全的企业知识图谱平台，让企业拥有自己的AI搜索与智能助手。";
const displayedText = ref("");
const isTyping = ref(true);
// 可调动画速度（毫秒/字符），适配不同屏幕也可按需调整
const typingSpeed = 70;
let typingTimer: number | null = null;

onMounted(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    displayedText.value = fullText;
    isTyping.value = false;
    return;
  }

  let idx = 0;
  typingTimer = window.setInterval(() => {
    displayedText.value += fullText.charAt(idx);
    idx += 1;
    if (idx >= fullText.length) {
      isTyping.value = false; // 完整显示后停止动画（隐藏光标）
      if (typingTimer) {
        clearInterval(typingTimer);
        typingTimer = null;
      }
    }
  }, typingSpeed);
});

onUnmounted(() => {
  if (typingTimer) clearInterval(typingTimer);
});
</script>

<template>
  <section>
    <div
      class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto pt-32 pb-8 md:pt-32 pb-8"
    >
      <div class="text-center space-y-8">
        <!-- <Badge
          variant="outline"
          class="text-sm py-2"
        >
          <span class="mr-2 text-primary">
            <Badge>AI</Badge>
          </span>
          <span>  </span>
        </Badge> -->

        <div
          class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
        >
          <h1>
            <span
              class="tracking-widest font-[Open_Sans] text-8xl text-sky-blue-950"
            >
              ArcherSmart.AI
            </span>
            <div class="text-2xl md:text-3xl font-bold mt-2">
              线下零售与智能生产的AI引擎
            </div>
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl">
          <span>{{ displayedText }}</span>
          <span v-if="isTyping" aria-hidden="true" class="typewriter-cursor align-baseline"></span>
        </p>

        <!-- <div class="space-y-4 md:space-y-0 md:space-x-4">
          <Button class="w-5/6 md:w-1/4 font-bold group/arrow">
            Get Started
            <ArrowRight
              class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
            />
          </Button>

          <Button
            as-child
            variant="secondary"
            class="w-5/6 md:w-1/4 font-bold"
          >
            <a
              href="https://github.com/archersmart"
              target="_blank"
              >
                Github respository
            </a>
          </Button>
        </div> -->
      </div>

      <div class="relative group mt-14">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <!-- <img
          class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
          :src="
            mode == 'light' ? 'hero-image-light.jpg' : 'hero-image-dark.jpg'
          "
          alt="dashboard using shadcn-vue"
        /> -->

        <!-- gradient effect img -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}

/* 打字机光标闪烁效果 */
.typewriter-cursor {
  display: inline-block;
  width: 1ch;
  height: 1em;
  margin-left: 2px;
  border-right: 2px solid currentColor;
  vertical-align: baseline;
  animation: cursor-blink 1s steps(1, end) infinite;
}

@keyframes cursor-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
</style>
