import { readFile } from "fs/promises";

export const root = new URL("./", import.meta.url).pathname;
export const { NODE_ENV } = process.env;
export const PORT = process.env.PORT || 4000;
export const REPL_URL = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;
export const ONION_URL = `http://${await readFile("../tordir/hidden_service/hostname").catch((err) => {
	console.log(err); 
	return "NO-ONION-URL.onion";
})}`;