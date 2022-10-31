import express from "express";
const router = express.Router();

import apiRouter from "./api.mjs";
import staticRouter from "./static.mjs";
import pagesRouter from "./pages.mjs";

router.use(pagesRouter);
router.use(staticRouter);
router.use("/api", apiRouter);

router.use((req, res, next) => {
	res.status(404).render("404");
});

export default router;