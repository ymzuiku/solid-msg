const { build } = require("esbuild");
const { solidPlugin } = require("esbuild-plugin-solid");
// const { exec } = require("child_process");

const pkg = require("./package.json");
const dep = {
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

// npm i -g postcss-cli autoprefixer
// exec("postcss --use autoprefixer -o lib/css.txt lib/**/*.css");

build({
  entryPoints: ["lib/index.tsx"],
  bundle: true,
  format: "cjs",
  external: Object.keys(dep),
  outfile: "cjs/index.js",
  minify: true,
  loader: {
    ".svg": "dataurl",
  },
  logLevel: "info",
  plugins: [solidPlugin({ dev: true })],
}).catch(() => process.exit(1));

build({
  entryPoints: ["lib/index.tsx"],
  bundle: true,
  format: "esm",
  external: Object.keys(dep),
  outfile: "esm/index.js",
  minify: true,
  loader: {
    ".svg": "dataurl",
  },
  logLevel: "info",
  plugins: [solidPlugin({ dev: true })],
}).catch(() => process.exit(1));

// build({
//   entryPoints: ["tw/index.ts"],
//   bundle: true,
//   format: "cjs",
//   external: Object.keys(dep),
//   outfile: "cjs/tw.js",
//   minify: true,
//   loader: {
//     ".svg": "dataurl",
//   },
//   logLevel: "info",
//   plugins: [solidPlugin({ dev: true })],
// }).catch(() => process.exit(1));

// build({
//   entryPoints: ["tw/index.ts"],
//   bundle: true,
//   format: "esm",
//   external: Object.keys(dep),
//   outfile: "esm/tw.js",
//   minify: true,
//   loader: {
//     ".svg": "dataurl",
//   },
//   logLevel: "info",
//   plugins: [solidPlugin({ dev: true })],
// }).catch(() => process.exit(1));
