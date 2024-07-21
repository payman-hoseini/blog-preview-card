/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'new-Yellow' : 'hsl(47, 88%, 63%)',
        'new -Grey' : {
          500 : 'hsl(0, 0%, 42%)',
          950 : 'hsl(0, 0%, 7%)'
        }
      },
      fontFamily : {
        figtree : ["Figtree"]
      }
    },
  },
  plugins: [],
}

