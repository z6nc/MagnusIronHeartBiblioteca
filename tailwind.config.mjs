/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        surface: "#111111",
        raised: "#191919",
        line: "#303030",
        ink: "#f3f1eb",
        muted: "#b7bfce",
        accent: { DEFAULT: "#ffcc00", dim: "#e5ad00" },
        cyan: { neon: "#75c7cf" },
      },
    },
  },

  plugins: [],
};
