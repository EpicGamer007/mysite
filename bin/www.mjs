#!/usr/bin/env -S node --experimental-specifier-resolution=node

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

/* setInterval(() => {
	fetch(REPL_URL).then(res => {
		console.log(
			"Pinged \"%s\" at %s",
			REPL_URL,
			new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"})
		)
	});
}, 5 * 60 * 1000); */