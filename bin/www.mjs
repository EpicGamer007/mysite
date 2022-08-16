#!/usr/bin/env node

import str from "../app.mjs"

console.log(`${str}${process.env.NODE_ENV}`);