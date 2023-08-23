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
        main: "#3B434E",
        primary: "#7653FC",
        primaryhover: "#6344df",
        greenlight: "#C8F8E4",
        green: "#1DC37E",
        orange: "#FC836D",
        gold: "#DCB44E",
        red: "#DE0000",
        grey: "#BBBBBB",
        bordergrey: "#EBEBEB",
        bluelight: "#B3C0D9",
        white: "#FFFFFF",
        whiteBg: "#F9F8FF",
        mainBg: "#F5F6F8",
      },
    },
  },
  plugins: [],
};
export default config;
