/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#3e3e3e",
          "200": "#123557",
        },
        gray: {
          "100": "#222",
          "200": "rgba(255, 255, 255, 0.2)",
        },
        black: "#000",
        azure: "#e8fbff",
        coral: "#eb7150",
        tomato: "#d15736",
        darkslateblue: "#072f57",
        chocolate: "#e7760d",
        darkgreen: "#00732f",
        lightblue: '#E8FBFF',
        mediumseagreen: {
          "100": "#269954",
          "200": "rgba(38, 153, 84, 0.09)",
        },
        lightgray: "#d1d5db",
        slategray: "#6b7280",
        dimgray: "#6d6e71",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        arial: "Arial",
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
        "12xs": "1px",
      },
    },
    fontSize: {
      sm: "14px",
      "base-1": "15.1px",
      base: "16px",
      xl: "20px",
      "mid-2": "17.2px",
      "18xl-3": "37.3px",
      "3xl": "22px",
      "11xl": "30px",
      lg: "18px",
      "lg-8": "18.8px",
      "7xl": "26px",
      "2xl": "21px",
      "36xl": "55px",
      "14xl": "33px",
      "25xl": "44px",
      mini: "15px",
      "mini-3": "14.3px",
      "base-3": "15.3px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
