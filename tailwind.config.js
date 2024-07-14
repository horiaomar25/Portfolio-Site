import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    colors: {
      turquoise: "#75E7A4",
      "gradient-turquoise":
        "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(117,231,164,1) 35%, rgba(117,231,164,1) 100%);",
      "light-gray": "#B8B8B8",
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
    rethinksans: "Rethink Sans"
  },
  daisyui: {
    themes: [],
  },
  plugins: [daisyui],
};


