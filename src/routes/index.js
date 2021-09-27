import fileRouters from "./File/file.routes";
import fileUpload from "express-fileupload";
export function setUpRoutes(app) {
  app.use(fileUpload());
  app.use("/api/files", fileRouters);
}
