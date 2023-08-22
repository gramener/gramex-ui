declare namespace Intl {
  class ListFormat {
    constructor(locales?: string | string[], options?: Intl.ListFormatOptions);
    public format: (items: string[]) => string;
  }
  class ListFormatOptions {
    public localeMatcher?: "lookup" | "best fit";
    public type?: "conjunction" | "disjunction" | "unit";
    public style?: "long" | "short" | "narrow";
  }
}

const wrap =
  (formatter) =>
  (...args) =>
    formatter.format(...args);

export const pc = wrap(
  new Intl.NumberFormat("en-US", { style: "percent", notation: "compact", compactDisplay: "short" }),
);
export const pc0 = wrap(new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: 0 }));
export const pc1 = wrap(
  new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  }),
);
export const num = wrap(
  new Intl.NumberFormat("en-US", {
    style: "decimal",
    notation: "compact",
    compactDisplay: "short",
  }),
);
export const num0 = wrap(
  new Intl.NumberFormat("en-US", { style: "decimal", grouping: "always", maximumFractionDigits: 0 }),
);
export const num2 = wrap(
  new Intl.NumberFormat("en-US", {
    style: "decimal",
    grouping: "always",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }),
);

export const dmy = wrap(new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }));
export const mdy = wrap(new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", year: "numeric" }));
export const dm = wrap(new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" }));
export const md = wrap(new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short" }));
export const wdmy = wrap(
  new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }),
);

export const and = wrap(new Intl.ListFormat("en-US", { style: "long", type: "conjunction" }));
export const or = wrap(new Intl.ListFormat("en-US", { style: "long", type: "disjunction" }));
