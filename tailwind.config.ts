import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

import * as defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/spinner.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        backgroundSecondary: "var(--background-secondary)",
        foreground: "var(--foreground)",
        foregroundSecondary: "var(--foreground-secondary)",
        foregroundTertiary: "var(--foreground-tertiary)",
        primary: "var(--primary-color)",
        primaryLight: "var(--primary-light-color)",
        border: "var(--border-color)",
        danger: "var(--danger-color)",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        opensans: "var(--font-opensans)",
      },
      backgroundImage: {
        "hero-image": "url('/banner2.webp')",
        "linear-gradient":
          "linear-gradient(90deg, rgba(255,255,255,1) 5%, rgba(255,220,178,0.4654236694677871) 74%, rgba(251,155,36,0.4822303921568627) 100%);",
        "hero-bg": "url('/grass.jpg')",
      },
      gridTemplateColumns: {
        "auto-fill-250": "repeat(auto-fill, minmax(250px, 1fr))",
        "auto-fit-250": "repeat(auto-fit, minmax(250px, 1fr))",
        "auto-fill-450": "repeat(auto-fill, minmax(450px, 1fr))",
      },
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
  },
  plugins: [heroui()],
} satisfies Config;
