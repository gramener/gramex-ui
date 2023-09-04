# @gramex/ui

Commonly used UI components and interactions.

# Installation

Install via `npm`:

```bash
npm install @gramex/ui
```

# Formats

JavaScript supports the [`Intl`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
object to format numbers, dates, lists, etc. based on locale.

These utility functions provide commonly used number, percentage and date formats.

Import the functions as:

```js
import { num, num0, num2, pc, pc0, pc1 } from "https://cdn.jsdelivr.net/npm/@gramex/ui/dist/format.js";
```

|             | 0.0038 | 0.038 |  0.38 |   3.81 |    381 |    38,104 | 3,810,369.24 |
| ----------: | -----: | ----: | ----: | -----: | -----: | --------: | -----------: |
|  `num(val)` | 0.0038 | 0.038 |  0.38 |    3.8 |    381 |       38K |         3.8M |
| `num0(val)` |      0 |     0 |     0 |      4 |    381 |    38,104 |    3,810,369 |
| `num2(val)` |      0 |  0.04 |  0.38 |   3.81 | 381.04 | 38,103.69 | 3,810,369.24 |
|   `pc(val)` |  0.38% |  3.8% |   38% |   381% |
|  `pc0(val)` |     0% |    4% |   38% |   381% |
|  `pc1(val)` |   0.4% |  3.8% | 38.1% | 381.0% |

- `num(value)`: **Use by default**. Shows 2-3 significant digits and shortens to "K", "M", etc.
- `num0(value)`: Integers. Use when values are typically between 1 - 1,000,000
- `num2(value)`: 2 decimal numbers. Use when values are typically between 1 - 1,000
- `pc(value)`: **Use by default**. Shows 2-3 digits
- `pc0(value)`: 0 decimal percent. Use if % is between 10-100% and never below 1%
- `pc1(value)`: 1 decimal percent. Use if % is between 1-10% and never below 0.1%

See the [source](format.js) to create your own formats. Refer to
[`Intl.NumberFormat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat).

The following date formats are supported:

```js
import { dmy, mdy, dm, md, wdmy } from "https://cdn.jsdelivr.net/npm/@gramex/ui/dist/format.js";
```

|    Function |      23 Jan 2023 |
| ----------: | ---------------: |
|  `dmy(val)` |      23 Jan 2023 |
|  `mdy(val)` |     Jan 23, 2023 |
|   `dm(val)` |           23 Jan |
|   `md(val)` |           Jan 23 |
| `wdmy(val)` | Mon, 23 Jan 2023 |

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
