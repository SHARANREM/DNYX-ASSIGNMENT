/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Assignment-1/build/Assesment-6/index2.html"],
  //content: ["./Assignment-1/build/Assesment-5/index2.html"],
  //content: ["./Assignment-1/build/Assesment-4/index2.html"],
  theme: {
    extend: {
      fontFamily:{
        "Poppin":"Poppins"
      },
      boxShadow:{
        "LighShadow":"0px 0px 20px rgba(0, 0, 0, 0.2)",
        "CardShadow":"2px 2px 20px rgba(0, 0, 0, 0.2)"
      }
    },
  },
  plugins: [],
}

