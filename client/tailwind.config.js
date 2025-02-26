module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "14px": "14px",
      },
      fontWeight: {
        thin: "100",
        extraLight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
        black: "900",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Libre Franklin", "sans-serif"],
      },
      colors: {
        gray: "#707070",
        lightgray: "#BDBDBD",
        cream: "#EFDD8D",
      },
      animation: {
        spin: "spin 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};
