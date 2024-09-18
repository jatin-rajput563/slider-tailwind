/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontSize: {
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        twoXl: "20px",
        threeXl: "56px",
      },
      fontWeight: {
        sm: '400',
        md: '500',
        lg: '600',
      },
      colors: {
        lightBlack: '#141414',

      }
    },
  },
  plugins: [],
}

