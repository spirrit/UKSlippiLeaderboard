/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Quicksand',
        'sans-serif',
      ],
    },
    extend: {},
  },
  safelist: [
    'bg-gray-600'
  ],
  plugins: [],
};
