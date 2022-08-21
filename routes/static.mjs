import express from "express";
const router = express.Router();

import { root } from "../config.mjs";

import { join } from "path";

router.use(express.static(join(root, "public")));

export default router;