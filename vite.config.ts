import { defineConfig, loadEnv } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    server: {
      proxy: {
        "/backend": {
          target: "https://l-araignee.net",
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/backend/, "/ets-clement-duvigeant/backend"),
        },
      },
    },
  };
});
