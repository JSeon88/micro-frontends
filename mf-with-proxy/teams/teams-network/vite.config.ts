import { defineConfig } from "vite";

export default defineConfig({
  base: "/network/",
  server: {
    host: true,
    port: 3003,
  },
});
