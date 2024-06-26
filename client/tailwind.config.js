/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      medieval: ["Medieval"],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
