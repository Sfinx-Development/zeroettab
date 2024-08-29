import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/psp": {
        target: "https://api.externalintegration.payex.com",
        changeOrigin: true,
        secure: true, // Ställ in detta på false om du använder självsignerade certifikat
      },
    },
  },
});
