module.exports = {
  content: ['./index.html', './src/pages/apple.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },

      letterSpacing: {
        superTight: '-2rem',
      },

      colors: {
        customBlack: {},
      },

      backgroundImage: {
        
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
