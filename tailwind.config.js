module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        app: '85vh',
      },
      backgroundImage: {
        day: "url('./images/day.jpg')",
        night: "url('./images/night.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
