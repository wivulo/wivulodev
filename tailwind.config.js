/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        bubble: 'bubble 5s linear .1s forwards infinite'
      },

      keyframes: {
        bubble: {
          '0%': { borderRadius: '80% 50% 60% 50%'},
          '25%': {borderRadius: '50% 80% 50% 60%'},
          '50%': {borderRadius: '60% 50% 80% 50%'},
          '75%': {borderRadius: '50% 60% 50% 80%'},
          '100%': {borderRadius: '80% 50% 60% 50%'}
        }
      }
    },
  },
  plugins: [],
}
