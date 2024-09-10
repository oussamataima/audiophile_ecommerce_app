import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1190px",
      },
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",

      }
    },
    extend: {
      colors: {
        'primary': "#D87D4A",
        'secondary': "#fbaf85",
      },
    },
  },
  plugins: [],
};
export default config;
