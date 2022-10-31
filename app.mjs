import express from "express";
const app = express();

import routes from "./routes";

app.set("view engine", "ejs");

app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.set("layout extractMetas", true);

app.set("json spaces", 4);
app.set("x-powered-by", false);

app.use(routes);

export default app;