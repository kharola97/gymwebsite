/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        // sans:["Inter", "sans-serif"]
      },
      colors:{
        primary: "#fe9808",
         dark : "#111111"
      },
      container:{
        center:true,
        padding:{
          default: "1rem",
          sm:"2rem"
          
        }
      }
    },
  },
  plugins: [],
}
