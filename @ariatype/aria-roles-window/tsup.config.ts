import { defineConfig } from "tsup";

const config = defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  minify: true,
  sourcemap: true,
  treeshake: true,
});

export default config;
