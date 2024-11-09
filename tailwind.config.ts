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
        "neutral-25": "hsl(207, 5%, 97%)",
        "neutral-50": "hsl(207, 5%, 95%)",
        "neutral-100": "hsl(207, 5%, 90%)",
        "neutral-200": "hsl(207, 5%, 80%)",
        "neutral-300": "hsl(207, 5%, 70%)",
        "neutral-400": "hsl(207, 5%, 60%)",
        "neutral-500": "hsl(207, 5%, 50%)",
        "neutral-600": "hsl(207, 5%, 40%)",
        "neutral-700": "hsl(207, 5%, 30%)",
        "neutral-800": "hsl(207, 5%, 20%)",
        "neutral-900": "hsl(207, 5%, 10%)",
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
