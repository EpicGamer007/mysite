#!/usr/bin/env -S node --experimental-specifier-resolution=node --no-warnings

import app from "../app.mjs";

import { createServer } from "http";
const server = createServer(app);

import {
	PORT,
	NODE_ENV,
	REPL_URL
} from "../config.mjs";

server.listen(PORT, () => {
	console.log(
		"Listening on port %s\nStarting at %s pacific time\nRunning '%s' version",
		PORT,
		new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}),
		NODE_ENV
	);
});

setInterval(() => {
	process.stdout.write("Ping... ")
	fetch(`https://pingpong.epicgamer007.repl.co/ping?url=https://epicgamer007.repl.co&time=${Date.now()}`, {
		cache: "no-store",
		headers: {
			"pragma": "no-cache",
			"cache-control": "no-cache",
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
			"Accept-Encoding": "gzip, deflate, br",
			"Accept-Language": "en-US,en;q=0.5",
			"Upgrade-Insecure-Requests": "1",
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:106.0) Gecko/20100101 Firefox/106.0"
		}
	}).then(() => process.stdout.write("Pong\n"));
}, 5 * 60 * 1000);