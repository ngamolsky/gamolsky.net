export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const IS_MOBILE =
  typeof window !== "undefined" && window.innerWidth < 768;
