import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig(() => {
  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    base: "/ets-clement-duvigeant",
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
