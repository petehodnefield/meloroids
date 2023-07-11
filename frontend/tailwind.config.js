/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      0.625: ["0.625rem"],
      0.75: ["0.75rem"],
      0.75: ["0.75rem"],
      0.875: ["0.875rem"],
      1: ["1rem"],
      1.125: ["1.125rem"],
      1.25: ["1.25rem"],
      1.5: ["1.5rem"],
      2: ["2rem"],
      2.5: ["2.5rem"],
      3: "3rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        primary: "#b525f8",
        secondary: "#C9ABD9",
        tertiary: "#EFECF0",
        quad: "#423D47",
        white: "#ffffff",
        light: "#E1E1E1",
        medium: "#999999",
        dark: "#2c2c2c",
        black: "#111111",
        light: "#e1e1e1",
        blue: "#3B7EE2",
        green: "#37E1EC",
        red: "#EE1515",
        deny: "#EE1515",
        denyLight: "rgba(238, 21, 21, 0.1)",
        confirm: "#177055",
        confirmLight: "#7CD7BC",
      },
      maxHeight: {
        14: "14rem",
        300: "300px",
      },
      height: {
        325: "325px",
      },
      width: {
        70: "70rem",
      },
      maxWidth: {
        xxxs: ["12rem"],
        xxs: ["16rem"],
        660: "660px",
        16: "16rem",
        26: "26rem",
        48: "48rem",
        58: "58rem",
        70: "70rem",
        112: "28rem",
      },
      spacing: {
        88: "22rem",
        112: "28rem",
      },
      boxShadow: {
        "3xl": "0 8px 16px 0 rgba(44, 44, 44, 0.25)",
      },
      borderRadius: {
        "4xl": "32px",
      },
      borderWidth: {
        1: "1px",
      },
      flex: {
        1.33: "1.3 1.3 0",
      },
    },
  },
  plugins: [],
};
