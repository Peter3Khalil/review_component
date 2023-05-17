/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        md: "8px 59px 159px 12px rgb(0 0 0 / 8%), 0 2px 4px -2px rgb(0 0 0 / 0%)",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
      },
      colors: {
        customColor: "hsl(241, 81%, 54%)",
        lightBlue: "hsl(252, 100%, 67%)",
        circleColor1: "hsla(256, 72%, 46%, 1)",
        circleColor2: "hsla(241, 72%, 46%, 0)",
        neutral:{
          paleBlue:"hsl(221, 100%, 96%)",
          lightLavender:"hsl(241, 100%, 89%)",
          darkGrayBlue:"hsl(224, 30%, 27%)"
        },
        reactionBox:"hsla(0, 100%, 67%, 0.09)",
        lightRed:"hsla(0, 100%, 67%,0.8)",
        lightOrange:"hsla(39, 100%, 56%,0.9)",
        memoryBox:"hsla(39, 100%, 56%,0.09)",
        lightGreen:"hsla(166, 100%, 37%,0.9)",
        verbalBox:"hsla(166, 100%, 37%,0.08)",
        lightBlue2:"hsla(234, 85%, 45%,0.9)",
        visualBox:"hsla(234, 85%, 45%,0.08)",

      },
    },
  },
  plugins: [],
};
