import express from "express";

import apiRoutes from "./routes/api.js"

const app = express();

app.use("/api_v1", apiRoutes)

app.listen(3000);