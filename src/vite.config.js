// https://miyauchi.dev/posts/vite-vue3-typescript/

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "@rollup/plugin-eslint";


//import path, { resolve } from "path";
import { resolve } from "path";



// https://vitejs.dev/config/
export default defineConfig({
  publicDir: resolve(__dirname, "..", "public"),
  plugins: [

    //@rollup/plugin-eslint
    eslint({
      include: "**/*.(js|vue)",
      enforce: "pre"
    }),

    vue()
  ],
  root: resolve(__dirname),
  build: {
    // @custom put into main dist folder
    outDir: resolve(__dirname, "..", "dist"),
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]"
      },
      input: {
        //admin: resolve(__dirname, "admin/index.html"),
        example: resolve(__dirname, "example/index.html"),
        index: resolve(__dirname, "index.html")
      }
    }
  }
  /*,
  server: {
    proxy: {
      "/admin": "http://localhost:3000/admin.html",
      "/index": "http://localhost:3000/index.html"
    }
  }
  //*/
});
