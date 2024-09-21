/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
    // ...
  ],
  theme: {
    extend: {
      colors: {
        primary: "#67217a",
        secondary: "#ffffff",
        textSecondary: "#727272",
      },
    },
  },
  plugins: [],
};
