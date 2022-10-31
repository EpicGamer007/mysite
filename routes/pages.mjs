import express from "express";
const router = express.Router();

import { layouts } from "../middleware/";

router.use(layouts);

router.get("/", (req, res) => {
	res.render("index");
});

// router.get("/blogs", (req, res) => {
// 	res.send("My Blog");
// });

// router.get("/blogs/:id", (req, res) => {
// 	res.send(req.params.id);
// });

// router.get("/projects", (req, res) => {
// 	res.send("My projects")
// });

export default router