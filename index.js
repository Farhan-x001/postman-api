'use strict';

const boom = require("@hapi/boom");

require("dotenv").config();
const express = require("express");
const router = require("./routes");

const logger = require('./logger');
const cors = require("cors");
const connection = require('./connection');
connection.setupDatabase();
const app = express();
app.use(express.json());
app.use("/api/placements", router);

app.use(
    cors({
      origin: "http://localhost:5000",
    })
  );


  app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      logger.error(err);
      return res.status(400).send({ status: 404, message: err.message }); // Bad request
    } else if (boom.isBoom(err)) {
      logger.error(err);
      res.status(err.output.statusCode).json(err.output.payload);
    } else {
      //check for api response error
      logger.error(`Server problem `, err);
      res.status(500).send('Internal Server Error');
    }
  });


app.get("/api/placements/ping", (_req, res, next) => {
    res.send("pong");
});



const port = process.env.PORT ? process.env.PORT : 5000;
app.listen(port, () => {
    logger.info(`Server running on ${port}...`);
  });