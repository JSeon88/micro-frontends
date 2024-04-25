import { defineConfig } from "vite";

export default defineConfig({
  base: "/jobs/",
  server: {
    host: true,
    port: 3002,
  },
});
