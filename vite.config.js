import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  console.log(env.VITE_PORT_NUM);
  return {
    plugins: [react()],
    base: "/vite-test/",
    server: { port: env.VITE_PORT_NUM, open: "index.html" },
    preview: {
      port: 3000,
    },
  };
});
