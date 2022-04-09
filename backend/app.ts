import {
  createExpressServer,
  RoutingControllersOptions,
} from "routing-controllers";
import path from "path";
import { json } from "body-parser";
import { Application } from "express";
import { connect } from "./db";
import cookieParser from "cookie-parser";
import { GlobalErrorHandler } from "./middleware/error-handler";

async function run() {
  const connection = await connect();

  const options: RoutingControllersOptions = {
    routePrefix: "/api",
    controllers: [path.join(__dirname + "/controllers/*.ts")],
    middlewares: [GlobalErrorHandler, json],
    defaultErrorHandler: false,
  };

  const app = createExpressServer(options) as Application;

  app.use(cookieParser());

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`[automiet-backend instance] Running on port ${port}`);
  });
}

export default run;
