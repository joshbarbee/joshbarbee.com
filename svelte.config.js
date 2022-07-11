import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

export default {
  onwarn: (warning, handler) => {
    const { code, frame } = warning;
    if (code === "css-unused-selector") return;

    handler(warning);
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;'
      }
    })
  ],
  kit: {
    adapter: adapter(),

    methodOverride: {
      allowed: ["PUT", "DELETE"]
    },

    browser: {
      hydrate: true,
      router: true
    },

    files: {
      assets: "static",
      routes: "src/routes",
      template: "src/app.html"
    },

    outDir: ".svelte-kit",

    package: {
      dir: "package",
      emitTypes: true,
      // excludes all .d.ts and files starting with _ as the name
      exports: filepath => !/^_|\/_|\.d\.ts$/.test(filepath),
      files: () => true
    },

    paths: {
      assets: "",
      base: ""
    },

    prerender: {
      concurrency: 1,
      crawl: true,
      default: false,
      enabled: true,
      entries: ["*"],
      onError: "fail"
    },

    routes: filepath => !/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(filepath),
    trailingSlash: "never",

    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "src/variables.scss" as *;'
          }
        }
      }
    }
  }
};
