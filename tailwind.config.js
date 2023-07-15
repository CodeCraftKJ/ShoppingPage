/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#fefefe",
          "200": "#8e8e8e",
          "300": "#7f7f7f",
          "400": "#7c7c7c",
          "500": "#7a7a7a",
          "600": "#787878",
          "700": "#767676",
          "800": "#242323",
          "900": "#191919",
          "1000": "#191818",
        },
        whitesmoke: {
          "100": "#f4f6f5",
          "200": "#eaeaea",
        },
        gainsboro: "#d9d9d9",
        khaki: "#ebd96b",
        goldenrod: "#e5c643",
        snow: "#fffcf8",
        darkslategray: "#3e3a3a",
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "xs-3": "11.3px",
        "5xs-5": "7.5px",
        mini: "15px",
        "25xl-3": "44.3px",
        "7xs-3": "5.3px",
        "sm-3": "13.3px",
        "mid-7": "17.7px",
        "7xs-8": "5.8px",
      },
    },
    fontSize: {
      lg: "1.13rem",
      "11xl": "1.88rem",
      "5xl-8": "1.55rem",
      xl: "1.25rem",
      mini: "0.94rem",
      "5xl": "1.5rem",
      smi: "0.81rem",
      "22xl-3": "2.58rem",
      "16xl": "2.19rem",
      sm: "0.88rem",
      xs: "0.75rem",
      "17xl": "2.25rem",
      "6xl": "1.56rem",
      "3xl-5": "1.41rem",
      mid: "1.06rem",
      "53xl": "4.5rem",
      "31xl": "3.13rem",
      "21xl": "2.5rem",
      base: "1rem",
      "base-5": "1.03rem",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "768px",
      },
      sm: {
        max: "428px",
      },
      big: {
        raw: "screen and (min-width: 1440px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
