/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%'
      },
      colors: {
        'whitesmoke': "#F5F5F5",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        1: ".3px",
        ".5": ".5px",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      screens: {
        mwxs: { max: "475px" },
        mws: { max: "576px"},
        xs: "475px",
        // => @medai (mid-width: 475px) { ... }
        sm: "576px",

        msm: "840px",
        // => @media (min-width: 576px) { ... }
        md: "960px",
        // => @media (min-width: 960px) { ... }
        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
        mobile: "300px",
        tablet: "640px",
        laptop: "1040px",
        laptopLG: "1200",
        desktop: "1240px",
        desktopLG: "1440px"
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation : {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
};
