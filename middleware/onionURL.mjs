import { ONION_URL } from "../config.mjs"

export default (req, res, next) => {
	const onionLocation = ONION_URL.substring(0, ONION_URL.length - 1) + req.originalUrl;
	res.set("Onion-Location", onionLocation);
	res.data.onionLocation = onionLocation;
	next();
}