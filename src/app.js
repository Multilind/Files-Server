import "dotenv/config";
import express from "express";
import cors from "cors";
import { setUpRoutes } from "./routes";
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
    setUpRoutes(this.app);
  }
}

export default new App().app;
