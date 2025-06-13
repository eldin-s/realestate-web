module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      height: ['group-hover'],
      opacity: ['group-hover'],
    },
  },
  plugins: [],
};
