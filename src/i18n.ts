import { createI18n } from 'vue-i18n'

const STORAGE_KEY = 'locale'
const defaultLocale = (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)) || 'zh'

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    zh: {
      nav: {
        products: '产品',
        testimonials: '客户评价',
        team: '团队',
        contact: '联系我们',
        faq: '常见问题',
        theme: '主题',
        github: '查看 GitHub',
        language: '语言',
        zh: '中文',
        en: '英文',
      },
      hero: {
        subtitle: '让企业知识真正流动, 释放数据的生产力',
        description:
          '释放数据的生产力，一个语义驱动、权限安全的企业知识图谱平台，让企业拥有自己的AI搜索与智能助手。',
      },
      product: {
        title: 'ArcherSmart 产品矩阵',
        intro: '预留：这里展示产品整体描述，概述平台能力与定位。',
        learnMore: '了解更多',
        docs: '文档',
        features: '相关功能',
        description: '产品描述',
      },
    },
    en: {
      nav: {
        products: 'Products',
        testimonials: 'Testimonials',
        team: 'Team',
        contact: 'Contact',
        faq: 'FAQ',
        theme: 'Theme',
        github: 'View on GitHub',
        language: 'Language',
        zh: 'Chinese',
        en: 'English',
      },
      hero: {
        subtitle: 'Let enterprise knowledge truly flow',
        description:
          "Unlock data productivity with a semantics-driven, permission-safe enterprise knowledge graph platform.",
      },
      product: {
        title: 'ArcherSmart Product Matrix',
        intro: 'Placeholder: overall product description and positioning.',
        learnMore: 'Learn More',
        docs: 'Docs',
        features: 'Features',
        description: 'Description',
      },
    },
  },
})

export function setLocale(locale: 'zh' | 'en') {
  i18n.global.locale.value = locale
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, locale)
  }
}