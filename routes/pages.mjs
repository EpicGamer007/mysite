import express from "express";
const router = express.Router();

import { layouts } from "../middleware/";

router.use(layouts);

router.use((req, res, next) => {
	res.data = {};
	res._render = res.render;
	res.render = (page) => res._render(page, { data: res.data });
	next();
});

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

router.use((req, res, next) => {
	res.data = undefined;
	next();
})

export default router