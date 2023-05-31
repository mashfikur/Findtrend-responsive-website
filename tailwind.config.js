/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        btnColor:"#A8FF35",
      }
    },
  },
  plugins: [],
  transform:['hover','focus','group-hover'],
}

