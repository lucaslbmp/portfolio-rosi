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
        foreground: "var(--foreground)",
        foregroundSecondary: "var(--foreground-secondary)",
        primary: "var(--primary-color)",
        border: "var(--border-color)",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        opensans: "var(--font-opensans)",
      },
      backgroundImage: {
        "hero-image": "url('/banner-transparent.png')",
        "linear-gradient":
          "linear-gradient(90deg, rgba(255,255,255,1) 5%, rgba(255,220,178,0.4654236694677871) 74%, rgba(251,155,36,0.4822303921568627) 100%);",
      },
    },
  },
  plugins: [],
} satisfies Config;
