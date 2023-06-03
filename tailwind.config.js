module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          100: "#f0f1f2",
          200: "#ececec",
        },
        black: "#000",
        white: "#fff",
        goldenrod: "#f4d153",
        darkolivegreen: {
          100: "#678362",
          200: "#31673d",
        },
        darkseagreen: "#84a27e",
        dimgray: "#556857",
        gray: {
          100: "rgba(255, 255, 255, 0.7)",
          200: "rgba(255, 255, 255, 0.8)",
        },
      },
      fontFamily: {
        "arial-rounded-mt-bold": "'Arial Rounded MT Bold'",
        "balsamiq-sans": "'Balsamiq Sans'",
      },
      borderRadius: {
        "10xs": "3px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xs: "12px",
      xl: "20px",
    },
  },
  corePlugins: {
    preflight: false,
  },
  mode: 'jit',
  darkMode: false,
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};