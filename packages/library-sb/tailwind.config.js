/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/stories/**/*.tsx'],
  theme: {
    spacing: {
      '1/10': '10%',
      '1/3': '33%',
      '1/2': '50%',
      0: '0px',
      4: '4px',
      10: '10px',
      20: '20px',
    },
    screens: {
      sm: '360px',
      md: '680px',
      lg: '1366px',
    },
    extend: {
      backgroundImage: {
        'header-shape-bg': "url('/public/default-img.jpeg')",
      },
    },
  },
  plugins: [],
};
