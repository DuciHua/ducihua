module.exports = {
  content: [
    './index.html',
    './apple.html',
    './mbages.html',
    './taiganow.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
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

      keyframes: {
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'float-y': 'float-y 1.5s ease-in-out infinite',
      },
    },
    screens: {
      sm: '550px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('flowbite/plugin')],
}
