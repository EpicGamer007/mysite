import express from "express";
const app = express();

import routes from "./routes";

app.set("view engine", "ejs");

app.use(routes);

export default app;