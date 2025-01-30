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
        primary: {
          100: "#1677FF",
        },
        secondary: {
          100: "var(--foreground)",
          80: "var(--foreground-80)",
          60: "#878C91",
          40: "#9FA4AB",
          20: "#C9CDD1",
          10: "#E1E3E6",
        },
        neutral: {
          100: "#ffffff",
          80: "#F5F6F7",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
