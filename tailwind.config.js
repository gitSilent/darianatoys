/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      OpenSansRegular: ['Prompt', 'sans-serif']
    },
    screens: {
      xs: "300px",
      sm: '480px',
      sl: '600px',
      mx: '660px',
      md: '768px',
      lg: '976px',
      lx: '1040px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}

