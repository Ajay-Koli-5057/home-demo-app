module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_00: "#ffffff00",
          A700_cc: "#ffffffcc",
          A700_97: "#ffffff97",
          A700_e6: "#ffffffe6",
          A700_90: "#ffffff90",
          A700_19: "#ffffff19",
          A700_28: "#ffffff28",
          A700: "#ffffff",
          A700_09: "#ffffff09",
        },
        gray: { "800_19": "#4e4e4e19" },
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient:
          "linear-gradient(135deg ,#4e4e4e19,#4e4e4e19,#ffffff19,#4e4e4e19)",
        gradient1: "linear-gradient(112deg ,#ffffff28,#ffffff28)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
