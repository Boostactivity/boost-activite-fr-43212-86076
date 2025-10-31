import type { Config } from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 50:"#eef7ff", 100:"#d9ecff", 600:"#2563eb", 700:"#1d4ed8" },
      },
    },
  },
  plugins: [],
} satisfies Config;