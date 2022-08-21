import express from "express";
const router = express.Router();

import apiRouter from "./api.mjs";
import staticRouter from "./static.mjs";

router.use(staticRouter);
router.use("/api", apiRouter)

export default router;