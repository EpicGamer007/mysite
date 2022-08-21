export const root = new URL("./", import.meta.url).pathname;
export const { NODE_ENV } = process.env;
export const PORT = process.env.PORT || 4000;