/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#fe5b3e",
        primaryLight: "#FF7F5B",
        deepNavy: 'rgb(8, 40, 82)',
      },
      fontFamily:{
        playfair: ['Playfair Display', "sans-serif"],
        heebo: ['Heebo', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}
