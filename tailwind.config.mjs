export default {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Raleway", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        onyx: "#151515",
        charcoal: "#444444",
        sand: "#F9F8F6",
        gold: {
          DEFAULT: "#FFC451",
          dark: "#e6ad3a",
        },
        border: {
          soft: "#d3c4af",
        },
        cream: {
          50: "#F9F8F6",
          100: "#f3f0eb",
          200: "#e8e2d8",
        },
        warm: {
          500: "#b89068",
          700: "#765840",
          900: "#151515",
        },
        whatsapp: "#25D366",
      },
      letterSpacing: {
        editorial: "0.2em",
      },
      boxShadow: {
        soft: "0 12px 40px rgb(21 21 21 / 0.06)",
        card: "0 1px 3px rgb(21 21 21 / 0.04)",
      },
    },
  },
};
