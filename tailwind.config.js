import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: { max: "390px" },
      md: { max: "768px" },
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      turquoise: "#75E7A4",
      "gradient-turquoise":
        "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(117,231,164,1) 35%, rgba(117,231,164,1) 100%);",
      "light-gray": "#B2B2B2",
      "light-turquoise": "RGBA(117, 231, 164, 0.5)",
      "dark-green": "#449999",
      yellow: "#FBE7C6",
    },
  },
  boxShadow: {
    "nav-shadow": "0 4px 30px rgba(117, 231, 164, 0.5);",
  },
  extend: {
    backgroundColor: ["hover"],
    backgroundImage: {
      "gradient-turquoise": "var(--gradient-turquoise)",
    },
  },
  fontFamily: {
    poppins: "Poppins",
  },
  daisyui: {
    themes: [],
  },
  plugins: [daisyui],
};


