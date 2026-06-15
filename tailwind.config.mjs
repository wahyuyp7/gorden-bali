export default {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        serif: ["Georgia", "ui-serif", "serif"],
      },
      colors: {
        cream: {
          50: "#fcfaf6",
          100: "#f7f1e7",
          200: "#eadfce",
        },
        warm: {
          500: "#b89068",
          700: "#765840",
          900: "#2f2924",
        },
        whatsapp: "#22c55e",
      },
      boxShadow: {
        soft: "0 18px 45px rgb(47 41 36 / 0.10)",
      },
    },
  },
};
