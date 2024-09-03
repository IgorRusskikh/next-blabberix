import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        dark: "#1E1E1E",
        primary: "#BC58E4",
        white: "#FFFFFF",
        "light-purple": "#DAB7E6",
        background: "#FDFAFF",
      },
    },
  },
  plugins: [],
};
export default config;
