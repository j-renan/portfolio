module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "sans-serif"]
      }
    }
  },
  daisyui: {
    themes: [
      {
        renan: {
          primary: "#a3e635",
          secondary: "#22d3ee",
          accent: "#f472b6",
          neutral: "#171717",
          "base-100": "#09090b",
          "base-200": "#111113",
          "base-300": "#27272a",
          "base-content": "#f4f4f5"
        }
      }
    ]
  },
  plugins: [require("daisyui")]
};
