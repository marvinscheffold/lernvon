import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-50": "hsl(220, 12%, 95%)",
        "neutral-100": "hsl(220, 12%, 90%)",
        "neutral-200": "hsl(210, 11%, 80%)",
        "neutral-300": "hsl(212, 10%, 70%)",
        "neutral-400": "hsl(210, 10%, 60%)",
        "neutral-500": "hsl(210, 10%, 50%)",
        "neutral-600": "hsl(210, 10%, 40%)",
        "neutral-700": "hsl(210, 10%, 30%)",
        "neutral-800": "hsl(208, 10%, 20%)",
        "neutral-900": "hsl(210, 11%, 10%)",
      },
      fontFamily: {
        sans: [
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
