/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        peach: "#CC8C8C",
        lightPeach: "#EBDBDB",
        black: "#2A2826",
        gray: "#D9D9D9",
        burntOrange: "#CC5500",
        white: "#ffffff",
        brown: "855454",
       }, 
       fontFamily: {
        // Outfit: ['Outfit', 'sans-serif'],
        // YoungSerif: ['Young Serif', 'serif']
      },  
    },
  },
  plugins: [],
}

