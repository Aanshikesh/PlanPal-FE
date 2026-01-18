/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        black:{
          500:"#262626",
          400:"#20212b"
        },
        yellow:{
          500:"#fcf86f"
        },
        blue:{
          500:"#023bc9",
        },
        green:{
          500:"#acfc0a"
        },
      },
      fontFamily:{
        poppins:['Poppins','sans-serif'],
        quintessential:["Quintessential"]
      }
    },
  },
  plugins: [],
}

