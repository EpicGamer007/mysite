import express from "express";
const router = express.Router();

import { layouts } from "../middleware/";

router.use(layouts);

router.get("/", (req, res) => {
	res.render("index");
});

export default router