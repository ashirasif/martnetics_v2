import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#e4a78b',
      },
      fontFamily: {
        'robotomono': ['Roboto Mono', 'monospace'],
      },
      animation: {
        "scroll-down": "scroll-down 1s linear infinite",
      },
      keyframes: {
        "scroll-down" : {
          '0% 100%': { "transform": "translateY(1rem)"},
          '50%': { "transform": "translateY(-1rem)"},
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
