/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  
  theme: {
    colors: {
      'yellow':'#F4D04E',
      'gray-950':'#111111',
      'gray-500':'#6B6B6B'
    },
    extend: {
      fontFamily: {
        'figtree': ['Figtree', 'serif']
      }

    },
  },
  plugins: [],
  safelist: [
    'bg-yellow',
    'font-figtree'
  ]

}

