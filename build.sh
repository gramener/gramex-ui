#!/usr/bin/env bash

mkdir -p dist

npx esbuild dark-theme.ts --format=esm --bundle --minify --allow-overwrite --sourcemap --outfile=dist/dark-theme.js
npx esbuild format.ts --format=esm --bundle --minify --allow-overwrite --sourcemap --outfile=dist/format.js
