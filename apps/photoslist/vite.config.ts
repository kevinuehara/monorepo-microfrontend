import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "photo_list",
      filename: "remoteEntry.js",
      exposes: {
        "./PhotoList": "./src/components/PhotoList",
      },
      shared: ["react", "react-dom"],
    }),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    include: ["linked-dep"],
  },
  build: {
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/],
    },
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
