/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sageGreen: '#E0E5C6',
        navyGreen: '#1b2418',
      },
      fontFamily: {
        professional: ['Georgia', 'serif'],
      },
      backgroundImage: {
        sageBackground: "url('//public/images/lighterbg.png')"
      }
    },
  },
  plugins: [],
};
