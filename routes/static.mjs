import express from "express";
const router = express.Router();

import { compression } from "../middleware/";

import { root } from "../config.mjs";
import { join } from "path";

router.use(compression());
router.use(express.static(join(root, "public")));

export default router;