module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlue: 'hsl(207, 26%, 17%)',
        veryDarkBlueLM: 'hsl(200, 15%, 8%)',
        darkGrey: 'hsl(0,0%, 52%)',
        veryLightGray: 'hsl(0,0%, 98%)',
        whiteEl: 'hsl(0,0%, 100%)',
      },
      fontFamily: {
        fontNunito: ['nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
