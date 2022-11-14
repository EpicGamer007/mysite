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