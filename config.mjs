export const root = new URL("./", import.meta.url).pathname;
export const { NODE_ENV } = process.env;
export const PORT = process.env.PORT || 8080;
export const REPL_URL = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;