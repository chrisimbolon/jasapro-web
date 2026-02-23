import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px", // tighter than 1400 = more European feel
      },
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#F97316",
          emerald: "#10B981",
        },
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
} satisfies Config;