module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },

      colors: {
        customBlack: {},
      },

      backgroundImage: {},
    },
  },
  plugins: [require('flowbite/plugin')],
}
