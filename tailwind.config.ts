import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        primary: '#134E70',
        secondary: '#858585',
        graytext: "#757575",
        border: '#C0C0C0',
        button: '#012030',
        "button-border": '#E6E6E6',
        "footer-border": '#EEEEEE'
      }
    },
  },
  plugins: []
};
export default config;
