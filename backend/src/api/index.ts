import express from "express";
import {
  createExpressServer,
  RoutingControllersOptions,
} from "routing-controllers";
import path from "path";

import { Application } from "express";
import { connect } from "@db/index";
import cookieParser from "cookie-parser";
import { GlobalErrorHandler } from "./middleware/error-handler";
import cors from "cors";
import { json, urlencoded } from "body-parser";

async function run() {
  const connection = await connect();
  const allowedOrigins = ["http://localhost:3000"];
  const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins,
    credentials: true,
  };
  const options: RoutingControllersOptions = {
    routePrefix: process.env.ROUTE_PREFIX || "/api",
    controllers: [
      path.join(__dirname + "/controllers/*.ts"), // dev
      path.join(__dirname + "/controllers/*.js"), // build
    ],
    middlewares: [
      GlobalErrorHandler,
      json,
      urlencoded({
        extended: true,
      }),
    ],
    defaultErrorHandler: false,
    cors: corsOptions,
  };
  const app = createExpressServer(options) as Application;

  app.use(cookieParser());

  app.use(express.json());
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`[web-labs instance] Running on port ${port}`);
  });
}

export default run;
