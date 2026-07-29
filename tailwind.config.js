export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#030014',
        surface: 'rgba(10, 15, 40, 0.72)',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(51, 102, 255, 0.18)',
        soft: '0 18px 50px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        shimmer: 'shimmer 1.6s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        orbit: 'orbit 10s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.65' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
