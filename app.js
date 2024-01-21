const logger = require("./logger/my_logger");
const path = require("path");
const express = require("express");
const body_parser = require("body-parser");
const config = require("config");
const apiRouter = require("./routers/api_router"); // Adjust path as necessary

logger.info("==== System start =======");

const app = express();
app.use(body_parser.json());
app.use(express.static(path.join(".", "/static/")));

app.listen(config.server.port, () => {
  logger.info("==== Server started =======");
  console.log("Express server is running ....");
});
// app.js

// Use the API router for all routes under '/api'
app.use("/api", apiRouter);

// app.use('/api/employee', employee_router)

logger.info("==== System stop =======");
