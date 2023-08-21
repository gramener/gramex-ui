# @gramex/ui

Commonly used UI components and interactions.

# Installation

Install via `npm`:

```bash
npm install @gramex/ui
```

# Dark theme

This code adds a dropdown to switch the
[Bootstrap color mode](https://getbootstrap.com/docs/5.3/customize/color-modes/) between light and dark themes.

[![Dark theme example](...)](docs/dark-theme.html ":include height=160px")

[Source code](docs/dark-theme.html ":include :type=code")

# Setup

To run this project locally:

- Clone this repo, and run `npm install` to install dependencies
- Run `npm run build` to compile
- Open [`index.html`](index.html) using a HTTP server (e.g. `python -m http.server`)

To release, run:

```shell
npm version minor
npm publish
git push --tags
```

# Release notes

- 0.1.0: 5 Aug 2023. [Dark theme](#dark-theme) published

# Authors

Anand S <s.anand@gramener.com>

# License

[AGPL-3.0-only](https://spdx.org/licenses/AGPL-3.0-only.html)
