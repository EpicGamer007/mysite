import express from "express";
const app = express();

import routes from "./routes";

app.set("view engine", "ejs");

export default app;