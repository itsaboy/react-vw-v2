/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      medieval: ["Medieval"]
    },
    extend: {
      backgroundImage: {
        'custom-svg': "url('./src/assets/space.svg')",
      },
    },
  },
  plugins: [],
};
