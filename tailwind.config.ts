import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        slate: {
          100: "#e6f1ff",
          200: "#ccd6f6",
          300: "#a8b2d1",
          400: "#8892b0",
          500: "#7b86a2",
          600: "#5f6c8f",
          700: "#495670",
          800: "#233554",
          900: "#112240"
        },
        green: "#64ffda"
      },
      fontFamily: {
        sans: ["ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Inter","Cantarell","Noto Sans","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"]
      },
      boxShadow: {
        soft: "0 10px 30px -15px rgba(2,12,27,0.7)"
      }
    },
  },
  plugins: [],
};
export default config;
