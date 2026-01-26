import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
const defaultTheme = require("tailwindcss/defaultTheme");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
});
