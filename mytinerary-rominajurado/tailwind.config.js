/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'amatic-sc': ['Amatic SC', 'cursive'],
        'cormorant': ['Cormorant', 'serif'],
        'dawning-of-a-new-day': ['Dawning of a New Day', 'cursive'],
        'flamenco': ['Flamenco', 'cursive'],
        'gaegu': ['Gaegu', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'neucha': ['Neucha', 'cursive'],
        'nunito': ['Nunito', 'sans-serif'],
        'playfair-display-sc': ['Playfair Display SC', 'serif'],
        'pompiere': ['Pompiere', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'press-start-2p': ['Press Start 2P', 'cursive'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'ruluko': ['Ruluko', 'sans-serif'],
        'signika': ['Signika', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

