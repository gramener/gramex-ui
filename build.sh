#!/usr/bin/env bash

mkdir -p dist

npx -y esbuild dark-theme.ts --format=esm --bundle --minify --allow-overwrite --sourcemap --outfile=dist/dark-theme.js
npx -y esbuild format.ts --format=esm --bundle --minify --allow-overwrite --sourcemap --outfile=dist/format.js
