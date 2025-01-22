const config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: ["dark"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "adsbin-evergreens": "#415B41",
        "adsbin-evergreens-light": "rgba(65, 91, 65, 0.37)",
        "adsbin-scoville-red": "#920909",
        dark: "#000000",
        "adsbin-grey": {
          100: "#ECECEC", // gray-light
          200: "#AEADAD", // border-btn
          300: "#AAAAAA", // AAA
          400: "#A6A6A6", // A6A
          500: "#A0A0A0", // A0A
          600: "#8C8C8C", // 8C8
          700: "#959393", // 959
          800: "#818181", // 818
          1000: "#606060", // 606
          1100: "#EDEDED", // 606
          1200: "#FAFCF9", // 606
        },
        "adsbin-green": {
          100: "#E4FCDC", // approvedBg
          200: "#64A446", // approved
          300: "#345947", // green-text-btn
          400: "#17412D", // green-text
          500: "#4DBB18", // green
        },
        "adsbin-red": {
          100: "#FCDCDC", // unpaidBg
          200: "#FF6E6E", // unpaid
          300: "#6A0303", // unpaid
          400: "#FCDCDC", // unpaid
        },
        "adsbin-neutral": {
          100: "#F0F0F0", // runningBg
          200: "#C9C9C9", // running
          300: "#1D1B20", // running
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
