module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-20deg)" },
          "50%": { transform: "rotate(20deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 500ms ease-in-out"
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('@tailwindcss/line-clamp')
  ],
}
