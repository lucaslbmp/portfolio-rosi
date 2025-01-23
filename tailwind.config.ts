import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        primaryLight:
          "color-mix(in srgb, var(--primary-color), transparent 20%)",
        border: "var(--border-color)",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        opensans: "var(--font-opensans)",
      },
      backgroundImage: {
        "hero-image": "url('/banner2.png')",
        "linear-gradient":
          "linear-gradient(90deg, rgba(255,255,255,1) 5%, rgba(255,220,178,0.4654236694677871) 74%, rgba(251,155,36,0.4822303921568627) 100%);",
        "hero-bg": "url('/grass.jpg')",
      },
      gridTemplateColumns: {
        "auto-fill-250": "repeat(auto-fill, minmax(250px, 1fr))",
        "auto-fit-250": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
