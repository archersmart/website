const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'royal-blue': {
          '50': '#eef0fd',
          '100': '#d3d9fb',
          '200': '#a8b7f7',
          '300': '#8099f4',
          '400': '#537df0',
          '500': '#2d64da',
          '600': '#2656bd',
          '700': '#1c4397',
          '800': '#112f6e',
          '900': '#071a43',
          '950': '#030f2d',
        },
        'sky-blue': {
          '50': '#eef0fd',
          '100': '#d3d9fb',
          '200': '#a8b7f7',
          '300': '#8099f4',
          '400': '#537df0',
          '500': '#9cbbcf',
          '600': '#2656bd',
          '700': '#1c4397',
          '800': '#112f6e',
          '900': '#071a43',
          '950': '#00295B',
        },
        // 品牌渐变色
        'brand-from': 'hsl(var(--brand-gradient-from))',
        'brand-via': 'hsl(var(--brand-gradient-via))',
        'brand-to': 'hsl(var(--brand-gradient-to))',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        // 品牌渐变背景
        'brand-gradient': 'linear-gradient(135deg, hsl(var(--brand-gradient-from)), hsl(var(--brand-gradient-via)), hsl(var(--brand-gradient-to)))',
        'brand-gradient-hover': 'linear-gradient(135deg, hsl(var(--brand-gradient-from) / 0.9), hsl(var(--brand-gradient-via) / 0.9), hsl(var(--brand-gradient-to) / 0.9))',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0px rgba(45, 100, 218, 0.0)" },
          "50%": { boxShadow: "0 0 12px rgba(45, 100, 218, 0.45)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { boxShadow: "0 0 0 rgba(0,0,0,0)" },
          "50%": { boxShadow: "0 10px 24px rgba(45, 100, 218, 0.12)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
        "gradient-x": "gradient-x 3s ease-in-out infinite",
        "gradient-flow": "gradient-flow 8s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        glow: "glow 2.4s ease-in-out infinite",
        "fade-up": "fade-up 600ms ease-out both",
        "pulse-soft": "pulse-soft 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};
