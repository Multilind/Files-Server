import "dotenv/config";
import express from "express";
import cors from "cors";
import { SetUpRoutes } from "./routes";
import { requestInfo } from "./middlewares";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(requestInfo);
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    SetUpRoutes(this.app);
  }
}

export default new App().app;
